<?php

use App\Models\SysLevel;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Route::any('version', function (Request $request) {
//    echo "mini-shop v~1.0";
////    $data = ["自定义域名","无限商品上传","免费赠送2GB图片空间","支持自定义模块","提供多场景主题模版","多种营销工具自选安装","支持二次开发和定制","可配置多平台小程序","可配置微信/支付宝等收款方式","赠送积分功能","赠送100条短信"];
////    SysLevel::find(2)->update(['level_content'=>$data]);
////    echo $data;
////    $resault = dns_get_record("pinuocaostudio.com", DNS_CNAME);
////    var_dump($resault);
////    var_dump($request->getRequestUri());
//});


Route::namespace('Shop')->group(function () {
    Route::prefix('user')->namespace('User')->group(function () {
        Route::post('register', 'UserController@register');
        Route::post('login', 'UserController@login');
        Route::put('edit', "UserController@edit");
        Route::get('refresh', "UserController@refresh");
        Route::get('info', 'UserController@info');
    });
    Route::prefix('shop')->namespace('Shop')->middleware('auth:users')->group(function () {
        Route::get('', 'ShopController@index');
        Route::get('{shop}', 'ShopController@show');
        Route::prefix('order')->group(function () {
            Route::post('', 'OrderController@store');
//            Route::post('pay_success/{payment_no}', 'OrderController@success');
            Route::get('list', 'OrderController@index');
            Route::get('{order_no}', 'OrderController@show');

        });

        Route::prefix('sys')->group(function () {
            Route::get('payment_method', 'SysController@payment');
            Route::get('level', 'SysController@level');
            Route::get('template', 'SysController@template_list');
        });
    });


});


Route::group([
    "domain" => "{account}.minishop.test",
], function () {
    require __DIR__ . "/apis/center.php";
    require __DIR__ . "/apis/front.php";
});
Route::group([
    "domain" => "{account}.min-eshop.vip",
], function () {
    require __DIR__ . "/apis/center.php";
    require __DIR__ . "/apis/front.php";

});

Route::prefix('admin')->namespace('Admin')->group(function () {
    Route::post('login', "AdminController@login");
    Route::post('refresh', "AdminController@refresh");
    Route::get('logout', "AdminController@logout");
    Route::get('me', "AdminController@me");
    Route::put('me', "AdminController@update");
});

Route::prefix('pay/{no}')->namespace('Pay')->group(function () {
    Route::get('wallet', "PayController@wallet")->middleware('auth:customers');
});

Route::middleware('auth:customers')->group(function () {
    Route::post('order/calc', 'Order\OrderController@calc');
    Route::post('order/{order}/pay/{payment}', "Order\OrderController@pay_create")->name('order.pay');
    Route::apiResource('order', "Order\OrderController")->except(['destroy']);
});

Route::middleware('auth:admins')->prefix("admin")->group(function () {
    Route::get('dashboard/{type}', "Dashboard\AdminDashboardController@dashboard_static");
    Route::prefix('order')->namespace('Order')->group(function () {
        Route::get('', 'AdminOrderController@index');
        Route::put('status/{order}', "AdminOrderController@status");
        Route::put('{order}', "AdminOrderController@update");
        Route::get('{order}/shipment', 'AdminOrderShipmentController@index');
        Route::post('{order}/shipment', 'AdminOrderShipmentController@store');
        Route::get('{order}', "AdminOrderController@show");
    });


});



