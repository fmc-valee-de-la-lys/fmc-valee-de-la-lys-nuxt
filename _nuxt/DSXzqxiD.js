import{d,a5 as l,K as f,m as v,G as p,a6 as m,a7 as g,a2 as h,a4 as r,C as y}from"./NGbWuDik.js";import{u as _}from"./_2wdRuZ1.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=l(u),n=f(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&v("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await _(`content-navigation-${g(n.value)}`,()=>m(n.value));return{navigation:o}},render(u){const a=h(),{navigation:n}=u,o=e=>r(y,{to:e._path},()=>e.title),t=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),t(s.children,i+1)]):r("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};
