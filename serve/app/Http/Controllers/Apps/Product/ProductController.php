<?php

namespace App\Http\Controllers\Apps\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest;
use App\Http\Requests\Product\ProductUpdateRequest;
use App\Http\Resources\Product\AdminProductCollection;
use App\Http\Resources\Product\AdminProductDetailResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $shop = $request->get('ori_shop');
        $products = $shop->products();
        if ($name = $request->get('name')) $products = $products->where('product_title', 'like', "%{$name}%");
        $products = $products->orderBy('created_at', 'desc')->paginate($request->get('pageSize'));
        return $this->jsonSuccessResponse(new AdminProductCollection($products));
    }

    public function show(Request $request)
    {
        $shop = $request->get('ori_shop');
        $product = $shop->products()->findOrFail($request->route()->parameter('product'));
        return $this->jsonSuccessResponse(new AdminProductDetailResource($product));
    }

    public function destroy(Request $request)
    {
        $shop = $request->get('ori_shop');
        $product = $shop->products()->findOrFail($request->route()->parameter('product'));
        $product->delete();
        return $this->jsonSuccessResponse();
    }

    public function store(ProductRequest $request)
    {
        DB::beginTransaction();
        try {
            $shop = $request->get('ori_shop');
            $limit =$shop->level->level['item_limit'];
            if($limit != 0){
                if($shop->products()->count() >= $limit)
                    return $this->jsonErrorResponse(404,"商品数量超出版本限制");
            }
            $product = $shop->products()->make();
            $product_spu = $request->get('product');
            $product['product_title'] = $product_spu['product_title'];
            $product['on_sale'] = $product_spu['on_sale'];
            if (!$shop->shipments()->find($product_spu['shipment_id']))
                return $this->jsonErrorResponse(422, "无该运输模板");
            $product['shipment_id'] = $product_spu['shipment_id'];
            if (isset($product_spu['product_unit'])) $product['product_unit'] = $product_spu['product_unit'];
            if (isset($product_spu['product_des'])) $product['product_des'] = $product_spu['product_des'];
            $product->save();
            if ($categories = $request->get('categories') ?: []) {
                $categories = $shop->categories()->whereIn('id', $categories)->pluck('id');
                $product->categories()->sync($categories);
            }
            $product->content()->create(['content' => $request->get('content')]);
            $images = $request->get('images');
            if (is_array($images) && count($images)) {
                foreach ($images as $image) {
                    if ($shop->images()->find($image['image_id']))
                        $product->product_images()->create([
                            "image_id" => $image['image_id'],
                            "sort" => $image['sort']
                        ]);
                }
            }
            $variants = $request->get('variants');
            foreach ($variants as $variant) {
                $product->variants()->create([
                    "variant_title" => $variant['variant_title'],
                    "price" => $variant['price'],
                    "quantity" => $variant['quantity'],
                    "variant_code" => isset($variant['variant_code']) ? $variant['variant_code'] : null,
                    "ori_price" => isset($variant['ori_price']) ? $variant['ori_price'] : null,
                    "buy_price" => isset($variant['buy_price']) ? $variant['buy_price'] : null,
                    "weight" => isset($variant['weight']) ? $variant['weight'] : null,
                ]);
            }
            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error($exception->getMessage());
            return $this->jsonErrorResponse(422, "创建失败");
        }
        return $this->jsonSuccessResponse(new AdminProductDetailResource($product));
    }

    public function update(ProductUpdateRequest $request)
    {
        $shop = $request->get('ori_shop');
        $product = $shop->products()->findOrFail($request->route()->parameter('product'));
        DB::beginTransaction();
        try {
            if ($request->has('product')) {
                $product_spu = $request->get('product');
                if (isset($product_spu['shipment_id'])) {
                    if (!$shop->shipments()->find($product_spu['shipment_id']))
                        return $this->jsonErrorResponse(422, "无该运输模板");
                    $product['shipment_id'] = $product_spu['shipment_id'];
                }
                if (isset($product_spu['product_title'])) $product['product_title'] = $product_spu['product_title'];
                if (isset($product_spu['on_sale'])) $product['on_sale'] = $product_spu['on_sale'];
                if (isset($product_spu['product_unit'])) $product['product_unit'] = $product_spu['product_unit'];
                if (isset($product_spu['product_des'])) $product['product_des'] = $product_spu['product_des'];
            }
            $product->save();
            if ($request->has('content')) {
                $product->content()->update(['content' => $request->get('content')]);
            }
            if ($request->has('images')) {
                $images = $request->get('images');
                $product->product_images()->delete();
                if (is_array($images) && count($images)) {
                    foreach ($images as $image) {
                        if ($shop->images()->find($image['image_id']))
                            $product->product_images()->create([
                                "image_id" => $image['image_id'],
                                "sort" => $image['sort']
                            ]);
                    }
                }
            }
            if ($request->has('categories')) {
                if ($categories = $request->get('categories') ?: []) {
                    $categories = $shop->categories()->whereIn('id', $categories)->pluck('id');
                    $product->categories()->sync($categories);
                }
            }
            if ($request->has('variants')) {
                $variants = $request->get('variants');
                $sku_ids = array_filter(collect($variants)->pluck('id')->toArray());
                if (count($sku_ids)) $product->variants()->whereNotIn("id", $sku_ids)->delete();
                else $product->variants()->delete();
                foreach ($variants as $variant) {
                    $temp = [
                        "variant_title" => $variant['variant_title'],
                        "price" => $variant['price'],
                        "quantity" => $variant['quantity'],
                        "variant_code" => isset($variant['variant_code']) ? $variant['variant_code'] : null,
                        "ori_price" => isset($variant['ori_price']) ? $variant['ori_price'] : null,
                        "buy_price" => isset($variant['buy_price']) ? $variant['buy_price'] : null,
                        "weight" => isset($variant['weight']) ? $variant['weight'] : null,
                    ];
                    if (isset($variant['id']) && !is_null($variant['id'])) {
                        if ($product_variant = $product->variants()->find($variant['id'])) {
                            $product_variant->update($temp);
                        } else {
                            $product->variants()->create($temp);
                        }
                    } else {
                        $product->variants()->create($temp);
                    }
                }
            }
            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error($exception->getMessage());
            return $this->jsonErrorResponse(422, "创建失败" . "，原因：" . $exception->getMessage());
        }
        return $this->jsonSuccessResponse(new AdminProductDetailResource($product));
    }
}
