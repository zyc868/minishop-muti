<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    public $table = "shops";

    const SHOP_STATUS_PENDING = "pending";
    const SHOP_STATUS_ACTIVE = "active";
    const SHOP_STATUS_STOP = "stop";

    const shopStatusMap = [
        self::SHOP_STATUS_PENDING => "未配置",
        self::SHOP_STATUS_ACTIVE => "运行中",
        self::SHOP_STATUS_STOP => "已关闭",
    ];

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function ($model) {
            // 如果模型的 shop_url 字段为空
            if (!$model->shop_url) {
                // 调用 findAvailableNo 生成随机域名
                $model->shop_url = static::findAvailableNo();
                // 如果生成失败，则终止创建
                if (!$model->shop_url) {
                    return false;
                }
                $model->shop_name = "新建店铺{$model->shop_url}";
            }
        });
    }

    protected $guarded = [];

    public function templates()
    {
        return $this->hasMany(ShopTemplate::class, "shop_id");
    }

    public function level()
    {
        return $this->hasOne(ShopLevel::class, 'shop_id');
    }

    public function plugins()
    {
        return $this->hasMany(ShopPlugin::class, 'shop_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class, "shop_id");
    }

    public function payment_methods()
    {
        return $this->hasMany(PaymentMethod::class,"shop_id");
    }

    public function shipments()
    {
        return $this->hasMany(Shipment::class,"shop_id");
    }

    public function product_variants()
    {
        return $this->hasManyThrough(ProductVariant::class,Product::class,'shop_id','product_id');
    }

    public function categories()
    {
        return $this->hasMany(Category::class, "shop_id");
    }

    public function customers()
    {
        return $this->hasMany(Customer::class,'shop_id');
    }

    public function orders()
    {
        return $this->hasManyThrough(Order::class,Customer::class,"shop_id","customer_id");
    }

    public function images()
    {
        return $this->hasMany(Image::class, "shop_id");
    }

    public static function findAvailableNo()
    {
        // 订单流水号前缀
        $prefix = "shop" . date('ymd');
        for ($i = 0; $i < 10; $i++) {
            // 随机生成 6 位的数字
            $url = $prefix . str_pad(random_int(0, 999), 3, '0', STR_PAD_LEFT);
            // 判断是否已经存在
            if (!static::query()->where('shop_url', $url)->exists()) {
                return $url;
            }
        }
        return false;
    }
}
