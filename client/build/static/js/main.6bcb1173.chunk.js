(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"i",(function(){return f})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return E})),n.d(t,"h",(function(){return v})),n.d(t,"c",(function(){return P})),n.d(t,"b",(function(){return A}));var a=n(29),r=n(15),c=n(6),o=n.n(c),s=n(35),l=n.n(s),u=n(23),i=function(e){return e.posts.data},m=function(e){return function(t){var n;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t(g()),a.prev=1,a.next=4,o.a.awrap(l.a.get("".concat(u.a,"/posts/").concat(e)));case 4:n=a.sent,t({payload:n.data,type:N}),t(h()),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),t(b(a.t0.message));case 12:case"end":return a.stop()}}),null,null,[[1,9]])}},p=function(e){return function(t){var n;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t(g()),n={headers:{"Content-Type":"application/json"}},a.prev=2,a.next=5,o.a.awrap(l.a.post("".concat(u.a,"/posts"),e,n));case 5:return a.next=7,o.a.awrap(new Promise((function(e,t){return setTimeout(e,2e3)})));case 7:t(h()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),t(b(a.t0.message));case 13:case"end":return a.stop()}}),null,null,[[2,10]])}},f=function(e,t){return function(n){return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n(g()),a.prev=1,a.next=4,o.a.awrap(l.a.post("".concat(u.a,"/posts/edit/").concat(t),e));case 4:n(h()),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),n(b(a.t0.message));case 10:case"end":return a.stop()}}),null,null,[[1,7]])}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return function(n){var a,r,c,s;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n(g()),i.prev=1,a=(e-1)*t,r=t,i.next=6,o.a.awrap(l.a.get("".concat(u.a,"/posts/range/").concat(a,"/").concat(r)));case 6:c=i.sent,s={posts:c.data.posts,amount:c.data.amount,postsPerPage:t,presentPage:e},n(O(s)),n(h()),i.next=15;break;case 12:i.prev=12,i.t0=i.catch(1),n(b(i.t0.message));case 15:case"end":return i.stop()}}),null,null,[[1,12]])}},E=function(e){return e.posts.request},g=function(){return{type:w}},h=function(){return{type:x}},v=function(){return{type:k}},b=function(e){return{error:e,type:S}},O=function(e){return{payload:e,type:_}},P=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},j=function(e){return"app/".concat("posts","/").concat(e)},y=j("LOAD_POSTS"),N=j("LOAD_SINGLE_POST"),w=j("START_REQUEST"),x=j("END_REQUEST"),S=j("ERROR_REQUEST"),k=j("RESET_REQUEST"),_=j("LOAD_POSTS_PAGE"),q={data:[],singlePost:{},request:{pending:!1,error:null,success:null},amount:null,postsPerPage:3,presentPage:1};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(r.a)({},e,{data:t.payload});case N:return Object(r.a)({},e,{singlePost:t.payload});case _:return Object(r.a)({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(a.a)(t.payload.posts)});case w:return Object(r.a)({},e,{request:{pending:!0,error:null,success:null}});case x:return Object(r.a)({},e,{request:{pending:!1,error:null,success:!0}});case k:return Object(r.a)({},e,{request:{pending:!1,error:null,success:null}});case S:return Object(r.a)({},e,{request:{pending:!1,error:t.error,success:!1}});default:return e}}},113:function(e,t,n){"use strict";(function(e){var a=n(40),r=n(15),c=n(42),o=n(0),s=n.n(o),l=n(18),u=n(32),i=n(114),m=n.n(i),p=(n(254),n(255),n(33)),f=n(41),d=n(72),E=n(115),g=n(34),h=n(10);n(258);t.a=Object(l.b)((function(e){return{request:e.posts.request,editedPost:e.posts.singlePost}}),(function(e){return{addPost:function(t){return e(Object(h.a)(t))},resetRequest:function(){return e(Object(h.h)())},updEditedPost:function(t,n){return e(Object(h.i)(t,n))}}}))(Object(u.f)((function(t){var n,l=t.addPost,u=t.match,i=t.resetRequest,h=t.editedPost,v=t.updEditedPost,b=t.request,O=b.success,P=b.error,j=b.pending;Object(o.useEffect)((function(){i()}),[]),n=Object.keys(h).length>0&&"/posts/new"!==u.path;var y=Object(o.useState)({author:n&&h.author||"",title:n&&h.title||"",content:n&&h.content||""}),N=Object(c.a)(y,2),w=N[0],x=N[1],S=w.title,k=w.author,_=w.content,q=function(e){return x(Object(r.a)({},w,Object(a.a)({},e.target.name,e.target.value)))},A=function(){setTimeout((function(){e.location.reload()}),5678)},C=function(){l({title:S,author:k,content:_}),A()},R=function(){v({title:S,author:k,content:_},h._id),A()};return P?s.a.createElement(p.a,{variant:"error"},P):O?s.a.createElement(p.a,{variant:"success"},"Post has been added!"):j?s.a.createElement(f.a,null):s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),!1===n?C():R()}},s.a.createElement(d.a,{label:"Title",value:S,onChange:q,name:"title"}),s.a.createElement(d.a,{label:"Author",value:k,onChange:q,name:"author"}),s.a.createElement(E.a,null,"Edit post content"),s.a.createElement(m.a,{className:"content-editor",text:_,onChange:function(e){x(Object(r.a)({},w,{content:e}))},options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),!1===n?s.a.createElement(g.a,{variant:"primary"},"Add post"):s.a.createElement(g.a,{variant:"primary"},"Update post"))})))}).call(this,n(44))},115:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(257);t.a=function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)}},116:function(e,t,n){e.exports=n(290)},142:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="/api",r="http://localhost:3000/"},233:function(e,t){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(47),o=n.n(c),s=n(18),l=n(36),u=n(109),i=n(110),m=n(10),p=Object(l.combineReducers)({posts:m.b}),f=[i.a],d=Object(l.createStore)(p,Object(u.composeWithDevTools)(l.applyMiddleware.apply(void 0,f))),E=n(8),g=(n(142),n(143),n(26)),h=n(27),v=n(30),b=n(28),O=n(31),P=n(32),j=(n(144),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),y=n(6),N=n.n(y),w=n(29),x=n(42),S=(n(145),function(e){var t=e.links;e.location;return r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"logo"},"Blog.app"),r.a.createElement("img",{src:t,alt:"logo"}))}),k=(n(146),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(E.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))})))}),_=Object(P.f)((function(e){return r.a.createElement(k,e)})),q=n(35),A=n.n(q),C=n(23),R=function(){var e,t;return N.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N.a.awrap(A.a.get("".concat(C.a,"/ids")));case 3:return e=n.sent,n.next=6,N.a.awrap(e.data[Math.floor(Math.random()*e.data.length)]);case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),null,null,[[0,10]])},T=(n(150),function(){var e=Object(a.useState)([{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"}]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e;N.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.awrap(R());case 2:e=t.sent,c([].concat(Object(w.a)(n),[{path:"/posts/".concat(e),title:"Random Post"}]));case 4:case"end":return t.stop()}}))}()}),[]),r.a.createElement("nav",{className:"navbar"},r.a.createElement(S,{links:"https://kszk.vot.pl/kszk.png"}),r.a.createElement(_,{links:n}))}),B=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(j,null,r.a.createElement(T,null),t))},I=(n(151),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),D=(n(152),function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={presentPage:n.props.initialPage||1},n.changePage=function(e,t){var a=n.props.loadPostsByPage;n.setState({presentPage:e}),a(e,t)},n.getSeenStatus=function(){return"/"===n.props.match.path?{display:"none"}:{}},n}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pages,n=(e.postsNo,e.postsOnPage),a=e.currentPage,c=this.changePage;return r.a.createElement("div",{className:"ppagination",style:this.getSeenStatus()},r.a.createElement("ul",{className:"ppagination__list"},a>1?r.a.createElement("li",null,r.a.createElement("button",{className:"btn-ppagination",onClick:function(){console.log(n),c(a-1,n)}},r.a.createElement("i",{className:"fas fa-arrow-left"}))):"",Object(w.a)(Array(t)).map((function(e,t){return r.a.createElement("li",{key:++t,onClick:function(){c(t,n)},className:"ppagination__list__item ppagination__list__item".concat(t===a?"--active":"")},123456789!==n?"".concat(t):"")})),a<t?r.a.createElement("li",null,r.a.createElement("button",{className:"btn-ppagination",onClick:function(){c(a+1,n)}},r.a.createElement("i",{className:"fas fa-arrow-right"}))):""))}}]),t}(r.a.Component)),M=Object(P.f)(D),F=n(41),U=n(33),L=(n(206),n(34)),Q=n(22),G=(n(208),function(e){var t=e.children,n=Object(Q.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),z=n(112),H=n.n(z),J=function(e){var t=e.children,n=Object(Q.a)(e,["children"]);return r.a.createElement("div",Object.assign({},n,{className:"html-box"}),H()(t))},W=function(e){var t=e._id,n=e.title,c=e.content,o=e.author;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(G,null,n),r.a.createElement(J,null,function(e,t){if(e.length<1)return"Error";if(e.length<=t)return e;var n=e.substr(0,e.lastIndexOf(" ",t));return"."===n.slice(-1)||","===n.slice(-1)?n.substring(0,n.length-1)+"...":n+"..."}(c,250)),r.a.createElement(a.Fragment,null,r.a.createElement("p",null,"Author: ",r.a.createElement("strong",null,o))),r.a.createElement(E.b,{to:"/posts/".concat(t)},r.a.createElement(L.a,{variant:"primary"},"Read more")))},Y=function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t.map((function(e){return r.a.createElement(W,Object.assign({key:e.id},e))}))))},Z=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadPostsByPage)(1,e.postsOnPage)}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.pages,c=e.request,o=c.pending,s=c.error,l=c.success,u=e.postsNo,i=e.postsOnPage,m=e.currentPage,p=e.loadPostsByPage;return r.a.createElement("div",null,(o||null===l)&&r.a.createElement(F.a,null),t.length?!o&&l&&r.a.createElement(a.Fragment,null,r.a.createElement(Y,{posts:t})," ",r.a.createElement(M,{pages:n,postsNo:u,postsOnPage:i,currentPage:m,loadPostsByPage:p})):"",!o&&null!==s&&r.a.createElement(U.a,{variant:"error"},s),!o&&l&&!t.length&&r.a.createElement(U.a,{variant:"info"},"No posts"))}}]),t}(r.a.Component),K=Object(s.b)((function(e){return{posts:Object(m.d)(e),request:Object(m.e)(e),pages:Object(m.c)(e),postsNo:e.posts.amount,postsOnPage:e.posts.postsPerPage,currentPage:e.posts.presentPage}}),(function(e){return{loadPostsByPage:function(t,n){return e(Object(m.g)(t,n))}}}))(Z),V=function(){return r.a.createElement("div",null,r.a.createElement(I,null,"Blog"),r.a.createElement(K,null))},X=n(9),$=n.n(X),ee=function(e){var t=e.posts,n=e.success,a=e.amount;return t.length>0&&n?r.a.createElement("div",null,"Posts counter ",a):r.a.createElement("div",null,"There are no posts in this category")};ee.propsType={posts:$.a.array.isRequired,amount:$.a.number};var te=Object(s.b)((function(e){return{posts:e.posts.data,success:e.posts.request.success,amount:e.posts.amount}}))(ee),ne=n(40),ae=n(15),re=Object(s.b)((function(e){return{postsNo:e.posts.amount,postsOnPage:e.posts.postsPerPage,currentPage:e.posts.presentPage}}),{loadPostsByPageRequest:m.g})((function(e){var t=e.postsNo,n=e.postsOnPage,c=(e.currentPage,e.loadPostsByPageRequest),o=Math.ceil(t/n),s=Object(a.useState)({postPerPage:n,startPage:1}),l=Object(x.a)(s,2),u=l[0],i=l[1],m=u.postPerPage,p=u.startPage,f=function(e){var t,n,a;return N.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.target,n=t.name,a=t.value,r.next=3,N.a.awrap(i(Object(ae.a)({},u,Object(ne.a)({},n,a))));case 3:console.log(n,a),"startPage"===n?c(1*a,1*m):c(1*p,1*a);case 5:case"end":return r.stop()}}))};return r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("select",{name:"postPerPage",value:m,onChange:f,className:"form-control"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"3"},"(default) 3"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"100"},"100"),r.a.createElement("option",{value:"123456789"},"All of them")),r.a.createElement("small",{className:"form-text"},"How many posts per page ?")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("select",{name:"startPage",value:p,onChange:f,className:"form-control"},Object(w.a)(Array(o)).map((function(e,t){return r.a.createElement("option",{value:t+1,key:t},0==t?"(default) ".concat(t+1):"".concat(t+1))}))),r.a.createElement("small",{className:"form-text"},"Select start page."))))})),ce=function(){return r.a.createElement("div",null,r.a.createElement(I,null,"Posts list"),r.a.createElement(re,null),r.a.createElement(te,null),r.a.createElement(K,null))},oe=function(){return r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title"},"Contact"),r.a.createElement("p",{className:"card-text"},"Your Favourite Blooger Ltd. 9432 Division Street Stone Mountain, GA 30083 Mobile Number: 207-914-3411")))},se=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={counter:7},n.componentDidMount=function(){var e=setInterval(n.countdown,1e3);n.setState({intervalId:e})},n.componentWillUnmount=function(){clearInterval(n.state.intervalId)},n.countdown=function(){n.setState({counter:n.state.counter-1})},n}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This way"," ",r.a.createElement("code",{style:{color:"#cba"}},this.props.location.pathname)," ","is to nowhere..."),r.a.createElement("p",null," Redirect to homepage in ",this.state.counter," seconds "),!this.state.counter&&r.a.createElement(P.a,{to:"/"}),r.a.createElement("img",{src:"./img/deadend.jpg",className:"card-img-top",alt:"DeadEnd"}))}}]),t}(a.Component),le=n(113),ue=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Post"),r.a.createElement(le.a,null))},ie=n(60),me=(n(259),Object(s.b)((function(e){return{singlePost:e.posts.singlePost,request:e.posts.request}}),{getSinglePost:m.f})(Object(P.f)((function(e){var t=e.match,n=e.location,c=e.getSinglePost,o=e.singlePost,s=o.title,l=o.content,u=o.author,i=e.request,m=i.pending,p=i.error,f=i.success;return Object(a.useEffect)((function(){c(t.params.id)}),[]),r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"post-summary"},m||null===f?r.a.createElement(F.a,null):r.a.createElement(a.Fragment,null,r.a.createElement(I,null,s),r.a.createElement("p",null,"Author: ",r.a.createElement("strong",null,u)),r.a.createElement(J,null,l),r.a.createElement(E.b,{to:"/posts"},r.a.createElement(L.a,{variant:"primary"},"Return to posts")),r.a.createElement(E.b,{to:"/posts/edit/".concat(t.params.id)},r.a.createElement(L.a,{variant:"default"},"Post editing...")),!m&&null!==p&&r.a.createElement(U.a,{variant:"error"},p))),r.a.createElement(ie.FacebookProvider,{appId:"166763024612541"},r.a.createElement(ie.ShareButton,{href:"http://www.facebook.com"},r.a.createElement("span",null,"Share on \xa0",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16.719",height:"33.03",viewBox:"0 0 16.719 33.03"},r.a.createElement("path",{d:"M565.456,2460.27h-3.789v5.64h3.789v16.58h7.287v-16.65h5.084l0.541-5.57h-5.625v-3.17c0-1.31.29-1.84,1.682-1.84h3.943v-5.78h-5.045c-5.422,0-7.867,2.18-7.867,6.35v4.44Z",transform:"translate(-561.656 -2449.47)"})))),r.a.createElement(ie.Comments,{href:"".concat(C.b).concat(n.pathname)})))})))),pe=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(B,null,r.a.createElement(P.d,null,r.a.createElement(P.b,{path:"/",exact:!0,component:V}),r.a.createElement(P.b,{path:"/posts",exact:!0,component:ce}),r.a.createElement(P.b,{path:"/contact",exact:!0,component:oe}),r.a.createElement(P.b,{path:"/posts/new",exact:!0,component:ue}),r.a.createElement(P.b,{path:"/posts/edit/:id",component:ue}),r.a.createElement(P.b,{path:"/posts/:id",component:me}),r.a.createElement(P.b,{component:se})))}}]),t}(r.a.Component);o.a.render(r.a.createElement((function(){return r.a.createElement(s.a,{store:d},r.a.createElement(E.a,null,r.a.createElement(pe,null)))}),null),document.getElementById("root"))},33:function(e,t,n){"use strict";var a=n(22),r=n(0),c=n.n(r),o=n(59),s=n(43);n(205);t.a=function(e){var t=e.variant,n=void 0===t?"":t,r=e.children,l=Object(a.a)(e,["variant","children"]);return c.a.createElement(o.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},c.a.createElement("div",Object.assign({},l,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return c.a.createElement(s.c,null);case"success":return c.a.createElement(s.a,null);case"warning":case"error":return c.a.createElement(s.b,null);default:return c.a.createElement(s.c,null)}}(),c.a.createElement("span",{className:"alert__desc"},r)))}},34:function(e,t,n){"use strict";var a=n(22),r=n(0),c=n.n(r);n(207);t.a=function(e){var t=e.variant,n=void 0===t?"":t,r=e.children,o=Object(a.a)(e,["variant","children"]);return c.a.createElement("button",Object.assign({},o,{className:"button button--".concat(n)}),r)}},41:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(59);n(204);t.a=function(){return r.a.createElement(c.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}},72:function(e,t,n){"use strict";var a=n(22),r=n(0),c=n.n(r);n(256);t.a=function(e){var t=e.value,n=e.label,r=e.onChange,o=Object(a.a)(e,["value","label","onChange"]);return c.a.createElement("label",{className:"text-field"},c.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),c.a.createElement("input",Object.assign({},o,{value:t,onChange:r,className:"text-field__input"})))}}},[[116,1,2]]]);
//# sourceMappingURL=main.6bcb1173.chunk.js.map