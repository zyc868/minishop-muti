<?php
Route::group([
    'prefix' => "center",
    "middleware" => ["auth:users", "shop_center"],
    "namespace" => "Apps"
], function () {
    Route::group(["prefix" => "shop", "namespace" => "Shop"], function () {
        Route::get('info', "ShopController@info");
        Route::put('update', "ShopController@update");
        Route::group(['prefix' => "payment"], function () {
            Route::get('sys_payment', 'PaymentController@sys_index');
            Route::post('{code}','PaymentController@store');
            Route::delete('{code}','PaymentController@destroy');
            Route::get('','PaymentController@index');
        });
        Route::group(['prefix' => "template"], function () {
            Route::get('', 'TemplateController@index');
            Route::get('cloud', 'TemplateController@cloud');
            Route::get('{template}', 'TemplateController@show');
            Route::put('{template}/active', 'TemplateController@active');
            Route::put('{template}', 'TemplateController@update');
        });
    });

    Route::apiResource('product', 'Product\ProductController');
    Route::apiResource('category', 'Category\CategoryController')->except(['show']);
    Route::apiResource('image', "Image\ImageController")->only(['store', 'destroy', 'index']);
    Route::get('shipment/type','Shipment\ShipmentController@type_list');
    Route::apiResource('shipment', 'Shipment\ShipmentController');
    Route::prefix('customer')->namespace('Customer')->group(function () {
        Route::put('{customer}', 'CustomerController@update');
        Route::get('', 'CustomerController@index');
    });
    Route::prefix('wallet/{customer}')->namespace('Wallet')->group(function () {
        Route::get('balance', 'WalletController@balance');
        Route::get('', 'WalletController@index');
        Route::post('', 'WalletController@store');
    });
    Route::prefix('order')->namespace('Order')->group(function () {
        Route::get('', 'OrderController@index');
        Route::put('status/{order}', "OrderController@status");
        Route::put('{order}', "OrderController@update");
        Route::get('{order}/shipment', 'AdminOrderShipmentController@index');
        Route::post('{order}/shipment', 'AdminOrderShipmentController@store');
        Route::get('{order}', "OrderController@show");
    });
    Route::get('dashboard/{type}', "Dashboard\DashboardController@dashboard_static");

});
