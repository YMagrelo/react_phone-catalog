(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/favorite-icon.35916e8d.svg"},37:function(e,a,t){e.exports=t.p+"static/media/search-icon.35c22a71.svg"},38:function(e,a,t){e.exports=t.p+"static/media/basket-icon.a860aa3c.svg"},40:function(e,a,t){e.exports=t.p+"static/media/Infinity-1.5s-200px.ceb90013.svg"},43:function(e,a,t){e.exports=t(78)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),s=t(4),o=t(10),i=(t(52),t(53),t(54),t(16)),m=t.n(i),u=t(37),p=t.n(u),d=t(38),h=t.n(d),E=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__header-wrapper"},c.a.createElement("nav",{className:"header__nav nav"},c.a.createElement("a",{className:"header__logo",href:"https://www.youtube.com/watch?v=fHiGbolFFGw",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("p",{className:"header__logo-heading"},"Android"),c.a.createElement("p",{className:"header__logo-underheading"},"paranoid")),c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/",exact:!0},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/phones"},"Phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/tablets"},"Tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.b,{className:"nav__link",to:"/accessories"},"Accessories")))),c.a.createElement("div",{className:"header__menu"},c.a.createElement("label",{htmlFor:"header-search",className:"header__search-label"},c.a.createElement("input",{type:"search",id:"header-search",className:"header__search-input",placeholder:"Search..."}),c.a.createElement("span",{className:"header__search-icon-container"},c.a.createElement("img",{src:p.a,alt:"search icon",className:"header__search-icon"}))),c.a.createElement("button",{className:"header__favorite",type:"button"},c.a.createElement("img",{src:m.a,alt:"favorite icon",className:"header__favorite-icon"})," "),c.a.createElement("button",{className:"header__basket",type:"button"},c.a.createElement("img",{src:h.a,alt:"basket icon",className:"header__basket-icon"})," "))))},_=(t(56),t(8)),f=function(){return c.a.createElement("h2",null,"Home")},g=function(){return c.a.createElement("h2",null,"Tablets")},N=function(){return c.a.createElement("h2",null,"Accessories")},v=(t(57),function(){return c.a.createElement("div",{className:"notFound"},c.a.createElement("h2",{className:"notFound__heading"},"Error: 404"),c.a.createElement("h3",{className:"notFound__text"},"Sorry, page is not found. You can pass to the \xa0",c.a.createElement(s.b,{className:"notFound__link",to:"/",exact:!0},"Home page")))}),b=t(17),F=t(18),O=t(19),y=t(20),k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Phones"))},j=t(42),T=t(12),P=t(25),w="https://mate-academy.github.io/phone-catalogue-static/api/phones",H=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},S={phones:[],isFetching:!1},x=function(){return function(e){e(H(!0)),P.get("".concat(w,".json")).then((function(e){return e.data})).then((function(a){e(H(!1)),e({type:"SET_PHONES",phones:a})}))}},I=(t(75),t(76),function(e){var a=e.imageUrl,t=e.name,n=e.id;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:a,alt:"/",className:"card__product-img"}),c.a.createElement(s.b,{to:"/phones/".concat(n),className:"card__link"},t),c.a.createElement("p",{className:"card__price"},c.a.createElement("span",{className:"card__price-new"},"$799"),c.a.createElement("span",{className:"card__price-old"},"$899")),c.a.createElement("div",{className:"card__product-details"},c.a.createElement("p",{className:"product-details"},c.a.createElement("span",{className:"product-details__title"},"Screen"),c.a.createElement("span",{className:"product-details__value"},"HardCode")),c.a.createElement("p",{className:"product-details"},c.a.createElement("span",{className:"product-details__title"},"Capacity"),c.a.createElement("span",{className:"product-details__value"},"HardCode")),c.a.createElement("p",{className:"product-details"},c.a.createElement("span",{className:"product-details__title"},"RAM"),c.a.createElement("span",{className:"product-details__value"},"HardCode"))),c.a.createElement("div",{className:"card__buttons"},c.a.createElement("button",{className:"card__add-to-cart",type:"button"},"Add to cart"),c.a.createElement("button",{className:"card__favorite",type:"button"},c.a.createElement("img",{src:m.a,alt:"favorite icon",className:"card__favorite-icon"})," "))))}),G=function(e){var a=e.phones;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"catalog"},c.a.createElement("ul",{className:"catalog__product-list"},a.map((function(e){return c.a.createElement("li",{key:e.age,className:"catalog__product-item"},c.a.createElement(I,e))})))))},D=t(40),C=t.n(D),A=(t(77),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:C.a,alt:"preloader",className:"preloader"}))}),L=function(e){Object(y.a)(t,e);var a=Object(O.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(F.a)(t,[{key:"componentDidMount",value:function(){this.props.getPhonesThunk()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),this.props.isFetching?c.a.createElement(A,null):null,c.a.createElement(G,{phones:this.props.phones}))}}]),t}(c.a.Component),M=Object(o.b)((function(e){return{phones:e.phonesPage.phones,isFetching:e.phonesPage.isFetching}}),(function(e){return{getPhonesThunk:function(){return e(x())}}}))(L),J=function(e){var a=e.details;return null===a?null:void 0===a?c.a.createElement(v,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"PhonesDetails"),c.a.createElement("img",{src:a.images[0],alt:"motorola-xoom"}),c.a.createElement("p",null,a.id))},$={details:null,isFetching:!1},B=function(e){return function(a){a(H(!0)),function(e){return P.get("".concat(w,"/").concat(e,".json")).then((function(e){return e.data})).catch((function(){}))}(e).then((function(e){a(H(!1)),a({type:"SET_PHONE_DETAILS",details:e})}))}},R=function(e){Object(y.a)(t,e);var a=Object(O.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.phoneId;this.props.getPhoneDetailsThunk(e)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(A,null):null,c.a.createElement(J,{details:this.props.details}))}}]),t}(c.a.Component),U=Object(_.f)(R),Y=Object(o.b)((function(e){return{details:e.phoneDetailsPage.details,isFetching:e.phoneDetailsPage.isFetching}}),(function(e){return{getPhoneDetailsThunk:function(a){e(B(a))}}}))(U),q=function(){return c.a.createElement("div",{className:"content-wrapper"},c.a.createElement(_.c,null,c.a.createElement(_.a,{path:"/",render:function(){return c.a.createElement(f,null)},exact:!0}),c.a.createElement(_.a,{path:"/phones",render:function(){return c.a.createElement(M,null)},exact:!0}),c.a.createElement(_.a,{path:"/tablets",render:function(){return c.a.createElement(g,null)}}),c.a.createElement(_.a,{path:"/accessories",render:function(){return c.a.createElement(N,null)}}),c.a.createElement(_.a,{path:"/phones/:phoneId",render:function(){return c.a.createElement(Y,null)}}),c.a.createElement(_.a,{render:function(){return c.a.createElement(v,null)}})))},z=function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(E,null),c.a.createElement(q,null))},K=t(11),Q=t(41),V=Object(K.c)({phonesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PHONES":return Object(T.a)({},e,{phones:Object(j.a)(a.phones)});case"TOGGLE_IS_FETCHING":return Object(T.a)({},e,{isFetching:a.isFetching});default:return e}},phoneDetailsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PHONE_DETAILS":return Object(T.a)({},e,{details:a.details});case"TOGGLE_IS_FETCHING":return Object(T.a)({},e,{isFetching:a.isFetching});default:return e}}}),W=Object(K.d)(V,Object(K.a)(Q.a));window.store=W,l.a.render(c.a.createElement(s.a,null,c.a.createElement(o.a,{store:W},c.a.createElement(z,null))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d061c847.chunk.js.map