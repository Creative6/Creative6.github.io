webpackJsonp([1],{"0Hwi":function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("d1K2")}function s(t){i("l17X")}function a(t){i("oXAX")}function o(t){i("0Hwi")}function c(t){i("SRLg")}function l(t){i("NpHw")}Object.defineProperty(e,"__esModule",{value:!0});var r=i("TWX9"),u={name:"app"},d=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},v=[],f={render:d,staticRenderFns:v},m=f,p=i("/Xao"),_=n,h=p(u,m,!1,_,null,null),g=h.exports,w=i("zO6J"),C={name:"name",data:function(){return{scrolled:!1}},methods:{handleScroll:function(){this.scrolled=window.scrollY>0}},mounted:function(){window.addEventListener("scroll",this.handleScroll),"/"===this.$route.path&&(console.log("path=/"),this.$router.push("/Home"))}},b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"id"}},[i("div",{staticClass:"top",class:t.scrolled||"/Article"===t.$route.path?"top2":""},[i("div",{staticClass:"topcontent"},[t._m(0,!1,!1),t._v(" "),i("div",{staticClass:"topcontentfucbtnbox"},[i("div",{staticClass:"fucbtn",on:{click:function(e){t.$router.push("/Home")}}},[i("i",{staticClass:"iconfont icon-weibiaoti1"}),t._v(" 首页\n        ")]),t._v(" "),t._m(1,!1,!1)])])]),t._v(" "),i("div",[i("router-view")],1)])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topcontenttitle"},[i("i",{staticClass:"iconfont icon-siglyphleaf",staticStyle:{"font-size":"30px"}}),t._v(" Creative6")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fucbtn"},[i("i",{staticClass:"iconfont icon-suoyoushangpin2"}),t._v(" 归档\n        ")])}],y={render:b,staticRenderFns:x},S=y,k=i("/Xao"),N=s,$=k(C,S,!1,N,"data-v-7c73ace6",null),A=$.exports,E=i("4YfN"),I=i.n(E),X=i("9rMa"),H=i("ttMC"),R=i.n(H),z=void 0,F={name:"name",computed:I()({},Object(X.c)("main",{newsinfo:function(t){return t.newsinfo}})),created:function(){this.getnews();try{this.userinfo=JSON.parse(this.$cookie.get("userinfo"))}catch(t){console.log("UserInfo Error!"),console.log(t)}},data:function(){for(var t=[],e=0;e<20;e++)t.push({name:"测试"+e,num:e+1});return{p:void 0,userinfo:void 0,classify:t,editflg:!1,editorContent:"",title:""}},methods:I()({addNew:function(){var t=this;this.call("/savenews",{title:this.title,content:this.editorContent,uid:localStorage.getItem("uid")},function(e){t.getnews()})}},Object(X.b)({getnews:"main/getnews",setNewsItem:"main/setNewsItem"}),{_setNewsItem:function(t){this.setNewsItem(t),this.$router.push("/Article")},gotogithub:function(t){window.open(t)},_login:function(){window.location.href="https://github.com/login/oauth/authorize?client_id=5264e5de73487b1b7a35&redirect_uri=http://101.132.128.112:4000/github"},gotoNewsInfo:function(t){localStorage.setItem("nid",t),this.$router.push("/Article")},exit:function(){this.$cookie.delete("userinfo"),window.location.reload()}}),mounted:function(){var t=this;z=new R.a("#editorElem"),z.customConfig.uploadImgServer="http://101.132.128.112:4000/qwe?uid="+localStorage.getItem("uid"),z.customConfig.menus=["head","strikeThrough","quote","emoticon","table","image","code"],z.customConfig.onchange=function(e){t.editorContent=e},z.create()}},O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.editflg,expression:"editflg"}],staticClass:"back"},[i("div",{staticClass:"editorcontent",staticStyle:{padding:"10px",width:"700px"}},[i("div",{staticClass:"closebtn",on:{click:function(e){t.editflg=!1}}},[t._v("×")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"titleinput",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),i("div",{attrs:{id:"editorElem"}}),t._v(" "),i("div",{staticClass:"btn",staticStyle:{float:"right"},on:{click:function(e){t.addNew()}}},[t._v("保存")])])])]),t._v(" "),t._m(0,!1,!1),t._v(" "),i("div",{staticStyle:{width:"1000px",margin:"20px auto"}},[i("div",{staticStyle:{width:"700px",float:"left"}},t._l(t.newsinfo,function(e,n){return i("div",{key:n,staticClass:"content"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:e.avatar_url,alt:"",title:e.html_url},on:{click:function(i){t.gotogithub(e.html_url)}}})]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"title",on:{click:function(i){t.gotoNewsInfo(e.nid)}}},[t._v(t._s(e.title?e.title:"未命名标题"))]),t._v(" "),i("div",{staticClass:"infoma"},[t._v(t._s(e.updatetime)+" ✦ "+t._s(e.name)+" ✦ "+t._s(e.email))])])])})),t._v(" "),i("div",{staticClass:"bodyright"},[i("div",{staticClass:"personinfo"},[t.userinfo?i("div",[i("div",{staticClass:"plist1"},[i("img",{attrs:{src:t.userinfo.avatar_url,title:t.userinfo.html_url},on:{click:function(e){t.gotogithub(t.userinfo.html_url)}}}),t._v(" "),i("div",{staticStyle:{"padding-top":"10px"}},[t._v(t._s(t.userinfo.name))]),t._v(" "),i("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.userinfo.email))]),t._v(" "),i("div",{staticClass:"bio"},[t._v(t._s(t.userinfo.bio))])]),t._v(" "),t._m(1,!1,!1),t._v(" "),i("div",{staticClass:"plist2",on:{click:t.exit}},[i("i",{staticClass:"iconfont icon-exit"}),t._v(" "),i("div",[t._v("Exit")])])]):i("div",[i("div",{staticClass:"plist2",on:{click:function(e){t._login()}}},[i("i",{staticClass:"iconfont icon-github",staticStyle:{"font-size":"20px"}}),t._v(" "),i("div",[t._v("使用github登录")])])])]),t._v(" "),i("div",{staticClass:"tags",on:{click:function(e){t.editflg=!0}}},t._l(t.classify,function(e,n){return i("div",{key:n,staticClass:"tag"},[i("i",{staticClass:"iconfont icon-attachment"}),t._v(" "+t._s(e.name)+"\n          "),i("div",{staticClass:"num"},[t._v(t._s(e.num))])])}))])])],1)},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"titlec"},[i("div",{staticClass:"bigtitlec"},[i("div",[t._v("Golden Sun - Aqua Rock")]),t._v(" "),i("div",[t._v("The Lost Age")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"plist2"},[i("i",{staticClass:"iconfont icon-edit"}),t._v(" "),i("div",[t._v("Add New")])])}],L={render:O,staticRenderFns:T},q=L,M=i("/Xao"),j=a,P=M(F,q,!1,j,"data-v-a2b0f818",null),D=P.exports,J={name:"name",data:function(){for(var t=[],e=0;e<26;e++)t.push({small:"http://101.132.128.112:8088/img/bg"+(e+1)+"s.png",big:"http://101.132.128.112:8088/img/bg"+(e+1)+".png"});return{p:t,nowsrc:"",flg:!1}},methods:{select:function(t){this.flg=!0,this.nowsrc=t.big},load:function(t){console.log(t)}}},K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.p,function(e,n){return i("div",{staticClass:"b",on:{click:function(i){t.select(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.small,expression:"item.small"}],staticClass:"bimg",attrs:{alt:""}})])}),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.flg?i("div",{staticClass:"back",on:{click:function(e){t.flg=!1}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.nowsrc,expression:"nowsrc"}],attrs:{alt:""}})]):t._e()])],2)},Y=[],G={render:K,staticRenderFns:Y},U=G,W=i("/Xao"),B=o,Q=W(J,U,!1,B,"data-v-cf054d3a",null),V=Q.exports,Z={name:"name"},tt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"id"}},[t._v("\n  NO DATA！\n")])},et=[],it={render:tt,staticRenderFns:et},nt=it,st=i("/Xao"),at=c,ot=st(Z,nt,!1,at,"data-v-b46a64aa",null),ct=ot.exports,lt={name:"name",data:function(){return{item:[]}},mounted:function(){var t=this;this.call("/getnewsinfo",{nid:localStorage.getItem("nid")},function(e){e&&(t.item=e[0])})}},rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"1000px",margin:"0 auto","padding-top":"80px"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:t.item.avatar_url,alt:"",title:t.item.html_url},on:{click:function(e){t.gotogithub(t.item.html_url)}}})]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),i("div",{staticClass:"infoma"},[t._v(t._s(t.item.updatetime)+" ✦ "+t._s(t.item.name)+" ✦ "+t._s(t.item.email))]),t._v(" "),i("div",{staticClass:"con",domProps:{innerHTML:t._s(t.item.content)}})])])])},ut=[],dt={render:rt,staticRenderFns:ut},vt=dt,ft=i("/Xao"),mt=l,pt=ft(lt,vt,!1,mt,"data-v-4eee513d",null),_t=pt.exports;r.a.use(w.a);var ht=new w.a({routes:[{path:"/",name:"Main",component:A,children:[{path:"/Home",name:"Home",component:D},{path:"/Draw",name:"Draw",component:V},{path:"/Setting",name:"Setting",component:ct},{path:"/Article",name:"Article",component:_t}]}]}),gt=i("201h"),wt=i.n(gt),Ct=i("Klf7"),bt=i.n(Ct);r.a.use(X.a);var xt={namespaced:!0,state:{newsinfo:[],newsitem:[]},mutations:{getnews:function(t,e){r.a.prototype.call("/getnews",{},function(e){console.log(e),t.newsinfo=e})},setNewsItem:function(t,e){t.newsitem=e}}},yt=i("tra3"),St=i.n(yt);i("nARF");r.a.config.productionTip=!1,r.a.use(X.a),r.a.use(wt.a,{preLoad:1.3,error:"/static/error.svg",loading:"/static/loading.svg",attempt:1}),r.a.use(bt.a);var kt=new X.a.Store({modules:{main:xt}});r.a.prototype.call=function(t,e,i){St.a.ajax({url:"http://101.132.128.112:4000"+t,data:e,type:"POST",beforeSend:function(){St()("body").append('<div class="qwe" style="z-index:999;position:fixed;width:100vw;height:100vh;background:rgba(0,0,0,0.4);left:0px;top:0px;"><img style="width:200px;height:200px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);" src="/static/Ripple.svg"/></div>')},success:function(t){St()(".qwe").remove(),i(t)},timeout:3e4})},new r.a({el:"#app",router:ht,store:kt,template:"<App/>",components:{App:g}})},NpHw:function(t,e){},SRLg:function(t,e){},d1K2:function(t,e){},l17X:function(t,e){},oXAX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c233099d54597b6fda4c.js.map