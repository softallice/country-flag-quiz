"use strict";(self["webpackChunkflag_quiz"]=self["webpackChunkflag_quiz"]||[]).push([[686],{3231:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(284);let c=new l.Z("db");const o=async()=>{let e;try{e=await c.collection("users").get()}catch(t){console.log("error",t)}return e},s=async e=>{let t;try{t=await c.collection("users").doc({user:e}).get()}catch(a){console.log("error",a)}return t},n=async e=>{let t={user:e};await c.collection("users").add(t)},r=async()=>{let e={id:1,name:"country",score:0},t={id:2,name:"capital",score:0};await c.collection("scores").add(e),await c.collection("scores").add(t)},i=async e=>{let t=1;"country"!=e&&(t=2);let a=await c.collection("scores").doc({id:t}).get();return a},u=async(e,t)=>{let a=1;"country"!=e&&(a=2);let l=await c.collection("scores").doc({id:a}).get();await c.collection("scores").doc({id:a}).update({score:l.score+t})},g=async(e,t)=>{let a={id:e,image:t};await c.collection("images").add(a)},d=async e=>{let t;try{t=await c.collection("images").doc({name:e}).get()}catch(a){console.log("error",a)}return t},m=async()=>{let e=await c.collection("images").get();return e},w={getUser:s,getUserAll:o,setUser:n,initScore:r,getQuizeScore:i,setQuizeScore:u,getImage:d,getImageAll:m,setImage:g},y=w},1686:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var l=a(3673);const c=(0,l.Uk)("설정하기 ");function o(e,t,a,o,s,n){const r=(0,l.up)("page-header"),i=(0,l.up)("page-body"),u=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{title:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(i)])),_:1})}var s=a(1959),n=a(3231);const r={name:"Setting",setup(){const e=(0,s.iH)(null);let t=(0,s.iH)(null),a=(0,s.iH)(null);const c=(0,s.iH)(),o=(0,s.iH)();(0,l.dl)((async()=>{let e=await n.Z.getUserAll();c.value=e[0].user,o.value=await n.Z.getImageAll()}));const r=async e=>{let a=new FileReader;a.onload=async e=>{t.value=e.target.result,await n.Z.setImage(c.value,t.value)},a.readAsDataURL(e)},i=async e=>{let t=e.currentTarget.files[0],a=[t];a.map((async e=>{r(e)}))};return{uploadImage:e,mobileImage:a,handleImagesMobile:i,userImage:o}}};var i=a(4260),u=a(4816),g=a(4554),d=a(7518),m=a.n(d);const w=(0,i.Z)(r,[["render",o],["__scopeId","data-v-fc6d7528"]]),y=w;m()(r,"components",{QFile:u.Z,QIcon:g.Z})}}]);