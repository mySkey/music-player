webpackJsonp([7],{"+skl":function(t,n){},"3r5k":function(t,n,e){"use strict";(function(t){var n=e("BO1k"),o=e.n(n),i=e("mtWM"),r=e.n(i);t.ajax={get:function(t,n,e){r()({url:common.API_URL+t,method:"get",params:n,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Token:common.getStore("token")||""}}).then(function(t){404==t.data.code?(common.hideLoading(),common.alert("系统出了点问题，请联系技术小哥~")):e&&e(t.data)})},post:function(t,n,e){r()({url:common.API_URL+t,method:"post",data:n,transformRequest:[function(t){var n="";for(var e in t)n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&";return n}],headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Token:common.getStore("token")||""}}).then(function(t){404==t.data.code?(common.hideLoading(),common.alert("系统出了点问题，请联系技术小哥~")):e&&e(t.data)})},put:function(t,n,e){r()({url:common.API_URL+t,method:"put",data:n,transformRequest:[function(t){var n="";for(var e in t)n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&";return n}],headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Token:common.getStore("token")||""}}).then(function(t){404==t.data.code?(common.hideLoading(),common.alert("系统出了点问题，请联系技术小哥~")):e&&e(t.data)})},delete:function(t,n,e){r()({url:common.API_URL+t,method:"delete",data:n,transformRequest:[function(t){var n="";for(var e in t)n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&";return n}],headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Token:getStore("token")||""}}).then(function(t){404==t.data.code?(common.hideLoading(),common.alert("系统出了点问题，请联系技术小哥~")):e&&e(t.data)})},getAll:function(t,n){var e=[],i=!0,a=!1,c=void 0;try{for(var u,s=o()(t);!(i=(u=s.next()).done);i=!0){var l=u.value;e.push(r()({url:common.API_URL+l.url,method:"get",params:l.data,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Token:sessionStorage.getItem("token")||""}}))}}catch(t){a=!0,c=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw c}}r.a.all(e).then(r.a.spread(function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];var i=[];e.forEach(function(t){i.push(t.data)}),n&&n.apply(void 0,i)}))}}}).call(n,e("DuR2"))},"F+jZ":function(t,n,e){"use strict";(function(t){var n=e("Xxa5"),o=e.n(n),i=e("//Fk"),r=e.n(i),a=e("exGp"),c=e.n(a),u=e("mvHQ"),s=e.n(u),l=document.documentElement.clientWidth;t.common={API_URL:Object({NODE_ENV:"production"}).API_URL,AUTH_URL:Object({NODE_ENV:"production"}).AUTH_URL,choiceBg:function(){return l>=750?"http://pc5goel58.bkt.clouddn.com/blog/com/bg0":"http://pc5goel58.bkt.clouddn.com/blog/shou/phone"},init:function(t){common.initProd(t)},initDev:function(t){common.getStore("token")?t():ajax.post("/h5/login",{name:"deng",age:"23",sex:"男"},function(n){0==n.code&&(common.setStore("token",n.data.token),t())})},initProd:function(t){var n=common.getStore("token"),e=common.getUrlParams("token"),o=n||e;o?(common.setStore("token",o),ajax.post("/h5/checkToken",{},function(n){0==n.code?t():common.jumpAuth()})):common.jumpAuth()},jumpAuth:function(){common.setStore("jump_url",window.location.href),common.removeStore("token"),window.location.href=common.AUTH_URL},getUrlParams:function(t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),e=window.location.href,o=e.split("#");if(e=(o=(e=o[1]).split("?"))[1]){var i=e.match(n);if(null!=i)return unescape(i[2])}return null},setStore:function(t,n){var e=s()(n);localStorage.setItem(t,e)},getStore:function(t){var n=localStorage.getItem(t);return n&&(n=JSON.parse(n)),n},removeStore:function(t){localStorage.removeItem(t)},clearStore:function(){localStorage.clear()},mkQiniuKey:function(){for(var t="",n=0;n<6;n++)t+=Math.floor(10*Math.random());return"a4/"+(new Date).valueOf()+t},uptoken:null,getUpToken:function(){var t=this;return c()(o.a.mark(function n(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!common.uptoken){t.next=2;break}return t.abrupt("return",common.uptoken);case 2:return t.next=4,new r.a(function(t,n){ajax.get("/admin/qiniuToken",{},function(e){0==e.code&&e.data.up_token?t(e.data.up_token):n(e.msg)})});case 4:return e=t.sent,common.uptoken=e,t.abrupt("return",e);case 7:case"end":return t.stop()}},n,t)}))()},loading:null,showLoading:function(){common.loading=vue.$loading({lock:!0,text:"数据提交中...",spinner:"el-icon-loading"})},hideLoading:function(){common.loading&&common.loading.close()},alert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;vue.$alert(t,"温馨提示",{confirmButtonText:"确定",callback:function(){n&&n()}})},confirm:function(t,n){vue.$confirm(t,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n&&n()}).catch(function(){})},prompt:function(t,n,e){vue.$prompt(t,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:n}).then(function(t){e&&e(t)}).catch(function(){})}}}).call(n,e("DuR2"))},GH9D:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i={name:"App",components:{BackTop:e("LBMZ").a}},r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Back-top",[n("div",{staticClass:"back-top"},[n("i",{staticClass:"iconfont icon-shang"})])]),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")(i,r,!1,function(t){e("NTNT")},null,null).exports,c=e("/ocq");o.a.use(c.a);var u=new c.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:function(t){return e.e(1).then(function(){var n=[e("lO7g")];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(0).then(function(){var n=[e("/dz8")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/about",component:function(t){return e.e(3).then(function(){var n=[e("ezOL")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/book",component:function(t){return e.e(4).then(function(){var n=[e("HO/K")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/article",component:function(t){return e.e(5).then(function(){var n=[e("Wsnj")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/note",component:function(t){return e.e(2).then(function(){var n=[e("Wuuh")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}]});u.beforeEach(function(t,n,e){e()});var s=u,l=(e("tb/R"),e("kf6B"),e("F+jZ"),e("3r5k"),e("+skl"),e("luY+")),m=e("EbBc"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"foot-container"},[n("div",{staticClass:"sanjiao"},[n("i",{staticClass:"iconfont icon-jiangpai"})]),this._v(" "),n("div",{staticClass:"say"},[this._v("©2017-04-16 为活力而生")])])}]};var h=e("VU/8")({data:function(){return{}}},d,!1,function(t){e("GH9D")},"data-v-63acb740",null).exports,p=e("cTzj"),f=e.n(p);o.a.component("Row",l.a),o.a.component("Col",m.a),o.a.component("FooterBar",h),o.a.use(f.a,{preLoad:1,error:"http://cdn.uehtml.com/201402/1392662591495_1140x0.gif",loading:"",attempt:2,listenEvents:["scroll","mousewheel"]}),o.a.config.productionTip=!1,new o.a({el:"#app",router:s,components:{App:a},template:"<App/>"})},NTNT:function(t,n){},Tbgz:function(t,n,e){"use strict";var o=e("bOdI"),i=e.n(o),r=e("9Xvl"),a={name:"Row",props:{type:{validator:function(t){return Object(r.i)(t,["flex"])}},align:{validator:function(t){return Object(r.i)(t,["top","middle","bottom"])}},justify:{validator:function(t){return Object(r.i)(t,["start","end","center","space-around","space-between"])}},gutter:{type:Number,default:0},className:String},computed:{classes:function(){var t;return[(t={},i()(t,"ivu-row",!this.type),i()(t,"ivu-row-"+this.type,!!this.type),i()(t,"ivu-row-"+this.type+"-"+this.align,!!this.align),i()(t,"ivu-row-"+this.type+"-"+this.justify,!!this.justify),i()(t,""+this.className,!!this.className),t)]},styles:function(){var t={};return 0!==this.gutter&&(t={marginLeft:this.gutter/-2+"px",marginRight:this.gutter/-2+"px"}),t}},methods:{updateGutter:function(t){var n=Object(r.c)(this,"iCol"),e=Object(r.b)(n,"iCol",!1);e.length&&e.forEach(function(n){0!==t&&(n.gutter=t)})}},watch:{gutter:function(t){this.updateGutter(t)}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},staticRenderFns:[]},u=e("VU/8")(a,c,!1,null,null,null);n.a=u.exports},YRzF:function(t,n,e){"use strict";var o=e("fZjL"),i=e.n(o),r=e("pFYg"),a=e.n(r),c=e("bOdI"),u=e.n(c),s=e("9Xvl"),l={name:"iCol",props:{span:[Number,String],order:[Number,String],offset:[Number,String],push:[Number,String],pull:[Number,String],className:String,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object]},data:function(){return{gutter:0}},computed:{classes:function(){var t,n=this,e=["ivu-col",(t={},u()(t,"ivu-col-span-"+this.span,this.span),u()(t,"ivu-col-order-"+this.order,this.order),u()(t,"ivu-col-offset-"+this.offset,this.offset),u()(t,"ivu-col-push-"+this.push,this.push),u()(t,"ivu-col-pull-"+this.pull,this.pull),u()(t,""+this.className,!!this.className),t)];return["xs","sm","md","lg"].forEach(function(t){if("number"==typeof n[t])e.push("ivu-col-span-"+t+"-"+n[t]);else if("object"===a()(n[t])){var o=n[t];i()(o).forEach(function(n){e.push("span"!==n?"ivu-col-"+t+"-"+n+"-"+o[n]:"ivu-col-span-"+t+"-"+o[n])})}}),e},styles:function(){var t={};return 0!==this.gutter&&(t={paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}),t}},methods:{updateGutter:function(){var t=Object(s.d)(this,"Row");t&&t.updateGutter(t.gutter)}},mounted:function(){this.updateGutter()},beforeDestroy:function(){this.updateGutter()}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes,style:this.styles},[this._t("default")],2)},staticRenderFns:[]},d=e("VU/8")(l,m,!1,null,null,null);n.a=d.exports},hRlp:function(t,n,e){"use strict";var o=e("bOdI"),i=e.n(o),r=e("9Xvl"),a=e("TCv/"),c={props:{height:{type:Number,default:400},bottom:{type:Number,default:30},right:{type:Number,default:30},duration:{type:Number,default:1e3}},data:function(){return{backTop:!1}},mounted:function(){Object(a.b)(window,"scroll",this.handleScroll),Object(a.b)(window,"resize",this.handleScroll)},beforeDestroy:function(){Object(a.a)(window,"scroll",this.handleScroll),Object(a.a)(window,"resize",this.handleScroll)},computed:{classes:function(){return["ivu-back-top",i()({},"ivu-back-top-show",this.backTop)]},styles:function(){return{bottom:this.bottom+"px",right:this.right+"px"}},innerClasses:function(){return"ivu-back-top-inner"}},methods:{handleScroll:function(){this.backTop=window.pageYOffset>=this.height},back:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;Object(r.k)(window,t,0,this.duration),this.$emit("on-click")}}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{class:this.classes,style:this.styles,on:{click:this.back}},[this._t("default",[n("div",{class:this.innerClasses},[n("i",{staticClass:"ivu-icon ivu-icon-chevron-up"})])])],2)},staticRenderFns:[]},s=e("VU/8")(c,u,!1,null,null,null);n.a=s.exports},kf6B:function(t,n){!function(t,n){var e=t.documentElement,o=navigator.userAgent.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/)?Math.min(n.devicePixelRatio,3):1,i=(o=window.top===window.self?o:1,1/(o=1)),r="orientationchange"in window?"orientationchange":"resize";e.dataset.dpr=o;var a=t.createElement("meta");a.name="viewport",a.content="initial-scale="+i+",minimum-scale="+i,e.firstElementChild.appendChild(a);var c=function(){var t=e.clientWidth;t/o>750&&(t=750*o),e.style.fontSize=t/650*50+"px"};c(),t.addEventListener&&n.addEventListener(r,c,!1)}(document,window)},"tb/R":function(t,n){}},["NHnr"]);