import{a as j,r as ie,i as se,j as g,u as oe}from"./index-mGjK8KDp.js";import{e as ae,c as re,m as y,S as ce,a as le}from"./swiper-DjjpGCfs.js";function de(e,t,s,i){return e.params.createElements&&Object.keys(i).forEach(n=>{if(!s[n]&&s.auto===!0){let o=ae(e.el,`.${i[n]}`)[0];o||(o=re("div",i[n]),o.className=i[n],e.el.append(o)),s[n]=o,t[n]=o}}),s}function ue(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(r){let a;return r&&typeof r=="string"&&t.isElement&&(a=t.el.querySelector(r),a)?a:(r&&(typeof r=="string"&&(a=[...document.querySelectorAll(r)]),t.params.uniqueNavElements&&typeof r=="string"&&a&&a.length>1&&t.el.querySelectorAll(r).length===1?a=t.el.querySelector(r):a&&a.length===1&&(a=a[0])),r&&!a?r:a)}function c(r,a){const u=t.params.navigation;r=y(r),r.forEach(d=>{d&&(d.classList[a?"add":"remove"](...u.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=a),t.params.watchOverflow&&t.enabled&&d.classList[t.isLocked?"add":"remove"](u.lockClass))})}function l(){const{nextEl:r,prevEl:a}=t.navigation;if(t.params.loop){c(a,!1),c(r,!1);return}c(a,t.isBeginning&&!t.params.rewind),c(r,t.isEnd&&!t.params.rewind)}function f(r){r.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),n("navigationPrev"))}function v(r){r.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),n("navigationNext"))}function p(){const r=t.params.navigation;if(t.params.navigation=de(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(r.nextEl||r.prevEl))return;let a=o(r.nextEl),u=o(r.prevEl);Object.assign(t.navigation,{nextEl:a,prevEl:u}),a=y(a),u=y(u);const d=(b,B)=>{b&&b.addEventListener("click",B==="next"?v:f),!t.enabled&&b&&b.classList.add(...r.lockClass.split(" "))};a.forEach(b=>d(b,"next")),u.forEach(b=>d(b,"prev"))}function h(){let{nextEl:r,prevEl:a}=t.navigation;r=y(r),a=y(a);const u=(d,b)=>{d.removeEventListener("click",b==="next"?v:f),d.classList.remove(...t.params.navigation.disabledClass.split(" "))};r.forEach(d=>u(d,"next")),a.forEach(d=>u(d,"prev"))}i("init",()=>{t.params.navigation.enabled===!1?E():(p(),l())}),i("toEdge fromEdge lock unlock",()=>{l()}),i("destroy",()=>{h()}),i("enable disable",()=>{let{nextEl:r,prevEl:a}=t.navigation;if(r=y(r),a=y(a),t.enabled){l();return}[...r,...a].filter(u=>!!u).forEach(u=>u.classList.add(t.params.navigation.lockClass))}),i("click",(r,a)=>{let{nextEl:u,prevEl:d}=t.navigation;u=y(u),d=y(d);const b=a.target;let B=d.includes(b)||u.includes(b);if(t.isElement&&!B){const M=a.path||a.composedPath&&a.composedPath();M&&(B=M.find(O=>u.includes(O)||d.includes(O)))}if(t.params.navigation.hideOnClick&&!B){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===b||t.pagination.el.contains(b)))return;let M;u.length?M=u[0].classList.contains(t.params.navigation.hiddenClass):d.length&&(M=d[0].classList.contains(t.params.navigation.hiddenClass)),n(M===!0?"navigationShow":"navigationHide"),[...u,...d].filter(O=>!!O).forEach(O=>O.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),l()},E=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:m,disable:E,update:l,init:p,destroy:h})}const fe="/reacticeberti/images/products/milkshak.webp",pe="/reacticeberti/images/products/juice.webp",me="/reacticeberti/images/products/cocktail.webp",ge="/reacticeberti/images/products/icecream.webp",he="/reacticeberti/images/products/hotdrinks.webp",ve="/reacticeberti/images/products/colddrinks.webp",be="/reacticeberti/images/products/smoothies.webp",we="/reacticeberti/images/products/milkshakebg.webp",Ee="/reacticeberti/images/products/juicesbg.webp",xe="/reacticeberti/images/products/cocktailsbg.webp",ye="/reacticeberti/images/products/icecreambg.webp",ke="/reacticeberti/images/products/hotdrinksbg.webp",Ce="/reacticeberti/images/products/colddrinkbg.webp",je="/reacticeberti/images/products/smoothiesbg.webp",J=new Set,w=new WeakMap,T=new WeakMap,N=new WeakMap,z=new WeakMap,Ne=new WeakMap,P=new WeakMap,D=new WeakMap,W=new WeakSet;let C,X=0,Y=0;const k="__aa_tgt",_="__aa_del",R="__aa_new",Se=e=>{const t=Ie(e);t&&t.forEach(s=>Be(s))},Me=e=>{e.forEach(t=>{t.target===C&&Le(),w.has(t.target)&&S(t.target)})};function Oe(e){const t=z.get(e);t==null||t.disconnect();let s=w.get(e),i=0;const n=5;s||(s=I(e),w.set(e,s));const{offsetWidth:o,offsetHeight:c}=C,f=[s.top-n,o-(s.left+n+s.width),c-(s.top+n+s.height),s.left-n].map(p=>`${-1*Math.floor(p)}px`).join(" "),v=new IntersectionObserver(()=>{++i>1&&S(e)},{root:C,threshold:1,rootMargin:f});v.observe(e),z.set(e,v)}function S(e){clearTimeout(D.get(e));const t=$(e),s=A(t)?500:t.duration;D.set(e,setTimeout(async()=>{const i=N.get(e);try{await(i==null?void 0:i.finished),w.set(e,I(e)),Oe(e)}catch{}},s))}function Le(){clearTimeout(D.get(C)),D.set(C,setTimeout(()=>{J.forEach(e=>te(e,t=>K(()=>S(t))))},100))}function Te(e){setTimeout(()=>{Ne.set(e,setInterval(()=>K(S.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function K(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let H,L;const Pe=typeof window<"u"&&"ResizeObserver"in window;Pe&&(C=document.documentElement,H=new MutationObserver(Se),L=new ResizeObserver(Me),window.addEventListener("scroll",()=>{Y=window.scrollY,X=window.scrollX}),L.observe(C));function Ie(e){return e.reduce((i,n)=>[...i,...Array.from(n.addedNodes),...Array.from(n.removedNodes)],[]).every(i=>i.nodeName==="#comment")?!1:e.reduce((i,n)=>{if(i===!1)return!1;if(n.target instanceof Element){if(q(n.target),!i.has(n.target)){i.add(n.target);for(let o=0;o<n.target.children.length;o++){const c=n.target.children.item(o);if(c){if(_ in c)return!1;q(n.target,c),i.add(c)}}}if(n.removedNodes.length)for(let o=0;o<n.removedNodes.length;o++){const c=n.removedNodes[o];if(_ in c)return!1;c instanceof Element&&(i.add(c),q(n.target,c),T.set(c,[n.previousSibling,n.nextSibling]))}}return i},new Set)}function q(e,t){!t&&!(k in e)?Object.defineProperty(e,k,{value:e}):t&&!(k in t)&&Object.defineProperty(t,k,{value:e})}function Be(e){var t;const s=e.isConnected,i=w.has(e);s&&T.has(e)&&T.delete(e),N.has(e)&&((t=N.get(e))===null||t===void 0||t.cancel()),R in e?G(e):i&&s?_e(e):i&&!s?Ae(e):G(e)}function x(e){return Number(e.replace(/[^0-9.\-]/g,""))}function We(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function I(e){const t=e.getBoundingClientRect(),{x:s,y:i}=We(e);return{top:t.top+i,left:t.left+s,width:t.width,height:t.height}}function Z(e,t,s){let i=t.width,n=t.height,o=s.width,c=s.height;const l=getComputedStyle(e);if(l.getPropertyValue("box-sizing")==="content-box"){const v=x(l.paddingTop)+x(l.paddingBottom)+x(l.borderTopWidth)+x(l.borderBottomWidth),p=x(l.paddingLeft)+x(l.paddingRight)+x(l.borderRightWidth)+x(l.borderLeftWidth);i-=p,o-=p,n-=v,c-=v}return[i,o,n,c].map(Math.round)}function $(e){return k in e&&P.has(e[k])?P.get(e[k]):{duration:250,easing:"ease-in-out"}}function ee(e){if(k in e)return e[k]}function F(e){const t=ee(e);return t?W.has(t):!1}function te(e,...t){t.forEach(s=>s(e,P.has(e)));for(let s=0;s<e.children.length;s++){const i=e.children.item(s);i&&t.forEach(n=>n(i,P.has(i)))}}function V(e){return Array.isArray(e)?e:[e]}function A(e){return typeof e=="function"}function _e(e){const t=w.get(e),s=I(e);if(!F(e))return w.set(e,s);let i;if(!t)return;const n=$(e);if(typeof n!="function"){const o=t.left-s.left,c=t.top-s.top,[l,f,v,p]=Z(e,t,s),h={transform:`translate(${o}px, ${c}px)`},m={transform:"translate(0, 0)"};l!==f&&(h.width=`${l}px`,m.width=`${f}px`),v!==p&&(h.height=`${v}px`,m.height=`${p}px`),i=e.animate([h,m],{duration:n.duration,easing:n.easing})}else{const[o]=V(n(e,"remain",t,s));i=new Animation(o),i.play()}N.set(e,i),w.set(e,s),i.addEventListener("finish",S.bind(null,e))}function G(e){R in e&&delete e[R];const t=I(e);w.set(e,t);const s=$(e);if(!F(e))return;let i;if(typeof s!="function")i=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:s.duration*1.5,easing:"ease-in"});else{const[n]=V(s(e,"add",t));i=new Animation(n),i.play()}N.set(e,i),i.addEventListener("finish",S.bind(null,e))}function Q(e,t){var s;e.remove(),w.delete(e),T.delete(e),N.delete(e),(s=z.get(e))===null||s===void 0||s.disconnect(),setTimeout(()=>{if(_ in e&&delete e[_],Object.defineProperty(e,R,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const i in t)e.style[i]=""},0)}function Ae(e){var t;if(!T.has(e)||!w.has(e))return;const[s,i]=T.get(e);Object.defineProperty(e,_,{value:!0,configurable:!0});const n=window.scrollX,o=window.scrollY;if(i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(e,i):s&&s.parentNode?s.parentNode.appendChild(e):(t=ee(e))===null||t===void 0||t.appendChild(e),!F(e))return Q(e);const[c,l,f,v]=Re(e),p=$(e),h=w.get(e);(n!==X||o!==Y)&&De(e,n,o,p);let m,E={position:"absolute",top:`${c}px`,left:`${l}px`,width:`${f}px`,height:`${v}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!A(p))Object.assign(e.style,E),m=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:p.duration,easing:"ease-out"});else{const[r,a]=V(p(e,"remove",h));(a==null?void 0:a.styleReset)!==!1&&(E=(a==null?void 0:a.styleReset)||E,Object.assign(e.style,E)),m=new Animation(r),m.play()}N.set(e,m),m.addEventListener("finish",Q.bind(null,e,E))}function De(e,t,s,i){const n=X-t,o=Y-s,c=document.documentElement.style.scrollBehavior;if(getComputedStyle(C).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+n,window.scrollY+o),!e.parentElement)return;const f=e.parentElement;let v=f.clientHeight,p=f.clientWidth;const h=performance.now();function m(){requestAnimationFrame(()=>{if(!A(i)){const E=v-f.clientHeight,r=p-f.clientWidth;h+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-r,top:window.scrollY-E}),v=f.clientHeight,p=f.clientWidth,m()):document.documentElement.style.scrollBehavior=c}})}m()}function Re(e){const t=w.get(e),[s,,i]=Z(e,t,I(e));let n=e.parentElement;for(;n&&(getComputedStyle(n).position==="static"||n instanceof HTMLBodyElement);)n=n.parentElement;n||(n=document.body);const o=getComputedStyle(n),c=w.get(n)||I(n),l=Math.round(t.top-c.top)-x(o.borderTopWidth),f=Math.round(t.left-c.left)-x(o.borderLeftWidth);return[l,f,s,i]}function $e(e,t={}){return H&&L&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!A(t)&&!t.disrespectUserMotionPreference||(W.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),te(e,S,Te,n=>L==null?void 0:L.observe(n)),A(t)?P.set(e,t):P.set(e,{duration:250,easing:"ease-in-out",...t}),H.observe(e,{childList:!0}),J.add(e))),Object.freeze({parent:e,enable:()=>{W.add(e)},disable:()=>{W.delete(e)},isEnabled:()=>W.has(e)})}function qe(e){const[t,s]=j.useState(),i=j.useMemo(()=>e,[]),n=j.useCallback(c=>{c instanceof HTMLElement?s($e(c,i)):s(void 0)},[i]),o=j.useCallback(c=>{t&&(c?t.enable():t.disable())},[t]);return[n,o]}var U={},ze=se;Object.defineProperty(U,"__esModule",{value:!0});var ne=U.default=void 0,He=ze(ie()),Xe=g;ne=U.default=(0,He.default)((0,Xe.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function Ye({menuProducts:e,selectedCategory:t}){const[s]=qe(),i=e.filter(n=>n.name===t.name);return g.jsx("div",{className:"productsmenu",children:g.jsx("div",{className:"boxMenu",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"productMenu",ref:s,children:[g.jsx("img",{src:t.bg,alt:""}),g.jsx("div",{className:"productInfo",children:i.map((n,o)=>g.jsx("div",{children:g.jsxs("p",{children:[g.jsx(ne,{className:"starIcon"}),n.detail]})},o))})]})})})})}function Ue(){const[e,t]=j.useState(0),[s,i]=j.useState("coffee"),n=j.useRef(null),{t:o}=oe(),c=[{name:o("swipermenu.hotDrinks"),img:he,category:{name:"hotdrinks",bg:ke}},{name:o("swipermenu.juices"),img:pe,category:{name:"juice",bg:Ee}},{name:o("swipermenu.milkshake"),img:fe,category:{name:"milkshake",bg:we}},{name:o("swipermenu.iceCream"),img:ge,category:{name:"icecream",bg:ye}},{name:o("swipermenu.cocktails"),img:me,category:{name:"cocktail",bg:xe}},{name:o("swipermenu.colDrinks"),img:ve,category:{name:"colddrinks",bg:Ce}},{name:o("swipermenu.smoothies"),img:be,category:{name:"smoothies",bg:je}}],l=o("menu.products",{returnObjects:!0}),f=h=>{const m=h.realIndex;t(m),i(c[m].category)},v=()=>{n.current&&n.current.slidePrev()},p=()=>{n.current&&n.current.slideNext()};return g.jsxs("div",{id:"menu",className:"menu",children:[g.jsxs("div",{className:"swiperMenu",children:[g.jsx(ce,{modules:[ue],slidesPerView:3,slidesPerGroup:1,spaceBetween:200,centeredSlides:!0,loop:!0,onSlideChange:f,onSwiper:h=>{n.current=h},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},breakpoints:{0:{slidesPerView:1},500:{slidesPerView:3}},children:c.map((h,m)=>g.jsx(le,{children:g.jsxs("div",{className:`itemMenu ${m===e?"active":""}`,children:[m===e&&g.jsx("img",{src:h.img,alt:""}),g.jsx("p",{"data-text":h.name,children:h.name})]})},m))}),g.jsx("div",{className:"swiper-button-prev",onClick:v}),g.jsx("div",{className:"swiper-button-next",onClick:p})]}),g.jsx(Ye,{menuProducts:l,selectedCategory:s})]})}export{Ue as default};
