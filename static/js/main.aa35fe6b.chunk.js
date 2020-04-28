(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/favorite-icon.35916e8d.svg"},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){e.exports=t.p+"static/media/search-icon.35c22a71.svg"},44:function(e,a,t){e.exports=t.p+"static/media/basket-icon.a860aa3c.svg"},46:function(e,a,t){e.exports=t.p+"static/media/Infinity-1.5s-200px.ceb90013.svg"},50:function(e,a,t){e.exports=t(87)},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),s=t.n(c),l=t(3),o=t(9),i=(t(59),t(60),t(61),t(11)),m=t.n(i),u=t(43),d=t.n(u),p=t(44),_=t.n(p),h=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__header-wrapper"},r.a.createElement("nav",{className:"header__nav nav"},r.a.createElement("a",{className:"header__logo",href:"https://www.youtube.com/watch?v=fHiGbolFFGw",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{className:"header__logo-heading"},"Android"),r.a.createElement("p",{className:"header__logo-underheading"},"paranoid")),r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(l.b,{className:"nav__link",to:"/",exact:!0},"Home")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(l.b,{className:"nav__link",to:"/phones"},"Phones")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(l.b,{className:"nav__link",to:"/tablets"},"Tablets")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(l.b,{className:"nav__link",to:"/accessories"},"Accessories")))),r.a.createElement("div",{className:"header__menu"},r.a.createElement("label",{htmlFor:"header-search",className:"header__search-label"},r.a.createElement("input",{type:"search",id:"header-search",className:"header__search-input",placeholder:"Search..."}),r.a.createElement("span",{className:"header__search-icon-container"},r.a.createElement("img",{src:d.a,alt:"search icon",className:"header__search-icon"}))),r.a.createElement("button",{className:"header__favorite",type:"button"},r.a.createElement("img",{src:m.a,alt:"favorite icon",className:"header__favorite-icon"})," "),r.a.createElement(l.b,{to:"/basket"},r.a.createElement("button",{className:"header__basket",type:"button"},r.a.createElement("img",{src:_.a,alt:"basket icon",className:"header__basket-icon"}))))))},E=(t(63),t(10)),g=function(){return r.a.createElement("h2",null,"Home")},N=function(){return r.a.createElement("h2",null,"Tablets")},f=function(){return r.a.createElement("h2",null,"Accessories")},b=(t(64),function(){return r.a.createElement("div",{className:"notFound"},r.a.createElement("h2",{className:"notFound__heading"},"Error: 404"),r.a.createElement("h3",{className:"notFound__text"},"Sorry, page is not found. You can pass to the \xa0",r.a.createElement(l.b,{className:"notFound__link",to:"/",exact:!0},"Home page")))}),v=t(18),y=t(19),O=t(21),F=t(22),w=(t(65),t(1)),S=t.n(w),P=(S.a.shape({additionalFeatures:S.a.string,android:S.a.shape({os:S.a.string,ui:S.a.string}).isRequired,availability:S.a.arrayOf(S.a.string).isRequired,battery:S.a.shape({standbyTime:S.a.string,talkTime:S.a.string,type:S.a.string}).isRequired,camera:S.a.shape({features:S.a.arrayOf(S.a.string),primary:S.a.string}).isRequired,connectivity:S.a.shape({bluetooth:S.a.string,cell:S.a.string,gps:S.a.bool,infrared:S.a.bool,wifi:S.a.string}).isRequired,description:S.a.string.isRequired,display:S.a.shape({screenResolution:S.a.string,screenSize:S.a.string,touchScreen:S.a.bool}).isRequired,hardware:S.a.shape({accelerometer:S.a.bool,audioJack:S.a.string,cpu:S.a.string,fmRadio:S.a.bool,physicalKeyboard:S.a.bool,usb:S.a.string}).isRequired,id:S.a.string.isRequired,images:S.a.arrayOf(S.a.string).isRequired,name:S.a.string.isRequired,sizeAndWeight:S.a.shape({dimensions:S.a.arrayOf(S.a.string),weight:S.a.string}).isRequired,storage:S.a.shape({flash:S.a.string,ram:S.a.string}).isRequired}),S.a.arrayOf(S.a.shape({age:S.a.number,id:S.a.string,imageUrl:S.a.string,name:S.a.string,snippet:S.a.string}).isRequired).isRequired,function(e){var a=e.phones;return r.a.createElement("div",{className:"content-heading"},r.a.createElement("h1",{className:"content-heading__title"},"Phone Catalog"),r.a.createElement("p",{className:"content-heading__count"},"".concat(a.length," models")))}),k=t(48),j=t(13),R=t(27),T="https://mate-academy.github.io/phone-catalogue-static/api/phones",D=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I={phones:[],isFetching:!1},q=function(){return function(e){e(D(!0)),R.get("".concat(T,".json")).then((function(e){return e.data})).then((function(a){e(D(!1)),e({type:"SET_PHONES",phones:a})}))}},x=(t(83),t(84),function(e){var a=e.imageUrl,t=e.name,n=e.id,c=e.snippet;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a,alt:"/",className:"card__product-img"}),r.a.createElement(l.b,{to:"/phones/".concat(n),className:"card__link"},t),r.a.createElement("p",{className:"card__price"},r.a.createElement("span",{className:"card__price-new"},"$799"),r.a.createElement("span",{className:"card__price-old"},"$899")),r.a.createElement("div",{className:"card__product-details"},r.a.createElement("p",{className:"card__snippet"},c)),r.a.createElement("div",{className:"card__buttons"},r.a.createElement("button",{className:"card__add-to-cart",type:"button"},"Add to cart"),r.a.createElement("button",{className:"card__favorite",type:"button"},r.a.createElement("img",{src:m.a,alt:"favorite icon",className:"card__favorite-icon"})," "))))}),A=function(e){var a=e.phones;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"catalog"},r.a.createElement("ul",{className:"catalog__product-list"},a.map((function(e){return r.a.createElement("li",{key:e.age,className:"catalog__product-item"},r.a.createElement(x,e))})))))},C=t(46),G=t.n(C),H=(t(85),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:G.a,alt:"preloader",className:"preloader"}))}),L=(t(86),function(e){var a=e.handleInput,t=e.query,n=e.select,c=e.handleSelect;return r.a.createElement("div",{className:"filter"},r.a.createElement("form",{className:"filter__search-form search-form"},r.a.createElement("label",{htmlFor:"search-form",className:"search-form__label"},"Search",r.a.createElement("input",{type:"text",className:"search-form__input",value:t,onChange:a,id:"search-form"}))),r.a.createElement("form",{className:"filter__sort sort"},r.a.createElement("label",{htmlFor:"sort",className:"sort__label"},"Sort by",r.a.createElement("select",{className:"sort__select",id:"sort",value:n,onChange:c},r.a.createElement("option",{value:"default",className:"sort__select-list"},"default"),r.a.createElement("option",{value:"name",className:"sort__select-list"},"Name"),r.a.createElement("option",{value:"age",className:"sort__select-list"},"Newest")))))}),M=function(e){Object(F.a)(t,e);var a=Object(O.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={query:"",select:"default"},e.handleInput=function(a){var t=a.target.value;e.setState({query:t.toLowerCase()})},e.handleSelect=function(a){var t=a.target.value;e.setState({select:t})},e.getFilteredPhones=function(e,a){return e.filter((function(e){return e.name.toLowerCase().includes(a)||e.snippet.toLowerCase().includes(a)}))},e.getSortedPhones=function(e,a){switch(a){case"name":return e.sort((function(e,a){return e.name.localeCompare(a.name)}));case"age":return e.sort((function(e,a){return a.age-e.age}));default:return e}},e}return Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getPhonesThunk()}},{key:"render",value:function(){var e=this.state,a=e.query,t=e.select,n=this.props.phones,c=this.getFilteredPhones(n,a),s=this.getSortedPhones(c,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{phones:c}),r.a.createElement(L,{handleInput:this.handleInput,handleSelect:this.handleSelect,query:a,select:t}),this.props.isFetching?r.a.createElement(H,null):null,r.a.createElement(A,{phones:s}))}}]),t}(r.a.Component),U=Object(o.b)((function(e){return{phones:e.phonesPage.phones,isFetching:e.phonesPage.isFetching}}),(function(e){return{getPhonesThunk:function(){return e(q())}}}))(M),B=(t(38),t(39),t(40),t(49)),z=function(e){var a=e.details,t=Object(n.useState)(0),c=Object(B.a)(t,2),s=c[0],l=c[1],o=function(e){e.preventDefault();var a=e.target.currentSrc.slice(-5,-4);l(a)};return r.a.createElement("div",{className:"phoneDetails__slider slider"},r.a.createElement("ul",{className:"slider__list"},a.images.map((function(e){return r.a.createElement("li",{key:e,className:"slider__item"},r.a.createElement("a",{href:"/",onClick:o},r.a.createElement("img",{src:e,alt:"motorola-xoom",className:"slider__images"})))}))),r.a.createElement("div",{className:"slider__image"},r.a.createElement("img",{src:a.images[s],alt:"motorola-xoom"})))},$=function(e){var a=e.details;return null===a?null:void 0===a?r.a.createElement(b,null):r.a.createElement("div",{className:"phoneDetails"},r.a.createElement("p",null,"PhonesDetails"),r.a.createElement("h1",{className:"phoneDetails__title"},a.name),r.a.createElement("div",{className:"phoneDetails__heading"},r.a.createElement(z,{details:a}),r.a.createElement("div",{className:"phoneDetails__order order"},r.a.createElement("div",{className:"order__colors"},r.a.createElement("p",{className:"order__colors-heading"},"Available colors"),r.a.createElement("ul",{className:"order__colors-list"},r.a.createElement("li",{className:"order__colors-item"},r.a.createElement("button",{className:"order__colors-button",type:"button"})),r.a.createElement("li",{className:"order__colors-item"},r.a.createElement("button",{className:"order__colors-button colors__button--1",type:"button"})),r.a.createElement("li",{className:"order__colors-item"},r.a.createElement("button",{className:"order__colors-button colors__button--2",type:"button"})),r.a.createElement("li",{className:"order__colors-item"},r.a.createElement("button",{className:"order__colors-button colors__button--3",type:"button"})))),r.a.createElement("div",{className:"order__capacity"},r.a.createElement("p",{className:"order__capacity-heading"},"Select capacity"),r.a.createElement("button",{className:"order__capacity-button",type:"button"},"64 GB"),r.a.createElement("button",{className:"order__capacity-button",type:"button"},"256 GB"),r.a.createElement("button",{className:"order__capacity-button",type:"button"},"512 GB")),r.a.createElement("p",{className:"order__price"},r.a.createElement("span",{className:"order__price-new"},"$799"),r.a.createElement("span",{className:"order__price-old"},"$899")),r.a.createElement("div",{className:"order__buttons"},r.a.createElement("button",{className:"order__add-to-cart",type:"button"},"Add to cart"),r.a.createElement("button",{className:"order__favorite",type:"button"},r.a.createElement("img",{src:m.a,alt:"favorite icon",className:"order__favorite-icon"})," ")),r.a.createElement("div",{className:"order__product-details"},r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Screen"),r.a.createElement("span",{className:"product-details__value"},a.display.screenSize)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Resolution"),r.a.createElement("span",{className:"product-details__value"},a.display.screenResolution)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Processor"),r.a.createElement("span",{className:"product-details__value"},a.hardware.cpu)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"RAM"),r.a.createElement("span",{className:"product-details__value"},a.storage.ram))))),r.a.createElement("div",{className:"additionalDetails"},r.a.createElement("div",{className:"phoneDetails__about about"},r.a.createElement("h2",{className:"about__heading"},"About"),r.a.createElement("h3",{className:"about__title"},"Description"),r.a.createElement("p",{className:"about__value"},a.description),r.a.createElement("h3",{className:"about__title"},"Additional features"),r.a.createElement("p",{className:"about__value"},a.additionalFeatures)),r.a.createElement("div",{className:"phoneDetails__tech-specs tech-specs"},r.a.createElement("h2",{className:"tech-specs__heading"},"Tech specs"),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Screen"),r.a.createElement("span",{className:"product-details__value"},a.display.screenSize)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Resolution"),r.a.createElement("span",{className:"product-details__value"},a.display.screenResolution)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Processor"),r.a.createElement("span",{className:"product-details__value"},a.hardware.cpu)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"RAM"),r.a.createElement("span",{className:"product-details__value"},a.storage.ram)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Built in memory"),r.a.createElement("span",{className:"product-details__value"},a.storage.flash)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Camera"),r.a.createElement("span",{className:"product-details__value"},a.camera.primary)),r.a.createElement("p",{className:"product-details"},r.a.createElement("span",{className:"product-details__title"},"Cell"),r.a.createElement("span",{className:"product-details__value"},a.connectivity.cell)))))},J={details:null,isFetching:!1},X=function(e){return function(a){a(D(!0)),function(e){return R.get("".concat(T,"/").concat(e,".json")).then((function(e){return e.data})).catch((function(){}))}(e).then((function(e){a(D(!1)),a({type:"SET_PHONE_DETAILS",details:e})}))}},W=function(e){Object(F.a)(t,e);var a=Object(O.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.phoneId;this.props.getPhoneDetailsThunk(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(H,null):null,r.a.createElement($,{details:this.props.details}))}}]),t}(r.a.Component),K=Object(E.f)(W),Y=Object(o.b)((function(e){return{details:e.phoneDetailsPage.details,isFetching:e.phoneDetailsPage.isFetching}}),(function(e){return{getPhoneDetailsThunk:function(a){e(X(a))}}}))(K),Q=(t(41),function(e){var a=e.age,t=(e.id,e.imageUrl),n=e.name;return r.a.createElement("div",null,r.a.createElement("span",{className:"cartItem__id"},"ID: ".concat(a)),r.a.createElement("img",{src:t,alt:"phone",className:"cartItem__image"}),r.a.createElement("span",{className:"cartItem__name"},n))}),V=function(e){var a=e.addedPhones,t=799*a.length;return r.a.createElement("div",{className:"cart"},r.a.createElement("h1",{className:"cart__heading"},"Cart"),r.a.createElement("div",{className:"cart__content"},r.a.createElement("ul",{className:"cart__list"},a.map((function(e){return r.a.createElement("li",{className:"cart__item",key:e.id},r.a.createElement(Q,e))}))),r.a.createElement("div",{className:"cart__totalCount"},t)))},Z=Object(o.b)((function(e){return{addedPhones:e.cartPage.addedPhones}}))((function(e){var a=e.addedPhones;return r.a.createElement(V,{addedPhones:a})})),ee=function(){return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",component:g,exact:!0}),r.a.createElement(E.a,{path:"/phones",component:U,exact:!0}),r.a.createElement(E.a,{path:"/tablets",component:N}),r.a.createElement(E.a,{path:"/accessories",component:f}),r.a.createElement(E.a,{path:"/basket",component:Z}),r.a.createElement(E.a,{path:"/phones/:phoneId",component:Y}),r.a.createElement(E.a,{component:b})))},ae=function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(h,null),r.a.createElement(ee,null))},te=t(12),ne=t(47),re={addedPhones:[{age:0,id:"motorola-xoom-with-wi-fi",imageUrl:"img/phones/motorola-xoom-with-wi-fi.0.jpg",name:"Motorola XOOM\u2122 with Wi-Fi"},{age:1,id:"motorola-xoom",imageUrl:"img/phones/motorola-xoom.0.jpg",name:"MOTOROLA XOOM\u2122"},{age:2,carrier:"AT&T",id:"motorola-atrix-4g",imageUrl:"img/phones/motorola-atrix-4g.0.jpg",name:"MOTOROLA ATRIX\u2122 4G"}]},ce=Object(te.c)({phonesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PHONES":return Object(j.a)({},e,{phones:Object(k.a)(a.phones)});case"TOGGLE_IS_FETCHING":return Object(j.a)({},e,{isFetching:a.isFetching});default:return e}},phoneDetailsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PHONE_DETAILS":return Object(j.a)({},e,{details:a.details});case"TOGGLE_IS_FETCHING":return Object(j.a)({},e,{isFetching:a.isFetching});default:return e}},cartPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re;return e}}),se=Object(te.d)(ce,Object(te.a)(ne.a));window.store=se,s.a.render(r.a.createElement(l.a,null,r.a.createElement(o.a,{store:se},r.a.createElement(ae,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.aa35fe6b.chunk.js.map