<?php

namespace App\Listeners\Shop\Pay;

use App\Events\Shop\Block\BlockSuccessEvent;
use App\Events\Shop\CreateShopEvent;
use App\Events\Shop\Pay\PaySuccessEvent;
use App\Events\Shop\Sms\SmsAmountEvent;
use App\Models\ShopOrder;
use App\Models\ShopOrderPayment;
use App\Models\SysLevel;
use App\Models\SysLevelVariant;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PaySuccessConfirmation
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param PaySuccessEvent $event
     * @return void
     */
    public function handle(PaySuccessEvent $event)
    {
        DB::beginTransaction();
        try {
            $now = now();
            $payment = $event->payment;
            $payment->update([
                "pay_no" => $event->no,
                "pay_at" => $now,
                "status" => ShopOrderPayment::PAYMENT_STATUS_PAID
            ]);
            $order = $payment->shopOrder;
            $order->update([
                'status' => ShopOrder::ORDER_STATUS_PAID
            ]);
            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error($exception->getMessage());
            throw (new HttpResponseException(response()->json([
                'code' => 422,
                "message" => $exception->getMessage(),
                "body" => null,
            ], 422)));
        }
        $order = $payment->shopOrder;
        if (!$order->shop) {
            event(new CreateShopEvent($order->user, $order['no']));
            $order->refresh();
            $shop = $order->shop;
            $level = SysLevel::find($order->item['sys_block_id']);
            $sms_amount = $level['sms_amount'] * $order->item['time'];
            event(new SmsAmountEvent($shop['id'], 'in', "版本赠送{$sms_amount}", null, $sms_amount));
        }
        event(new BlockSuccessEvent($order->shop, $order->item['type'], $order->item['sys_block_id'], $order->item['time']));
    }
}
