(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d1e3f10"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"762f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"table-header"},[a("div",{staticClass:"table-header-item"},[a("div",[t._v("订单状态")]),a("el-radio-group",{attrs:{size:"small"},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}},[a("el-radio-button",{attrs:{label:""}},[t._v("全部")]),t._l(t.status,(function(e,r){return a("el-radio-button",{key:r,attrs:{label:e.type}},[t._v(t._s(e.value))])}))],2)],1),a("div",{staticClass:"table-header-item"},[a("div",[t._v("搜索")]),a("el-input",{staticClass:"input-with-select",attrs:{size:"medium"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},[a("el-option",{attrs:{label:"收件人",value:"name"}}),a("el-option",{attrs:{label:"订单号",value:"no"}}),a("el-option",{attrs:{label:"电话",value:"mobile"}})],1)],1)],1),a("div",{staticClass:"table-header-item",staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{size:"small"},on:{click:t.reset}},[t._v("重置")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.toSearch}},[t._v("搜索")])],1)]),a("div",{staticStyle:{"margin-bottom":"15px"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.toExport}},[t._v("全部导出")])],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"background-color":"#fff","border-radius":"5px"}},[t.loading||0!==t.orderData.length?t._e():a("div",{staticClass:"loading-placeholder",staticStyle:{"min-height":"350px"}},[t._v("暂无订单")]),t._l(t.orderData,(function(e,r){return a("div",{key:r,staticClass:"order-item"},[a("div",{staticClass:"order-header"},[a("i",{staticClass:"order-icon iconfont icondingdan"}),a("strong",{staticStyle:{"margin-right":"10px"},on:{click:function(a){return t.toDetail(e)}}},[t._v(t._s(e.no))]),"pending"===e.status?a("el-tag",{attrs:{type:"warning",effect:"dark"}},[t._v(t._s(e.status_value))]):"processing"===e.status?a("el-tag",{attrs:{effect:"dark"}},[t._v(t._s(e.status_value))]):"sent"===e.status?a("el-tag",{attrs:{type:"primary",effect:"plain"}},[t._v(t._s(e.status_value))]):"partial"===e.status?a("el-tag",{attrs:{type:"primary",effect:"dark"}},[t._v(t._s(e.status_value))]):"refunding"===e.status?a("el-tag",{attrs:{type:"danger",effect:"dark"}},[t._v(t._s(e.status_value))]):"refunded"===e.status||"cancel"===e.status||"closed"===e.status?a("el-tag",{attrs:{type:"info",effect:"dark"}},[t._v(t._s(e.status_value))]):"success"===e.status?a("el-tag",{attrs:{type:"success",effect:"dark"}},[t._v(t._s(e.status_value))]):a("el-tag",{attrs:{type:"info",effect:"dark"}},[t._v(t._s(e.status_value))]),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.created_at))])],1),a("div",{staticClass:"order-content-main"},[a("div",{staticClass:"order-content-main-item",staticStyle:{width:"calc(100% - 202px)"}},[a("div",{staticClass:"order-content-main-item__address"},[a("div",{staticClass:"order-content-main-item__title",staticStyle:{width:"70px"}},[t._v("收件信息")]),a("div",{staticStyle:{width:"calc(100% - 70px)"}},[a("div",[t._v(t._s(e.name)+" | "+t._s(e.mobile))]),a("div",[t._v(t._s(e.address))])])]),a("div",{staticClass:"order-content-main-item__address"},[a("div",{staticClass:"order-content-main-item__title",staticStyle:{width:"70px"}},[t._v("买家留言")]),a("div",{staticStyle:{width:"calc(100% - 70px)"}},[t._v(t._s(e.remark))])])]),a("div",{staticClass:"order-content-main-item",staticStyle:{width:"200px"}},[a("div",{staticClass:"order-content-main-item__title"},[t._v("订单金额")]),a("div",[a("strong",[t._v("¥ "+t._s(e.amount))])])])]),t._l(e.items,(function(e,r){return a("div",{key:r,staticClass:"order-content-items"},[a("el-image",{staticStyle:{width:"80px",height:"80px"},attrs:{src:e.img_url,fit:"scale-down"}}),a("div",{staticStyle:{width:"calc(100% - 310px)",margin:"0 10px"}},[a("div",[t._v(t._s(e.product_title))]),a("div",[t._v(t._s(e.variant_title))])]),a("div",{staticStyle:{width:"100px","margin-right":"10px"}},[a("span",[t._v("¥ "+t._s(e.price))])]),a("div",{staticStyle:{width:"100px"}},[t._v("x "+t._s(e.quantity))])],1)}))],2)})),a("el-pagination",{staticStyle:{"text-align":"center",padding:"40px 0"},attrs:{"current-page":t.query.page,"page-sizes":[15,30,50,100],"page-size":t.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],2)])},n=[],i=(a("b0c0"),a("ac1f"),a("841c"),a("f8b7"));a("c975");function s(){var t=!1;return navigator.userAgent.indexOf("compatible")>-1&&navigator.userAgent.indexOf("MSIE")>-1&&(t=!0),navigator.userAgent.indexOf("Trident")>-1&&(t=!0),t}function o(t,e){var a=document.createElement("a");a.href=encodeURI(t),a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)}function c(t,e){try{if(s()){var a="\ufeff",r=new Blob([a+t],{type:"text/csv"});navigator.msSaveBlob(r,"".concat(e,".csv"))}else{var n="data:text/csv;charset=utf-8,\ufeff"+t;o(n,"".concat(e,".csv"))}}catch(i){alert(i)}}var u={data:function(){return{orderData:[],loading:!1,query:{status:"",no:"",name:"",mobile:"",page:1,pageSize:15},total:0,status:[{type:"pending",value:"待支付"},{type:"processing",value:"待发货"},{type:"sent",value:"已发货"},{type:"refunding",value:"退款中"}],searchType:"name",search:""}},beforeRouteLeave:function(t,e,a){"OrderDetail"===t.name?e.meta.keepAlive=!0:e.meta.keepAlive=!1,a()},methods:{getData:function(){var t=this;this.loading=!0,Object(i["f"])(this.query).then((function(e){t.orderData=e.data.body.data,t.total=e.data.body.page.total,t.loading=!1})).catch((function(){t.loading=!1}))},handleSizeChange:function(t){this.query.pageSize=t,this.query.page=1,this.getData()},handleCurrentChange:function(t){this.query.page=t,this.getData()},toSearch:function(){this.query.page=1,this.query[this.searchType]=this.search,this.getData()},reset:function(){this.query.status="",this.query.page=1,this.query.value="",this.query.type="",this.getData()},toDetail:function(t){this.$router.push({name:"OrderDetail",query:{id:t.id}})},toExport:function(){var t={status:this.query.status,no:this.query.no,name:this.query.name,mobile:this.query.mobile};Object(i["c"])(t).then((function(t){c(t.data,"订单列表")}))}},created:function(){this.$route.query.status&&(this.query.status=this.$route.query.status),this.getData()}},l=u,d=(a("a7f9"),a("f514"),a("2877")),v=Object(d["a"])(l,r,n,!1,null,"78598f0c",null);e["default"]=v.exports},"841c":function(t,e,a){"use strict";var r=a("d784"),n=a("825a"),i=a("1d80"),s=a("129f"),o=a("14c3");r("search",1,(function(t,e,a){return[function(e){var a=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a):new RegExp(e)[t](String(a))},function(t){var r=a(e,t,this);if(r.done)return r.value;var i=n(t),c=String(this),u=i.lastIndex;s(u,0)||(i.lastIndex=0);var l=o(i,c);return s(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},a7f9:function(t,e,a){"use strict";var r=a("aea1"),n=a.n(r);n.a},aea1:function(t,e,a){},daab:function(t,e,a){},f514:function(t,e,a){"use strict";var r=a("daab"),n=a.n(r);n.a},f8b7:function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"i",(function(){return s})),a.d(e,"j",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"g",(function(){return u})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return d})),a.d(e,"e",(function(){return v})),a.d(e,"c",(function(){return f}));var r=a("b775");function n(t){return Object(r["a"])({url:"order",method:"get",params:t})}function i(t){return Object(r["a"])({url:"order/"+t,method:"get"})}function s(t,e){return Object(r["a"])({url:"order/status/"+t,method:"put",data:e})}function o(t,e){return Object(r["a"])({url:"order/"+t,method:"put",data:e})}function c(t,e){return Object(r["a"])({url:"order/"+t+"/shipment",method:"post",data:e})}function u(t){return Object(r["a"])({url:"order/refund_record/"+t,method:"get"})}function l(t,e){return Object(r["a"])({url:"order/refund_record/"+t,method:"post",data:e})}function d(t,e){return Object(r["a"])({url:"order/"+t+"/tip",method:"post",data:e})}function v(t){return Object(r["a"])({url:"order/"+t+"/tip",method:"get"})}function f(t){return Object(r["a"])({url:"order/download",method:"post",data:t})}}}]);