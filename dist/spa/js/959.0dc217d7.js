"use strict";(self["webpackChunkflag_quiz"]=self["webpackChunkflag_quiz"]||[]).push([[959],{3231:(e,t,l)=>{l.d(t,{Z:()=>w});var a=l(284);let o=new a.Z("db");const c=async()=>{let e;try{e=await o.collection("users").get()}catch(t){console.log("error",t)}return e},s=async e=>{let t;try{t=await o.collection("users").doc({user:e}).get()}catch(l){console.log("error",l)}return t},n=async e=>{let t={user:e};await o.collection("users").add(t)},r=async()=>{let e={id:1,name:"country",score:0},t={id:2,name:"capital",score:0};await o.collection("scores").add(e),await o.collection("scores").add(t)},u=async e=>{let t=1;"country"!=e&&(t=2);let l=await o.collection("scores").doc({id:t}).get();return l},i=async(e,t)=>{let l=1;"country"!=e&&(l=2);let a=await o.collection("scores").doc({id:l}).get();await o.collection("scores").doc({id:l}).update({score:a.score+t})},d=async(e,t)=>{let l={id:e,image:t};await o.collection("images").add(l)},m=async e=>{let t;try{t=await o.collection("images").doc({name:e}).get()}catch(l){console.log("error",l)}return t},p=async()=>{let e=await o.collection("images").get();return e},g={getUser:s,getUserAll:c,setUser:n,initScore:r,getQuizeScore:u,setQuizeScore:i,getImage:m,getImageAll:p,setImage:d},w=g},5959:(e,t,l)=>{l.r(t),l.d(t,{default:()=>W});var a=l(3673),o=l(8880);const c=(0,a.Uk)("Quiz"),s={class:"q-pa-lg"},n=(0,a._)("div",{class:"text-h5 q-mb-md"},"국가/수도 맞추기 퀴즈!",-1),r=(0,a._)("div",{class:"text-h6"},"이름",-1);function u(e,t,l,u,i,d){const m=(0,a.up)("page-header"),p=(0,a.up)("q-btn"),g=(0,a.up)("page-body"),w=(0,a.up)("q-card-section"),y=(0,a.up)("q-input"),f=(0,a.up)("q-card-actions"),q=(0,a.up)("q-card"),v=(0,a.up)("q-dialog"),h=(0,a.up)("page"),_=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{title:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a._)("div",s,[n,(0,a.Wm)(p,{to:"/quiz/FlagQuiz",label:"국가 맞추기",color:"primary",class:"full-width q-mb-md",rounded:"",unelevated:"","no-caps":""}),(0,a.Wm)(p,{to:"/quiz/FlagCaptalQuiz",label:"수도 맞추기",color:"primary",class:"full-width q-mb-md",rounded:"",unelevated:"","no-caps":""})])])),_:1}),(0,a.Wm)(v,{modelValue:u.prompt,"onUpdate:modelValue":t[2]||(t[2]=e=>u.prompt=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(w,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{dense:"",modelValue:u.userNm,"onUpdate:modelValue":t[0]||(t[0]=e=>u.userNm=e),autofocus:"",onKeyup:t[1]||(t[1]=(0,o.D2)((e=>u.prompt=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,a.Wm)(f,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(p,{flat:"",label:"취소"},null,512),[[_]]),(0,a.Wm)(p,{flat:"",label:"저장",onClick:u.saveUser},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var i=l(1959),d=l(3231);const m={name:"Home",setup(){const e=(0,i.iH)(!1),t=(0,i.iH)("");(0,a.dl)((async()=>{l()}));const l=async()=>{let t=await d.Z.getUserAll();console.log(t),0===t.length&&(e.value=!0)},o=()=>{d.Z.setUser(t.value),e.value=!1};return{prompt:e,userNm:t,saveUser:o}}};var p=l(4260),g=l(8240),w=l(3045),y=l(151),f=l(5589),q=l(2426),v=l(9367),h=l(677),_=l(7518),b=l.n(_);const Q=(0,p.Z)(m,[["render",u]]),W=Q;b()(m,"components",{QBtn:g.Z,QDialog:w.Z,QCard:y.Z,QCardSection:f.Z,QInput:q.Z,QCardActions:v.Z}),b()(m,"directives",{ClosePopup:h.Z})}}]);