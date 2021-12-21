"use strict";(self["webpackChunkflag_quiz"]=self["webpackChunkflag_quiz"]||[]).push([[567],{3231:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(284);let o=new l.Z("db");const r=async()=>{let e;try{e=await o.collection("users").get()}catch(t){console.log("error",t)}return e},s=async e=>{let t;try{t=await o.collection("users").doc({user:e}).get()}catch(a){console.log("error",a)}return t},n=async e=>{let t={user:e};await o.collection("users").add(t)},i=async()=>{let e={id:1,name:"country",score:0},t={id:2,name:"capital",score:0};await o.collection("scores").add(e),await o.collection("scores").add(t)},u=async e=>{let t=1;"country"!=e&&(t=2);let a=await o.collection("scores").doc({id:t}).get();return a},c=async(e,t)=>{let a=1;"country"!=e&&(a=2);let l=await o.collection("scores").doc({id:a}).get();await o.collection("scores").doc({id:a}).update({score:l.score+t})},d=async(e,t)=>{let a={id:e,image:t};await o.collection("images").add(a)},m=async e=>{let t;try{t=await o.collection("images").doc({name:e}).get()}catch(a){console.log("error",a)}return t},p=async()=>{let e=await o.collection("images").get();return e},w={getUser:s,getUserAll:r,setUser:n,initScore:i,getQuizeScore:u,setQuizeScore:c,getImage:m,getImageAll:p,setImage:d},f=w},5798:(e,t,a)=>{a.d(t,{Z:()=>w});var l=a(3673),o=a(2323);function r(e,t,a,r,s,n){return(0,l.wg)(),(0,l.iD)("div",{style:(0,o.j5)(r.style),ref:"lavContainer"},null,4)}var s=a(1959),n=a(4593),i=a.n(n),u=a(52),c=a.n(u);const d={name:"LottieAnimation",props:{path:{required:!0},speed:{type:Number,required:!1,default:1},width:{type:Number,required:!1,default:-1},height:{type:Number,required:!1,default:-1},loop:{type:Boolean,required:!1,default:!0},autoPlay:{type:Boolean,required:!1,default:!0},loopDelayMin:{type:Number,required:!1,default:0},loopDelayMax:{type:Number,required:!1,default:0}},setup(e,t){const a={width:-1!=e.width?`${e.width}px`:"100%",height:-1!=e.height?`${e.height}px`:"100%",overflow:"hidden",margin:"0 auto"};let o,r=(0,s.iH)();const n={scaleMode:"centerCrop",clearCanvas:!0,progressiveLoad:!1,hideOnTransparent:!0};async function u(e){return await c().get("/badges/"+e).then((e=>e.data))}function d(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function m(){o.play(),setTimeout((()=>{o.stop(),m()}),d(e.loopDelayMin,0==e.loopDelayMax?e.loopDelayMin:e.loopDelayMax))}return(0,l.bv)((async()=>{let a=await u(e.path);o&&o.destroy(),o=i().loadAnimation({container:r.value,renderer:"svg",loop:e.loop,autoplay:e.autoPlay,animationData:a,rendererSettings:n}),t.emit("AnimControl",o),o.setSpeed(e.speed),e.loopDelayMin>0&&(o.loop=!1,o.autoplay=!1,m())})),{anim:o,style:a,lavContainer:r}}};var m=a(4260);const p=(0,m.Z)(d,[["render",r]]),w=p},2567:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var l=a(3673),o=a(2323),r=a(8880);const s=e=>((0,l.dD)("data-v-206eadbe"),e=e(),(0,l.Cn)(),e),n={class:"q-pa-xs row items-start q-gutter-md"},i=s((()=>(0,l._)("div",{class:"text-h6"},"신나는 방학! Quiz Game",-1))),u=s((()=>(0,l._)("div",{class:"text-subtitle2"},"by 아빠",-1))),c=s((()=>(0,l._)("img",{src:"https://cdn.quasar.dev/img/avatar2.jpg"},null,-1))),d=s((()=>(0,l._)("img",{src:"https://cdn.quasar.dev/img/mountains.jpg"},null,-1))),m={class:"q-pa-md row items-start q-gutter-md justify-between"},p=s((()=>(0,l._)("div",{class:"text-h6 text-weight-medium"},"나라 점수",-1))),w=s((()=>(0,l._)("div",{class:"text-h6 text-weight-medium"},"수도 점수",-1))),f={class:"q-pa-xs row items-start q-gutter-md justify-between"},g=s((()=>(0,l._)("div",{class:"text-h6"},"이름",-1)));function y(e,t,a,s,y,h){const _=(0,l.up)("q-card-section"),v=(0,l.up)("q-card"),q=(0,l.up)("q-avatar"),W=(0,l.up)("q-item-section"),b=(0,l.up)("q-item-label"),x=(0,l.up)("q-item"),Z=(0,l.up)("q-pull-to-refresh"),Q=(0,l.up)("lottie-animation"),U=(0,l.up)("page-home"),C=(0,l.up)("q-input"),S=(0,l.up)("q-btn"),D=(0,l.up)("q-card-actions"),M=(0,l.up)("q-dialog"),z=(0,l.up)("page"),k=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"bg-brand"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{onRefresh:s.refresh},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(v,{flat:"",class:"my-card bg-brand"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[i,u])),_:1})])),_:1}),(0,l.Wm)(v,{flat:"",class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[c])),_:1})])),_:1}),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-weight-bold text-indigo-6"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.userNm),1)])),_:1})])),_:1}),(0,l.Wm)(W,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{rounded:""},{default:(0,l.w5)((()=>[d])),_:1})])),_:1})])),_:1})])),_:1})]),(0,l._)("div",m,[(0,l.Wm)(v,{flat:"",class:"score-card text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[p])),_:1}),(0,l.Wm)(_,{class:"q-pt-none text-h4 text-weight-bold text-indigo-6"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.countryScore),1)])),_:1})])),_:1}),(0,l.Wm)(v,{flat:"",class:"score-card text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(_,{class:"q-pt-none text-h4 text-weight-bold text-indigo-6 text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.capitalScore),1)])),_:1})])),_:1})])])),_:1},8,["onRefresh"]),(0,l._)("div",f,[(0,l.Wm)(v,{class:"my-card",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[(0,l.Uk)("뱃지 : "+(0,o.zw)(s.store.state.lottie[0].lottie_nm),1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Q,{path:s.store.state.lottie[0].lottie_file},null,8,["path"])])),_:1})])])),_:1}),(0,l.Wm)(M,{modelValue:s.prompt,"onUpdate:modelValue":t[2]||(t[2]=e=>s.prompt=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(_,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{dense:"",modelValue:s.addUser,"onUpdate:modelValue":t[0]||(t[0]=e=>s.addUser=e),autofocus:"",onKeyup:t[1]||(t[1]=(0,r.D2)((e=>s.prompt=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,l.Wm)(D,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(S,{flat:"",label:"취소"},null,512),[[k]]),(0,l.Wm)(S,{flat:"",label:"저장",onClick:s.saveUser},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var h=a(1959),_=a(3231),v=a(3162),q=a(5798);const W={name:"Home",components:{LottieAnimation:q.Z},setup(){const e=(0,h.iH)(!1),t=(0,h.iH)(""),a=(0,h.iH)(""),o=(0,h.iH)(0),r=(0,h.iH)(0);(0,l.dl)((async()=>{s()}));const s=async()=>{let t=await _.Z.getUserAll();if(0===t.length)e.value=!0;else{a.value=t[0].user;let e=await _.Z.getQuizeScore("country"),l=await _.Z.getQuizeScore("capital");o.value=e.score,r.value=l.score}},n=async()=>{await _.Z.setUser(t.value),await _.Z.initScore(),e.value=!1,s()},i=e=>{setTimeout((()=>{s(),e()}),1e3)};return{prompt:e,addUser:t,saveUser:n,store:v.Z,userNm:a,countryScore:o,capitalScore:r,refresh:i}}};var b=a(4260),x=a(3720),Z=a(151),Q=a(5589),U=a(3414),C=a(2035),S=a(5096),D=a(2350),M=a(3045),z=a(2426),k=a(9367),A=a(8240),I=a(677),H=a(7518),N=a.n(H);const j=(0,b.Z)(W,[["render",y],["__scopeId","data-v-206eadbe"]]),V=j;N()(W,"components",{QPullToRefresh:x.Z,QCard:Z.Z,QCardSection:Q.Z,QItem:U.Z,QItemSection:C.Z,QAvatar:S.Z,QItemLabel:D.Z,QDialog:M.Z,QInput:z.Z,QCardActions:k.Z,QBtn:A.Z}),N()(W,"directives",{ClosePopup:I.Z})}}]);