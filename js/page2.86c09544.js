(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page2"],{2909:function(t,a,e){"use strict";e.d(a,"a",(function(){return d}));var n=e("6b75");function o(t){if(Array.isArray(t))return Object(n["a"])(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=e("06c5");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return o(t)||r(t)||Object(c["a"])(t)||i()}},4203:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{tag:"article"}},[e("v-breadcrumbs",{staticClass:"topic-breadcrumbs pl-0",attrs:{items:t.breadcrumbs,large:!0}}),e("v-row",[e("v-col",{attrs:{lg:"8"}},[e("v-card",{staticClass:"markdown-body pa-8 pt-6",attrs:{outlined:""}},[e("render-content",{attrs:{type:"markdown",source:t.article.markdown}})],1)],1),e("v-col",{attrs:{lg:"4"}},[e("hot-list",{staticClass:"mb-6",attrs:{title:t.$t("gank.start_goods"),data:t.likes,loading:t.loading}}),e("hot-list",{staticClass:"mb-6",attrs:{title:t.$t("gank.view_goods"),data:t.views,loading:t.loading}})],1)],1)],1)},o=[],r=(e("99af"),e("4160"),e("d81d"),e("d3b7"),e("3ca3"),e("159b"),e("ddb0"),e("3835")),c=e("2909"),i=e("5b3c"),d=e("f50d"),s=e("0db1"),u={name:"Post",components:{HotList:i["a"],RenderContent:s["a"]},props:{postId:{type:String,default:"404"}},data:function(){return{likes:[],views:[],loading:!1,article:{}}},computed:{breadcrumbs:function(){return[{text:this.article.category,disabled:!1},{text:this.article.title,disabled:!0}]}},created:function(){var t=this;this.loading=!0,Promise.all([].concat(Object(c["a"])(["likes","views"].map((function(t){return d["a"].hot("GanHuo",t)}))),[d["a"].post(this.postId)])).then((function(a){var e=Object(r["a"])(a,3),n=e[0],o=e[1],c=e[2];[o,n].map((function(a){a.forEach((function(a){var e;a.datetime=t.$dayjs(a.publishedAt).fromNow(),a.img=null===a||void 0===a||null===(e=a.images)||void 0===e?void 0:e[0],a.title=a.desc}))})),t.likes=n,t.views=o,t.article=c})).finally((function(){t.loading=!1}))},methods:{}},l=u,b=e("2877"),f=e("6544"),p=e.n(f),g=e("2bc5"),m=e("b0af"),v=e("62ad"),y=e("a523"),h=e("0fd9"),w=Object(b["a"])(l,n,o,!1,null,"6fc71d3c",null);a["default"]=w.exports;p()(w,{VBreadcrumbs:g["a"],VCard:m["a"],VCol:v["a"],VContainer:y["a"],VRow:h["a"]})},f50d:function(t,a,e){"use strict";e("99af");var n=e("ced4"),o=function(t){return function(a){return n["a"].get("/data/category/".concat(t,"/type/").concat(a.type,"/page/").concat(a.page,"/count/").concat(a.size))}};a["a"]={getBanner:function(){return n["a"].get("/banners")},getTodayData:function(){return n["a"].get("/today")},ganHuoData:o("GanHuo"),gankGirls:o("Girl"),downLoadFile:function(t){var a=document.createElement("a");a.style.display="none",a.href=t,a.setAttribute("download",""),document.body.appendChild(a),a.click(),document.body.removeChild(a)},randomGet:function(t){return n["a"].get("/random/category/".concat(t.category,"/type/").concat(t.type,"/count/").concat(t.count))},hot:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"views";return n["a"].get("/hot/".concat(a,"/category/").concat(t,"/count/5"))},post:function(t){return n["a"].get("/post/".concat(t))}}}}]);
//# sourceMappingURL=page2.86c09544.js.map