webpackJsonp([1],{NHnr:function(t,i,e){"use strict";function n(t){e("RK2A")}function s(t){e("WRMB")}function o(t){e("pWHD")}function a(t){e("S+Vw")}function c(t){e("xPz+")}function l(t){e("scHh")}Object.defineProperty(i,"__esModule",{value:!0});var r=e("VCXJ"),u={name:"app"},d=function(){var t=this,i=t.$createElement;return(t._self._c||i)("router-view")},f=[],h={render:d,staticRenderFns:f},v=h,g=e("X4nt"),m=n,p=g(u,v,!1,m,null,null),_=p.exports,w=e("zO6J"),x={name:"name",data:function(){return{scrolled:!1}},methods:{handleScroll:function(){this.scrolled=window.scrollY>0}},mounted:function(){window.addEventListener("scroll",this.handleScroll),"/"===this.$route.path&&(console.log("path=/"),this.$router.push("/Home"))}},C=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"id"}},[e("div",{staticClass:"top",class:t.scrolled||"/Article"===t.$route.path?"top2":""},[e("div",{staticClass:"topcontent"},[t._m(0),t._v(" "),e("div",{staticClass:"topcontentfucbtnbox"},[e("div",{staticClass:"fucbtn",on:{click:function(i){t.$router.push("/Home")}}},[e("i",{staticClass:"iconfont icon-weibiaoti1"}),t._v(" 首页\n        ")]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",[e("router-view")],1),t._v(" "),t._m(2)])},b=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"topcontenttitle"},[e("i",{staticClass:"iconfont icon-siglyphleaf",staticStyle:{"font-size":"30px"}}),t._v(" Creative6")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"fucbtn"},[e("i",{staticClass:"iconfont icon-suoyoushangpin2"}),t._v(" 归档\n        ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{float:"left","text-align":"center",width:"100%","margin-top":"20px","font-size":"13px","border-top":"1px dashed #ccc",padding:"14px",color:"#777"}},[e("div",[t._v("Copyright © 2017-2018 Flower-Creative6")]),t._v(" "),e("div",{staticStyle:{"margin-top":"3px"}},[e("i",{staticClass:"iconfont icon-github"}),t._v("https://github.com/Creative6")])])}],y={render:C,staticRenderFns:b},$=y,S=e("X4nt"),k=s,E=S(x,$,!1,k,"data-v-374de754",null),z=E.exports,N=e("9rMa"),q=e("ttMC"),H=e.n(q),A=void 0,R={name:"name",created:function(){try{this.userinfo=JSON.parse(this.$cookie.get("userinfo"))}catch(t){console.log("UserInfo Error!"),console.log(t)}},data:function(){for(var t=[],i=0;i<20;i++)t.push({name:"测试"+i,num:i+1});return{p:void 0,userinfo:void 0,classify:t,editflg:!1,editorContent:"",title:"",newsinfo:[],totalnum:0,prebtnflg:!1,nextbtnflg:!1,nowpage:0,totalpage:0}},watch:{$route:function(t,i){this.getnews(),this.getnewsnum(),this.setpagebtn(),document.body.scrollTop=0,document.documentElement.scrollTop=0},totalnum:function(){this.setpagebtn()}},methods:{getnews:function(){var t=this;this.call("/getnews",{page:this.$route.query.page?1*this.$route.query.page:1},function(i){for(var e=0;e<i.length;e++){var n=i[e].yimg;null!=n&&(i[e].yimg=n.replace("<img",'<img style="max-width:200px;max-height:200px;"'))}t.newsinfo=i,console.log(t.newsinfo)})},prepage:function(){if(this.prebtnflg){console.log("pre",this.$route.path,this.$route);var t=0;this.$route.query.page&&(t=1*this.$route.query.page-1),t<=1?this.$router.push("/Home"):this.$router.push("/Home?page="+t)}},nextpage:function(){if(this.nextbtnflg){console.log("next",this.$route.path,this.$route);var t=2;this.$route.query.page&&(t=1*this.$route.query.page+1),this.$router.push("/Home?page="+t)}},showEditor:function(){A||(A=new H.a("#editorElem"),A.customConfig.uploadImgServer="http://101.132.128.112:4000/qwe?uid="+this.userinfo.id,A.customConfig.menus=["head","strikeThrough","list","link","justify","quote","emoticon","table","image","code"],A.create()),this.editflg=!0},addNew:function(){var t=this,i=A.txt.html().match(/<img.+?>/gi),e="";i&&i.length>0&&(e=i[0]);var n=A.txt.text().substring(0,100);console.log(e,n),this.call("/savenews",{title:this.title,content:A.txt.html(),uid:this.userinfo.id,yimg:e,ycontent:n},function(i){t.getnews(),t.editflg=!1,t.title="",t.editorContent="",A.txt.html("")})},gotogithub:function(t){window.open(t)},_login:function(){window.location.href="https://github.com/login/oauth/authorize?client_id=5264e5de73487b1b7a35&redirect_uri=http://101.132.128.112:4000/github"},gotoNewsInfo:function(t){this.$router.push("/Article?nid="+t)},exit:function(){this.$cookie.delete("userinfo"),window.location.reload()},getnewsnum:function(){var t=this;this.call("/getnewsnum",{},function(i){i&&(console.log("total",i),t.totalnum=1*i[0].num)})},setpagebtn:function(){var t=this.$route.query.page?1*this.$route.query.page:1;this.nowpage=t,this.totalpage=Math.ceil(this.totalnum/25),this.prebtnflg=t>1,this.totalnum/(25*t)>1?this.nextbtnflg=!0:this.nextbtnflg=!1}},mounted:function(){A=void 0,this.getnews(),this.getnewsnum()}},M=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.editflg,expression:"editflg"}],staticClass:"back"},[e("div",{staticClass:"editorcontent",staticStyle:{padding:"10px",width:"1000px"}},[e("div",{staticClass:"closebtn",on:{click:function(i){t.editflg=!1}}},[t._v("×")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"titleinput",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.title},on:{input:function(i){i.target.composing||(t.title=i.target.value)}}}),t._v(" "),e("div",{attrs:{id:"editorElem"}}),t._v(" "),e("div",{staticClass:"btn",staticStyle:{float:"right"},on:{click:function(i){t.addNew()}}},[t._v("保存")])])])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticStyle:{width:"1000px",margin:"20px auto"}},[t.nowpage<=t.totalpage?e("div",{staticStyle:{width:"700px",float:"left","box-shadow":"0px 1px 10px #ccc"}},[t._l(t.newsinfo,function(i,n){return e("div",{key:n,staticClass:"content"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:i.avatar_url,alt:"",title:i.html_url},on:{click:function(e){t.gotogithub(i.html_url)}}})]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"title",on:{click:function(e){t.gotoNewsInfo(i.nid)}}},[t._v(t._s(i.title?i.title:"未命名标题"))]),t._v(" "),e("div",{staticClass:"infoma"},[t._v(t._s(i.updatetime)+" ✦ "+t._s(i.name)+" ✦ "+t._s(i.email))]),t._v(" "),e("div",{staticClass:"hfnum",attrs:{title:i.hfnum+"个回复"},on:{click:function(e){t.gotoNewsInfo(i.nid)}}},[e("i",{staticClass:"iconfont icon-comments"}),t._v(t._s(i.hfnum))]),t._v(" "),e("div",{staticStyle:{padding:"10px 0px","font-size":"13px",overflow:"hidden",color:"#888","font-weight":"normal"}},[e("div",{staticClass:"yimg",domProps:{innerHTML:t._s(i.yimg)}}),t._v(" "),e("div",{class:i.yimg?"ycontent":"ycontent2"},[t._v(t._s(i.ycontent))])])])])}),t._v(" "),e("div",{staticStyle:{width:"100%",position:"relative",overflow:"hidden",height:"50px",background:"#fff"}},[e("div",{staticClass:"pagebtn"},[e("div",{staticClass:"btn yuan",class:t.prebtnflg?"":"useless",on:{click:function(i){t.prepage()}}},[e("i",{staticClass:"iconfont icon-back"})]),t._v(" "),e("div",{staticClass:"pagenum"},[t._v(t._s(t.nowpage)+"/"+t._s(t.totalpage))]),t._v(" "),e("div",{staticClass:"btn yuan",class:t.nextbtnflg?"":"useless",on:{click:function(i){t.nextpage()}}},[e("i",{staticClass:"iconfont icon-more"})])])])],2):e("div",{staticStyle:{width:"700px",float:"left","text-align":"center"}},[e("i",{staticClass:"iconfont icon-zanwu",staticStyle:{"font-size":"50px"}}),t._v(" 没东西！！！")]),t._v(" "),e("div",{staticClass:"bodyright"},[e("div",{staticClass:"personinfo"},[t.userinfo?e("div",[e("div",{staticClass:"plist1"},[e("img",{attrs:{src:t.userinfo.avatar_url,title:t.userinfo.html_url},on:{click:function(i){t.gotogithub(t.userinfo.html_url)}}}),t._v(" "),e("div",{staticStyle:{"padding-top":"10px"}},[t._v(t._s(t.userinfo.name))]),t._v(" "),e("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.userinfo.email))]),t._v(" "),e("div",{staticClass:"bio"},[t._v(t._s(t.userinfo.bio))])]),t._v(" "),e("div",{staticClass:"plist2",on:{click:function(i){t.showEditor()}}},[e("i",{staticClass:"iconfont icon-edit"}),t._v(" "),e("div",[t._v("Add New")])]),t._v(" "),e("div",{staticClass:"plist2",on:{click:t.exit}},[e("i",{staticClass:"iconfont icon-exit"}),t._v(" "),e("div",[t._v("Exit")])])]):e("div",[e("div",{staticClass:"plist2",on:{click:function(i){t._login()}}},[e("i",{staticClass:"iconfont icon-github",staticStyle:{"font-size":"20px"}}),t._v(" "),e("div",[t._v("使用github登录")])])])]),t._v(" "),e("div",{staticClass:"tags"},t._l(t.classify,function(i,n){return e("div",{key:n,staticClass:"tag"},[e("i",{staticClass:"iconfont icon-attachment"}),t._v(" "+t._s(i.name)+"\n          "),e("div",{staticClass:"num"},[t._v(t._s(i.num))])])}))])])],1)},T=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"titlec"},[e("div",{staticClass:"bigtitlec"},[e("div",[t._v("Golden Sun - Aqua Rock")]),t._v(" "),e("div",[t._v("--------------------------------------------------------------------")]),t._v(" "),e("div",[t._v("The Lost Age")])])])}],F={render:M,staticRenderFns:T},I=F,P=e("X4nt"),X=o,L=P(R,I,!1,X,"data-v-7c59ee22",null),O=L.exports,D={name:"name",data:function(){for(var t=[],i=0;i<26;i++)t.push({small:"http://101.132.128.112:8088/img/bg"+(i+1)+"s.png",big:"http://101.132.128.112:8088/img/bg"+(i+1)+".png"});return{p:t,nowsrc:"",flg:!1}},methods:{select:function(t){this.flg=!0,this.nowsrc=t.big},load:function(t){console.log(t)}}},J=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._l(t.p,function(i,n){return e("div",{staticClass:"b",on:{click:function(e){t.select(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.small,expression:"item.small"}],staticClass:"bimg",attrs:{alt:""}})])}),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.flg?e("div",{staticClass:"back",on:{click:function(i){t.flg=!1}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.nowsrc,expression:"nowsrc"}],attrs:{alt:""}})]):t._e()])],2)},j=[],W={render:J,staticRenderFns:j},B=W,K=e("X4nt"),V=a,U=K(D,B,!1,V,"data-v-16724ea3",null),G=U.exports,Y={name:"name"},Q=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{attrs:{id:"id"}},[t._v("\n  NO DATA！\n")])},Z=[],tt={render:Q,staticRenderFns:Z},it=tt,et=e("X4nt"),nt=c,st=et(Y,it,!1,nt,"data-v-01d04a4f",null),ot=st.exports,at=void 0,ct={name:"name",data:function(){return{item:[],userinfo:[],editorContent:"",hf:[],nid:0}},created:function(){try{this.userinfo=JSON.parse(this.$cookie.get("userinfo")),this.nid=this.$route.query.nid?this.$route.query.nid:0}catch(t){console.log("UserInfo Error!"),console.log(t)}},methods:{gotogithub:function(t){window.open(t)},savehf:function(){var t=this;""!=this.editorContent&&this.call("/savehf",{uid:this.userinfo.id,content:this.editorContent,nid:1*this.nid},function(i){i&&(t.editorContent="",at.txt.html(""),t.gethf())})},gethf:function(){var t=this;this.call("/gethf",{nid:this.nid},function(i){i&&(console.log(i),t.hf=i)})}},mounted:function(){var t=this;this.call("/getnewsinfo",{nid:this.nid},function(i){i&&(t.item=i[0])}),this.gethf(),this.userinfo&&0!=this.nid&&(at=new H.a("#editorElem"),at.customConfig.uploadImgServer="http://101.132.128.112:4000/qwe?uid="+this.userinfo.id,at.customConfig.menus=["emoticon","code"],at.customConfig.onchange=function(i){t.editorContent=i},at.create(),this.editflg=!0)}},lt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return 0!=t.nid?e("div",{staticStyle:{width:"1000px",margin:"0 auto","padding-top":"80px"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"right"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.item.avatar_url,alt:"",title:t.item.html_url},on:{click:function(i){t.gotogithub(t.item.html_url)}}})]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(t.item.title?t.item.title:"未命名标题"))]),t._v(" "),e("div",{staticClass:"infoma"},[t._v(t._s(t.item.updatetime)+" ✦ "+t._s(t.item.name)+" ✦ "+t._s(t.item.email))]),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"con",domProps:{innerHTML:t._s(t.item.content)}})])]),t._v(" "),t.userinfo?e("div",{staticClass:"hfcontent"},[e("div",{attrs:{id:"editorElem"}}),t._v(" "),e("div",{staticClass:"btn",staticStyle:{float:"right"},on:{click:function(i){t.savehf()}}},[t._v("保存")])]):t._e(),t._v(" "),t.hf.length>0?e("div",{staticClass:"hfbox",staticStyle:{"margin-bottom":"50px"}},t._l(t.hf,function(i){return e("div",{staticClass:"hfboxcontent"},[e("div",{staticClass:"boxleft"},[e("img",{attrs:{src:i.avatar_url,alt:"",title:i.html_url},on:{click:function(e){t.gotogithub(i.html_url)}}})]),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"boxright",domProps:{innerHTML:t._s(i.content)}}),t._v(" "),e("div",{staticClass:"hftime"},[t._v(t._s(i.name)+"--"+t._s(i.updatetime))])])})):t._e()]):e("div",{staticStyle:{width:"1000px","text-align":"center",margin:"0px auto","margin-top":"150px"}},[e("i",{staticClass:"iconfont icon-zanwu",staticStyle:{"font-size":"50px"}}),t._v(" 没东西！！！")])},rt=[],ut={render:lt,staticRenderFns:rt},dt=ut,ft=e("X4nt"),ht=l,vt=ft(ct,dt,!1,ht,"data-v-70c19596",null),gt=vt.exports;r.a.use(w.a);var mt=new w.a({routes:[{path:"/",name:"Main",component:z,children:[{path:"/Home",name:"Home",component:O},{path:"/Draw",name:"Draw",component:G},{path:"/Setting",name:"Setting",component:ot},{path:"/Article",name:"Article",component:gt}]}]}),pt=e("201h"),_t=e.n(pt),wt=e("Klf7"),xt=e.n(wt);r.a.use(N.a);var Ct={namespaced:!0,state:{newsinfo:[],newsitem:[]},mutations:{getnews:function(t,i){r.a.prototype.call("/getnews",{},function(i){console.log(i),t.newsinfo=i})},setNewsItem:function(t,i){t.newsitem=i}}},bt=e("tra3"),yt=e.n(bt);e("nARF");r.a.config.productionTip=!1,r.a.directive("highlight",function(t){t.querySelectorAll("pre code").forEach(function(t){hljs.highlightBlock(t)})}),r.a.use(N.a),r.a.use(_t.a,{preLoad:1.3,error:"/static/error.svg",loading:"/static/loading.svg",attempt:1}),r.a.use(xt.a);var $t=new N.a.Store({modules:{main:Ct}});r.a.prototype.call=function(t,i,e){yt.a.ajax({url:"http://101.132.128.112:4000"+t,data:i,type:"POST",beforeSend:function(){yt()("body").append('<div class="qwe" style="z-index:999;position:fixed;width:100vw;height:100vh;background:rgba(0,0,0,0.0);left:0px;top:0px;"><img style="width:200px;height:200px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);" src="/static/Ripple.svg"/></div>')},success:function(t){yt()(".qwe").remove(),e(t)},timeout:3e4})},new r.a({el:"#app",router:mt,store:$t,template:"<App/>",components:{App:_}})},RK2A:function(t,i){},"S+Vw":function(t,i){},WRMB:function(t,i){},pWHD:function(t,i){},scHh:function(t,i){},"xPz+":function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.286bfa0c04642cf8b109.js.map