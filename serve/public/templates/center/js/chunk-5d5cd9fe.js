(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d5cd9fe"],{"10e1":function(t,e,i){},"12de":function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return l}));var n=i("b775");function a(){return Object(n["a"])({url:"shop/template",method:"get"})}function s(t){return Object(n["a"])({url:"shop/template/"+t,method:"get"})}function l(t,e){return Object(n["a"])({url:"shop/template/"+e,method:"put",data:t})}},"39ab":function(t,e,i){"use strict";var n=i("92c0"),a=i.n(n);a.a},"49cb":function(t,e,i){"use strict";var n=i("10e1"),a=i.n(n);a.a},"61ca":function(t,e,i){"use strict";var n=i("ed64"),a=i.n(n);a.a},"685c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return s}));var n=i("b775");function a(t){return Object(n["a"])({url:"image",method:"get",params:t})}function s(t){return Object(n["a"])({url:"image/"+t,method:"delete"})}},"6a95":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.Visible,title:"选择图片","before-close":t.close,width:"590px"}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[i("el-upload",{staticClass:"avatar-uploader upload-btn",attrs:{headers:{Authorization:"Bearer "+t.$store.getters.token},action:"//"+t.$store.getters.shop_url+"."+t.$store.getters.shop_host+"/api/center/image",name:"file","before-upload":t.beforeUpload,"show-file-list":!1,"on-success":t.successUpload}},[i("span",{staticClass:"upload-image-bar"},[t._v("上传图片")])])],1),i("div",[t.loading?i("div",{staticClass:"loading-placeholder"},[t._v("加载中...")]):t._e(),t.loading||0!==t.images.length?t._e():i("div",{staticClass:"loading-placeholder"},[t._v("暂无图片")]),t.loading||0===t.images.length?t._e():i("div",{staticStyle:{position:"relative"}},t._l(t.images,(function(e,n){return i("el-checkbox",{key:n,staticClass:"image-checkbox",attrs:{value:-1!==t.selectId.indexOf(e.id)},on:{change:function(i){return t.selectImage(e)}}},[i("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{src:e.url,fit:"scale-down"}})],1)})),1),i("el-pagination",{staticStyle:{"text-align":"center","margin-top":"10px"},attrs:{"current-page":t.fetchQuery.page,"page-size":t.fetchQuery.pageSize,total:t.total,layout:"total, prev, pager, next, jumper"},on:{"current-change":t.handleCurrent}})],1),i("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("关闭")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)])},a=[],s=(i("c975"),i("d81d"),i("a434"),i("685c")),l={props:{Visible:Boolean,Type:String},data:function(){return{images:[],loading:!1,fetchQuery:{page:1,pageSize:9},total:0,selectId:[],selectItem:[]}},methods:{getImages:function(){var t=this;this.loading=!0,Object(s["b"])(this.fetchQuery).then((function(e){t.images=e.data.body.data,t.total=e.data.body.page.total,t.loading=!1})).catch((function(){t.loading=!1}))},handleCurrent:function(t){this.fetchQuery.page=t,this.getImages()},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type,i=t.size/1024/1024<2;return e||this.$message.error("上传图片只能是 JPG 或 PNG 格式!"),i||this.$message.error("上传图片大小不能超过 2MB!"),e&&i},successUpload:function(){this.$message.success("上传成功"),this.getImages()},selectImage:function(t){if("mono"!==this.Type){t.isCheck=!t.isCheck;var e=this.selectId.indexOf(t.id);t.isCheck&&-1===e&&(this.selectId.push(t.id),this.selectItem.push(t)),t.isCheck||-1===e||(this.selectId.splice(e,1),this.selectItem.splice(e,1))}else this.selectMono(t)},selectMono:function(t){t.isCheck=!t.isCheck,this.images.map((function(t){t.isCheck=!1})),this.selectId=[],this.selectId.push(t.id),this.selectItem=[],this.selectItem.push(t)},close:function(){this.images=[],this.fetchQuery.page=1,this.$emit("close")},confirm:function(){0!==this.selectId.length?(this.images=[],this.fetchQuery.page=1,this.$emit("confirm",this.selectItem)):this.$message.warning("请先选择图片")}},watch:{Visible:{deep:!0,handler:function(){this.Visible&&(this.selectItem=[],this.selectId=[],this.getImages())}}}},c=l,r=(i("49cb"),i("9560"),i("2877")),o=Object(r["a"])(c,n,a,!1,null,"2f1ba2ce",null);e["a"]=o.exports},"799f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"set-module",staticStyle:{"padding-bottom":"10px"}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.$router.push({name:"ThemeList"})}}},[t._v("返回")]),i("span",{staticStyle:{"margin-left":"10px"}},[t._v("当前主题："),i("strong",[t._v(t._s(t.$route.query.name))])])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"set-module"},[i("div",{staticClass:"set-module-title"},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v("主题颜色选择")]),i("el-button",{attrs:{type:"primary",size:"mini",loading:t.colorLoad},on:{click:t.changeTheme}},[t._v("保存")])],1),i("div",[t.selectTheme?t._e():i("div",{staticStyle:{margin:"10px 10px 20px"}},[i("strong",[t._v("提示：暂未选择主题颜色")])]),t._l(t.colors,(function(e,n){return i("el-radio",{key:n,attrs:{label:e.value},model:{value:t.selectTheme,callback:function(e){t.selectTheme=e},expression:"selectTheme"}},[i("div",{staticClass:"theme-template"},[i("el-image",{staticStyle:{width:"160px",height:"284px"},attrs:{fit:"scale-down",src:e.img}})],1),i("div",{staticStyle:{"text-align":"center",margin:"10px 0 20px"}},[t._v(t._s(e.name))])])}))],2)]),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"set-module"},[i("div",{staticClass:"set-module-title"},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v("广告图设置")]),i("el-button",{attrs:{type:"primary",size:"mini",loading:t.loadGroup.banners},on:{click:function(e){return t.changeTemplate("banners")}}},[t._v("保存")])],1),i("div",[i("div",{staticClass:"module-template"},[i("div",{staticClass:"module-template-title"},[t._v("模块设置示例")]),i("el-image",{staticStyle:{width:"240px",height:"183.5px"},attrs:{src:"//asset.ibanquan.com/image/5eb5d62936a6ce0021f438e4/s.jpeg?v=1588975146",fit:"scale-down"}}),t._m(0)],1),i("div",{staticClass:"module-content"},[t._m(1),t._l(t.banners,(function(e,n){return i("div",{key:n,staticClass:"module-content-content"},[i("div",{staticClass:"module-content-image",staticStyle:{position:"relative"}},[i("div",{staticClass:"image-cover-button",staticStyle:{"line-height":"100px",height:"100px",width:"150px"}},[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.changeImage("banner",n)}}},[t._v("选择")])],1),i("el-image",{staticStyle:{width:"150px",height:"100px"},attrs:{src:e.img,fit:"scale-down"}})],1),i("div",{staticClass:"link-input",staticStyle:{width:"calc(100% - 274px)",margin:"0 5px"},on:{click:function(e){return t.getLink("banner",n)}}},[i("div",{class:{"is-error":-1!==t.bannerDisabled.indexOf(e.link.query)}},[e.link.name?i("span",[t._v(t._s(e.link.name))]):i("span",{staticClass:"link-input-placeholder"},[t._v("选填，广告图跳转链接")])]),-1!==t.bannerDisabled.indexOf(e.link.query)?i("div",{staticClass:"error-tip"},[t._v("商品已删除，为不影响购买体验，请及时更换链接，并保存模块")]):t._e()]),i("div",{staticClass:"module-content-button",staticStyle:{width:"80px"}},[i("span",{on:{click:function(e){return t.toFront("banner",n)}}},[i("i",{staticClass:"iconfont iconxiangshang"})]),i("span",{on:{click:function(e){return t.toBack("banner",n)}}},[i("i",{staticClass:"iconfont iconxiangxia"})]),i("span",{on:{click:function(e){return t.toDelete(n)}}},[i("i",{staticClass:"iconfont iconshanchu1"})])])])})),i("div",{staticStyle:{"margin-top":"20px"}},[i("div",[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addBanner}},[t._v("添加广告图")])],1),i("div",{staticClass:"module-tip"},[t._v("提示：最多可添加6张广告图")])])],2)])]),i("div",{staticClass:"set-module"},[i("div",{staticClass:"set-module-title"},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v("分类标签设置")]),i("el-button",{attrs:{type:"primary",size:"mini",loading:t.loadGroup.types},on:{click:function(e){return t.changeTemplate("types")}}},[t._v("保存")])],1),i("div",[i("div",{staticClass:"module-template"},[i("div",{staticClass:"module-template-title"},[t._v("模块设置示例")]),i("el-image",{attrs:{src:"//asset.ibanquan.com/image/5eb5d88336a6ce0016f43d03/s.jpeg?v=1588975747",fit:"scale-down"}}),t._m(2)],1),i("div",{staticClass:"module-content"},[t._m(3),i("div",{staticStyle:{"margin-bottom":"30px"}},[i("el-switch",{attrs:{"active-text":"显示","inactive-text":"不显示"},model:{value:t.types.visible,callback:function(e){t.$set(t.types,"visible",e)},expression:"types.visible"}})],1),t._m(4),t._l(t.types.items,(function(e,n){return i("div",{key:n,staticClass:"module-content-content"},[i("div",{staticClass:"module-content-image",staticStyle:{width:"50px",position:"relative"}},[i("div",{staticClass:"image-cover-button",staticStyle:{"line-height":"50px",height:"50px",width:"50px"}},[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.changeImage("type",n)}}},[t._v("选择")])],1),i("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.img,fit:"scale-down"}})],1),i("el-input",{staticStyle:{width:"100px",margin:"0 5px"},attrs:{maxlength:"4",placeholder:"4个字以内"},model:{value:e.title,callback:function(i){t.$set(e,"title",i)},expression:"type.title"}}),i("div",{staticClass:"link-input",staticStyle:{width:"calc(100% - 262px)",margin:"0 5px"},on:{click:function(e){return t.getLink("type",n)}}},[i("div",{class:{"is-error":-1!==t.typeDisabled.indexOf(e.link.query)}},[e.link.name?i("span",[t._v(t._s(e.link.name))]):i("span",{staticClass:"link-input-placeholder"},[t._v("选填，广告图跳转链接")])]),-1!==t.typeDisabled.indexOf(e.link.query)?i("div",{staticClass:"error-tip"},[t._v("商品已删除，为不影响购买体验，请及时更换链接，并保存模块")]):t._e()]),i("div",{staticClass:"module-content-button",staticStyle:{width:"60px"}},[i("span",{on:{click:function(e){return t.toFront("type",n)}}},[i("i",{staticClass:"iconfont iconxiangshang"})]),i("span",{on:{click:function(e){return t.toBack("type",n)}}},[i("i",{staticClass:"iconfont iconxiangxia"})])])],1)}))],2)])]),i("div",{staticClass:"set-module"},[i("div",{staticClass:"set-module-title"},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v("消息通知")]),i("el-button",{attrs:{type:"primary",size:"mini",loading:t.loadGroup.message},on:{click:function(e){return t.changeTemplate("message")}}},[t._v("保存")])],1),i("div",[i("div",{staticClass:"module-template"},[i("div",{staticClass:"module-template-title"},[t._v("模块设置示例")]),i("el-image",{attrs:{src:"//asset.ibanquan.com/image/5eb5d95f36a6ce000bf43dab/s.jpeg?v=1588975968",fit:"scale-down"}}),t._m(5)],1),i("div",{staticClass:"module-content"},[i("div",{staticClass:"module-tip",staticStyle:{"margin-bottom":"10px"}},[t._v("提示：如果设置消息将自动显示，如果不设置将隐藏此模块")]),i("el-input",{attrs:{placeholder:"请输入主页通知的消息"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)])]),i("div",{staticClass:"set-module"},[i("div",{staticClass:"set-module-title"},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v("限时打折")]),i("el-button",{attrs:{type:"primary",size:"mini",loading:t.loadGroup.limit},on:{click:function(e){return t.changeTemplate("limit")}}},[t._v("保存")])],1),i("div",[i("div",{staticClass:"module-template"},[i("div",{staticClass:"module-template-title"},[t._v("模块设置示例")]),i("el-image",{attrs:{src:"//asset.ibanquan.com/image/5eb5da4636a6ce000bf43dae/s.jpeg?v=1588976198",fit:"scale-down"}}),t._m(6)],1),i("div",{staticClass:"module-content"},[t._m(7),i("div",{staticStyle:{"margin-bottom":"30px"}},[i("el-switch",{attrs:{"active-text":"显示","inactive-text":"不显示"},model:{value:t.limit.visible,callback:function(e){t.$set(t.limit,"visible",e)},expression:"limit.visible"}})],1),t._m(8),i("el-date-picker",{attrs:{type:"datetime"},model:{value:t.limit.endTime,callback:function(e){t.$set(t.limit,"endTime",e)},expression:"limit.endTime"}}),t._m(9),i("div",[t.limit.items.leng?i("div",{staticClass:"module-tip",staticStyle:{"margin-bottom":"10px"}},[t._v("暂无商品")]):t._e(),t._l(t.limit.items,(function(e,n){return i("div",{key:n,staticClass:"module-content-items",staticStyle:{position:"relative"}},[-1!==t.limitDisabled.indexOf(e.id)?i("div",{staticClass:"module-content-items-disabled"},[i("div",[t._v("此商品已被删除，为不影响购买体验，请及时删除该商品，并保存模块")]),i("div",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{type:"text"},on:{click:function(e){return t.deleteItem("limit",n)}}},[t._v("删除")])],1)]):t._e(),i("div",{staticClass:"module-content-items-button"},[i("span",{on:{click:function(e){return t.deleteItem("limit",n)}}},[i("i",{staticClass:"iconfont iconshanchu1"})])]),i("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:e.img,fit:"scale-down"}}),i("div",{staticClass:"input-group"},[i("el-input",{attrs:{maxlength:"10",placeholder:"商品名称，10个字以内"},model:{value:e.product_title,callback:function(i){t.$set(e,"product_title",i)},expression:"item.product_title"}}),i("el-input",{attrs:{placeholder:"宣传语，8个字以内",maxlength:"8"},model:{value:e.sub_title,callback:function(i){t.$set(e,"sub_title",i)},expression:"item.sub_title"}}),i("el-input",{attrs:{type:"number",step:"0.01",placeholder:"商品售价"},model:{value:e.price,callback:function(i){t.$set(e,"price",i)},expression:"item.price"}}),i("el-input",{attrs:{type:"number",step:"0.01",placeholder:"商品原价"},model:{value:e.ori_price,callback:function(i){t.$set(e,"ori_price",i)},expression:"item.ori_price"}})],1)],1)})),i("div",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addItem("limit")}}},[t._v("新增商品")]),i("div",{staticClass:"module-tip"},[t._v("提示：最多可添加10个商品")])],1)],2)],1)])]),i("div",{staticClass:"set-module"},[i("div",{staticClass:"set-module-title"},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v("今日上新")]),i("el-button",{attrs:{type:"primary",size:"mini",loading:t.loadGroup.newitem},on:{click:function(e){return t.changeTemplate("newitem")}}},[t._v("保存")])],1),i("div",[i("div",{staticClass:"module-template"},[i("div",{staticClass:"module-template-title"},[t._v("模块设置示例")]),i("el-image",{attrs:{src:"//asset.ibanquan.com/image/5eb5db536da86b0013760803/s.jpeg?v=1588976468",fit:"scale-down"}}),t._m(10)],1),i("div",{staticClass:"module-content"},[t._m(11),i("div",{staticStyle:{"margin-bottom":"30px"}},[i("el-switch",{attrs:{"active-text":"显示","inactive-text":"不显示"},model:{value:t.newitem.visible,callback:function(e){t.$set(t.newitem,"visible",e)},expression:"newitem.visible"}})],1),t._m(12),i("div",[t.newitem.items.leng?i("div",{staticClass:"module-tip",staticStyle:{"margin-bottom":"10px"}},[t._v("暂无商品")]):t._e(),t._l(t.newitem.items,(function(e,n){return i("div",{key:n,staticClass:"module-content-items",staticStyle:{position:"relative"}},[-1!==t.limitDisabled.indexOf(e.id)?i("div",{staticClass:"module-content-items-disabled"},[i("div",[t._v("此商品已被删除，为不影响购买体验，请及时删除该商品，并保存模块")]),i("div",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{type:"text"},on:{click:function(e){return t.deleteItem("newitem",n)}}},[t._v("删除")])],1)]):t._e(),i("div",{staticClass:"module-content-items-button"},[i("span",{on:{click:function(e){return t.deleteItem("newitem",n)}}},[i("i",{staticClass:"iconfont iconshanchu1"})])]),i("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:e.img,fit:"scale-down"}}),i("div",{staticClass:"input-group"},[i("el-input",{attrs:{placeholder:"商品名称，20个字以内",maxlength:"20"},model:{value:e.product_title,callback:function(i){t.$set(e,"product_title",i)},expression:"item.product_title"}}),i("el-input",{attrs:{placeholder:"宣传语，8个字以内",maxlength:"8"},model:{value:e.sub_title,callback:function(i){t.$set(e,"sub_title",i)},expression:"item.sub_title"}}),i("el-input",{attrs:{type:"number",step:"0.01",placeholder:"商品售价"},model:{value:e.price,callback:function(i){t.$set(e,"price",i)},expression:"item.price"}}),i("el-input",{attrs:{type:"number",step:"0.01",placeholder:"商品原价"},model:{value:e.ori_price,callback:function(i){t.$set(e,"ori_price",i)},expression:"item.ori_price"}})],1)],1)})),i("div",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addItem("newitem")}}},[t._v("新增商品")]),i("div",{staticClass:"module-tip"},[t._v("提示：最多可添加10个商品")])],1)],2)])])]),i("div",{staticClass:"set-module",staticStyle:{"margin-bottom":"60px"}},[i("div",{staticClass:"set-module-title"},[i("span",{staticStyle:{"margin-right":"20px"}},[t._v("单个商品推荐")]),i("el-button",{attrs:{type:"primary",size:"mini",loading:t.loadGroup.ad},on:{click:function(e){return t.changeTemplate("ad")}}},[t._v("保存")])],1),i("div",[i("div",{staticClass:"module-template"},[i("div",{staticClass:"module-template-title"},[t._v("模块设置示例")]),i("el-image",{attrs:{src:"//asset.ibanquan.com/image/5eb5dbf836a6ce0016f43d06/s.jpeg?v=1588976632",fit:"scale-down"}}),t._m(13)],1),i("div",{staticClass:"module-content"},[t._m(14),i("div",{staticStyle:{"margin-bottom":"30px"}},[i("el-switch",{attrs:{"active-text":"显示","inactive-text":"不显示"},model:{value:t.ad.visible,callback:function(e){t.$set(t.ad,"visible",e)},expression:"ad.visible"}})],1),i("div",{staticClass:"module-ad-content"},[i("div",[i("el-image",{staticStyle:{width:"150px",height:"120px"},attrs:{src:t.ad.img,fit:"scale-down"}}),i("div",[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.changeImage("ad",null)}}},[t._v("更换图片")])],1)],1),i("div",{staticClass:"input-group"},[i("el-input",{attrs:{maxlength:"15",placeholder:"商品名称，15个字以内"},model:{value:t.ad.title,callback:function(e){t.$set(t.ad,"title",e)},expression:"ad.title"}}),i("el-input",{attrs:{maxlength:"10",placeholder:"宣传语，10个字以内"},model:{value:t.ad.sub_title,callback:function(e){t.$set(t.ad,"sub_title",e)},expression:"ad.sub_title"}}),i("el-input",{attrs:{type:"number",step:"0.01",placeholder:"商品售价"},model:{value:t.ad.price,callback:function(e){t.$set(t.ad,"price",e)},expression:"ad.price"}}),i("div",{staticClass:"link-input",on:{click:function(e){return t.getLink("ad",null)}}},[i("div",{class:{"is-error":-1!==t.adDisabled.indexOf(t.ad.link.query)},staticStyle:{border:"none"}},[t.ad.link.name?i("span",[t._v(t._s(t.ad.link.name))]):i("span",{staticClass:"link-input-placeholder"},[t._v("选填，广告图跳转链接")])]),-1!==t.adDisabled.indexOf(t.ad.link.query)?i("div",{staticClass:"error-tip",staticStyle:{"padding-bottom":"10px"}},[t._v("商品已删除，为不影响购买体验，请及时更换链接，并保存模块")]):t._e()])],1)])])])]),i("image-dialog",{attrs:{Visible:t.imageShow,Type:"mono"},on:{close:function(e){t.imageShow=!1},confirm:t.confirmImage}}),i("item-dialog",{attrs:{Visible:t.addShow,Current:t.current_items},on:{close:function(e){t.addShow=!1},confirm:t.confirmItem}}),i("link-dialog",{attrs:{Visible:t.linkShow},on:{close:function(e){t.linkShow=!1},confirm:t.confirmLink}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-template-tip"},[t._v(" 此模块置于主页顶部，搜索框之下，请上传"),i("strong",[t._v("尺寸 750 * 500 像素")]),t._v("的图片 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-content-title"},[i("div",{staticStyle:{width:"150px"}},[t._v("图片")]),i("div",{staticStyle:{width:"calc(100% - 274px)",margin:"0 5px"}},[t._v("链接")]),i("div",{staticStyle:{width:"80px"}},[t._v("操作")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-template-tip"},[t._v(" 此模块置于主页广告图下方，请上传"),i("strong",[t._v("尺寸 50 * 50 像素")]),t._v("的图片 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-content-title"},[i("strong",[t._v("是否显示")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-content-title"},[i("div",{staticStyle:{width:"50px"}},[t._v("图片")]),i("div",{staticStyle:{width:"100px",margin:"0 5px"}},[t._v("名称")]),i("div",{staticStyle:{width:"calc(100% - 230px)",margin:"0 5px"}},[t._v("链接")]),i("div",{staticStyle:{width:"60px"}},[t._v("操作")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-template-tip"},[t._v(" 此模块置于主页分类标签下方，如果文字内容超过手机屏幕宽度，将"),i("strong",[t._v("自动滚动播放")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-template-tip"},[i("div",[t._v("此模块置于主页消息通知下方")]),i("div",[t._v("可设置优惠结束时间，如果结束时间距离客户浏览时间为0秒时，会"),i("strong",[t._v("自动提示活动已结束")])]),i("div",[t._v("最多可添加"),i("strong",[t._v("10个")]),t._v("商品，"),i("strong",[t._v("向右滑动")]),t._v("即可浏览商品")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-content-title"},[i("strong",[t._v("是否显示")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-bottom":"10px"}},[i("strong",[t._v("活动结束时间")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"30px 0 10px"}},[i("strong",[t._v("活动商品")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-template-tip"},[i("div",[t._v("此模块置于主页限时折扣下方")]),i("div",[t._v("最多可添加"),i("strong",[t._v("10个")]),t._v("商品")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-content-title"},[i("strong",[t._v("是否显示")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v("活动商品")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-template-tip"},[t._v(" 此模块置于主页今日上新下方，请上传"),i("strong",[t._v("尺寸 750 * 600 像素")]),t._v("的图片 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"module-content-title"},[i("strong",[t._v("是否显示")])])}],s=(i("c975"),i("d81d"),i("a434"),i("9911"),i("12de")),l=i("c4c8"),c=i("6a95"),r=i("d483"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.Visible,title:"选择链接",width:"80%","before-close":t.close}},[i("div",[i("ul",{staticClass:"link-select-menu"},[i("li",{class:{"is-active":1===t.activeIndex},on:{click:function(e){return t.changeItems(1)}}},[t._v("商品链接")]),i("li",{class:{"is-active":2===t.activeIndex},on:{click:function(e){return t.changeItems(2)}}},[t._v("分类链接")]),i("li",{class:{"is-active":3===t.activeIndex},on:{click:function(e){return t.changeItems(3)}}},[t._v("其他页面")])]),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"min-height":"100px"}},[t.loading||0!==t.items.length?t._e():i("div",{staticStyle:{"text-align":"center"}},[t._v("暂无结果")]),t._l(t.items,(function(e,n){return i("el-radio",{key:n,staticClass:"link-select-radio",attrs:{label:e},on:{change:t.changeSelect},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[1===t.activeIndex?i("el-image",{staticStyle:{width:"80px",height:"80px","margin-right":"10px"},attrs:{src:e.img}}):t._e(),i("div",{staticStyle:{width:"calc(100% - 170px)"}},[t._v(t._s(e.name))]),1===t.activeIndex?i("div",{staticStyle:{width:"40px","margin-left":"10px"}},[t._v(t._s(e.on_sale?"上架":"下架"))]):t._e()],1)}))],2),1===t.activeIndex?i("el-pagination",{staticStyle:{"text-align":"center","margin-top":"10px"},attrs:{"current-change":t.query.page,"page-size":t.query.paegSize,total:t.total,layout:"total, prev, pager, next, jumper"},on:{"current-change":t.handleCurrentChange}}):t._e()],1),i("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("取消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)])},u=[],d=(i("b0c0"),i("c405")),m={props:{Visible:Boolean},data:function(){return{loading:!1,query:{page:1,pageSize:20,name:""},total:0,items:[],activeIndex:1,pages:[{name:"用户主页",link:"UserHome",type:"page"},{name:"用户订单页",link:"UserOrder",type:"page"},{name:"用户地址簿",link:"UserAddress",type:"page"},{name:"用户钱包",link:"UserWallet",type:"page"}],link:{name:null,link:null,query:null},select:null}},methods:{changeItems:function(t){this.activeIndex=t,this.items=[],1===t?this.getProducts():2===t?this.getTypes():this.getPages()},getProducts:function(){var t=this;this.loading=!0,Object(l["e"])(this.query).then((function(e){e.data.body.data.map((function(e){t.items.push({id:e.id,img:e.img,name:e.product_title,on_sale:e.on_sale,type:"product"})})),t.total=e.data.body.page.total,t.loading=!1})).catch((function(){t.loading=!1}))},getTypes:function(){var t=this;this.loading=!0,Object(d["c"])().then((function(e){e.data.body.map((function(e){t.items.push({id:e.id,name:e.category_title,type:"category"})})),t.loading=!1})).catch((function(){t.loading=!1}))},getPages:function(){var t=this;this.loading=!0,setTimeout((function(){t.items=t.pages,t.loading=!1}),500)},handleCurrentChange:function(t){this.query.page=t,this.getProducts()},close:function(){this.select=null,this.$emit("close")},changeSelect:function(t){"product"===t.type?(this.link.query=t.id,this.link.name="商品链接："+t.name,this.link.link="Product"):"category"===t.type?(this.link.query=t.id,this.link.name="分类链接："+t.name,this.link.link="Types"):(this.link.query=null,this.link.name=t.name,this.link.link=t.link)},confirm:function(){this.$emit("confirm",this.link)}},watch:{Visible:{deep:!0,handler:function(){this.Visible&&(this.select=null,this.items=[],this.activeIndex=1,this.getProducts())}}}},p=m,h=(i("96d6"),i("fab6"),i("2877")),g=Object(h["a"])(p,o,u,!1,null,"2f29202a",null),v=g.exports,f={components:{ImageDialog:c["a"],ItemDialog:r["a"],LinkDialog:v},data:function(){return{loading:!1,colors:[{value:"summer",name:"夏日艳阳",img:"//asset.ibanquan.com/image/5eb5d27c6da86b000f7608b1/s.jpeg?v=1588974204"},{value:"water",name:"清爽蓝",img:"//asset.ibanquan.com/image/5eb5d2de36a6ce0021f438e1/s.jpeg?v=1588974302"},{value:"spring",name:"春日绿",img:"//asset.ibanquan.com/image/5eb5d35f6da86b000b7603e2/s.jpeg?v=1588974431"},{value:"forest",name:"森林绿",img:"//asset.ibanquan.com/image/5eb5d3b736a6ce002cf43ca1/s.jpeg?v=1588974519"},{value:"purple",name:"静谧紫",img:"//asset.ibanquan.com/image/5eb5d1f036a6ce0016f43d00/s.jpeg?v=1588974065"}],selectTheme:"",template:{},banners:[{img:"",link:{link:null,name:null,query:null},sort:0}],types:{visible:!0,items:[{img:"",title:"全部商品",link:{link:null,name:null,query:null},sort:0},{img:"",title:"热卖商品",link:{link:null,name:null,query:null},sort:1},{img:"",title:"最新上架",link:{link:null,name:null,query:null},sort:2},{img:"",title:"优惠特卖",link:{link:null,name:null,query:null},sort:3}]},message:"",limit:{visible:!0,endTime:"",items:[]},newitem:{visible:!0,items:[]},ad:{visible:!0,img:"",title:"",sub_itle:"",price:"",ori_price:"",link:{link:null,name:null,query:null}},imageShow:!1,current:{type:null,index:null},current_items:[],addShow:!1,linkShow:!1,limitDisabled:[],newDisabled:[],bannerDisabled:[],typeDisabled:[],adDisabled:[],colorLoad:!1,loadGroup:{banners:!1,types:!1,message:!1,limit:!1,newitem:!1,ad:!1}}},created:function(){this.getTheme()},methods:{getTheme:function(){var t=this;this.loading=!0,Object(s["b"])(this.$route.query.id).then((function(e){var i=e.data.body;t.selectTheme=i.theme,t.banners=i.banners,t.limit=i.limit,t.message=i.message,t.newitem=i.newitem,t.types=i.types,t.ad=i.ad,t.template=i,t.loading=!1})).catch((function(){t.loading=!1}))},changeTheme:function(){var t=this;this.template.theme=this.selectTheme,this.colorLoad=!0,Object(s["a"])({setting:this.template},this.$route.query.id).then((function(){t.getTheme(),t.$message.success("修改成功"),t.colorLoad=!1})).catch((function(){t.colorLoad=!1}))},testItems:function(t,e){var i="limit"===t?this.limitDisabled:this.newDisabled;e.map((function(t){Object(l["d"])(t.id).then((function(){})).catch((function(e){404===e.response.status&&i.push(t.id)}))}))},testLink:function(t,e){var i="banner"===t?this.bannerDisabled:"type"===t?this.typeDisabled:this.adDisabled;e.map((function(t){Object(l["d"])(t.query).then((function(){})).catch((function(e){404===e.response.status&&i.push(t.query)}))}))},changeTemplate:function(t){var e=this,i="banners"===t?this.banners:"types"===t?this.types:"message"===t?this.message:"newitem"===t?this.newitem:"limit"===t?this.limit:this.ad;this.template[t]=i,this.loadGroup[t]=!0,Object(s["a"])({setting:this.template},this.$route.query.id).then((function(){e.$message.success("保存成功"),e.getTheme(),e.loadGroup[t]=!1})).catch((function(i){401!==i.response.status&&e.$message.warning(i.response.data.message),e.loadGroup[t]=!1}))},changeImage:function(t,e){this.imageShow=!0,this.current.type=t,this.current.index=e},confirmImage:function(t){var e="banner"===this.current.type?this.banners:"type"===this.current.type?this.types:this.ad;null!==this.current.index&&"banner"===this.current.type?e[this.current.index].img=t[0].url:null!==this.current.index&&"type"===this.current.type?e.items[this.current.index].img=t[0].url:e.img=t[0].url,this.imageShow=!1},addBanner:function(){6!==this.banners.length?this.banners.push({img:"",link:{link:null,name:null,query:null},sort:this.banners.length}):this.$message.warning("已有6张广告图")},toFront:function(t,e){var i="banner"===t?this.banners:this.types;0!==i[e].sort&&(i[e-1].sort+=1,i[e].sort-=1,i[e]=i.splice(e-1,1,i[e])[0])},toBack:function(t,e){var i="banner"===t?this.banners:this.types;i[e].sort!==i.length-1&&(i[e+1].sort-=1,i[e].sort+=1,i[e]=i.splice(e+1,1,i[e])[0])},toDelete:function(t){var e=this;this.banners.length<=1?this.$message.warning("至少添加一个广告图"):this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){e.banners.splice(t,1),e.banners.map((function(t,e){t.sort=e}))})).catch((function(){}))},addItem:function(t){var e=this,i="limit"===t?this.limit:this.newitem;i.items.length>=10?this.$message.warning("最多可选择10个商品"):(this.addShow=!0,this.current.type=t,this.current_items=[],i.items.map((function(t){e.current_items.push(t.id)})))},confirmItem:function(t){var e="limit"===this.current.type?this.limit:this.newitem,i=[];e.items.map((function(t){i.push(t.id)})),t.map((function(t){-1===i.indexOf(t.id)&&e.items.push({id:t.id,img:t.img,product_title:t.product_title,sub_title:"",price:t.price,ori_price:""})})),this.addShow=!1},deleteItem:function(t,e){var i="limit"===t?this.limit:this.newitem;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){i.items.splice(e,1)})).catch((function(){}))},getLink:function(t,e){this.current.type=t,this.current.index=e,this.linkShow=!0},confirmLink:function(t){var e="banner"===this.current.type?this.banners:"type"===this.current.type?this.types:this.ad;null!==this.current.index&&"banner"===this.current.type?e[this.current.index].link=t:null!==this.current.index&&"type"===this.current.type?e.items[this.current.index].link=t:e.link=t,this.linkShow=!1}}},b=f,y=(i("61ca"),i("39ab"),Object(h["a"])(b,n,a,!1,null,"60f711f5",null));e["default"]=y.exports},8418:function(t,e,i){"use strict";var n=i("c04e"),a=i("9bf2"),s=i("5c6c");t.exports=function(t,e,i){var l=n(e);l in t?a.f(t,l,s(0,i)):t[l]=i}},"8d55":function(t,e,i){"use strict";var n=i("ef99"),a=i.n(n);a.a},9216:function(t,e,i){},"92c0":function(t,e,i){},9560:function(t,e,i){"use strict";var n=i("9793"),a=i.n(n);a.a},"96d6":function(t,e,i){"use strict";var n=i("f1b7"),a=i.n(n);a.a},9793:function(t,e,i){},a434:function(t,e,i){"use strict";var n=i("23e7"),a=i("23cb"),s=i("a691"),l=i("50c4"),c=i("7b0b"),r=i("65f0"),o=i("8418"),u=i("1dde"),d=i("ae40"),m=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m||!p},{splice:function(t,e){var i,n,u,d,m,p,b=c(this),y=l(b.length),_=a(t,y),x=arguments.length;if(0===x?i=n=0:1===x?(i=0,n=y-_):(i=x-2,n=g(h(s(e),0),y-_)),y+i-n>v)throw TypeError(f);for(u=r(b,n),d=0;d<n;d++)m=_+d,m in b&&o(u,d,b[m]);if(u.length=n,i<n){for(d=_;d<y-n;d++)m=d+n,p=d+i,m in b?b[p]=b[m]:delete b[p];for(d=y;d>y-n+i;d--)delete b[d-1]}else if(i>n)for(d=y-n;d>_;d--)m=d+n-1,p=d+i-1,m in b?b[p]=b[m]:delete b[p];for(d=0;d<i;d++)b[d+_]=arguments[d+2];return b.length=y-n+i,u}})},c405:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return c}));var n=i("b775");function a(){return Object(n["a"])({url:"category",method:"get"})}function s(t,e){return Object(n["a"])({url:"category/"+t,method:"put",data:e})}function l(t){return Object(n["a"])({url:"category",method:"post",data:t})}function c(t){return Object(n["a"])({url:"category/"+t,method:"delete"})}},c4c8:function(t,e,i){"use strict";i.d(e,"e",(function(){return a})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return r}));var n=i("b775");function a(t){return Object(n["a"])({url:"product",method:"get",params:t})}function s(t){return Object(n["a"])({url:"product/"+t,method:"get"})}function l(t){return Object(n["a"])({url:"product",method:"post",data:t})}function c(t,e){return Object(n["a"])({url:"product/"+e,method:"put",data:t})}function r(t){return Object(n["a"])({url:"product/"+t,method:"delete"})}},d483:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.Visible,title:"选择商品","before-close":t.close,width:"80%"}},[i("div",[i("el-input",{staticStyle:{width:"calc(100% - 110px)","margin-right":"10px"},attrs:{placeholder:"请输入商品名称搜索"},model:{value:t.query.name,callback:function(e){t.$set(t.query,"name",e)},expression:"query.name"}},[i("el-button",{attrs:{slot:"append"},on:{click:function(e){return t.search("search")}},slot:"append"},[t._v("搜索")])],1),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.search("all")}}},[t._v("查看全部")])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[0===t.items.length?i("div",{staticClass:"loading-placeholder"},[t._v("暂无结果")]):t._e(),i("div",{staticClass:"item-dialog-header"},[i("div",{staticStyle:{width:"80px"}},[t._v("图片")]),i("div",{staticStyle:{width:"calc(100% - 330px)"}},[t._v("商品标题")]),i("div",{staticStyle:{width:"100px"}},[t._v("售价")]),i("div",{staticStyle:{width:"50px"}},[t._v("上下架")]),i("div",{staticStyle:{width:"50px"}},[t._v("操作")])]),t._l(t.items,(function(e,n){return i("div",{key:n,staticClass:"item-dialog-item",class:{"is-select":-1!==t.selectId.indexOf(e.id)||-1!==t.Current.indexOf(e.id)}},[i("el-image",{staticStyle:{width:"80px",height:"80px"},attrs:{src:e.img}}),i("div",{staticStyle:{width:"calc(100% - 330px)"}},[t._v(t._s(e.product_title))]),i("div",{staticStyle:{width:"100px"}},[t._v("¥ "),i("strong",[t._v(t._s(e.price))])]),i("div",{staticStyle:{width:"50px"}},[t._v(t._s(e.on_sale?"上架":"下架"))]),i("div",{staticStyle:{width:"50px"}},[-1!==t.Current.indexOf(e.id)?i("span",[t._v("已选择")]):i("el-button",{staticStyle:{cursor:"pointer"},attrs:{type:"text",size:"mini"},on:{click:function(i){return t.changeSelect(e)}}},[t._v(t._s(-1===t.selectId.indexOf(e.id)?"选择":"移除"))])],1)],1)}))],2),i("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":t.query.page,"page-size":t.query.pageSize,total:t.total,layout:"total, prev, pager, next, jumper"},on:{"current-change":t.handleCurrentChange}}),i("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("取消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)],1)},a=[],s=(i("c975"),i("a434"),i("b0c0"),i("c4c8")),l={props:{Visible:Boolean,Current:Array},data:function(){return{loading:!1,items:[],total:0,query:{page:1,pageSize:15,name:""},selectId:[],selectItem:[]}},methods:{getItems:function(){var t=this;this.loading=!0,Object(s["e"])(this.query).then((function(e){t.items=e.data.body.data,t.total=e.data.body.page.total,t.loading=!1})).catch((function(){t.loading=!1}))},handleCurrentChange:function(t){this.query.page=t,this.getItems()},search:function(t){"all"===t&&(this.query.name=""),this.query.page=1,this.getItems()},changeSelect:function(t){var e=this.selectId.indexOf(t.id);-1===e?(this.selectId.push(t.id),this.selectItem.push(t)):(this.selectId.splice(e,1),this.selectItem.splice(e,1))},close:function(){this.$emit("close")},confirm:function(){0!==this.selectId.length?this.$emit("confirm",this.selectItem):this.$message.warning("请先选择商品")}},watch:{Visible:{deep:!0,handler:function(){this.Visible&&(this.selectId=[],this.selectItem=[],this.getItems())}}}},c=l,r=(i("8d55"),i("2877")),o=Object(r["a"])(c,n,a,!1,null,"e116f64e",null);e["a"]=o.exports},ed64:function(t,e,i){},ef99:function(t,e,i){},f1b7:function(t,e,i){},fab6:function(t,e,i){"use strict";var n=i("9216"),a=i.n(n);a.a}}]);