(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70282884"],{"0419":function(t,e,n){},"2b43":function(t,e,n){},"5b85":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("shop-popup",{attrs:{size:"medium",full:"",show:t.refundShow},on:{close:t.closeRefund}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("退换货")]),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"refund-info"},[n("div",[t._v("订单号："+t._s(t.order.no))]),n("div",[t._v("当前状态："+t._s(t.order.status_value))]),n("div",[t._v("金额：¥ "+t._s(t.order.amount))])]),n("div",{staticClass:"refund-reason"},[n("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("选择退单原因")]),t._l(t.reasons,(function(e,o){return n("div",{key:o},[n("shop-radio",{attrs:{label:e},model:{value:t.refundReason,callback:function(e){t.refundReason=e},expression:"refundReason"}})],1)})),"其他原因"===t.refundReason?n("div",[n("div",{staticStyle:{margin:"30px 0 10px"}},[t._v("请填写具体原因")]),n("shop-input",{attrs:{rounded:!1},model:{value:t.reasonDetail,callback:function(e){t.reasonDetail=e},expression:"reasonDetail"}})],1):t._e()],2)]),n("div",{staticClass:"pay-popup-button",attrs:{slot:"button"},slot:"button"},[n("div",[n("shop-button",{attrs:{type:"border",rounded:!1},on:{click:t.closeRefund}},[t._v("关闭")])],1),n("div",[n("shop-button",{attrs:{rounded:!1,loading:t.btnLoading,disabled:t.btnLoading},on:{click:t.confirmRefund}},[t._v("确定")])],1)])])},s=[],r=n("76a0"),i=n("f8b7"),a={props:{refundShow:Boolean,order:Object},data:function(){return{reasons:["订单信息有误","物流太慢","不想要了","其他原因"],refundReason:"订单信息有误",reasonDetail:"",btnLoading:!1}},methods:{closeRefund:function(){this.refundReason="订单信息有误",this.reasonDetail="",this.$emit("close")},confirmRefund:function(){var t=this;if(!this.btnLoading){this.btnLoading=!0;var e="";e="其他原因"===this.refundReason?this.refundReason+" "+this.reasonDetail:this.refundReason,Object(i["b"])(this.order.no,{status:"refunding",reason:e}).then((function(){Object(r["Toast"])("退款申请已发送，请等待商家处理"),t.closeRefund(),t.$emit("confirm")})).catch((function(){t.btnLoading=!1}))}}}},c=a,u=(n("e6ea"),n("2877")),d=Object(u["a"])(c,o,s,!1,null,"0c896370",null);e["a"]=d.exports},"5d87":function(t,e,n){"use strict";var o=n("0419"),s=n.n(o);s.a},"912b":function(t,e,n){},"99af":function(t,e,n){"use strict";var o=n("23e7"),s=n("d039"),r=n("e8b5"),i=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),h=n("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=h>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),_=l("concat"),g=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},y=!b||!_;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,o,s,r,i=a(this),l=d(i,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(r=-1===e?i:arguments[e],g(r)){if(s=c(r.length),f+s>v)throw TypeError(m);for(n=0;n<s;n++,f++)n in r&&u(l,f,r[n])}else{if(f>=v)throw TypeError(m);u(l,f++,r)}return l.length=f,l}})},"9d03":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("shop-popup",{attrs:{size:"medium",show:t.payShow},on:{close:t.closePay}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("选择支付方式")]),n("div",{attrs:{slot:"content"},slot:"content"},[n("mt-picker",{ref:"pays",attrs:{slots:t.slots}})],1),n("div",{staticClass:"pay-popup-button",attrs:{slot:"button"},slot:"button"},[n("div",[n("shop-button",{attrs:{type:"border",rounded:!1},on:{click:t.closePay}},[t._v("取消支付")])],1),n("div",[n("shop-button",{attrs:{rounded:!1,disabled:t.btnLoading},on:{click:t.confirmPay}},[t._v("确认支付")])],1)])])},s=[],r=(n("d81d"),n("d3b7"),n("ddb0"),n("b933")),i=n("f8b7"),a={props:{payShow:Boolean,orderNo:String},data:function(){return{payments:[],slots:[{flex:1,values:[],textAlign:"center"}],btnLoading:!1}},created:function(){this.getPayments()},methods:{getPayments:function(){var t=this;Object(r["b"])().then((function(e){t.payments=e.data.body,t.payments.map((function(e){t.slots[0].values.push(e.title)}))}))},closePay:function(){this.$emit("close")},confirmPay:function(){var t=this;if(!this.btnLoading){this.btnLoading=!0;var e="";this.payments.map((function(n){n.title===t.$refs.pays.values[0]&&(e=n.code)})),Object(i["d"])(this.currentNo,e).then((function(e){"success"===e.data.body.status?t.$router.push({name:"Checksuc",query:{no:t.currentNo}}):location.href=e.data.body.pay_url})).catch((function(){t.btnLoading=!1}))}}}},c=a,u=(n("decb"),n("2877")),d=Object(u["a"])(c,o,s,!1,null,"745b9915",null);e["a"]=d.exports},db70:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"user-order-menubar"},[n("li",{class:{"is-active":""===t.fetchQuery.status},on:{click:function(e){return t.changeStatus("")}}},[n("span",[t._v("全部")])]),n("li",{class:{"is-active":"pending"===t.fetchQuery.status},on:{click:function(e){return t.changeStatus("pending")}}},[n("span",[t._v("待付款")])]),n("li",{class:{"is-active":"processing"===t.fetchQuery.status},on:{click:function(e){return t.changeStatus("processing")}}},[n("span",[t._v("待发货")])]),n("li",{class:{"is-active":"sent"===t.fetchQuery.status},on:{click:function(e){return t.changeStatus("sent")}}},[n("span",[t._v("待收货")])]),n("li",{class:{"is-active":"refunding"===t.fetchQuery.status},on:{click:function(e){return t.changeStatus("refunding")}}},[n("span",[t._v("退换货")])])]),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getOrders,expression:"getOrders"}],staticClass:"order-list",style:{height:t.height-1+"px"},attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10","infinite-scroll-immediate-check":""}},[t._l(t.orders,(function(e,o){return n("li",{key:o,staticClass:"order-list-item"},[n("div",{staticClass:"order-list-item__title",on:{click:function(n){return t.toCheck(e)}}},[n("div",[t._v(t._s(e.created_at))]),n("div",{class:{"is-disabled":-1!==t.disabledStatus.indexOf(e.status)}},[t._v(t._s(e.refund_status?e.refund_status_value:e.status_value))])]),t._l(e.items,(function(e,o){return n("div",{key:"i"+o,staticClass:"order-list-item__item"},[n("div",[n("shop-image",{staticClass:"order-list-item__item-image",attrs:{src:e.img_url,type:"fit",width:60,rounded:""}},[n("div",{staticClass:"order-item-placeholder",attrs:{slot:"error"},slot:"error"}),n("div",{staticClass:"order-item-placeholder",attrs:{slot:"placeholder"},slot:"placeholder"})])],1),n("div",{staticClass:"order-list-item__item-title"},[n("div",[t._v(t._s(e.product_title))]),n("div",[t._v(t._s(e.variant_title))])]),n("div",{staticClass:"order-list-item__item-price"},[n("div",[t._v("¥ "),n("strong",[t._v(t._s(e.price))])]),n("div",[t._v("x "+t._s(e.quantity))])])])})),n("div",{staticClass:"order-list-item__bottom"},[n("div",[t._v("订单总额 ¥ "),n("strong",[t._v(t._s(e.amount?e.amount:"-"))])]),n("div",[-1!==t.canClose.indexOf(e.status)?n("shop-button",{attrs:{size:"small",type:"border"},on:{click:function(n){return t.toPay(e)}}},[t._v("支付订单")]):t._e(),-1!==t.canClose.indexOf(e.status)?n("shop-button",{attrs:{size:"small",type:"border"},on:{click:function(n){return t.toClose(e)}}},[t._v("关闭订单")]):t._e(),-1!==t.canShip.indexOf(e.status)?n("shop-button",{attrs:{size:"small",type:"border"}},[t._v("查看物流")]):t._e(),-1!==t.canRefund.indexOf(e.status)?n("shop-button",{attrs:{size:"small",type:"border"},on:{click:function(n){return t.toRefund(e)}}},[t._v("退换货")]):t._e(),-1!==t.canReceive.indexOf(e.status)?n("shop-button",{attrs:{size:"small"},on:{click:function(n){return t.toReceive(e)}}},[t._v("确认收货")]):t._e()],1)])],2)})),t.nomore?t._e():n("div",{staticClass:"order-list-placeholder"},[t._v("加载中...")]),t.nomore?n("div",{staticClass:"order-list-placeholder"},[t._v("没有更多了")]):t._e()],2),n("pay-popup",{attrs:{payShow:t.payShow,orderNo:t.currentNo},on:{close:function(e){t.payShow=!1},confirm:t.confirmPay}}),n("refund-popup",{attrs:{refundShow:t.refundShow,order:t.currentOrder},on:{close:function(e){t.refundShow=!1},confirm:t.confirmRefund}})],1)},s=[],r=(n("99af"),n("b0c0"),n("f8b7")),i=n("76a0"),a=n("5b85"),c=n("9d03"),u={components:{RefundPopup:a["a"],PayPopup:c["a"]},data:function(){return{fetchQuery:{status:void 0!==this.$route.params.status?this.$route.params.status:"",page:0,pageSize:15},loading:!1,nomore:!1,height:0,orders:[],canClose:["pending"],canShip:["sent","partial","success"],canRefund:["processing","sent","partial","success"],canReceive:["sent","partial"],disabledStatus:["cancel","closed","refunded"],payShow:!1,currentNo:"",currentOrder:{},refundShow:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.height=window.innerHeight-170})),window.onresize=function(){t.height=window.innerHeight-170}},beforeRouteLeave:function(t,e,n){"UserOrderDetail"===t.name?e.meta.keepAlive=!0:e.meta.keepAlive=!1,n()},methods:{getOrders:function(){var t=this;this.loading=!0,this.nomore=!1,this.fetchQuery.page+=1,Object(r["f"])(this.fetchQuery).then((function(e){var n=e.data.body.data;0===n.length?(t.loading=!0,t.nomore=!0):(t.loading=!1,t.nomore=!1,t.orders=t.orders.concat(n))})).catch((function(e){t.loading=!0,t.nomore=!0,401===e.response.status&&(Object(i["Toast"])("登录超时"),t.$router.push({name:"Login",query:{from:t.$route.name}}))}))},changeStatus:function(t){this.fetchQuery.status=t,this.fetchQuery.page=0,this.orders=[],this.loading=!1,this.nomore=!1,this.getOrders()},toCheck:function(t){this.$router.push({name:"UserOrderDetail",query:{no:t.no}})},toClose:function(t){var e=this;i["MessageBox"].confirm("是否确认关闭?").then((function(){Object(r["b"])(t.no,{status:"cancel"}).then((function(){Object(i["Toast"])("订单已关闭"),e.fetchQuery.page=0,e.orders=[],e.loading=!1,e.nomore=!1,e.getOrders()}))})).catch((function(){}))},toPay:function(t){this.currentNo=t.no,this.payShow=!0},confirmPay:function(){this.$router.go(0)},toRefund:function(t){this.currentOrder={no:t.no,status_value:t.status_value,amount:t.amount},this.refundShow=!0},confirmRefund:function(){this.$router.go(0)},toReceive:function(t){var e=this;i["MessageBox"].confirm("是否确认收货?").then((function(){Object(r["b"])(t.no,{status:"success"}).then((function(){Object(i["Toast"])("已确认收货"),e.fetchQuery.page=0,e.orders=[],e.loading=!1,e.nomore=!1,e.getOrders()}))})).catch((function(){}))}}},d=u,l=(n("5d87"),n("2877")),f=Object(l["a"])(d,o,s,!1,null,"0480698d",null);e["default"]=f.exports},decb:function(t,e,n){"use strict";var o=n("912b"),s=n.n(o);s.a},e6ea:function(t,e,n){"use strict";var o=n("2b43"),s=n.n(o);s.a},f8b7:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return u}));var o=n("b775");function s(t){return Object(o["a"])({url:"order/calc",method:"post",data:t})}function r(t){return Object(o["a"])({url:"order",method:"post",data:t})}function i(t,e){return Object(o["a"])({url:"order/"+t+"/pay/"+e,method:"post"})}function a(t){return Object(o["a"])({url:"order",method:"get",params:t})}function c(t){return Object(o["a"])({url:"order/"+t,method:"get"})}function u(t,e){return Object(o["a"])({url:"order/"+t,method:"put",data:e})}}}]);