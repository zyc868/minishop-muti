(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa6938f8"],{"2f94":function(e,t,i){"use strict";i.d(t,"d",(function(){return d})),i.d(t,"a",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"b",(function(){return r}));var s=i("b775");function d(e){return Object(s["a"])({url:"address",method:"get",params:e})}function n(e){return Object(s["a"])({url:"address",method:"post",data:e})}function o(e,t){return Object(s["a"])({url:"address/"+e,method:"put",data:t})}function r(e){return Object(s["a"])({url:"address/"+e,method:"delete"})}},"3d59":function(e,t,i){},4296:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"address-functional"},[e.isEdit?e._e():i("div",[i("shop-button",{attrs:{size:"small"},on:{click:e.toAdd}},[e._v("新增地址")])],1),e.isEdit?i("div",[i("shop-button",{attrs:{size:"small"},on:{click:e.toDelete}},[e._v("删除地址")])],1):e._e(),i("div",[i("shop-button",{attrs:{size:"small",type:"border"},on:{click:e.cancelEdit}},[e._v(e._s(e.isEdit?"取消":"删除"))])],1)]),i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getMore,expression:"getMore"}],staticClass:"address-list",style:{height:e.height-1+"px"},attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10","infinite-scroll-immediate-check":""}},[e._l(e.addresses,(function(t,s){return i("li",{key:s},[e.isEdit?i("shop-checkbox",{staticClass:"address-checkbox",attrs:{label:t.id},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):e._e(),i("div",{staticClass:"address-content",class:{"has-width":e.isEdit},on:{click:function(i){return e.toEdit(t)}}},[i("div",[i("div",[e._v("收件人：")]),i("div",[e._v(e._s(t.name))])]),i("div",[i("div",[e._v("联系方式：")]),i("div",[e._v(e._s(t.mobile))])]),i("div",[i("div",[e._v("收件地址：")]),i("div",[e._v(e._s(t.full_address))])])])],1)})),e.nomore?e._e():i("div",{staticClass:"address-placeholder"},[e._v("加载中...")]),e.nomore?i("div",{staticClass:"address-placeholder"},[e._v("没有更多了")]):e._e()],2),i("shop-popup",{attrs:{show:e.addShow,full:""}},[i("div",{attrs:{slot:"title"},slot:"title"},[e._v(e._s("edit"===e.editType?"编辑地址":"新增地址"))]),i("div",{staticClass:"add-popup-content",attrs:{slot:"content"},slot:"content"},[i("div",[i("div",[e._v("收件人")]),i("shop-input",{attrs:{rounded:!1},model:{value:e.editAddress.name,callback:function(t){e.$set(e.editAddress,"name",t)},expression:"editAddress.name"}})],1),i("div",[i("div",[e._v("联系方式")]),i("shop-input",{attrs:{rounded:!1},model:{value:e.editAddress.mobile,callback:function(t){e.$set(e.editAddress,"mobile",t)},expression:"editAddress.mobile"}})],1),i("div",[i("div",[e._v("省市区")]),i("shop-dispicker",{attrs:{value:e.editAddress.dispicker},on:{change:e.changeDispicker}})],1),i("div",[i("div",[e._v("邮政编码")]),i("shop-input",{attrs:{rounded:!1},model:{value:e.editAddress.zip,callback:function(t){e.$set(e.editAddress,"zip",t)},expression:"editAddress.zip"}})],1),i("div",[i("div",[e._v("详细地址")]),i("shop-input",{attrs:{rounded:!1},model:{value:e.editAddress.detail,callback:function(t){e.$set(e.editAddress,"detail",t)},expression:"editAddress.detail"}})],1)]),i("div",{attrs:{slot:"button"},slot:"button"},[i("div",{staticClass:"add-popup-button"},[i("shop-button",{attrs:{type:"border",rounded:!1},on:{click:e.closeAdd}},[e._v("关闭")])],1),i("div",{staticClass:"add-popup-button"},[i("shop-button",{attrs:{rounded:!1},on:{click:e.confirmAdd}},[e._v("确认")])],1)])])],1)},d=[],n=(i("99af"),i("b0c0"),i("2f94")),o=i("76a0"),r={data:function(){return{loading:!1,nomore:!1,height:0,addresses:[],fetchQuery:{page:0,pageSize:15},selected:[],addShow:!1,isEdit:!1,editType:"add",editAddress:{name:"",dispicker:[],detail:"",mobile:"",zip:""},index:0}},mounted:function(){var e=this;this.$nextTick((function(){e.height=window.innerHeight-170}))},methods:{getMore:function(){var e=this;this.loading=!0,this.noresult=!1;var t=[];this.fetchQuery.page+=1,Object(n["d"])(this.fetchQuery).then((function(i){t=i.data.body.data,0===t.length?(e.loading=!0,e.nomore=!0):(e.addresses=e.addresses.concat(t),e.loading=!1,e.nomore=!1)})).catch((function(t){e.loading=!0,e.nomore=!0,401===t.response.status&&(Object(o["Toast"])({message:"登录超时",duration:1e3}),e.$store.dispatch("logout"),setTimeout((function(){e.$router.push({name:"Login",query:{from:e.$route.name}})}),1e3))}))},cancelEdit:function(){this.isEdit=!this.isEdit,this.selected=[]},toAdd:function(){this.addShow=!0,this.editType="add"},toEdit:function(e){this.addShow=!0,this.editType="edit",this.editAddress={id:e.id,name:e.name,mobile:e.mobile,dispicker:[],detail:e.detail,zip:e.zip},this.editAddress.dispicker.push(e.province),this.editAddress.dispicker.push(e.city),this.editAddress.dispicker.push(e.district)},changeDispicker:function(e){this.editAddress.dispicker=e},closeAdd:function(){this.addShow=!1,this.editAddress={name:"",mobile:"",dispicker:[],detail:"",zip:""}},confirmAdd:function(){var e=this,t={name:this.editAddress.name,province:this.editAddress.dispicker[0],city:this.editAddress.dispicker[1],district:this.editAddress.dispicker[2],detail:this.editAddress.detail,mobile:this.editAddress.mobile,zip:this.editAddress.zip};"edit"===this.editType?Object(n["c"])(this.editAddress.id,t).then((function(){e.fetchQuery.page=0,e.addresses=[],e.getMore(),e.closeAdd()})).catch((function(e){Object(o["Toast"])(e.response.data.message)})):Object(n["a"])(t).then((function(){e.fetchQuery.page=0,e.addresses=[],e.getMore(),e.closeAdd()})).catch((function(e){Object(o["Toast"])(e.response.data.message)}))},toDelete:function(){var e=this;if(this.index===this.selected.length)return this.index=0,this.selected=[],this.isEdit=!1,this.fetchQuery.page=0,this.addresses=[],void this.getMore();var t=this.selected[this.index];Object(n["b"])(t).then((function(){e.index+=1,e.toDelete()})).catch((function(t){401===t.response.status&&e.$router.push({name:"Login",query:{from:"UserAddress"}})}))}}},a=r,c=(i("5bea"),i("2877")),l=Object(c["a"])(a,s,d,!1,null,"29989dc2",null);t["default"]=l.exports},"5bea":function(e,t,i){"use strict";var s=i("3d59"),d=i.n(s);d.a},"99af":function(e,t,i){"use strict";var s=i("23e7"),d=i("d039"),n=i("e8b5"),o=i("861d"),r=i("7b0b"),a=i("50c4"),c=i("8418"),l=i("65f0"),u=i("1dde"),h=i("b622"),p=i("2d00"),f=h("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=p>=51||!d((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),g=u("concat"),A=function(e){if(!o(e))return!1;var t=e[f];return void 0!==t?!!t:n(e)},k=!b||!g;s({target:"Array",proto:!0,forced:k},{concat:function(e){var t,i,s,d,n,o=r(this),u=l(o,0),h=0;for(t=-1,s=arguments.length;t<s;t++)if(n=-1===t?o:arguments[t],A(n)){if(d=a(n.length),h+d>v)throw TypeError(m);for(i=0;i<d;i++,h++)i in n&&c(u,h,n[i])}else{if(h>=v)throw TypeError(m);c(u,h++,n)}return u.length=h,u}})}}]);