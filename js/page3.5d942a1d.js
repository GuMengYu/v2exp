(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page3"],{"162e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"v2exp_app"},[a("left-nav",{attrs:{open:t.openNav},on:{"left-nav-toggle":t.handleNav}}),a("setting-drawer",{attrs:{open:t.openSetting},on:{"setting-close":t.handleSettingClose}}),a("v-app-bar",{attrs:{app:"","clipped-left":t.$vuetify.breakpoint.lgAndUp,"elevate-on-scroll":!1}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.openNav=!t.openNav}}}),a("v-toolbar-title",{staticClass:"headline"},[a("span",{staticClass:"logo"}),a("span",{staticClass:"logo-sub"},[t._v(" • "+t._s(t.$t("message.logo_text")))])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.openSetting=!t.openSetting}}},[a("v-icon",[t._v(t._s(t.mdiCogOutline))])],1),a("language-select"),a("v-btn",{attrs:{icon:"",to:"../../about"}},[a("v-icon",[t._v(t._s(t.mdiInformation))])],1)],1),a("main",{staticClass:"content",class:{open:t.openNav}},[a("keep-alive",[a("transition",[a("router-view")],1)],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":"","open-on-hover":"","slide-x":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",i,!1),n),[a("v-icon",{attrs:{left:""}},[t._v(" "+t._s(t.mdiTranslate)+" ")]),t._v(" "+t._s(t.localeText)+" "),a("v-icon",{staticClass:"ml-0",attrs:{right:"",size:"14"}},[t._v(" "+t._s(t.mdiChevronDown)+" ")])],1)]}}])},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.currentLocale,callback:function(e){t.currentLocale=e},expression:"currentLocale"}},[a("v-subheader",{staticClass:"font-weight-black text-uppercase",domProps:{textContent:t._s(t.$t("common.translations"))}}),t._l(t.locales,(function(e){return a("v-list-item",{key:e.val,attrs:{value:e.val},on:{click:function(a){return t.changeLocale(e.val)}}},[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)}))],2)],1)],1)},s=[],r=(a("caad"),a("b64b"),a("2532"),a("94ed")),c={en:"English",zh:"简体中文"},l=[{name:"简体中文",val:"zh"},{name:"English",val:"en"},{name:"日本語",val:"ja"},{name:"한국어",val:"ko"}],u={name:"LanguageSelect",data:function(){return{locales:l,currentLocale:this.$store.getters["system/locale"],mdiChevronDown:r["l"],mdiTranslate:r["jb"]}},computed:{localeText:function(){return c[this.currentLocale]}},methods:{changeLocale:function(t){var e=this;Object.keys(c).includes(t)?(this.$store.commit("system/updateLanguage",t),this.$i18n.locale=t,this.$dayjs.locale(t)):(this.$nextTick().then((function(){e.currentLocale=e.$store.getters["system/locale"]})),this.$message({message:this.$t("common.not_support"),type:"error"}))}}},v=u,d=a("2877"),m=a("6544"),p=a.n(m),h=a("8336"),f=a("132d"),g=a("8860"),b=a("da13"),_=a("1baa"),y=a("5d23"),k=a("e449"),w=a("e0c7"),x=Object(d["a"])(v,o,s,!1,null,"b1f46f2a",null),C=x.exports;p()(x,{VBtn:h["a"],VIcon:f["a"],VList:g["a"],VListItem:b["a"],VListItemGroup:_["a"],VListItemTitle:y["d"],VMenu:k["a"],VSubheader:w["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{fixed:"",temporary:"",right:"","hide-overlay":"",width:"300"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"v-app-underline",attrs:{tag:"header",flat:""}},[a("div",{staticClass:"text-h6 font-weight-medium text--primary"},[t._v(" "+t._s(t.$t("common.setting"))+" ")]),a("v-spacer"),a("v-icon",{on:{click:t.close}},[t._v(" "+t._s(t.mdiClose)+" ")])],1),a("v-container",[a("span",{staticClass:"text-subtitle-2 font-weight-black"},[t._v(t._s(t.$t("common.theme")))]),a("v-item-group",{attrs:{mandatory:""},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}},[a("v-row",[a("v-col",[a("v-item",{attrs:{value:"light"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active,i=e.toggle;return[a("v-card",{staticClass:"d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded",class:n?"primary":t.baseClass,attrs:{outlined:""},on:{click:i}},[a("span",[t._v("Light")]),a("v-icon",[t._v(t._s(t.mdiBrightness6))])],1)]}}])})],1),a("v-col",[a("v-item",{attrs:{value:"night"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active,i=e.toggle;return[a("v-card",{staticClass:"d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded",class:n?"primary":t.baseClass,attrs:{outlined:""},on:{click:i}},[a("span",[t._v("Dark")]),a("v-icon",[t._v(t._s(t.mdiBrightness4))])],1)]}}])})],1)],1),a("v-row",[a("v-col",[a("v-item",{attrs:{value:"system"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active,i=e.toggle;return[a("v-card",{staticClass:"d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded",class:n?"primary":t.baseClass,attrs:{outlined:""},on:{click:i}},[a("span",[t._v("System")]),a("v-icon",[t._v(t._s(t.mdiDesktopClassic))])],1)]}}])})],1),a("v-col",[a("v-item",{attrs:{value:"mixed"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active,i=e.toggle;return[a("v-card",{staticClass:"d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded",class:n?"primary":t.baseClass,attrs:{outlined:""},on:{click:i}},[a("span",[t._v("Mixed")]),a("v-icon",[t._v(t._s(t.mdiThemeLightDark))])],1)]}}])})],1)],1)],1),a("v-divider"),a("span",{staticClass:"text-subtitle-2 font-weight-black"},[t._v("next setting")])],1)],1)},T=[],L=a("d4ec"),$=a("bee2"),S=a("ade3"),I=function(){function t(){Object(L["a"])(this,t),Object(S["a"])(this,"mediaList",window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"))}return Object($["a"])(t,[{key:"currentMode",value:function(){return this.mediaList.matches?"night":"light"}},{key:"onChange",value:function(t){this.mediaList.addEventListener("change",t.bind(this))}}]),t}(),j=I,M={NIGHT:"night",LIGHT:"light"},N={SYSTEM:"system",NIGHT:"night",LIGHT:"light",MIXED:"mixed"},D={props:{open:{type:Boolean,defalut:!1}},data:function(){return{theme:this.$store.getters["system/theme"],detectMode:new j,mdiBrightness6:r["i"],mdiThemeLightDark:r["hb"],mdiDesktopClassic:r["r"],mdiBrightness4:r["h"],mdiClose:r["n"]}},computed:{drawer:{get:function(){return this.open},set:function(t){t||this.$emit("setting-close")}},baseClass:function(){return this.$vuetify.theme.isDark?"grey darken-3":"grey lighten-3"}},watch:{theme:function(t){this.$store.commit("system/updateTheme",this.theme),this.switchTheme(t)}},created:function(){var t=this;this.switchTheme(this.theme),this.detectMode.onChange((function(e){t.theme!==N.SYSTEM&&t.theme||(t.$vuetify.theme.dark=e.matches)}))},methods:{switchTheme:function(t){var e=this,a=function(t){return e.$vuetify.theme.dark=t};({light:a.bind(void 0,!1),night:a.bind(void 0,!0),system:a.bind(void 0,this.detectMode.currentMode()===M.NIGHT),mixed:a.bind(void 0,!1)})[t]()},close:function(){this.drawer=!1,this.$emit("setting-close")},changeTheme:function(){console.log()}}},E=D,O=a("b0af"),B=a("62ad"),G=a("a523"),P=a("ce7e"),H=a("d903"),z=a("604c"),A=a("f774"),J=a("0fd9"),Y=a("2fa4"),U=a("71d9"),q=Object(d["a"])(E,V,T,!1,null,null,null),K=q.exports;p()(q,{VCard:O["a"],VCol:B["a"],VContainer:G["a"],VDivider:P["a"],VIcon:f["a"],VItem:H["a"],VItemGroup:z["b"],VNavigationDrawer:A["a"],VRow:J["a"],VSpacer:Y["a"],VToolbar:U["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{fixed:"",app:"",floating:"",clipped:t.$vuetify.breakpoint.lgAndUp},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:"",shaped:""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tabs,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",value:e.val}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:e.color}},[t._v(" "+t._s(e.icon)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.$t("main.nav."+e.val))}})],1)],1)})),1),a("v-divider",{staticClass:"mt-2 mb-2"}),a("v-list-item",{attrs:{link:"",href:"https://github.com/GuMengYu/v2exp",target:"_blank"}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(t.githubSvgPath))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" GitHub "),a("v-icon",{attrs:{size:"14"}},[t._v(" "+t._s(t.newSvg)+" ")])],1)],1)],1),a("v-list-item",{attrs:{link:"",href:"/#/inetease/",target:"_blank"}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"red"}},[t._v(" "+t._s(t.mdiMusicClefTreble)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Music Player ")])],1)],1)],1)],1)},X=[],F={props:{open:{type:Boolean,defalut:!1}},data:function(){return{githubSvgPath:r["w"],newSvg:r["O"],mdiMusicClefTreble:r["K"],tabs:[{icon:r["E"],val:"tech",color:"#42a5f5"},{icon:r["ib"],val:"creative",color:"#66bb6a"},{icon:r["J"],val:"play",color:"#ffa726"},{icon:r["d"],val:"apple",color:"#000000"},{icon:r["g"],val:"jobs",color:"#9c27b0"},{icon:r["f"],val:"deals",color:"#4db6ac"},{icon:r["m"],val:"city",color:"#90a4ae"},{icon:r["z"],val:"qna",color:"#03a9f4"},{icon:r["kb"],val:"hot",color:"#e53935"},{icon:r["s"],val:"gank",color:"#f95e74"}]}},computed:{activeTab:{get:function(){var t,e,a;return null!==(t=null===(e=this.$route)||void 0===e||null===(a=e.params)||void 0===a?void 0:a.id)&&void 0!==t?t:"hot"},set:function(t){this.$router.push({path:"gank"===t?"/".concat(t):"/v2/tab/".concat(t)})}},drawer:{get:function(){return this.open},set:function(t){this.$emit("left-nav-toggle",t)}}}},Q=F,W=a("34c3"),Z=Object(d["a"])(Q,R,X,!1,null,null,null),tt=Z.exports;p()(Z,{VDivider:P["a"],VIcon:f["a"],VList:g["a"],VListItem:b["a"],VListItemContent:y["b"],VListItemGroup:_["a"],VListItemIcon:W["a"],VListItemTitle:y["d"],VNavigationDrawer:A["a"]});var et={name:"Layout",components:{languageSelect:C,settingDrawer:K,leftNav:tt},data:function(){return{openNav:!0,openSetting:!1,mdiCogOutline:r["p"],mdiInformation:r["C"]}},methods:{handleNav:function(t){this.openNav=t},handleSettingClose:function(){this.openSetting=!1}}},at=et,nt=(a("3417"),a("40dc")),it=a("5bc1"),ot=a("2a7f"),st=Object(d["a"])(at,n,i,!1,null,"56443604",null);e["default"]=st.exports;p()(st,{VAppBar:nt["a"],VAppBarNavIcon:it["a"],VBtn:h["a"],VIcon:f["a"],VSpacer:Y["a"],VToolbarTitle:ot["a"]})},3417:function(t,e,a){"use strict";a("a9f9")},a9f9:function(t,e,a){},bee2:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",(function(){return i}))},d4ec:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=page3.5d942a1d.js.map