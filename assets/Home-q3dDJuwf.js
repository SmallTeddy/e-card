import{u as E,o as ee,n as te,r as $,a as ne,t as de,c as fe,w as P,g as pe,b as ge,d as re,s as me,e as k,f as ve,h as z,i as v,j as _,k as a,l as J,_ as le,m as F,F as R,p as G,q as H,v as _e,x as he,y as be}from"./index-qnjmN--M.js";function K(e){return pe()?(ge(e),!0):!1}function B(e){return typeof e=="function"?e():E(e)}const oe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const we=Object.prototype.toString,ye=e=>we.call(e)==="[object Object]",se=()=>{};function Se(e,n){function t(...l){return new Promise((r,s)=>{Promise.resolve(e(()=>n.apply(this,l),{fn:n,thisArg:this,args:l})).then(r).catch(s)})}return t}const ae=e=>e();function xe(e=ae){const n=$(!0);function t(){n.value=!1}function l(){n.value=!0}const r=(...s)=>{n.value&&e(...s)};return{isActive:ne(n),pause:t,resume:l,eventFilter:r}}function Fe(e){return e||re()}function Ce(...e){if(e.length!==1)return de(...e);const n=e[0];return typeof n=="function"?ne(fe(()=>({get:n,set:se}))):$(n)}function Ee(e,n,t={}){const{eventFilter:l=ae,...r}=t;return P(e,Se(l,n),r)}function ke(e,n,t={}){const{eventFilter:l,...r}=t,{eventFilter:s,pause:u,resume:c,isActive:f}=xe(l);return{stop:Ee(e,n,{...r,eventFilter:s}),pause:u,resume:c,isActive:f}}function ie(e,n=!0,t){const l=Fe(t);l?ee(e,l):n?e():te(e)}function V(e){var n;const t=B(e);return(n=t==null?void 0:t.$el)!=null?n:t}const L=oe?window:void 0,$e=oe?window.document:void 0;function q(...e){let n,t,l,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,l,r]=e,n=L):[n,t,l,r]=e,!n)return se;Array.isArray(t)||(t=[t]),Array.isArray(l)||(l=[l]);const s=[],u=()=>{s.forEach(g=>g()),s.length=0},c=(g,p,x,m)=>(g.addEventListener(p,x,m),()=>g.removeEventListener(p,x,m)),f=P(()=>[V(n),B(r)],([g,p])=>{if(u(),!g)return;const x=ye(p)?{...p}:p;s.push(...t.flatMap(m=>l.map(y=>c(g,m,y,x))))},{immediate:!0,flush:"post"}),b=()=>{f(),u()};return K(b),b}function Me(){const e=$(!1);return re()&&ee(()=>{e.value=!0}),e}function ue(e){const n=Me();return k(()=>(n.value,!!e()))}function ze(e,n={}){const{window:t=L}=n,l=ue(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const s=$(!1),u=b=>{s.value=b.matches},c=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",u):r.removeListener(u))},f=ve(()=>{l.value&&(c(),r=t.matchMedia(B(e)),"addEventListener"in r?r.addEventListener("change",u):r.addListener(u),s.value=r.matches)});return K(()=>{f(),c(),r=void 0}),s}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D="__vueuse_ssr_handlers__",Ie=Ae();function Ae(){return D in j||(j[D]=j[D]||{}),j[D]}function ce(e,n){return Ie[e]||n}function Oe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Le={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},U="vueuse-storage";function Q(e,n,t,l={}){var r;const{flush:s="pre",deep:u=!0,listenToStorageChanges:c=!0,writeDefaults:f=!0,mergeDefaults:b=!1,shallow:g,window:p=L,eventFilter:x,onError:m=i=>{console.error(i)},initOnMounted:y}=l,w=(g?me:$)(typeof n=="function"?n():n);if(!t)try{t=ce("getDefaultStorage",()=>{var i;return(i=L)==null?void 0:i.localStorage})()}catch(i){m(i)}if(!t)return w;const S=B(n),o=Oe(S),M=(r=l.serializer)!=null?r:Le[o],{pause:N,resume:h}=ke(w,()=>I(w.value),{flush:s,deep:u,eventFilter:x});return p&&c&&ie(()=>{q(p,"storage",C),q(p,U,O),y&&C()}),y||C(),w;function I(i){try{if(i==null)t.removeItem(e);else{const d=M.write(i),A=t.getItem(e);A!==d&&(t.setItem(e,d),p&&p.dispatchEvent(new CustomEvent(U,{detail:{key:e,oldValue:A,newValue:d,storageArea:t}})))}}catch(d){m(d)}}function T(i){const d=i?i.newValue:t.getItem(e);if(d==null)return f&&S!=null&&t.setItem(e,M.write(S)),S;if(!i&&b){const A=M.read(d);return typeof b=="function"?b(A,S):o==="object"&&!Array.isArray(A)?{...S,...A}:A}else return typeof d!="string"?d:M.read(d)}function O(i){C(i.detail)}function C(i){if(!(i&&i.storageArea!==t)){if(i&&i.key==null){w.value=S;return}if(!(i&&i.key!==e)){N();try{(i==null?void 0:i.newValue)!==M.write(w.value)&&(w.value=T(i))}catch(d){m(d)}finally{i?te(h):h()}}}}}function Ne(e){return ze("(prefers-color-scheme: dark)",e)}function Te(e={}){const{selector:n="html",attribute:t="class",initialValue:l="auto",window:r=L,storage:s,storageKey:u="vueuse-color-scheme",listenToStorageChanges:c=!0,storageRef:f,emitAuto:b,disableTransition:g=!0}=e,p={auto:"",light:"light",dark:"dark",...e.modes||{}},x=Ne({window:r}),m=k(()=>x.value?"dark":"light"),y=f||(u==null?Ce(l):Q(u,l,s,{window:r,listenToStorageChanges:c})),w=k(()=>y.value==="auto"?m.value:y.value),S=ce("updateHTMLAttrs",(h,I,T)=>{const O=typeof h=="string"?r==null?void 0:r.document.querySelector(h):V(h);if(!O)return;let C;if(g){C=r.document.createElement("style");const i="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";C.appendChild(document.createTextNode(i)),r.document.head.appendChild(C)}if(I==="class"){const i=T.split(/\s/g);Object.values(p).flatMap(d=>(d||"").split(/\s/g)).filter(Boolean).forEach(d=>{i.includes(d)?O.classList.add(d):O.classList.remove(d)})}else O.setAttribute(I,T);g&&(r.getComputedStyle(C).opacity,document.head.removeChild(C))});function o(h){var I;S(n,t,(I=p[h])!=null?I:h)}function M(h){e.onChanged?e.onChanged(h,o):o(h)}P(w,M,{flush:"post",immediate:!0}),ie(()=>M(w.value));const N=k({get(){return b?y.value:w.value},set(h){y.value=h}});try{return Object.assign(N,{store:y,system:m,state:w})}catch{return N}}const X=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function je(e,n={}){const{document:t=$e,autoExit:l=!1}=n,r=k(()=>{var o;return(o=V(e))!=null?o:t==null?void 0:t.querySelector("html")}),s=$(!1),u=k(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(o=>t&&o in t||r.value&&o in r.value)),c=k(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(o=>t&&o in t||r.value&&o in r.value)),f=k(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(o=>t&&o in t||r.value&&o in r.value)),b=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(o=>t&&o in t),g=ue(()=>r.value&&t&&u.value!==void 0&&c.value!==void 0&&f.value!==void 0),p=()=>b?(t==null?void 0:t[b])===r.value:!1,x=()=>{if(f.value){if(t&&t[f.value]!=null)return t[f.value];{const o=r.value;if((o==null?void 0:o[f.value])!=null)return!!o[f.value]}}return!1};async function m(){if(!(!g.value||!s.value)){if(c.value)if((t==null?void 0:t[c.value])!=null)await t[c.value]();else{const o=r.value;(o==null?void 0:o[c.value])!=null&&await o[c.value]()}s.value=!1}}async function y(){if(!g.value||s.value)return;x()&&await m();const o=r.value;u.value&&(o==null?void 0:o[u.value])!=null&&(await o[u.value](),s.value=!0)}async function w(){await(s.value?m():y())}const S=()=>{const o=x();(!o||o&&p())&&(s.value=o)};return q(t,X,S,!1),q(()=>V(r),X,S,!1),l&&K(m),{isSupported:g,isFullscreen:s,enter:y,exit:m,toggle:w}}const De=a("div",{"i-humbleicons:exchange-vertical":"","text-2xl":""},null,-1),Re=[De],Ge=z({__name:"ChangeBackImage",setup(e){const n=Q("bgImage",1,localStorage),t=()=>{n.value>=4?n.value=1:n.value++};return(l,r)=>(v(),_("button",{rounded:"","p-2":"",hover:"bg-active",onClick:t},Re))}}),Ve=z({__name:"FullScreenToggle",setup(e){const{isFullscreen:n,toggle:t}=je();return(l,r)=>(v(),_("button",{rounded:"","p-2":"",hover:"bg-active",onClick:r[0]||(r[0]=(...s)=>E(t)&&E(t)(...s))},[a("div",{class:J({"i-gridicons:fullscreen-exit":E(n),"i-gridicons:fullscreen":!E(n)}),"text-2xl":""},null,2)]))}}),qe=a("div",{"i-ph-sun-dim-duotone":"","dark:i-ph-moon-stars-duotone":"","text-2xl":""},null,-1),Be=[qe],We=z({__name:"ColorSchemeToggle",setup(e){const n=Te(),t=()=>{n.value=n.value==="light"?"dark":"light"};return(l,r)=>(v(),_("button",{rounded:"","p-2":"",hover:"bg-active",onClick:t},Be))}}),He={},Je={rounded:"",p2:"",title:"GitHub",hover:"bg-active",href:"https://github.com/SmallTeddy/e-card",target:"_blank"},Pe=a("div",{"i-carbon-logo-github":"","text-2xl":""},null,-1),Ke=[Pe];function Qe(e,n){return v(),_("a",Je,Ke)}const Ue=le(He,[["render",Qe]]),Xe={px4:"",py3:"","text-lg":"",border:"b base",flex:"~ gap-1 items-center"},Ye=a("div",{title:"Game"}," E-Card ",-1),Ze=a("div",{"flex-auto":""},null,-1),et={__name:"GameNav",setup(e){return(n,t)=>(v(),_("nav",Xe,[Ye,Ze,F(Ue),F(Ge),F(We),F(Ve)]))}},W=e=>(_e("data-v-233ad15b"),e=e(),he(),e),tt=W(()=>a("td",null,"局数",-1)),nt=W(()=>a("td",null,"总计",-1)),rt=W(()=>a("td",null,"皇帝",-1)),lt=W(()=>a("td",null,"奴隶",-1)),ot=z({__name:"GameInformation",setup(e){const n=[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1],t=n.map(s=>!!s),l=n.reduce((s,u)=>s+u,0),r=21-l;return(s,u)=>(v(),_("table",null,[a("tr",null,[tt,(v(),_(R,null,G(21,c=>a("td",null,H(c),1)),64)),nt]),a("tr",null,[rt,(v(),_(R,null,G(n,c=>a("td",null,[a("div",{"w-20px":"","h-20px":"","border-rd-10px":"",class:J(c?"bg-green":"bg-red")},null,2)])),64)),a("td",null,H(E(l)),1)]),a("tr",null,[lt,(v(!0),_(R,null,G(E(t),c=>(v(),_("td",null,[a("div",{"w-20px":"","h-20px":"","border-rd-10px":"",class:J(c?"bg-red":"bg-green")},null,2)]))),256)),a("td",null,H(r))])]))}}),Y=le(ot,[["__scopeId","data-v-233ad15b"]]),st={grid:"~ cols-5 gap-5"},at=["src"],Z=z({__name:"Card",props:{role:{type:String,default:"emperor"}},setup(e){const n=e,t=$(["emperor","citizen","citizen","citizen","citizen"]),l=$(["slave","citizen","citizen","citizen","citizen"]),r=k(()=>n.role==="emperor"?t.value:l.value),s=u=>new URL(Object.assign({})[`../../assets/${u}.png`],import.meta.url).href;return(u,c)=>(v(),_("div",st,[(v(!0),_(R,null,G(E(r),f=>(v(),_("img",{"cursor-pointer":"","w-120px":"",src:s(f)},null,8,at))),256))]))}}),it={"h-full":"",grid:"~ rows-4"},ut={"h-full":"","w-screen":"","bg-red":"",grid:"~ cols-5"},ct={"col-span-3":"","w-full":"","bg-gray:50":"","flex-center":""},dt={"col-span-2":"","w-full":"","bg-gray:80":"","flex-center":""},ft=a("div",{"h-full":"","w-screen":"","bg-blue":"",grid:"~ cols-3"},[a("div",{"w-full":"","bg-gray:80":"","flex-center":""},"空"),a("div",{"w-full":"","bg-gray:50":"","flex-center":""},"检查局域"),a("div",{"w-full":"","bg-gray:80":"","flex-center":""},"弃牌区域")],-1),pt=a("div",{"h-full":"","w-screen":"","bg-yellow":"",grid:"~ cols-3"},[a("div",{"w-full":"","bg-gray:80":"","flex-center":""},"空"),a("div",{"w-full":"","bg-gray:50":"","flex-center":""},"检查局域"),a("div",{"w-full":"","bg-gray:80":"","flex-center":""},"弃牌区域")],-1),gt={"h-full":"","w-screen":"","bg-green":"",grid:"~ cols-5"},mt={"col-span-3":"","w-full":"","bg-gray:50":"","flex-center":""},vt={"col-span-2":"","w-full":"","bg-gray:80":"","flex-center":""},_t=z({__name:"GameMain",setup(e){return(n,t)=>(v(),_("div",it,[a("div",ut,[a("div",ct,[F(Z,{role:"slave"})]),a("div",dt,[F(Y)])]),ft,pt,a("div",gt,[a("div",mt,[F(Z,{role:"emperor"})]),a("div",vt,[F(Y)])])]))}}),ht=z({__name:"GameContent",setup(e){const n=Q("bgImage",1,localStorage)||$(1);return(t,l)=>(v(),_("div",{"w-full":"","h-full":"","flex-center":"","bg-center":"","bg-cover":"","bg-no-repeat":"",style:be({backgroundImage:`url(src/assets/bg-${E(n)}.jpg)`})},[F(_t)],4))}}),bt={"h-100dvh":"","h-screen":"","w-screen":"","of-hidden":"",grid:"~ rows-[max-content_1fr]"},yt=z({__name:"Home",setup(e){return(n,t)=>(v(),_("main",bt,[F(et),F(ht)]))}});export{yt as default};
