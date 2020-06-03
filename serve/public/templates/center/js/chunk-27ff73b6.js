(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27ff73b6"],{1080:function(t,i,e){},4365:function(t,i,e){"use strict";var s=e("1080"),a=e.n(s);a.a},"94a2":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"product-page-title"},[e("el-button",{attrs:{size:"small"},on:{click:function(i){return t.$router.push({name:"ProductList"})}}},[t._v("返回商品列表")]),e("el-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"primary"},on:{click:t.confirmChange}},[t._v("保存")])],1),e("div",{staticClass:"product-page-content"},[e("div",{staticClass:"item-content"},[e("div",[t._v("商品名称")]),e("el-input",{model:{value:t.item.product.product_title,callback:function(i){t.$set(t.item.product,"product_title",i)},expression:"item.product.product_title"}})],1),e("div",{staticClass:"item-content"},[e("div",[t._v("商品简介")]),e("el-input",{model:{value:t.item.product.product_des,callback:function(i){t.$set(t.item.product,"product_des",i)},expression:"item.product.product_des"}})],1),e("div",{staticClass:"item-content",staticStyle:{position:"relative"}},[e("div",[t._v("商品分类")]),e("div",[e("el-button",{staticStyle:{"margin-right":"30px"},attrs:{size:"small"},on:{click:t.toSelect}},[t._v("选择分类")]),t._l(t.item.categories,(function(i,s){return e("span",{key:s,staticClass:"cate-item",on:{click:function(i){return t.cateDelete(s)}}},[e("span",[t._v(t._s(i.category_title))]),e("i",{staticClass:"iconfont iconguanbi"})])}))],2),e("transition",{attrs:{name:"type"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.typeShow,expression:"typeShow"},{name:"clickoutside",rawName:"v-clickoutside",value:t.closeType,expression:"closeType"}],staticClass:"item-type-select"},[e("div",{staticClass:"item-type-select__header"},[t._v("分类列表")]),t.t_loading?e("div",{staticClass:"item-type-select__placeholder"},[t._v("加载中...")]):t._e(),t.t_loading||0!==t.types.length?t._e():e("div",{staticClass:"item-type-select__placeholder"},[t._v("暂无分类")]),t.t_loading||0===t.types.length?t._e():e("ul",{staticClass:"item-type-select__content"},t._l(t.types,(function(i,s){return e("li",{key:s,class:{"is-active":-1!==t.selectId.indexOf(i.id),"is-disabled":-1!==t.currentType.indexOf(i.id)}},[e("div",{on:{click:function(e){return t.selectType(i)}}},[t._v(t._s(i.category_title))]),e("div",[-1!==t.selectId.indexOf(i.id)?e("i",{staticClass:"iconfont iconguanbi",on:{click:function(e){return t.deleteType(i)}}}):t._e()])])})),0),e("div",{staticClass:"item-type-select__footer"},[e("el-button",{attrs:{size:"small"},on:{click:t.closeType}},[t._v("取消")]),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addType}},[t._v("确定")])],1)])])],1),e("div",{staticClass:"item-content"},[e("div",[t._v("商品图片")]),e("div",{staticClass:"item-content-image"},[t._l(t.item.images,(function(i,s){return e("div",{key:s,staticClass:"image-items",on:{mouseenter:function(i){t.activeIndex=s},mouseleave:function(i){t.activeIndex=null}}},[e("div",{staticClass:"image-edit-button",class:{"is-active":t.activeIndex===s}},[e("div",{staticStyle:{width:"calc(100% - 30px)","padding-left":"5px"}},[e("span",{on:{click:function(e){return t.imgFront(i,s)}}},[e("i",{staticClass:"iconfont iconshangyiye"})]),e("span",{on:{click:function(e){return t.imgBack(i,s)}}},[e("i",{staticClass:"iconfont iconxiayiye"})])]),e("div",{staticStyle:{width:"20px","padding-right":"5px","text-align":"right"},on:{click:function(e){return t.imgDelete(i)}}},[e("i",{staticClass:"iconfont iconshanchu1"})])]),e("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{src:i.url}})],1)})),e("div",{staticClass:"image-add",on:{click:function(i){t.imageShow=!0}}},[e("i",{staticClass:"iconfont iconjiahao"})])],2)]),e("div",{staticClass:"item-content"},[e("div",[t._v("商品规格")]),t._m(0),t._l(t.item.variants,(function(i,s){return e("div",{key:s,staticClass:"item-variant-column"},[e("div",{staticStyle:{width:"calc(100% - 558px)"}},[e("el-input",{model:{value:i.variant_title,callback:function(e){t.$set(i,"variant_title",e)},expression:"variable.variant_title"}})],1),e("div",{staticStyle:{width:"80px"}},[e("el-input",{model:{value:i.variant_code,callback:function(e){t.$set(i,"variant_code",e)},expression:"variable.variant_code"}})],1),e("div",{staticStyle:{width:"80px"}},[e("el-input",{attrs:{type:"number"},model:{value:i.quantity,callback:function(e){t.$set(i,"quantity",e)},expression:"variable.quantity"}})],1),e("div",{staticStyle:{width:"80px"}},[e("el-input",{attrs:{type:"number",step:"0.01"},model:{value:i.weight,callback:function(e){t.$set(i,"weight",e)},expression:"variable.weight"}})],1),e("div",{staticStyle:{width:"80px"}},[e("el-input",{attrs:{type:"number",step:"0.01"},model:{value:i.price,callback:function(e){t.$set(i,"price",e)},expression:"variable.price"}})],1),e("div",{staticStyle:{width:"80px"}},[e("el-input",{attrs:{type:"number",step:"0.01"},model:{value:i.ori_price,callback:function(e){t.$set(i,"ori_price",e)},expression:"variable.ori_price"}})],1),e("div",{staticStyle:{width:"80px"}},[e("el-button",{attrs:{type:"text"},on:{click:function(i){return t.varDelete(s)}}},[t._v("删除")]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.varCopy(i)}}},[t._v("复制")])],1)])})),e("div",{staticStyle:{"margin-top":"10px"}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addVariable}},[t._v("添加规格")])],1)],2),e("div",{staticClass:"item-content"},[e("div",[t._v("商品详情")]),e("div",[e("tinymce")],1)]),e("div",{staticClass:"item-content"},[e("div",[t._v("物流模版")]),e("div",[e("el-select",{model:{value:t.item.product.shipment_id,callback:function(i){t.$set(t.item.product,"shipment_id",i)},expression:"item.product.shipment_id"}},t._l(t.shipments,(function(t,i){return e("el-option",{key:i,attrs:{label:t.shipment_name,value:t.id}})})),1)],1)]),e("div",{staticClass:"item-content"},[e("div",[t._v("上架情况")]),e("div",[e("el-switch",{attrs:{"active-text":"上架","inactive-text":"下架"},model:{value:t.item.product.on_sale,callback:function(i){t.$set(t.item.product,"on_sale",i)},expression:"item.product.on_sale"}})],1)]),e("div",{staticStyle:{margin:"20px 0 40px"}},[e("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmChange}},[t._v("保存")])],1)]),e("image-dialog",{attrs:{Visible:t.imageShow},on:{close:function(i){t.imageShow=!1},confirm:t.addImage}})],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"item-variant-column item-variant-column__header"},[e("div",{staticStyle:{width:"calc(100% - 556px)"}},[t._v("规格名称"),e("span",[t._v("(必填)")])]),e("div",{staticStyle:{width:"80px"}},[t._v("编号")]),e("div",{staticStyle:{width:"80px"}},[t._v("库存"),e("span",[t._v("(必填)")])]),e("div",{staticStyle:{width:"80px"}},[t._v("重量/kg")]),e("div",{staticStyle:{width:"80px"}},[t._v("售价"),e("span",[t._v("(必填)")])]),e("div",{staticStyle:{width:"80px"}},[t._v("原价")]),e("div",{staticStyle:{width:"80px"}},[t._v("操作")])])}],n=(e("4de4"),e("c975"),e("d81d"),e("a434"),e("b0c0"),e("c4c8")),c=e("c405"),l=e("fe27"),o=e("6a95"),r=e("8256"),d=e("9169"),u={components:{ImageDialog:o["a"],Tinymce:r["a"]},directives:{Clickoutside:d["a"]},data:function(){return{item:{product:{on_sale:0},images:[],variants:[{variant_title:null,variant_code:null,quantity:null,weight:null,price:null,ori_price:null}],categories:[]},activeIndex:null,imageShow:!1,typeShow:!1,t_loading:!1,types:[],currentType:[],selectId:[],selectTypes:[],shipments:[],btnLoading:!1}},created:function(){this.getShipments()},beforeRouteLeave:function(t,i,e){"ProductList"===t.name?t.meta.keepAlive=!0:t.meta.keepAlive=!1,e()},methods:{cateDelete:function(t){this.item.categories.splice(t,1)},toSelect:function(){var t=this;this.item.categories.map((function(i){t.currentType.push(i.id)})),this.selectTypes=[],this.selectId=[],this.typeShow=!0,this.getTypes()},getTypes:function(){var t=this;this.t_loading=!0,Object(c["c"])().then((function(i){var e=i.data.body;t.types=e,t.t_loading=!1})).catch((function(){t.t_loading=!1}))},getShipments:function(){var t=this;Object(l["d"])().then((function(i){t.shipments=i.data.body}))},selectType:function(t){if(-1===this.currentType.indexOf(t.id)){var i=this.selectId.indexOf(t.id);-1===i&&(this.selectId.push(t.id),this.selectTypes.push(t))}},deleteType:function(t){var i=this.selectId.indexOf(t.id);-1!==i&&(this.selectId.splice(i,1),this.selectTypes.splice(i,1))},closeType:function(){this.typeShow=!1,this.types=[],this.currentType=[]},addType:function(){var t=this;0!==this.selectId.length?(this.selectTypes.map((function(i){t.item.categories.push(i)})),this.typeShow=!1,this.types=[],this.currentType=[]):this.$message.warning("请选择分类")},imgFront:function(t,i){1!==t.sort&&(t.sort-=1,this.item.images[i-1].sort+=1,this.item.images[i]=this.item.images.splice(i-1,1,this.item.images[i])[0])},imgBack:function(t,i){t.sort!==this.item.images.length&&(t.sort+=1,this.item.images[i+1].sort-=1,this.item.images[i]=this.item.images.splice(i+1,1,this.item.images[i])[0])},imgDelete:function(t){this.item.images.splice(t,1)},addImage:function(t){var i=this;this.imageShow=!1;var e=0!==this.item.images.length?this.item.images[this.item.images.length-1].sort:0;t.map((function(t,s){var a={url:t.url,id:t.id,sort:e+s+1};i.item.images.push(a)}))},addVariable:function(){var t={variant_title:null,variant_code:null,quantity:null,weight:null,price:null,ori_price:null};this.item.variants.push(t)},varDelete:function(t){this.item.variants.splice(t,1)},varCopy:function(t){var i={variant_title:t.variant_title,variant_code:t.variant_code,quantity:t.quantity,weight:t.weight,price:t.price,ori_price:t.ori_price};this.item.variants.push(i)},confirmChange:function(){var t=this;if(this.item.product.product_title)if(0!==this.item.variants.length){var i=this.item.variants.filter((function(t){return null===t.variant_title||null===t.price||null===t.quantity}));if(0===i.length)if(this.item.product.shipment_id){this.btnLoading=!0;var e=[];this.item.categories.map((function(t){e.push(t.id)})),this.item.categories=e;var s=[];this.item.images.map((function(t){s.push({image_id:t.id,sort:t.sort})})),this.item.images=s,Object(n["a"])(this.item).then((function(){t.$message.success("商品创建成功"),t.$router.push({name:"ProductList"}),t.btnLoading=!1})).catch((function(i){t.$message.warning(i.response.data.message),t.btnLoading=!1}))}else this.$message.warning("请选择物流模版");else this.$message.warning("商品规格填写不完整")}else this.$message.warning("商品至少应有一个规格");else this.$message.warning("商品名称为必填")}}},p=u,m=(e("4365"),e("ca5b"),e("2877")),v=Object(m["a"])(p,s,a,!1,null,"a9a5c1d4",null);i["default"]=v.exports},ca5b:function(t,i,e){"use strict";var s=e("d909"),a=e.n(s);a.a},d909:function(t,i,e){}}]);