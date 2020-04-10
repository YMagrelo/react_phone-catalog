(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/favorite-icon.35916e8d.svg"},37:function(e,t,a){e.exports=a.p+"static/media/search-icon.35c22a71.svg"},38:function(e,t,a){e.exports=a.p+"static/media/basket-icon.a860aa3c.svg"},40:function(e,t,a){e.exports=a.p+"static/media/Infinity-1.5s-200px.ceb90013.svg"},43:function(e,t,a){e.exports=a(78)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),s=a(4),o=a(10),i=(a(52),a(53),a(54),a(36)),u=a.n(i),m=a(37),h=a.n(m),p=a(38),E=a.n(p),d=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__header-wrapper"},c.a.createElement("nav",{className:"header__nav nav"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("p",{className:"header__logo-heading"},"Android"),c.a.createElement("p",{className:"header__logo-underheading"},"paranoid")),c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/",exact:!0},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/phones"},"Phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/tablets"},"Tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/accessories"},"Accessories")))),c.a.createElement("div",{className:"header__menu"},c.a.createElement("label",{htmlFor:"header-search",className:"header__search-label"},c.a.createElement("input",{type:"search",id:"header-search",className:"header__search-input",placeholder:"Search..."}),c.a.createElement("span",{className:"header__search-icon-container"},c.a.createElement("img",{src:h.a,alt:"search icon",className:"header__search-icon"}))),c.a.createElement("button",{className:"header__favorite",type:"button"},c.a.createElement("img",{src:u.a,alt:"favorite icon",className:"header__favorite-icon"})," "),c.a.createElement("button",{className:"header__basket",type:"button"},c.a.createElement("img",{src:E.a,alt:"basket icon",className:"header__basket-icon"})," "))))},_=(a(56),a(8)),f=function(){return c.a.createElement("h2",null,"Home")},g=function(){return c.a.createElement("h2",null,"Tablets")},b=function(){return c.a.createElement("h2",null,"Accessories")},v=(a(57),function(){return c.a.createElement("div",{className:"notFound"},c.a.createElement("h2",{className:"notFound__heading"},"Error: 404"),c.a.createElement("h3",{className:"notFound__text"},"Sorry, page is not found. You can pass to the \xa0",c.a.createElement(s.b,{className:"notFound__link",to:"/",exact:!0},"Home page")))}),N=a(16),F=a(17),O=a(18),j=a(19),k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Phones"))},y=a(42),T=a(12),P=a(24),S="https://mate-academy.github.io/phone-catalogue-static/api/phones",x=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I={phones:[],isFetching:!1},D=function(){return function(e){e(x(!0)),P.get("".concat(S,".json")).then((function(e){return e.data})).then((function(t){e(x(!1)),e({type:"SET_PHONES",phones:t})}))}},H=(a(75),a(76),function(e){var t=e.imageUrl,a=e.name,n=e.id;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:t,alt:"/",className:"catalog__product-img"}),c.a.createElement(s.b,{to:"/phones/".concat(n)},a)))}),w=function(e){var t=e.phones;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"catalog"},c.a.createElement("ul",{className:"catalog__product-list"},t.map((function(e){return c.a.createElement("li",{key:e.age,className:"catalog__product-item"},c.a.createElement(H,e))})))))},G=a(40),A=a.n(G),C=(a(77),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:A.a,alt:"preloader",className:"preloader"}))}),L=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"componentDidMount",value:function(){this.props.getPhonesThunk()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),this.props.isFetching?c.a.createElement(C,null):null,c.a.createElement(w,{phones:this.props.phones}))}}]),a}(c.a.Component),J=Object(o.b)((function(e){return{phones:e.phonesPage.phones,isFetching:e.phonesPage.isFetching}}),(function(e){return{getPhonesThunk:function(){return e(D())}}}))(L),M=function(e){var t=e.details;return t?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"PhonesDetails"),c.a.createElement("img",{src:t.images[0],alt:"motorola-xoom"}),c.a.createElement("p",null,t.id)):c.a.createElement(C,null)},B={details:null,isFetching:!1},U=function(e){return function(t){t(x(!0)),function(e){return P.get("".concat(S,"/").concat(e,".json")).then((function(e){return e.data}))}(e).then((function(e){t(x(!1)),t({type:"SET_PHONE_DETAILS",details:e})}))}},Y=function(e){Object(j.a)(a,e);var t=Object(O.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.phoneId;this.props.getPhoneDetailsThunk(e)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{details:this.props.details}),this.props.isFetching?c.a.createElement(C,null):null)}}]),a}(c.a.Component),q=Object(_.f)(Y),z=Object(o.b)((function(e){return{details:e.phoneDetailsPage.details,isFetching:e.phoneDetailsPage.isFetching}}),(function(e){return{getPhoneDetailsThunk:function(t){e(U(t))}}}))(q),K=function(){return c.a.createElement("div",{className:"content-wrapper"},c.a.createElement(_.c,null,c.a.createElement(_.a,{path:"/",render:function(){return c.a.createElement(f,null)},exact:!0}),c.a.createElement(_.a,{path:"/phones",render:function(){return c.a.createElement(J,null)},exact:!0}),c.a.createElement(_.a,{path:"/tablets",render:function(){return c.a.createElement(g,null)}}),c.a.createElement(_.a,{path:"/accessories",render:function(){return c.a.createElement(b,null)}}),c.a.createElement(_.a,{path:"/phones/:phoneId",render:function(){return c.a.createElement(z,null)}}),c.a.createElement(_.a,{render:function(){return c.a.createElement(v,null)}})))},Q=function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(d,null),c.a.createElement(K,null))},R=a(11),V=a(41),W=Object(R.c)({phonesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PHONES":return Object(T.a)({},e,{phones:Object(y.a)(t.phones)});case"TOGGLE_IS_FETCHING":return Object(T.a)({},e,{isFetching:t.isFetching});default:return e}},phoneDetailsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PHONE_DETAILS":return Object(T.a)({},e,{details:t.details});case"TOGGLE_IS_FETCHING":return Object(T.a)({},e,{isFetching:t.isFetching});default:return e}}}),X=Object(R.d)(W,Object(R.a)(V.a));window.store=X,l.a.render(c.a.createElement(s.a,null,c.a.createElement(o.a,{store:X},c.a.createElement(Q,null))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d0864d05.chunk.js.map