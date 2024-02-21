import{d as m,u as h,o as c,c as i,a,n as y,b as o,e as C,w as Z,v as Q,f as oe,g as re,_ as U,h as _,i as j,j as B,t as d,F as I,r as L,p as W,k as Y,l as T,m as J,q as $,s as F,x as z,y as le,T as ce}from"./index-WZbJjOFY.js";const ie=m({__name:"ChangeGameStatus",setup(n){const e=h(),t=()=>{e.value.gameState="pause"};return(s,r)=>(c(),i("button",{rounded:"","p-2":"",hover:"bg-active",onClick:t},[a("div",{class:y({"i-material-symbols:play-circle-rounded":o(e).gameState==="pause","i-material-symbols:pause-circle":o(e).gameState==="start"}),"text-2xl":""},null,2)]))}}),ue=a("div",{"i-carbon-translate":"","text-2xl":""},null,-1),de=[ue],_e=m({__name:"ChangeLanguage",setup(n){const{locale:e}=C(),t=h(),s=()=>{switch(t.value.language){case"cn":t.value.language="en",e.value="en";break;case"en":t.value.language="jp",e.value="jp";break;case"jp":t.value.language="kr",e.value="kr";break;case"kr":t.value.language="cn",e.value="cn";break}};return(r,l)=>(c(),i("button",{rounded:"",p2:"",title:"GitHub",hover:"bg-active",onClick:s},de))}}),pe=m({__name:"GameInfoToggle",setup(n){const e=h(),t=()=>{e.value.isShowGameInfo=!e.value.isShowGameInfo};return(s,r)=>Z((c(),i("button",{rounded:"","p-2":"",hover:"bg-active",onClick:t},[a("div",{class:y({"i-material-symbols:right-panel-close-rounded":o(e).isShowGameInfo,"i-material-symbols:right-panel-open-rounded":!o(e).isShowGameInfo}),"text-2xl":""},null,2)],512)),[[Q,o(e).gameState==="start"]])}}),me=a("div",{"i-humbleicons:exchange-vertical":"","text-2xl":""},null,-1),fe=[me],ge=m({__name:"ChangeBackImage",setup(n){const e=h(),t=()=>{e.value.bgImage>=4?e.value.bgImage=1:e.value.bgImage++};return(s,r)=>(c(),i("button",{rounded:"","p-2":"",hover:"bg-active",onClick:t},fe))}}),ve=m({__name:"FullScreenToggle",setup(n){const{isFullscreen:e,toggle:t}=oe();return(s,r)=>(c(),i("button",{rounded:"","p-2":"",hover:"bg-active",onClick:r[0]||(r[0]=(...l)=>o(t)&&o(t)(...l))},[a("div",{class:y({"i-gridicons:fullscreen-exit":o(e),"i-gridicons:fullscreen":!o(e)}),"text-2xl":""},null,2)]))}}),he=a("div",{"i-ph-sun-dim-duotone":"","dark:i-ph-moon-stars-duotone":"","text-2xl":""},null,-1),be=[he],xe=m({__name:"ColorSchemeToggle",setup(n){const e=re(),t=()=>{e.value=e.value==="light"?"dark":"light"};return(s,r)=>(c(),i("button",{rounded:"","p-2":"",hover:"bg-active",onClick:t},be))}}),ke={},we={rounded:"",p2:"",title:"GitHub",hover:"bg-active",href:"https://github.com/SmallTeddy/e-card",target:"_blank"},$e=a("div",{"i-carbon-logo-github":"","text-2xl":""},null,-1),ye=[$e];function Ce(n,e){return c(),i("a",we,ye)}const Ie=U(ke,[["render",Ce]]),Se={"w-screen":"",px4:"",py3:"","text-lg":"",border:"b base",flex:"~ gap-1 items-center"},Ge=a("div",{title:"Game"},"E-Card",-1),Re=a("div",{"flex-auto":""},null,-1),je={__name:"GameNav",setup(n){return(e,t)=>(c(),i("nav",Se,[Ge,Re,_(ie),_(_e),_(Ie),_(pe),_(xe),_(ge),_(ve)]))}},K=n=>(W("data-v-eec45f8e"),n=n(),Y(),n),Le=K(()=>a("td",null,null,-1)),ze=K(()=>a("td",null,null,-1)),Be=m({__name:"GameInformation",setup(n){const{t:e}=C(),t=h(),s=u=>t.value.gameLogItems.reduce((x,p)=>x+p[u],0),r=j(()=>s("playerScore")),l=j(()=>s("computerScore"));return B(()=>r.value,u=>{u===11&&(t.value.gameState="win")},{immediate:!0}),B(()=>l.value,u=>{u===11&&(t.value.gameState="lose")},{immediate:!0}),(u,x)=>(c(),i("table",null,[a("tr",null,[a("td",null,d(o(e)("info.round")),1),a("td",null,d(o(e)("info.role")),1),a("td",null,d(o(e)("info.result")),1),a("td",null,d(o(e)("info.player")),1),a("td",null,d(o(e)("info.computer")),1)]),(c(!0),i(I,null,L(o(t).gameLogItems,p=>(c(),i("tr",{key:`${p.role}-${p.sort}`,class:y(p.playerScore?"bg-green:50":"bg-red:50")},[a("td",null,d(p.round),1),a("td",null,d(p.role),1),a("td",null,d(p.result),1),a("td",null,d(p.playerScore),1),a("td",null,d(p.computerScore),1)],2))),128)),a("tr",null,[a("td",null,d(o(e)("info.score")),1),Le,ze,a("td",null,d(o(r)),1),a("td",null,d(o(l)),1)])]))}}),Te=U(Be,[["__scopeId","data-v-eec45f8e"]]),Me=""+new URL("bg-1-mdVtkdQm.jpg",import.meta.url).href,Ae=""+new URL("bg-2-DRO9E5Ab.jpg",import.meta.url).href,Ue=""+new URL("bg-3-9k6GZAb9.jpg",import.meta.url).href,Ee=""+new URL("bg-4-AjVdAbEv.jpg",import.meta.url).href,Fe=""+new URL("card-bg-V5GSdMqO.jpg",import.meta.url).href,Pe=""+new URL("citizen-2myAtGQo.jpg",import.meta.url).href,Ve=""+new URL("emperor-jZ-GUtEA.jpg",import.meta.url).href,Ne=""+new URL("slave-vZ3wDTL4.jpg",import.meta.url).href,w=h(),D=(n,e,t)=>({role:n,img:`${n}.jpg`,isClick:!1,isBack:!1,sort:e,group:t}),M=(n,e=!0)=>{const t=Array(5).fill(0).map((r,l)=>D("citizen",l+1,n)),s=E(5);return t[s]=D(n,s+1,n),t.map(r=>r.isBack=!e),t},P=n=>n=="emperor"?"slave":"emperor",H=(n,e)=>{w.value={playerRole:n,rounds:e,language:"cn",gameState:"init",difficulty:"middle",isAiBattle:!0,playerCardItems:M(n,!0),computerCardItems:M(P(n),!1),bgImage:1,isShowGameInfo:!0,gameLogItems:[],dropedCardItems:[]}},De=()=>{const n=P(w.value.playerRole),e=w.value.rounds+1;w.value.playerRole=n,w.value.rounds=e,w.value.playerCardItems=M(n,!0),w.value.computerCardItems=M(P(n),!1),w.value.dropedCardItems=[]},A=n=>new URL(Object.assign({"../assets/bg-1.jpg":Me,"../assets/bg-2.jpg":Ae,"../assets/bg-3.jpg":Ue,"../assets/bg-4.jpg":Ee,"../assets/card-bg.jpg":Fe,"../assets/citizen.jpg":Pe,"../assets/emperor.jpg":Ve,"../assets/slave.jpg":Ne})[`../assets/${n}`],import.meta.url).href,E=n=>(Math.floor(Math.random()*n)+1)%n,V=(n,e=new WeakMap)=>{if(n===null||typeof n!="object")return n;if(e.has(n))return e.get(n);const t=Array.isArray(n)?[]:{};e.set(n,t);for(let s in n)n.hasOwnProperty(s)&&(t[s]=V(n[s],e));return t};let R;const He=(n,e=300)=>{R||(n(),R=setTimeout(()=>{R&&clearTimeout(R),R=null},e))},Oe=m({__name:"Card",props:{cardInfo:{default:()=>null},isAnimation:{type:Boolean,default:()=>!1},isBack:{type:Boolean,default:()=>!1}},emits:["card-click"],setup(n,{emit:e}){const t=e;return(s,r)=>(c(),i("div",{class:y({"card-animation":s.isAnimation,"card-back":s.isBack}),"card-size":"",relative:"","preserve-3d":"","cursor-pointer":"","transition-transform-1":"",onClick:r[0]||(r[0]=l=>t("card-click",s.cardInfo))},[a("div",{"w-full":"","h-full":"",absolute:"","bg-cover":"","backface-hidden":"",style:T({backgroundImage:`url(${o(A)(s.cardInfo.img)})`})},null,4),a("div",{"w-full":"","h-full":"",absolute:"","bg-cover":"","backface-hidden":"","transform-rotate-y-180":"",style:T({backgroundImage:`url(${o(A)("card-bg.jpg")})`})},null,4)],2))}}),G=U(Oe,[["__scopeId","data-v-cfbea0d8"]]),qe={grid:"~ cols-5 gap-5"},Ze=m({__name:"ComputedCard",setup(n){const e=h();return(t,s)=>(c(),i("div",qe,[(c(!0),i(I,null,L(o(e).computerCardItems,r=>(c(),i("div",{"card-size":"",relative:"","cursor-pointer":"","transition-all-500":"",key:r.sort},[_(G,{"card-info":r,"is-back":""},null,8,["card-info"])]))),128))]))}}),Qe={grid:"~ cols-5 gap-5"},We=m({__name:"PlayerCard",emits:["card-check"],setup(n,{expose:e,emit:t}){const s=h(),r=t,l=u=>{He(()=>{u.isBack=!0,setTimeout(()=>{r("card-check",u)},1e3)},4500)};return e({cardCheckClick:l}),(u,x)=>(c(),i("div",Qe,[(c(!0),i(I,null,L(o(s).playerCardItems,p=>(c(),i("div",{"card-size":"",relative:"","cursor-pointer":"","transition-all-500":"","hover:top--20px":"",key:p.sort,class:y([p.isClick?"top--20px":"top-0"])},[_(G,{"card-info":p,"is-back":p.isBack,onCardClick:l},null,8,["card-info","is-back"])],2))),128))]))}}),X=n=>(W("data-v-df9f1704"),n=n(),Y(),n),Ye={"box-border":"","w-full":"","h-full":"","flex-center":""},Je={"p-4":"","box-border":"",flex:"~ col items-center gap-8","bg-Mask":"","border-rd-12px":"",style:{"min-width":"600px","max-width":"1200px"}},Ke={flex:"~ col gap-2"},Xe=X(()=>a("div",{class:"i-material-symbols:arrow-back-rounded icon"},null,-1)),et=X(()=>a("span",null,"Back",-1)),tt=[Xe,et],nt=m({__name:"MessageInfo",props:{title:{default:()=>""},infoList:{default:()=>[]}},emits:["close"],setup(n,{emit:e}){const t=e;return(s,r)=>(c(),i("div",Ye,[a("div",Je,[a("h3",null,d(s.title),1),a("div",Ke,[(c(!0),i(I,null,L(s.infoList,l=>(c(),i("p",{"font-size-7":"",key:l,class:y({"text-center":s.title==="制作人员"})},d(l),3))),128))]),a("button",{"m-l-a":"","p-2":"","font-size-8":"","border-rd":"","border-none":"","t-a-2":"","cursor-pointer":"","l-s-1":"",flex:"~ row items-center",onClick:r[0]||(r[0]=l=>t("close"))},tt)])]))}}),ee=U(nt,[["__scopeId","data-v-df9f1704"]]),at=m({__name:"GameExplain",emits:["close"],setup(n,{emit:e}){const{t}=C(),s=e,r=[t("explain.explain1"),t("explain.explain2"),t("explain.explain3"),t("explain.explain4"),t("explain.explain5"),t("explain.explain6"),t("explain.explain7"),t("explain.explain8"),t("explain.explain9")];return(l,u)=>(c(),J(ee,{title:o(t)("explain.explain"),"info-list":r,onClose:u[0]||(u[0]=x=>s("close"))},null,8,["title"]))}}),st=m({__name:"ProducerList",emits:["close"],setup(n,{emit:e}){const{t}=C(),s=e,r=["SmallTeddy","wh131462","remember-study","cangbaoderen","Yang-mingLei","Medalc","qingjiuge"];return(l,u)=>(c(),J(ee,{title:o(t)("menu.producer"),"info-list":r,onClose:u[0]||(u[0]=x=>s("close"))},null,8,["title"]))}}),ot={key:0,"flex-center":"","flex-col":"","h-full":"","w-screen":"",relative:"","font-size-40px":"","bg-gray:50":""},rt={key:0,flex:"~ col items-center gap-10"},lt={"w-500px":"","h-56px":"","flex-center":"","rd-8px":"","gap-5":""},ct={"text-green":""},it={"w-500px":"","h-56px":"","flex-center":"","rd-8px":""},ut={"text-red":""},dt={key:1,"flex-col":"","flex-center":"","gap-5":""},_t={"flex-center":"","gap-10":""},pt={key:1,"flex-center":"","flex-col":"","h-full":"","w-screen":"",relative:"","font-size-40px":"","bg-gray:50":""},mt={key:2,"flex-center":"","flex-col":"","h-full":"","w-screen":"",relative:"","font-size-40px":"","bg-gray:50":""},O=21,ft=m({__name:"GameMenu",setup(n,{expose:e}){const{t}=C(),s=h(),r=$(!1),l=$(!0),u=$({playerRole:E(2)==0?"emperor":"slave",rounds:1}),x=j(()=>u.value.playerRole);H(Math.floor(Math.random()*10*20%2)==0?"emperor":"slave",1),u.value=s.value;const p=()=>{l.value=!0,u.value.rounds<=O&&u.value.rounds>1&&setTimeout(()=>{if(["win","lose"].includes(s.value.gameState))return l.value=!0;l.value=!1},2e3)},f=()=>{["win","lose"].includes(s.value.gameState)||(r.value=!0,s.value.gameState="start",setTimeout(()=>{l.value=!1,u.value.rounds>O&&(r.value=!1)},2e3))},g=()=>{r.value=!1,l.value=!0,s.value.rounds=1,s.value.gameState="init",H(u.value.playerRole,u.value.rounds),u.value=s.value},S=j(()=>{let v;switch(s.value.gameState){case"pause":v=t("menu.continue");break;case"win":v=t("menu.win");break;case"lose":v=t("menu.lose");break;default:v=t("menu.start")}return v}),b=$(!1),k=$(!1),te=()=>{l.value=!1,b.value=!0},ne=()=>{l.value=!0,b.value=!1},ae=()=>{l.value=!1,k.value=!0},se=()=>{l.value=!0,k.value=!1};return B(()=>s.value.gameState,v=>{v==="start"&&f(),["pause","win","lose"].includes(v)&&(l.value=!0,r.value=!1)},{immediate:!0}),e({reshow:p,show:l}),(v,Bt)=>{var N;return c(),i(I,null,[o(l)?(c(),i("div",ot,[o(r)?(c(),i("div",rt,[a("div",lt,[F(d(v.$t("game.no"))+" ",1),a("span",ct,d((N=o(u))==null?void 0:N.rounds),1),F(" "+d(v.$t("game.round")),1)]),a("div",it,[F(d(v.$t("game.role"))+" ： ",1),a("span",ut,d(o(t)(`game.${o(x)}`)),1)])])):(c(),i("div",dt,[a("button",{onClick:f},d(o(S)),1),o(s).gameState!=="init"?(c(),i("button",{key:0,onClick:g},d(o(t)("menu.reStart")),1)):z("",!0),a("button",{onClick:te},d(o(t)("menu.explain")),1),a("button",{onClick:ae},d(o(t)("menu.producer")),1),a("div",_t,[_(G,{"card-info":{role:"emperor",img:"emperor.jpg"},"is-animation":""},null,8,["card-info"]),_(G,{"card-info":{role:"citizen",img:"citizen.jpg"},"is-animation":""},null,8,["card-info"]),_(G,{"card-info":{role:"slave",img:"slave.jpg"},"is-animation":""},null,8,["card-info"])])]))])):z("",!0),o(b)?(c(),i("div",pt,[_(at,{onClose:ne})])):z("",!0),o(k)?(c(),i("div",mt,[_(st,{onClose:se})])):z("",!0)],64)}}}),gt={key:0},vt={key:1,"card-size":"","cursor-pointer":"",border:"1px #fff dashed","flex-center":""},q=m({__name:"CheckCard",props:{cardInfo:{default:()=>null}},setup(n){const{t:e}=C();return(t,s)=>t.cardInfo[0]?(c(),i("div",gt,[_(G,{"card-info":t.cardInfo[0],"is-back":t.cardInfo[0].isBack},null,8,["card-info","is-back"])])):(c(),i("div",vt,d(o(e)("game.checkArea")),1))}}),ht={key:0,"flex-center":"",relative:"","card-size":""},bt=["alt","src"],xt={key:1,"card-size":"","cursor-pointer":"",border:"1px #fff dashed","flex-center":""},kt=m({__name:"DropCard",setup(n){const{t:e}=C(),t=h();return(s,r)=>o(t).dropedCardItems.length>0?(c(),i("div",ht,[(c(!0),i(I,null,L(o(t).dropedCardItems,(l,u)=>(c(),i("div",{key:l.sort},[a("img",{"card-size":"","cursor-pointer":"",absolute:"","left-0":"","top-0":"",class:"rotate",style:T(`--rotation-random: ${o(E)(5*u)}deg`),alt:l.role,src:o(A)(l.img)},null,12,bt)]))),128))])):(c(),i("div",xt,d(o(e)("game.dropArea")),1))}}),wt={grid:"~ rows-4","col-span-3":"","h-full":"","w-full":""},$t={"w-full":"","bg-gray:50":"","flex-center":""},yt={"bg-gray:50":"","flex-center":""},Ct={"w-full":"","bg-gray:50":"","flex-center":""},It={"w-full":"","bg-gray:50":"","flex-center":""},St={grid:"~ rows-4","col-span-2":"","h-full":"","w-full":""},Gt={"h-full":"","w-full":"","bg-gray:80":"","flex-center":"","row-span-3":""},Rt={"w-full":"","bg-gray:80":"","flex-center":"","row-span-1":""},jt=m({__name:"GameMain",setup(n){const e=h(),t=$(null),s=j(()=>e.value.playerRole),r=$(),l=$(),u=f=>{if(t.value.show)return;r.value&&e.value.dropedCardItems.push(r.value,l.value);const g=V(f);r.value=g,e.value.playerCardItems=e.value.playerCardItems.filter(k=>k.sort!==g.sort);const S=E(e.value.computerCardItems.length),b=V(e.value.computerCardItems[S]);l.value=b,e.value.computerCardItems=e.value.computerCardItems.filter(k=>k.sort!==b.sort),setTimeout(()=>{p(g,b)},1e3)},x=(f,g)=>{const b={emperor:{emperor:null,citizen:"win",slave:"lose"},citizen:{emperor:"lose",citizen:null,slave:"win"},slave:{emperor:"win",citizen:"lose",slave:null}}[f.role][g.role];return{round:e.value.rounds,role:s.value,result:b,sort:f.sort,playerScore:b==="win"?1:0,computerScore:b==="win"?0:1}},p=(f,g)=>{setTimeout(()=>{l.value.isBack=!1,r.value.isBack=!1},1e3),setTimeout(()=>{if(l.value=null,r.value=null,f.role===g.role)e.value.dropedCardItems.push(f,g);else{const S=x(f,g);e.value.gameLogItems.push(S),De(),t.value.reshow()}},2e3)};return B(()=>e.value.gameState,f=>{["init","win","lose"].includes(f)&&(e.value.rounds=1,e.value.dropedCardItems=[],e.value.gameLogItems=[])}),(f,g)=>(c(),i(I,null,[_(ft,{ref_key:"showGameMenuRef",ref:t},null,512),_(ce,null,{default:le(()=>[a("div",{"h-full":"","w-screen":"",grid:"~",class:y([o(e).isShowGameInfo?"grid-cols-5":"grid-cols-1"])},[a("div",wt,[a("div",$t,[_(Ze)]),a("div",yt,[_(q,{"card-info":[o(l)]},null,8,["card-info"])]),a("div",Ct,[_(q,{"card-info":[o(r)]},null,8,["card-info"])]),a("div",It,[_(We,{onCardCheck:u})])]),Z(a("div",St,[a("div",Gt,[_(Te)]),a("div",Rt,[_(kt)])],512),[[Q,o(e).isShowGameInfo]])],2)]),_:1})],64))}}),Lt=m({__name:"GameContent",setup(n){const e=h();return(t,s)=>(c(),i("div",{"w-full":"","h-full":"","flex-center":"","bg-center":"","bg-cover":"","bg-no-repeat":"",style:T({backgroundImage:`url(${o(A)(`bg-${o(e).bgImage}.jpg`)})`})},[_(jt)],4))}}),zt={"h-100dvh":"","h-screen":"","w-screen":"","of-hidden":"",grid:"~ rows-[max-content_1fr]"},Mt=m({__name:"Home",setup(n){return(e,t)=>(c(),i("main",zt,[_(je),_(Lt)]))}});export{Mt as default};
