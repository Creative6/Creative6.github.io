webpackJsonp([1],{"0Hwi":function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("waFj")}function s(t){i("Taqn")}function a(t){i("y3B+")}function o(t){i("0Hwi")}function c(t){i("SRLg")}function l(t){i("NpHw")}Object.defineProperty(e,"__esModule",{value:!0});var r=i("TWX9"),u={name:"app"},d=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},v=[],f={render:d,staticRenderFns:v},m=f,p=i("/Xao"),h=n,_=p(u,m,!1,h,null,null),g=_.exports,w=i("zO6J"),b={name:"name",data:function(){return{scrolled:!1}},methods:{handleScroll:function(){this.scrolled=window.scrollY>0}},mounted:function(){window.addEventListener("scroll",this.handleScroll),"/"===this.$route.path&&(console.log("path=/"),this.$router.push("/Home"))}},C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"id"}},[i("div",{staticClass:"top",class:t.scrolled||"/Article"===t.$route.path?"top2":""},[i("div",{staticClass:"topcontent"},[i("div",{staticClass:"topcontenttitle"},[t._v("Creative6")]),t._v(" "),i("div",{staticClass:"topcontentfucbtnbox"},[i("div",{staticClass:"fucbtn",on:{click:function(e){t.$router.push("/Home")}}},[t._v("首页\n        ")]),t._v(" "),i("div",{staticClass:"fucbtn"},[t._v("归档\n        ")])])])]),t._v(" "),i("div",[i("router-view")],1)])},x=[],y={render:C,staticRenderFns:x},S=y,N=i("/Xao"),k=s,$=N(b,S,!1,k,"data-v-74d68f08",null),A=$.exports,H=i("4YfN"),E=i.n(H),F=i("9rMa"),I={name:"name",computed:E()({},Object(F.c)("main",{newsinfo:function(t){return t.newsinfo}})),created:function(){this.getnews();try{this.userinfo=JSON.parse(this.$cookie.get("userinfo"))}catch(t){console.log("UserInfo Error!"),console.log(t)}},data:function(){return{p:void 0,userinfo:void 0}},methods:E()({},Object(F.b)({getnews:"main/getnews",setNewsItem:"main/setNewsItem"}),{_setNewsItem:function(t){this.setNewsItem(t),this.$router.push("/Article")},gotogithub:function(t){window.open(t)},_login:function(){window.location.href="https://github.com/login/oauth/authorize?client_id=5264e5de73487b1b7a35&redirect_uri=http://101.132.128.112:4000/github"},gotoNewsInfo:function(t){localStorage.setItem("nid",t),this.$router.push("/Article")},exit:function(){this.$cookie.delete("userinfo"),window.location.reload()}}),mounted:function(){new Quill("#editor",{theme:"snow"})}},R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0,!1,!1),t._v(" "),i("div",{staticStyle:{width:"1000px",margin:"20px auto"}},[i("div",{staticStyle:{width:"700px",float:"left"}},t._l(t.newsinfo,function(e,n){return i("div",{key:n,staticClass:"content"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:e.avatar_url,alt:"",title:e.html_url},on:{click:function(i){t.gotogithub(e.html_url)}}})]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"title",on:{click:function(i){t.gotoNewsInfo(e.nid)}}},[t._v(t._s(e.title?e.title:"未命名标题"))]),t._v(" "),i("div",{staticClass:"infoma"},[t._v(t._s(e.updatetime)+" ✦ "+t._s(e.name)+" ✦ "+t._s(e.email))])])])})),t._v(" "),i("div",{staticClass:"bodyright"},[i("div",{staticClass:"personinfo"},[t.userinfo?i("div",[i("div",{staticClass:"plist1"},[i("img",{attrs:{src:t.userinfo.avatar_url,title:t.userinfo.html_url},on:{click:function(e){t.gotogithub(t.userinfo.html_url)}}}),t._v(" "),i("div",{staticStyle:{"padding-top":"10px"}},[t._v(t._s(t.userinfo.name))]),t._v(" "),i("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.userinfo.email))]),t._v(" "),i("div",{staticClass:"bio"},[t._v(t._s(t.userinfo.bio))])]),t._v(" "),i("div",{staticClass:"plist2",on:{click:t.exit}},[i("i",{staticClass:"iconfont icon-exit"}),t._v(" "),i("div",[t._v("Exit")])])]):i("div",[i("div",{staticClass:"plist2",on:{click:function(e){t._login()}}},[i("i",{staticClass:"iconfont icon-github",staticStyle:{"font-size":"20px"}}),t._v(" "),i("div",[t._v("使用github登录")])])])])])])])},z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titlec"},[i("div",{staticClass:"bigtitlec"},[i("div",[t._v("Flower✦雨之岩")]),t._v(" "),i("div",[t._v("The Lost Age")])])])}],T={render:R,staticRenderFns:z},O=T,X=i("/Xao"),j=a,L=X(I,O,!1,j,"data-v-26c2edba",null),q=L.exports,M={name:"name",data:function(){for(var t=[],e=0;e<26;e++)t.push({small:"http://101.132.128.112:8088/img/bg"+(e+1)+"s.png",big:"http://101.132.128.112:8088/img/bg"+(e+1)+".png"});return{p:t,nowsrc:"",flg:!1}},methods:{select:function(t){this.flg=!0,this.nowsrc=t.big},load:function(t){console.log(t)}}},D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.p,function(e,n){return i("div",{staticClass:"b",on:{click:function(i){t.select(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.small,expression:"item.small"}],staticClass:"bimg",attrs:{alt:""}})])}),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.flg?i("div",{staticClass:"back",on:{click:function(e){t.flg=!1}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.nowsrc,expression:"nowsrc"}],attrs:{alt:""}})]):t._e()])],2)},J=[],P={render:D,staticRenderFns:J},B=P,Y=i("/Xao"),K=o,Q=Y(M,B,!1,K,"data-v-cf054d3a",null),U=Q.exports,W={name:"name"},G=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"id"}},[t._v("\n  NO DATA！\n")])},V=[],Z={render:G,staticRenderFns:V},tt=Z,et=i("/Xao"),it=c,nt=et(W,tt,!1,it,"data-v-b46a64aa",null),st=nt.exports,at={name:"name",data:function(){return{item:[]}},mounted:function(){var t=this;this.call("/getnewsinfo",{nid:localStorage.getItem("nid")},function(e){e&&(t.item=e[0])})}},ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"1000px",margin:"0 auto","padding-top":"80px"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:t.item.avatar_url,alt:"",title:t.item.html_url},on:{click:function(e){t.gotogithub(t.item.html_url)}}})]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),i("div",{staticClass:"infoma"},[t._v(t._s(t.item.updatetime)+" ✦ "+t._s(t.item.name)+" ✦ "+t._s(t.item.email))]),t._v(" "),i("div",{staticClass:"con",domProps:{innerHTML:t._s(t.item.content)}})])])])},ct=[],lt={render:ot,staticRenderFns:ct},rt=lt,ut=i("/Xao"),dt=l,vt=ut(at,rt,!1,dt,"data-v-4eee513d",null),ft=vt.exports;r.a.use(w.a);var mt=new w.a({routes:[{path:"/",name:"Main",component:A,children:[{path:"/Home",name:"Home",component:q},{path:"/Draw",name:"Draw",component:U},{path:"/Setting",name:"Setting",component:st},{path:"/Article",name:"Article",component:ft}]}]}),pt=i("201h"),ht=i.n(pt),_t=i("Klf7"),gt=i.n(_t);r.a.use(F.a);var wt={namespaced:!0,state:{newsinfo:[],newsitem:[]},mutations:{getnews:function(t,e){r.a.prototype.call("/getnews",{},function(e){console.log(e),t.newsinfo=e})},setNewsItem:function(t,e){t.newsitem=e}}},bt=i("tra3"),Ct=i.n(bt);i("nARF");r.a.config.productionTip=!1,r.a.use(F.a),r.a.use(ht.a,{preLoad:1.3,error:"/static/error.svg",loading:"/static/loading.svg",attempt:1}),r.a.use(gt.a);var xt=new F.a.Store({modules:{main:wt}});r.a.prototype.call=function(t,e,i){Ct.a.ajax({url:"http://101.132.128.112:4000"+t,data:e,type:"POST",beforeSend:function(){Ct()("body").append('<div class="qwe" style="z-index:999;position:fixed;width:100vw;height:100vh;background:rgba(0,0,0,0.4);left:0px;top:0px;"><img style="width:200px;height:200px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);" src="/static/Ripple.svg"/></div>')},success:function(t){Ct()(".qwe").remove(),i(t)},timeout:3e4})},new r.a({el:"#app",router:mt,store:xt,template:"<App/>",components:{App:g}})},NpHw:function(t,e){},SRLg:function(t,e){},Taqn:function(t,e){},waFj:function(t,e){},"y3B+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5bd8d2e25cdd9d8d9c4d.js.map