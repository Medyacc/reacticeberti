import{a as c,u,j as r}from"./index-vl9lfWER.js";function p({text:s,maxLength:e}){const[t,n]=c.useState(!1),o=s.length>e?s.substring(0,e)+"...":s,{t:a}=u();return r.jsxs("p",{className:"truncatedtext",children:[t?s:o,s.length>e&&r.jsx("span",{className:"toggle-text",onClick:()=>n(!t),children:a(t?"purewater.showless":"purewater.readmore")})]})}export{p as T};
