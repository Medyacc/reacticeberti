import{r as n,i,j as t,a as u}from"./index-CqLxAWfW.js";var r={},c=i;Object.defineProperty(r,"__esModule",{value:!0});var a=r.default=void 0,d=c(n()),s=t;a=r.default=(0,d.default)([(0,s.jsx)("path",{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},"0"),(0,s.jsx)("path",{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},"1")],"KeyboardDoubleArrowUp");function v(){return u.useEffect(()=>{const e=document.querySelector(".upButton"),o=()=>{window.scrollY>=100?e.style.display="block":e.style.display="none"},l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",o),e.addEventListener("click",l),()=>{window.removeEventListener("scroll",o),e.removeEventListener("click",l)}},[]),t.jsx("div",{className:"upButton",children:t.jsx(a,{className:"scrollBtn"})})}export{v as default};
