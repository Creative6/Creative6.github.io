webpackJsonp([1],{"0Hwi":function(t,i){},"A+mX":function(t,i){},NHnr:function(t,i,e){"use strict";function n(t){e("d1K2")}function s(t){e("l17X")}function a(t){e("A+mX")}function o(t){e("0Hwi")}function c(t){e("SRLg")}function l(t){e("NpHw")}Object.defineProperty(i,"__esModule",{value:!0});var r=e("TWX9"),u={name:"app"},d=function(){var t=this,i=t.$createElement;return(t._self._c||i)("router-view")},v=[],f={render:d,staticRenderFns:v},m=f,p=e("/Xao"),h=n,_=p(u,m,!1,h,null,null),g=_.exports,w=e("zO6J"),C={name:"name",data:function(){return{scrolled:!1}},methods:{handleScroll:function(){this.scrolled=window.scrollY>0}},mounted:function(){window.addEventListener("scroll",this.handleScroll),"/"===this.$route.path&&(console.log("path=/"),this.$router.push("/Home"))}},b=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"id"}},[e("div",{staticClass:"top",class:t.scrolled||"/Article"===t.$route.path?"top2":""},[e("div",{staticClass:"topcontent"},[t._m(0,!1,!1),t._v(" "),e("div",{staticClass:"topcontentfucbtnbox"},[e("div",{staticClass:"fucbtn",on:{click:function(i){t.$router.push("/Home")}}},[e("i",{staticClass:"iconfont icon-weibiaoti1"}),t._v(" 首页\n        ")]),t._v(" "),t._m(1,!1,!1)])])]),t._v(" "),e("div",[e("router-view")],1)])},x=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"topcontenttitle"},[e("i",{staticClass:"iconfont icon-siglyphleaf",staticStyle:{"font-size":"30px"}}),t._v(" Creative6")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"fucbtn"},[e("i",{staticClass:"iconfont icon-suoyoushangpin2"}),t._v(" 归档\n        ")])}],y={render:b,staticRenderFns:x},S=y,k=e("/Xao"),N=s,$=k(C,S,!1,N,"data-v-7c73ace6",null),A=$.exports,E=e("4YfN"),H=e.n(E),I=e("9rMa"),R=e("ttMC"),X=e.n(R),z=void 0,F={name:"name",computed:H()({},Object(I.c)("main",{newsinfo:function(t){return t.newsinfo}})),created:function(){this.getnews();try{this.userinfo=JSON.parse(this.$cookie.get("userinfo"))}catch(t){console.log("UserInfo Error!"),console.log(t)}},data:function(){for(var t=[],i=0;i<20;i++)t.push({name:"测试"+i,num:i+1});return{p:void 0,userinfo:void 0,classify:t,editflg:!1,editorContent:"",title:""}},methods:H()({addNew:function(){var t=this;this.call("/savenews",{title:this.title,content:this.editorContent,uid:this.userinfo.id},function(i){t.getnews(),t.editflg=!1,t.title="",t.editorContent="",z.txt.html("")})}},Object(I.b)({getnews:"main/getnews",setNewsItem:"main/setNewsItem"}),{_setNewsItem:function(t){this.setNewsItem(t),this.$router.push("/Article")},gotogithub:function(t){window.open(t)},_login:function(){window.location.href="https://github.com/login/oauth/authorize?client_id=5264e5de73487b1b7a35&redirect_uri=http://101.132.128.112:4000/github"},gotoNewsInfo:function(t){localStorage.setItem("nid",t),this.$router.push("/Article")},exit:function(){this.$cookie.delete("userinfo"),window.location.reload()}}),mounted:function(){var t=this;z=new X.a("#editorElem"),z.customConfig.uploadImgServer="http://101.132.128.112:4000/qwe?uid="+this.userinfo.id,z.customConfig.menus=["head","strikeThrough","list","justify","quote","emoticon","table","image","code"],z.customConfig.onchange=function(i){t.editorContent=i},z.create()}},O=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.editflg,expression:"editflg"}],staticClass:"back"},[e("div",{staticClass:"editorcontent",staticStyle:{padding:"10px",width:"700px"}},[e("div",{staticClass:"closebtn",on:{click:function(i){t.editflg=!1}}},[t._v("×")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"titleinput",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.title},on:{input:function(i){i.target.composing||(t.title=i.target.value)}}}),t._v(" "),e("div",{attrs:{id:"editorElem"}}),t._v(" "),e("div",{staticClass:"btn",staticStyle:{float:"right"},on:{click:function(i){t.addNew()}}},[t._v("保存")])])])]),t._v(" "),t._m(0,!1,!1),t._v(" "),e("div",{staticStyle:{width:"1000px",margin:"20px auto"}},[e("div",{staticStyle:{width:"700px",float:"left"}},t._l(t.newsinfo,function(i,n){return e("div",{key:n,staticClass:"content"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:i.avatar_url,alt:"",title:i.html_url},on:{click:function(e){t.gotogithub(i.html_url)}}})]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"title",on:{click:function(e){t.gotoNewsInfo(i.nid)}}},[t._v(t._s(i.title?i.title:"未命名标题"))]),t._v(" "),e("div",{staticClass:"infoma"},[t._v(t._s(i.updatetime)+" ✦ "+t._s(i.name)+" ✦ "+t._s(i.email))])])])})),t._v(" "),e("div",{staticClass:"bodyright"},[e("div",{staticClass:"personinfo"},[t.userinfo?e("div",[e("div",{staticClass:"plist1"},[e("img",{attrs:{src:t.userinfo.avatar_url,title:t.userinfo.html_url},on:{click:function(i){t.gotogithub(t.userinfo.html_url)}}}),t._v(" "),e("div",{staticStyle:{"padding-top":"10px"}},[t._v(t._s(t.userinfo.name))]),t._v(" "),e("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.userinfo.email))]),t._v(" "),e("div",{staticClass:"bio"},[t._v(t._s(t.userinfo.bio))])]),t._v(" "),e("div",{staticClass:"plist2",on:{click:function(i){t.editflg=!0}}},[e("i",{staticClass:"iconfont icon-edit"}),t._v(" "),e("div",[t._v("Add New")])]),t._v(" "),e("div",{staticClass:"plist2",on:{click:t.exit}},[e("i",{staticClass:"iconfont icon-exit"}),t._v(" "),e("div",[t._v("Exit")])])]):e("div",[e("div",{staticClass:"plist2",on:{click:function(i){t._login()}}},[e("i",{staticClass:"iconfont icon-github",staticStyle:{"font-size":"20px"}}),t._v(" "),e("div",[t._v("使用github登录")])])])]),t._v(" "),e("div",{staticClass:"tags"},t._l(t.classify,function(i,n){return e("div",{key:n,staticClass:"tag"},[e("i",{staticClass:"iconfont icon-attachment"}),t._v(" "+t._s(i.name)+"\n          "),e("div",{staticClass:"num"},[t._v(t._s(i.num))])])}))])])],1)},T=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"titlec"},[e("div",{staticClass:"bigtitlec"},[e("div",[t._v("Golden Sun - Aqua Rock")]),t._v(" "),e("div",[t._v("The Lost Age")])])])}],L={render:O,staticRenderFns:T},j=L,q=e("/Xao"),M=a,P=q(F,j,!1,M,"data-v-ea2a0152",null),D=P.exports,J={name:"name",data:function(){for(var t=[],i=0;i<26;i++)t.push({small:"http://101.132.128.112:8088/img/bg"+(i+1)+"s.png",big:"http://101.132.128.112:8088/img/bg"+(i+1)+".png"});return{p:t,nowsrc:"",flg:!1}},methods:{select:function(t){this.flg=!0,this.nowsrc=t.big},load:function(t){console.log(t)}}},K=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._l(t.p,function(i,n){return e("div",{staticClass:"b",on:{click:function(e){t.select(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.small,expression:"item.small"}],staticClass:"bimg",attrs:{alt:""}})])}),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.flg?e("div",{staticClass:"back",on:{click:function(i){t.flg=!1}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.nowsrc,expression:"nowsrc"}],attrs:{alt:""}})]):t._e()])],2)},Y=[],G={render:K,staticRenderFns:Y},U=G,W=e("/Xao"),B=o,Q=W(J,U,!1,B,"data-v-cf054d3a",null),V=Q.exports,Z={name:"name"},tt=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{attrs:{id:"id"}},[t._v("\n  NO DATA！\n")])},it=[],et={render:tt,staticRenderFns:it},nt=et,st=e("/Xao"),at=c,ot=st(Z,nt,!1,at,"data-v-b46a64aa",null),ct=ot.exports,lt={name:"name",data:function(){return{item:[]}},mounted:function(){var t=this;this.call("/getnewsinfo",{nid:localStorage.getItem("nid")},function(i){i&&(t.item=i[0])})}},rt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{width:"1000px",margin:"0 auto","padding-top":"80px"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.item.avatar_url,alt:"",title:t.item.html_url},on:{click:function(i){t.gotogithub(t.item.html_url)}}})]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),e("div",{staticClass:"infoma"},[t._v(t._s(t.item.updatetime)+" ✦ "+t._s(t.item.name)+" ✦ "+t._s(t.item.email))]),t._v(" "),e("div",{staticClass:"con",domProps:{innerHTML:t._s(t.item.content)}})])])])},ut=[],dt={render:rt,staticRenderFns:ut},vt=dt,ft=e("/Xao"),mt=l,pt=ft(lt,vt,!1,mt,"data-v-4eee513d",null),ht=pt.exports;r.a.use(w.a);var _t=new w.a({routes:[{path:"/",name:"Main",component:A,children:[{path:"/Home",name:"Home",component:D},{path:"/Draw",name:"Draw",component:V},{path:"/Setting",name:"Setting",component:ct},{path:"/Article",name:"Article",component:ht}]}]}),gt=e("201h"),wt=e.n(gt),Ct=e("Klf7"),bt=e.n(Ct);r.a.use(I.a);var xt={namespaced:!0,state:{newsinfo:[],newsitem:[]},mutations:{getnews:function(t,i){r.a.prototype.call("/getnews",{},function(i){console.log(i),t.newsinfo=i})},setNewsItem:function(t,i){t.newsitem=i}}},yt=e("tra3"),St=e.n(yt);e("nARF");r.a.config.productionTip=!1,r.a.use(I.a),r.a.use(wt.a,{preLoad:1.3,error:"/static/error.svg",loading:"/static/loading.svg",attempt:1}),r.a.use(bt.a);var kt=new I.a.Store({modules:{main:xt}});r.a.prototype.call=function(t,i,e){St.a.ajax({url:"http://101.132.128.112:4000"+t,data:i,type:"POST",beforeSend:function(){St()("body").append('<div class="qwe" style="z-index:999;position:fixed;width:100vw;height:100vh;background:rgba(0,0,0,0.4);left:0px;top:0px;"><img style="width:200px;height:200px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);" src="/static/Ripple.svg"/></div>')},success:function(t){St()(".qwe").remove(),e(t)},timeout:3e4})},new r.a({el:"#app",router:_t,store:kt,template:"<App/>",components:{App:g}})},NpHw:function(t,i){},SRLg:function(t,i){},d1K2:function(t,i){},l17X:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.ab5ccdcaa142b268254e.js.map