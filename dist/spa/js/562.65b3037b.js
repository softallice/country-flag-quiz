"use strict";(self["webpackChunkflag_quiz"]=self["webpackChunkflag_quiz"]||[]).push([[562],{3231:(e,a,l)=>{l.d(a,{Z:()=>w});var t=l(284);let o=new t.Z("db");const c=async()=>{let e;try{e=await o.collection("users").get()}catch(a){console.log("error",a)}return e},n=async e=>{let a;try{a=await o.collection("users").doc({user:e}).get()}catch(l){console.log("error",l)}return a},s=async e=>{let a={user:e};await o.collection("users").add(a)},r=async()=>{let e={id:1,name:"country",score:0},a={id:2,name:"capital",score:0};await o.collection("scores").add(e),await o.collection("scores").add(a)},i=async e=>{let a=1;"country"!=e&&(a=2);let l=await o.collection("scores").doc({id:a}).get();return l},u=async(e,a)=>{let l=1;"country"!=e&&(l=2);let t=await o.collection("scores").doc({id:l}).get();await o.collection("scores").doc({id:l}).update({score:t.score+a})},d=async(e,a)=>{let l={id:e,image:a};await o.collection("images").add(l)},g=async e=>{let a;try{a=await o.collection("images").doc({name:e}).get()}catch(l){console.log("error",l)}return a},m=async()=>{let e=await o.collection("images").get();return e},p={getUser:n,getUserAll:c,setUser:s,initScore:r,getQuizeScore:i,setQuizeScore:u,getImage:g,getImageAll:m,setImage:d},w=p},1562:(e,a,l)=>{l.r(a),l.d(a,{default:()=>I});var t=l(3673),o=l(8880);const c=(0,t.Uk)("설정하기 "),n={class:"q-pa-md my-file"};function s(e,a,l,s,r,i){const u=(0,t.up)("page-header"),d=(0,t.up)("q-icon"),g=(0,t.up)("q-file"),m=(0,t.up)("page-body"),p=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{title:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t.Wm)(g,{modelValue:s.mobileImage,"onUpdate:modelValue":a[2]||(a[2]=e=>s.mobileImage=e),label:"사진을 선택해 주세요",filled:"",accept:".jpg, image/*",onInput:s.handleImagesMobile},{prepend:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"cloud_upload",onClick:a[0]||(a[0]=(0,o.iM)((()=>{}),["stop"]))})])),append:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"close",onClick:a[1]||(a[1]=(0,o.iM)((e=>s.mobileImage=null),["stop"])),class:"cursor-pointer"})])),_:1},8,["modelValue","onInput"])])])),_:1})])),_:1})}var r=l(1959),i=l(3231);const u={name:"Setting",setup(){const e=(0,r.iH)(null);let a=(0,r.iH)(null),l=(0,r.iH)(null);const o=(0,r.iH)(),c=(0,r.iH)();(0,t.dl)((async()=>{let e=await i.Z.getUserAll();o.value=e[0].user,c.value=await i.Z.getImageAll()}));const n=async e=>{let l=new FileReader;l.onload=async e=>{a.value=e.target.result,await i.Z.setImage(o.value,a.value)},l.readAsDataURL(e)},s=async e=>{let a=e.currentTarget.files[0],l=[a];l.map((async e=>{n(e)}))};return{uploadImage:e,mobileImage:l,handleImagesMobile:s,userImage:c}}};var d=l(4260),g=l(4816),m=l(4554),p=l(7518),w=l.n(p);const y=(0,d.Z)(u,[["render",s],["__scopeId","data-v-b8b8440a"]]),I=y;w()(u,"components",{QFile:g.Z,QIcon:m.Z})}}]);