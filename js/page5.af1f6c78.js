(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page5"],{1626:function(t,i,e){},"6e5f":function(t,i,e){},"8ff6":function(t,i,e){"use strict";e("6e5f")},"91db":function(t,i,e){"use strict";e("1626")},"99ac":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("div",{staticClass:"tab-header"},[e("div",{},[e("h2",{staticClass:"text-h6"},[t._v(" "+t._s(t.$t("main.nav."+t.id))+" ")])]),e("div",[e("v-btn",{attrs:{text:"",href:"javascript:void(0);",target:"_blank",color:"primary"}},[t._v(" "+t._s(t.$t("main.tab.more",[t.$t("main.nav."+t.id)]))+" ")])],1)]),t.loading?e("div",{staticClass:"skeletion-loader-list"},[e("v-card",{staticClass:"tab-content",attrs:{flat:!0,outlined:!0}},[e("nav",{staticClass:"tab-node-list"},[e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"chip"}})],1),t._l(7,(function(t){return e("v-skeleton-loader",{key:t,staticClass:"mx-auto",attrs:{type:"list-item-avatar-two-line"}})}))],2)],1):e("div",[e("v-card",{staticClass:"tab-content",attrs:{flat:!0,outlined:!0}},[t.tabNodes.length>0?e("nav",{staticClass:"tab-node-list"},t._l(t.tabNodes,(function(t,i){return e("tag",{key:i,attrs:{options:t}})})),1):t._e(),e("v-list",{attrs:{"two-line":""}},[t._l(t.tabTopics,(function(i,a){return[e("topic-item",{key:i.id,attrs:{topic:i}}),t.tabTopics.length>a+1?e("v-divider",{key:a}):t._e()]}))],2)],1)],1)])},n=[],o=(e("d3b7"),e("c40d")),s=e("ab01"),c=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-list-item",{key:t.topic.title,on:{click:function(i){return t.go(t.topic.id)}}},[a("v-list-item-avatar",{attrs:{size:"40"}},[a("v-img",{attrs:{src:t.topic.avator,"lazy-src":e("d378")}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.topic.title)}}),a("v-list-item-subtitle",[t._v(" "+t._s(t.topic.nodeName)+" · "+t._s(t.topic.author)+" · "+t._s(t.$$(t.topic,"reply","lastReplyTime"))+" ")])],1),a("v-list-item-action",[a("v-chip",{attrs:{"x-small":""}},[t._v(" "+t._s(t.topic.reply?t.$$(t.topic,"reply","count"):0)+" ")])],1)],1)},r=[],l={props:{topic:{type:Object,default:function(){return{}}}},methods:{go:function(t){this.$router.push({path:"/v2/topic/".concat(t)})}}},u=l,d=(e("91db"),e("2877")),p=e("6544"),f=e.n(p),v=e("cc20"),b=e("adda"),m=e("da13"),h=e("1800"),g=e("8270"),_=e("5d23"),y=Object(d["a"])(u,c,r,!1,null,"3ffba592",null),C=y.exports;f()(y,{VChip:v["a"],VImg:b["a"],VListItem:m["a"],VListItemAction:h["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]});var T={name:"Tab",components:{Tag:s["a"],TopicItem:C},props:{id:{type:String,default:"技术"}},data:function(){return{tabNodes:[],tabTopics:[],loading:!1}},watch:{tab:function(){this.fetchData()}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.loading=!0,Object(o["a"])(this.id).then((function(i){t.tabNodes=i.tabNodes,t.tabTopics=i.tabTopics})).finally((function(){t.loading=!1}))}}},V=T,k=(e("a921"),e("8336")),$=e("b0af"),x=e("ce7e"),I=e("8860"),w=e("3129"),L=Object(d["a"])(V,a,n,!1,null,"d436b1de",null);i["default"]=L.exports;f()(L,{VBtn:k["a"],VCard:$["a"],VDivider:x["a"],VList:I["a"],VSkeletonLoader:w["a"]})},a921:function(t,i,e){"use strict";e("ca3d")},ab01:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-chip",{staticClass:"v2-tag",attrs:{color:t.options.color,to:"/node/"+t.options.id,outlined:"",label:""}},[t._v(" "+t._s(t.options.label)+" ")])},n=[],o={name:"Tag",props:{options:{type:Object,default:function(){return{label:"",color:"#fff",id:""}}}},methods:{go:function(){this.$router.push({name:"node",id:this.options.id})}}},s=o,c=(e("8ff6"),e("2877")),r=e("6544"),l=e.n(r),u=e("cc20"),d=Object(c["a"])(s,a,n,!1,null,"88472f4c",null);i["a"]=d.exports;l()(d,{VChip:u["a"]})},c40d:function(t,i,e){"use strict";e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return s})),e.d(i,"d",(function(){return c}));var a=e("ced4"),n=function(t){return a["c"].get("/getTabInfo?tab=".concat(t))},o=function(){return a["c"].get("/getToDayHot")},s=function(t){return a["c"].get("/getTopicInfo?id=".concat(t))},c=function(t){return a["c"].post("/getTopicReply",t)}},ca3d:function(t,i,e){},d378:function(t,i,e){t.exports=e.p+"img/man.6b42ecba.png"}}]);
//# sourceMappingURL=page5.af1f6c78.js.map