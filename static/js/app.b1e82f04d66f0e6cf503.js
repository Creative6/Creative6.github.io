webpackJsonp([1],{"00IG":function(t,i){},"Eu/9":function(t,i){},GRvV:function(t,i){},NHnr:function(t,i,n){"use strict";function e(t){n("GRvV")}function o(t){n("bkPj")}function s(t){n("gPhc")}function a(t){n("kQaF")}function c(t){n("Eu/9")}function l(t){n("QYTD")}function r(t){n("00IG")}Object.defineProperty(i,"__esModule",{value:!0});var u=n("7+uW"),d={name:"app"},h=function(){var t=this,i=t.$createElement;return(t._self._c||i)("router-view")},v=[],f={render:h,staticRenderFns:v},g=f,m=n("VU/8"),p=e,_=m(d,g,!1,p,null,null),w=_.exports,b=n("/ocq"),C=n("7t+N"),x=n.n(C),y={name:"name",data:function(){return{scrolled:!1}},methods:{handleScroll:function(){this.scrolled=window.scrollY>0},dingbu:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},dibu:function(){document.body.scrollTop=999999,document.documentElement.scrollTop=999999}},mounted:function(){window.addEventListener("scroll",this.handleScroll),"/"===this.$route.path&&(console.log("path=/"),this.$router.push("/Home"))}},q=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"id"}},[n("div",{staticClass:"top",class:t.scrolled||"/Article"===t.$route.path?"top2":""},[n("div",{staticClass:"topcontent"},[n("div",{staticClass:"topcontenttitle"},[t._v("\n        Creative6")]),t._v(" "),n("div",{staticClass:"topcontentfucbtnbox"},[n("div",{staticClass:"fucbtn",on:{click:function(i){t.$router.push("/Home")}}},[n("i",{staticClass:"iconfont icon-weibiaoti1"}),t._v(" 首页\n        ")]),t._v(" "),t._m(0)])])]),t._v(" "),n("div",[n("router-view")],1),t._v(" "),n("div",{staticClass:"dingbu"},[n("div",{on:{click:t.dingbu}},[t._v("<")]),t._v(" "),n("div",{on:{click:t.dibu}},[t._v(">")])]),t._v(" "),t._m(1)])},k=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"fucbtn"},[n("i",{staticClass:"iconfont icon-suoyoushangpin2"}),t._v(" 归档\n        ")])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticStyle:{float:"left","text-align":"center",width:"100%","margin-top":"20px","font-size":"13px","border-top":"1px dashed #ccc",padding:"14px",color:"#777"}},[n("div",[t._v("Copyright © 2017-2018 Flower-Creative6")]),t._v(" "),n("div",{staticStyle:{"margin-top":"3px"}},[n("i",{staticClass:"iconfont icon-github"}),t._v("https://github.com/Creative6")])])}],$={render:q,staticRenderFns:k},S=$,E=n("VU/8"),N=o,T=E(y,S,!1,N,"data-v-0d649ada",null),z=T.exports,H=n("NYxO"),F=n("sYY+"),I=n.n(F),R=void 0,A={name:"name",created:function(){try{this.userinfo=JSON.parse(this.$cookie.get("userinfo"))}catch(t){console.log("UserInfo Error!"),console.log(t)}},data:function(){for(var t=[],i=0;i<20;i++)t.push({name:"测试"+i,num:i+1});return{p:void 0,userinfo:void 0,classify:t,editflg:!1,editorContent:"",title:"",newsinfo:[],totalnum:0,prebtnflg:!1,nextbtnflg:!1,nowpage:0,totalpage:0}},watch:{$route:function(t,i){this.getnews(),this.getnewsnum(),this.setpagebtn(),document.body.scrollTop=0,document.documentElement.scrollTop=0},totalnum:function(){this.setpagebtn()}},methods:{getnews:function(){var t=this;this.call("/getnews",{page:this.$route.query.page?1*this.$route.query.page:1},function(i){for(var n=0;n<i.length;n++){var e=i[n].yimg;null!=e&&(i[n].yimg=e.replace("<img",'<img style="max-width:200px;max-height:200px;"'))}t.newsinfo=i,console.log(t.newsinfo)})},prepage:function(){if(this.prebtnflg){console.log("pre",this.$route.path,this.$route);var t=0;this.$route.query.page&&(t=1*this.$route.query.page-1),t<=1?this.$router.push("/Home"):this.$router.push("/Home?page="+t)}},nextpage:function(){if(this.nextbtnflg){console.log("next",this.$route.path,this.$route);var t=2;this.$route.query.page&&(t=1*this.$route.query.page+1),this.$router.push("/Home?page="+t)}},showEditor:function(){R||(R=new I.a("#editorElem"),R.customConfig.uploadImgServer="http://101.132.128.112:4000/qwe?uid="+this.userinfo.id,R.customConfig.menus=["head","strikeThrough","list","link","justify","quote","emoticon","table","image","code"],R.create()),this.editflg=!0},addNew:function(){var t=this,i=R.txt.html().match(/<img.+?>/gi),n="";i&&i.length>0&&(n=i[0]);var e=R.txt.text().substring(0,100);console.log(n,e),this.call("/savenews",{title:this.title,content:R.txt.html(),uid:this.userinfo.id,yimg:n+"?imageView2/1/w/150/interlace/0/q/100",ycontent:e},function(i){t.getnews(),t.editflg=!1,t.title="",t.editorContent="",R.txt.html("")})},gotogithub:function(t){window.open(t)},_login:function(){window.location.href="https://github.com/login/oauth/authorize?client_id=5264e5de73487b1b7a35&redirect_uri=http://101.132.128.112:4000/github"},gotoNewsInfo:function(t){window.open("http://www.creative6.cn/#/Article?nid="+t)},exit:function(){this.$cookie.delete("userinfo"),window.location.reload()},getnewsnum:function(){var t=this;this.call("/getnewsnum",{},function(i){i&&(console.log("total",i),t.totalnum=1*i[0].num)})},setpagebtn:function(){var t=this.$route.query.page?1*this.$route.query.page:1;this.nowpage=t,this.totalpage=Math.ceil(this.totalnum/25),this.prebtnflg=t>1,this.totalnum/(25*t)>1?this.nextbtnflg=!0:this.nextbtnflg=!1}},mounted:function(){R=void 0,this.getnews(),this.getnewsnum()}},P=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.editflg,expression:"editflg"}],staticClass:"back"},[n("div",{staticClass:"editorcontent",staticStyle:{padding:"10px",width:"1000px"}},[n("div",{staticClass:"closebtn",on:{click:function(i){t.editflg=!1}}},[t._v("×")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"titleinput",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.title},on:{input:function(i){i.target.composing||(t.title=i.target.value)}}}),t._v(" "),n("div",{attrs:{id:"editorElem"}}),t._v(" "),n("div",{staticClass:"btn",staticStyle:{float:"right"},on:{click:function(i){t.addNew()}}},[t._v("保存")])])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticStyle:{width:"1000px",margin:"20px auto"}},[t.nowpage<=t.totalpage?n("div",{staticStyle:{width:"700px",float:"left","box-shadow":"0px 1px 10px #ccc"}},[t._l(t.newsinfo,function(i,e){return n("div",{key:e,staticClass:"content"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:i.avatar_url,alt:"",title:i.html_url},on:{click:function(n){t.gotogithub(i.html_url)}}})]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"title",on:{click:function(n){t.gotoNewsInfo(i.nid)}}},[t._v(t._s(i.title?i.title:"未命名标题"))]),t._v(" "),n("div",{staticClass:"infoma"},[t._v(t._s(i.updatetime)+" ✦ "+t._s(i.name)+" ✦ "+t._s(i.email?i.email:"暂无邮箱"))]),t._v(" "),n("div",{staticClass:"hfnum",attrs:{title:i.hfnum+"个回复"},on:{click:function(n){t.gotoNewsInfo(i.nid)}}},[n("i",{staticClass:"iconfont icon-comments"}),t._v(t._s(i.hfnum))]),t._v(" "),n("div",{staticClass:"ybox"},[n("div",{staticClass:"yimg",domProps:{innerHTML:t._s(i.yimg)}}),t._v(" "),n("div",{class:i.yimg?"ycontent":"ycontent2"},[t._v(t._s(i.ycontent?i.ycontent:"此人很懒，没有写下内容"))])])])])}),t._v(" "),n("div",{staticStyle:{width:"100%",position:"relative",overflow:"hidden",height:"50px",background:"#fff"}},[n("div",{staticClass:"pagebtn"},[n("div",{staticClass:"btn yuan",class:t.prebtnflg?"":"useless",on:{click:function(i){t.prepage()}}},[n("i",{staticClass:"iconfont icon-back"})]),t._v(" "),n("div",{staticClass:"pagenum"},[t._v(t._s(t.nowpage)+"/"+t._s(t.totalpage))]),t._v(" "),n("div",{staticClass:"btn yuan",class:t.nextbtnflg?"":"useless",on:{click:function(i){t.nextpage()}}},[n("i",{staticClass:"iconfont icon-more"})])])])],2):n("div",{staticStyle:{width:"700px",float:"left","text-align":"center"}},[n("i",{staticClass:"iconfont icon-zanwu",staticStyle:{"font-size":"50px"}}),t._v(" 没东西！！！")]),t._v(" "),n("div",{staticClass:"bodyright"},[n("div",{staticClass:"personinfo"},[t.userinfo?n("div",[n("div",{staticClass:"plist1"},[n("img",{attrs:{src:t.userinfo.avatar_url,title:t.userinfo.html_url},on:{click:function(i){t.gotogithub(t.userinfo.html_url)}}}),t._v(" "),n("div",{staticStyle:{"padding-top":"10px",width:"200px"}},[t._v(t._s(t.userinfo.name))]),t._v(" "),n("div",{staticStyle:{"font-size":"13px",width:"200px"}},[t._v(t._s("null"!=t.userinfo.email?t.userinfo.email:"暂无邮箱"))]),t._v(" "),n("div",{staticClass:"bio"},[t._v(t._s("null"!=t.userinfo.bio?t.userinfo.bio:"暂无个人简介"))])]),t._v(" "),n("div",{staticClass:"plist2",on:{click:function(i){t.showEditor()}}},[n("i",{staticClass:"iconfont icon-edit"}),t._v(" "),n("div",[t._v("发　帖")])]),t._v(" "),n("div",{staticClass:"plist2",on:{click:t.exit}},[n("i",{staticClass:"iconfont icon-exit"}),t._v(" "),n("div",[t._v("退　出")])])]):n("div",[n("div",{staticClass:"plist2",on:{click:function(i){t._login()}}},[n("i",{staticClass:"iconfont icon-github",staticStyle:{"font-size":"20px"}}),t._v(" "),n("div",[t._v("使用github登录")])])])]),t._v(" "),n("div",{staticClass:"tags"},[n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("https://github.com/Creative6/layout-spliter/blob/master/index.html")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" layout-spliter\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("http://www.creative6.cn/vechart-test.html")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" v-echart-test\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("http://echarts.baidu.com/")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" echarts\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("http://www.bootcdn.cn/")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" bootcdn\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("http://www.w3school.com.cn/")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" w3school\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("http://www.expressjs.com.cn/")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" expressjs\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("https://www.postgresql.org/")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" postgresql\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("https://rasdsky.github.io/HTML-Demo/")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" 陈浩demo\n        ")]),t._v(" "),n("div",{staticClass:"tag",on:{click:function(i){t.gotogithub("http://www.soogif.com/")}}},[n("i",{staticClass:"iconfont icon-attachment"}),t._v(" GIF编辑\n        ")])])])])],1)},V=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"titlec"},[n("div",{staticClass:"bigtitlec"},[n("div",[t._v("Golden Sun - Aqua Rock")]),t._v(" "),n("div",[t._v("失落的時代")])])])}],j={render:P,staticRenderFns:V},U=j,L=n("VU/8"),M=s,D=L(A,U,!1,M,"data-v-15817940",null),G=D.exports,O={name:"name",data:function(){for(var t=[],i=0;i<26;i++)t.push({small:"http://101.132.128.112:8088/img/bg"+(i+1)+"s.png",big:"http://101.132.128.112:8088/img/bg"+(i+1)+".png"});return{p:t,nowsrc:"",flg:!1}},methods:{select:function(t){this.flg=!0,this.nowsrc=t.big},load:function(t){console.log(t)}}},Y=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[t._l(t.p,function(i,e){return n("div",{staticClass:"b",on:{click:function(n){t.select(i)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.small,expression:"item.small"}],staticClass:"bimg",attrs:{alt:""}})])}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.flg?n("div",{staticClass:"back",on:{click:function(i){t.flg=!1}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.nowsrc,expression:"nowsrc"}],attrs:{alt:""}})]):t._e()])],2)},Q=[],J={render:Y,staticRenderFns:Q},B=J,K=n("VU/8"),W=a,X=K(O,B,!1,W,"data-v-16724ea3",null),Z=X.exports,tt={name:"name"},it=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{attrs:{id:"id"}},[t._v("\n  NO DATA！\n")])},nt=[],et={render:it,staticRenderFns:nt},ot=et,st=n("VU/8"),at=c,ct=st(tt,ot,!1,at,"data-v-01d04a4f",null),lt=ct.exports,rt=void 0,ut={name:"name",data:function(){return{item:[],userinfo:[],editorContent:"",hf:[],nid:0}},created:function(){try{this.userinfo=JSON.parse(this.$cookie.get("userinfo")),this.nid=this.$route.query.nid?this.$route.query.nid:0}catch(t){console.log("UserInfo Error!"),console.log(t)}},methods:{gotogithub:function(t){window.open(t)},savehf:function(){var t=this;""!=this.editorContent&&this.call("/savehf",{uid:this.userinfo.id,content:this.editorContent,nid:1*this.nid},function(i){i&&(t.editorContent="",rt.txt.html(""),t.gethf())})},gethf:function(){var t=this;this.call("/gethf",{nid:this.nid},function(i){i&&(console.log(i),t.hf=i)})}},mounted:function(){var t=this;this.call("/getnewsinfo",{nid:this.nid},function(i){i&&(t.item=i[0])}),this.gethf(),this.userinfo&&0!=this.nid&&(rt=new I.a("#editorElem"),rt.customConfig.uploadImgServer="http://101.132.128.112:4000/qwe?uid="+this.userinfo.id,rt.customConfig.menus=["emoticon","code"],rt.customConfig.onchange=function(i){t.editorContent=i},rt.create(),this.editflg=!0)}},dt=function(){var t=this,i=t.$createElement,n=t._self._c||i;return 0!=t.nid?n("div",{staticStyle:{width:"1000px",margin:"0 auto","padding-top":"80px"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"right"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:t.item.avatar_url,alt:"",title:t.item.html_url},on:{click:function(i){t.gotogithub(t.item.html_url)}}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.item.title?t.item.title:"未命名标题"))]),t._v(" "),n("div",{staticClass:"infoma"},[t._v(t._s(t.item.updatetime)+" ✦ "+t._s(t.item.name)+" ✦ "+t._s(t.item.email?t.item.email:"暂无邮箱"))]),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"con",domProps:{innerHTML:t._s(t.item.content)}})])]),t._v(" "),t.userinfo?n("div",{staticClass:"hfcontent"},[n("div",{attrs:{id:"editorElem"}}),t._v(" "),n("div",{staticClass:"btn",staticStyle:{float:"right"},on:{click:function(i){t.savehf()}}},[t._v("保存")])]):t._e(),t._v(" "),t.hf.length>0?n("div",{staticClass:"hfbox",staticStyle:{"margin-bottom":"50px"}},t._l(t.hf,function(i){return n("div",{staticClass:"hfboxcontent"},[n("div",{staticClass:"boxleft"},[n("img",{attrs:{src:i.avatar_url,alt:"",title:i.html_url},on:{click:function(n){t.gotogithub(i.html_url)}}})]),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"boxright",domProps:{innerHTML:t._s(i.content)}}),t._v(" "),n("div",{staticClass:"hftime"},[t._v(t._s(i.name)+"--"+t._s(i.updatetime))])])})):t._e()]):n("div",{staticStyle:{width:"1000px","text-align":"center",margin:"0px auto","margin-top":"150px"}},[n("i",{staticClass:"iconfont icon-zanwu",staticStyle:{"font-size":"50px"}}),t._v(" 没东西！！！")])},ht=[],vt={render:dt,staticRenderFns:ht},ft=vt,gt=n("VU/8"),mt=l,pt=gt(ut,ft,!1,mt,"data-v-b374e68c",null),_t=pt.exports;u.a.use(b.a);var wt=new b.a({routes:[{path:"/",name:"Main",component:z,children:[{path:"/Home",name:"Home",component:G},{path:"/Draw",name:"Draw",component:Z},{path:"/Setting",name:"Setting",component:lt},{path:"/Article",name:"Article",component:_t}]}]}),bt=n("cTzj"),Ct=n.n(bt),xt=n("K/Lq"),yt=n.n(xt),qt={name:"name"},kt=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{attrs:{id:"id"}},[t._v("\n    qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq\n")])},$t=[],St={render:kt,staticRenderFns:$t},Et=St,Nt=n("VU/8"),Tt=r,zt=Nt(qt,Et,!1,Tt,"data-v-43ff9d87",null);zt.exports;u.a.use(H.a);var Ht={namespaced:!0,state:{newsinfo:[],newsitem:[]},mutations:{getnews:function(t,i){u.a.prototype.call("/getnews",{},function(i){console.log(i),t.newsinfo=i})},setNewsItem:function(t,i){t.newsitem=i}}};n("162o");u.a.config.productionTip=!1,u.a.directive("highlight",function(t){t.querySelectorAll("pre code").forEach(function(t){hljs.highlightBlock(t)})}),u.a.use(H.a),u.a.use(Ct.a,{preLoad:1.3,error:"/static/error.svg",loading:"/static/loading.svg",attempt:1}),u.a.use(yt.a);var Ft=new H.a.Store({modules:{main:Ht}});u.a.prototype.call=function(t,i,n){x.a.ajax({url:"http://101.132.128.112:4000"+t,data:i,type:"POST",beforeSend:function(){x()("body").append('<div class="qwe" style="z-index:999;position:fixed;width:100vw;height:100vh;background:rgba(0,0,0,0.0);left:0px;top:0px;"><img style="width:200px;height:200px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);" src="/static/Ripple.svg"/></div>')},success:function(t){x()(".qwe").remove(),n(t)},timeout:3e4})},u.a.prototype.dialog=function(){x()("body").append('<div class="qwe" style="z-index:999;position:fixed;width:100vw;height:100vh;background:rgba(0,0,0,0.0);left:0px;top:0px;"><div style="width:200px;height:200px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;">qweqwe</div></div>')},new u.a({el:"#app",router:wt,store:Ft,template:"<App/>",components:{App:w}})},QYTD:function(t,i){},bkPj:function(t,i){},gPhc:function(t,i){},kQaF:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.b1e82f04d66f0e6cf503.js.map