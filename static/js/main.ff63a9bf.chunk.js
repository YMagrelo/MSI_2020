(this.webpackJsonpreact_sum=this.webpackJsonpreact_sum||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/favorite.e977fb9e.svg"},24:function(e,t,a){e.exports=a(39)},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=a(1),s=(a(9),a(23)),l=a(3),u="https://api.chucknorris.io/jokes/",m={randomJoke:null,favoriteJokes:[],categories:[],searchJokes:[]},d=function(e){return{type:"SET_RANDOM_JOKE",payload:e}},_=function(e){return{type:"SET_FAVORITE_JOKE",payload:e}},f=function(e){return{type:"DELETE_FROM_FAVORITE",payload:e}},v=function(){return function(e){fetch("".concat(u,"random")).then((function(e){return e.json()})).then((function(t){e(d(t))}))}},E=function(){return function(e){fetch("".concat(u,"categories")).then((function(e){return e.json()})).then((function(t){e({type:"SET_CATEGORIES",payload:t})}))}},p=function(e){return function(t){(function(e){return fetch("".concat(u,"random?category=").concat(e)).then((function(e){return e.json()}))})(e).then((function(e){t(d(e))}))}},k=function(e){return function(t){(function(e){return fetch("".concat(u,"search?query=").concat(e)).then((function(e){return e.json()}))})(e).then((function(e){400!==e.status&&t({type:"SET_SEARCH_JOKES",payload:e.result})}))}},h=(a(4),a(12)),g=a.n(h),N=a(6),b=a.n(N),j=a(7),J=a.n(j),O=function(e,t){return(t-e)/1e3/60/60},y=Object(i.b)((function(e){return{randomJoke:e.randomJoke,favoriteJokes:e.favoriteJokes}}),(function(e){return{deleteFavorite:function(t){return e(f(t))},setFavorite:function(t){return e(_(t))}}}))((function(e){var t=e.randomJoke,a=e.setFavorite,n=e.deleteFavorite,o=e.favoriteJokes,c=new Date(t.updated_at),i=new Date,s=O(c,i);return r.a.createElement("div",{className:"randomizer__content content"},r.a.createElement("div",{className:"content__addToFavorite-wrapper"},o.includes(t)?r.a.createElement("button",{type:"button",className:"content__addToFavorite",onClick:function(){n(t.id)}},r.a.createElement("img",{src:b.a,alt:"remove from favorite"})):r.a.createElement("button",{type:"button",className:"content__addToFavorite",onClick:function(){a(t)}},r.a.createElement("img",{src:g.a,alt:"add to favorite"}))),r.a.createElement("div",{className:"content__item-container"},r.a.createElement("div",{className:"content__textIcon-wrapper"},r.a.createElement("img",{src:J.a,alt:"joke item icon",className:"content__textIcon"})),r.a.createElement("div",{className:"content__joke joke"},r.a.createElement("div",{className:"joke__id-wrapper"},r.a.createElement("span",{className:"joke__id-title"},"ID: "),r.a.createElement("a",{href:t.url,className:"joke__id-link",target:"_blank",rel:"noopener noreferrer"},t.id)),r.a.createElement("div",{className:"joke__value"},t.value),r.a.createElement("div",{className:"joke__footer"},r.a.createElement("div",{className:"joke__date"},"Last update: ".concat(s.toFixed()," hours ago")),r.a.createElement("div",{className:"joke__categories"},t.categories.length?t.categories:null)))))})),F=a(2),C=(a(35),Object(i.b)((function(e){return{categories:e.categories,searchJokes:e.searchJokes}}),(function(e){return{setCategories:function(){return e(E())},setSearchJoke:function(t){return e(k(t))},clearSearch:function(){return e({type:"CLEAR_SEARCH"})}}}))((function(e){var t=e.categories,a=e.setCategories,o=e.getRandomJoke,c=e.setJokeFromCategories,i=e.setSearchJoke,s=e.clearSearch,l=Object(n.useState)("random"),u=Object(F.a)(l,2),m=u[0],d=u[1],_=Object(n.useState)(""),f=Object(F.a)(_,2),v=f[0],E=f[1],p=Object(n.useState)(""),k=Object(F.a)(p,2),h=k[0],g=k[1],N=Object(n.useState)(!1),b=Object(F.a)(N,2),j=b[0],J=b[1];Object(n.useEffect)((function(){a()}));var O=function(e){var t=e.target.value;d(t),E("")},y=function(e){var t=e.target.innerHTML;E(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"radio__list"},r.a.createElement("div",{className:"radio__item"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"random",checked:"random"===m,onChange:O}),r.a.createElement("span",{className:"radio__text"},"Random"))),r.a.createElement("div",{className:"radio__item"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"categories",checked:"categories"===m,onChange:O}),r.a.createElement("span",{className:"radio__text"},"From categories")),"categories"===m?r.a.createElement("div",{className:"categories__list"},t.map((function(e){return r.a.createElement("button",{type:"button",className:"categories__item",onClick:y,key:e},e)}))):null),r.a.createElement("div",{className:"radio__item"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"search",checked:"search"===m,onChange:O}),r.a.createElement("span",{className:"radio__text"},"Search")),"search"===m?r.a.createElement("div",{className:"radio__form"},r.a.createElement("input",{className:"radio__input",placeholder:"Free text search...",value:h,onChange:function(e){var t=e.target.value;J(!0),g(t),i(h),h.length<=3&&s(),h.length>=3&&J(!1)}}),j?r.a.createElement("span",{className:"radio__input-error"},"input must be more than 3 characters"):null):null)),r.a.createElement("button",{type:"button",className:"radio__button",onClick:function(){return""===v?o():c(v)}},"Get a joke"))}))),S=(a(36),Object(i.b)((function(e){return{searchJokes:e.searchJokes,favoriteJokes:e.favoriteJokes}}),(function(e){return{deleteFavorite:function(t){return e(f(t))},setFavorite:function(t){return e(_(t))}}}))((function(e){var t=e.searchJokes,a=e.setFavorite,n=e.favoriteJokes,o=e.deleteFavorite;return r.a.createElement("div",null,t.map((function(e){var c=new Date(e.updated_at),i=new Date,s=O(c,i),l=e.id;return r.a.createElement("div",{className:"randomizer__content search",key:e.id},r.a.createElement("div",{className:"search__addToFavorite-wrapper"},n.includes(e)?r.a.createElement("button",{type:"button",className:"content__addToFavorite",onClick:function(){return function(e){o(e)}(l)}},r.a.createElement("img",{src:b.a,alt:"remove from favorite"})):r.a.createElement("button",{type:"button",className:"content__addToFavorite",onClick:function(){return function(e){var n=t.find((function(t){return t.id===e}));a(n)}(l)}},r.a.createElement("img",{src:g.a,alt:"add to favorite"}))),r.a.createElement("div",{className:"search__item-container"},r.a.createElement("div",{className:"search__textIcon-wrapper"},r.a.createElement("img",{src:J.a,alt:"joke item icon",className:"search__textIcon"})),r.a.createElement("div",{className:"search__joke joke"},r.a.createElement("div",{className:"joke__id-wrapper"},r.a.createElement("span",{className:"joke__id-title"},"ID:"),r.a.createElement("a",{href:e.url,className:"joke__id-link",target:"_blank",rel:"noopener noreferrer"},e.id)),r.a.createElement("div",{className:"joke__value"},e.value),r.a.createElement("div",{className:"joke__footer"},r.a.createElement("div",{className:"joke__date"},"Last update: ".concat(s.toFixed()," hours ago")),r.a.createElement("div",{className:"joke__categories"},e.categories.length?e.categories:null)))))})))}))),T=a(17);function w(){var e=Object(T.a)(["\nposition: relative;\n  div {\n    transition: all 0.3s linear;\n    position: absolut;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n\n"]);return w=function(){return e},e}var R=a(18).a.div(w(),(function(e){return e.open?"rotate(45deg)":"rotate(0deg)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0deg)"})),x=function(){var e=Object(n.useState)(!1),t=Object(F.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"burger"},r.a.createElement(R,{className:"burger__outter",onClick:function(){return o(!a)},open:a},r.a.createElement("div",{className:"burger__inner"}),r.a.createElement("div",{className:"burger__inner"})),r.a.createElement("div",{className:"burger__title"},"Favourite"))},I=Object(i.b)((function(e){return{randomJoke:e.randomJoke,searchJokes:e.searchJokes}}),(function(e){return{getRandomJoke:function(){return e(v())},setJokeFromCategories:function(t){return e(p(t))}}}))((function(e){var t=e.getRandomJoke,a=e.randomJoke,n=e.setJokeFromCategories,o=e.searchJokes;return r.a.createElement("div",{className:"randomizer"},r.a.createElement("h1",{className:"randomizer__heading"},"Chuck Norris facts"),r.a.createElement("div",{className:"randomizer__burger"},r.a.createElement(x,null)),r.a.createElement("p",{className:"randomizer__title"},"Hey!"),r.a.createElement("p",{className:"randomizer__underTitle"},"Let\u2019s try to find a joke for you:"),r.a.createElement(C,{getRandomJoke:t,setJokeFromCategories:n}),null===a?null:r.a.createElement(y,null),o.length?r.a.createElement(S,null):null)})),A=(a(38),Object(i.b)((function(e){return{favoriteJokes:e.favoriteJokes}}),(function(e){return{deleteFavorite:function(t){return e(f(t))}}}))((function(e){var t=e.favoriteJokes,a=e.deleteFavorite;return r.a.createElement("div",{className:"favorite"},r.a.createElement("h2",{className:"favorite__title"},"Favourite"),t.map((function(e){var t=new Date(e.updated_at),n=new Date,o=O(t,n);return r.a.createElement("div",{className:"favorite__content content-favourite",key:e.id},r.a.createElement("div",{className:"content-favourite__addToFavorite-wrapper"},r.a.createElement("button",{type:"button",className:"content-favourite__addToFavorite",onClick:function(){a(e.id)}},r.a.createElement("img",{src:b.a,alt:"remove from favorites"}))),r.a.createElement("div",{className:"content-favourite__item-container"},r.a.createElement("div",{className:"content-favourite__textIcon-container"},r.a.createElement("img",{src:J.a,alt:"joke item icon",className:"content-favourite__textIcon"})),r.a.createElement("div",{className:"content-favourite__joke joke"},r.a.createElement("div",{className:"joke__id-wrapper"},r.a.createElement("span",{className:"joke__id-title"},"ID:"),r.a.createElement("a",{href:e.url,className:"joke__id-link",target:"_blank",rel:"noopener noreferrer"},e.id)),r.a.createElement("div",{className:"joke__value"},e.value),r.a.createElement("div",{className:"joke__footer"},r.a.createElement("div",{className:"joke__date"},"Last update: ".concat(o.toFixed()," hours ago"))))))})))}))),D=function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"app-wrapper__content"},r.a.createElement(I,null)),r.a.createElement("div",{className:"app-wrapper__favorite"},r.a.createElement(A,null)))},L=a(10),z=a(22),H=Object(L.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RANDOM_JOKE":return Object(l.a)({},e,{randomJoke:t.payload});case"SET_SEARCH_JOKES":return Object(l.a)({},e,{searchJokes:t.payload});case"CLEAR_SEARCH":return Object(l.a)({},e,{searchJokes:[]});case"SET_FAVORITE_JOKE":return Object(l.a)({},e,{favoriteJokes:[].concat(Object(s.a)(e.favoriteJokes),[t.payload])});case"DELETE_FROM_FAVORITE":return Object(l.a)({},e,{favoriteJokes:e.favoriteJokes.filter((function(e){return e.id!==t.payload}))});case"SET_CATEGORIES":return Object(l.a)({},e,{categories:t.payload});default:return e}}),Object(L.a)(z.a));window.store=H,c.a.render(r.a.createElement(i.a,{store:H},r.a.createElement(D,null)),document.getElementById("root"))},4:function(e,t,a){},6:function(e,t,a){e.exports=a.p+"static/media/heart.0865c832.svg"},7:function(e,t,a){e.exports=a.p+"static/media/message.ee31211c.svg"},9:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.ff63a9bf.chunk.js.map