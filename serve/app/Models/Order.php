<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    const ORDER_STATUS_PENDING = "pending";
    const ORDER_STATUS_PROCESSING = "processing";
    const ORDER_STATUS_PARTIAL = "partial";
    const ORDER_STATUS_SENT = "sent";
    const ORDER_STATUS_SUCCESS = "success";
    const ORDER_STATUS_CLOSED = "closed";
    const ORDER_STATUS_CANCEL = "cancel";
    const REFUND_STATUS_REFUNDING = "refunding";
    const REFUND_STATUS_REFUNDED = "refunded";

    const orderStatusMap = [
        self::ORDER_STATUS_PENDING => "待付款",
        self::ORDER_STATUS_PROCESSING => "已付款",
        self::ORDER_STATUS_PARTIAL => "部分发货",
        self::ORDER_STATUS_SENT => "全部发货",
        self::ORDER_STATUS_SUCCESS => "已成功",
        self::ORDER_STATUS_CLOSED => "已关闭",
        self::ORDER_STATUS_CANCEL => "已取消",
    ];

    const refundStatusMap = [
        self::REFUND_STATUS_REFUNDING => "退单申请",
        self::REFUND_STATUS_REFUNDED => "退单完成",
    ];

    public $table = "app_orders";
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function ($model) {
            // 如果模型的 no 字段为空
            if (!$model->no) {
                // 调用 findAvailableNo 生成订单流水号
                $model->no = static::findAvailableNo();
                // 如果生成失败，则终止创建订单
                if (!$model->no) {
                    return false;
                }
            }
        });
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, "customer_id");
    }

    public function shop()
    {
        return $this->hasOneThrough(Shop::class,Customer::class,"id","id","customer_id","shop_id");
    }

    public function address()
    {
        return $this->hasOne(OrderAddress::class, "order_id");
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class, "order_id");
    }

    public function shipments()
    {
        return $this->hasMany(OrderShipment::class, 'order_id');
    }

    public function ship_items()
    {
        return $this->hasManyThrough(OrderShipmentItem::class,OrderShipment::class,"order_id","shipment_id","id","id");
    }

    public function payments()
    {
        return $this->hasMany(OrderPayment::class, "order_id");
    }

    public function refunds()
    {
        return $this->hasMany(OrderRefund::class, "order_id");
    }

    public function refund_records()
    {
        return $this->hasMany(OrderRefundRecord::class,"order_id");
    }

    public function suborders()
    {
        return $this->hasMany(OrderSuborder::class,"order_id");
    }

    public function tips()
    {
        return $this->hasMany(OrderTip::class,"order_id");
    }

    public static function findAvailableNo()
    {
        // 订单流水号前缀
        $prefix = date('YmdHis');
        for ($i = 0; $i < 10; $i++) {
            // 随机生成 6 位的数字
            $no = $prefix . str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
            // 判断是否已经存在
            if (!static::query()->where('no', $no)->exists()) {
                return $no;
            }
        }
        return false;
    }
}
