"use strict";(self["webpackChunkflag_quiz"]=self["webpackChunkflag_quiz"]||[]).push([[504],{3231:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(284);let s=new l.Z("db");const c=async()=>{let e;try{e=await s.collection("users").get()}catch(t){console.log("error",t)}return e},o=async e=>{let t;try{t=await s.collection("users").doc({user:e}).get()}catch(a){console.log("error",a)}return t},n=async e=>{let t={user:e};await s.collection("users").add(t)},r=async()=>{let e={id:1,name:"country",score:0},t={id:2,name:"capital",score:0},a={id:3,name:"pocket",score:0};await s.collection("scores").add(e),await s.collection("scores").add(t),await s.collection("scores").add(a)},i=async e=>{let t=1;"capital"===e?t=2:"pocket"===e&&(t=3);let a=await s.collection("scores").doc({id:t}).get();return a},u=async(e,t)=>{let a=1;"capital"===e?a=2:"pocket"===e&&(a=3);let l=await s.collection("scores").doc({id:a}).get();await s.collection("scores").doc({id:a}).update({score:l.score+t})},d=async(e,t)=>{let a={id:e,image:t};await s.collection("images").add(a)},g=async e=>{let t;try{t=await s.collection("images").doc({name:e}).get()}catch(a){console.log("error",a)}return t},m=async()=>{let e=await s.collection("images").get();return e},w=async e=>{await s.collection(e).delete()},p={getUser:o,getUserAll:c,setUser:n,initScore:r,getQuizeScore:i,setQuizeScore:u,getImage:g,getImageAll:m,setImage:d,deleteCollection:w},v=p},8504:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var l=a(3673),s=a(8880),c=a(2323);const o=(0,l.Uk)("포켓몬 맞추기"),n={class:"row justify-center"},r={class:"text-h6 q-mt-sm q-mb-xs"},i={class:"q-pa-lg column"},u={key:0,class:"q-gutter-md"};function d(e,t,a,d,g,m){const w=(0,l.up)("page-header-btn-back"),p=(0,l.up)("page-header"),v=(0,l.up)("q-card-section"),k=(0,l.up)("q-img"),y=(0,l.up)("q-btn"),f=(0,l.up)("q-card"),q=(0,l.up)("page-body"),h=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{"buttons-left":(0,l.w5)((()=>[(0,l.Wm)(w,{label:"퀴즈"})])),title:(0,l.w5)((()=>[o])),_:1}),(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.uT,{appear:"","enter-active-class":"animated fadeIn slower","leave-active-class":"animated fadeOut slower"},{default:(0,l.w5)((()=>[(0,l._)("div",n,[d.pocket?((0,l.wg)(),(0,l.j4)(f,{key:0,flat:"",class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"q-pt-xs"},{default:(0,l.w5)((()=>[(0,l._)("div",r,"문제. "+(0,c.zw)(d.pocket.index),1)])),_:1}),(0,l.Wm)(k,{src:d.pocket.url,class:"no-pointer-events","no-transition":"","no-spinner":"",style:{"max-width":"300px"}},null,8,["src"]),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[d.answers?((0,l.wg)(),(0,l.iD)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.answers,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.index},[(0,l.Wm)(y,{style:{width:"250px"},unelevated:"",rounded:"",color:"primary",label:e.name,onClick:t=>d.questionAnswer(e.name)},null,8,["label","onClick"])])))),128))])):(0,l.kq)("",!0)])])),_:1})])),_:1})):(0,l.kq)("",!0)])])),_:1})])),_:1})])),_:1})}var g=a(1959),m=a(8825),w=a(3162),p=a(3231);const v={name:"Pocket",setup(){const e=(0,m.Z)();let t=(0,g.iH)(),a=(0,g.iH)(),s=1,c=()=>{s+=1,o()};const o=async()=>{await p.Z.setQuizeScore("pocket",1)},n=e=>{e.sort((()=>Math.random()-.5))},r=(t,a)=>{let l=t?"task_alt":"announcement",s=t?a+"  참 잘했어요 !! 정답입니다.":"틀렸습니다.";e.notify({message:s,icon:l,color:t?"primary":"secondary"})};(0,l.dl)((()=>{t.value=w.Z.getters.getPocket(String(s)),a.value=w.Z.getters.getPocketRandom(),a.value.push(t.value),console.log("answers.value",a.value),n(a.value)})),(0,l.se)((()=>{t.value=null,a.value=null}));const i=()=>{t.value=null,a.value=null,t.value=w.Z.getters.getPocket(String(s)),a.value=w.Z.getters.getPocketRandom(),console.log("answers.value : ",a.value),a.value.push(t.value),n(a.value)},u=()=>{c(),i()},d=e=>{let a=!1;t.value.name==e&&(a=!0,setTimeout((()=>{u()}),2e3)),r(a,e)};return{store:w.Z,pocket:t,answers:a,questionAnswer:d}}};var k=a(4260),y=a(151),f=a(5589),q=a(4027),h=a(8240),Z=a(7518),_=a.n(Z);const b=(0,k.Z)(v,[["render",d]]),x=b;_()(v,"components",{QCard:y.Z,QCardSection:f.Z,QImg:q.Z,QBtn:h.Z})}}]);