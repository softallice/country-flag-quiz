"use strict";(self["webpackChunkflag_quiz"]=self["webpackChunkflag_quiz"]||[]).push([[125],{3231:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(284);let o=new l.Z("db");const i=async()=>{let e;return e=await o.collection("users").get(),e},s=async e=>{let t;try{t=await o.collection("users").doc({user:e}).get()}catch(a){console.log("error",a)}return t},r=async e=>{let t={user:e};await o.collection("users").add(t)},n=async()=>{let e={id:1,name:"country",score:0},t={id:2,name:"capital",score:0},a={id:3,name:"pocket",score:0},l={id:1,name:"pocket",lv:1};await o.collection("scores").add(e),await o.collection("scores").add(t),await o.collection("scores").add(a),await o.collection("lvs").add(l)},c=async e=>{let t=1;"capital"===e?t=2:"pocket"===e&&(t=3);let a=await o.collection("scores").doc({id:t}).get();return a},d=async e=>{let t=1;"pocket"===e&&(t=1);let a=await o.collection("lvs").doc({id:t}).get();return a},u=async(e,t)=>{let a=1;"capital"===e?a=2:"pocket"===e&&(a=3);let l=await o.collection("scores").doc({id:a}).get();await o.collection("scores").doc({id:a}).update({score:l.score+t})},m=async(e,t)=>{let a=1;"pocket"===e&&(a=1);let l=await o.collection("lvs").doc({id:a}).get();await o.collection("lvs").doc({id:a}).update({lv:l.lv+t})},p=async(e,t)=>{let a={id:e,image:t};await o.collection("images").add(a)},w=async e=>{let t;try{t=await o.collection("images").doc({name:e}).get()}catch(a){console.log("error",a)}return t},g=async()=>{let e=await o.collection("images").get();return e},f=async e=>{await o.collection(e).delete()},h={getUser:s,getUserAll:i,setUser:r,initScore:n,getQuizeScore:c,setQuizelv:m,getQuizeLv:d,setQuizeScore:u,getImage:w,getImageAll:g,setImage:p,deleteCollection:f},y=h},5798:(e,t,a)=>{a.d(t,{Z:()=>w});var l=a(3673),o=a(2323);function i(e,t,a,i,s,r){return(0,l.wg)(),(0,l.iD)("div",{style:(0,o.j5)(i.style),ref:"lavContainer"},null,4)}var s=a(1959),r=a(4593),n=a.n(r),c=a(52),d=a.n(c);const u={name:"LottieAnimation",props:{path:{required:!0},speed:{type:Number,required:!1,default:1},width:{type:Number,required:!1,default:-1},height:{type:Number,required:!1,default:-1},loop:{type:Boolean,required:!1,default:!0},autoPlay:{type:Boolean,required:!1,default:!0},loopDelayMin:{type:Number,required:!1,default:0},loopDelayMax:{type:Number,required:!1,default:0}},setup(e,t){const a={width:-1!=e.width?`${e.width}px`:"100%",height:-1!=e.height?`${e.height}px`:"100%",overflow:"hidden",margin:"0 auto"};let o,i=(0,s.iH)();const r={scaleMode:"centerCrop",clearCanvas:!0,progressiveLoad:!1,hideOnTransparent:!0};async function c(e){return await d().get("/badges/"+e).then((e=>e.data))}function u(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function m(){o.play(),setTimeout((()=>{o.stop(),m()}),u(e.loopDelayMin,0==e.loopDelayMax?e.loopDelayMin:e.loopDelayMax))}return(0,l.bv)((async()=>{let a=await c(e.path);o&&o.destroy(),o=n().loadAnimation({container:i.value,renderer:"svg",loop:e.loop,autoplay:e.autoPlay,animationData:a,rendererSettings:r}),t.emit("AnimControl",o),o.setSpeed(e.speed),e.loopDelayMin>0&&(o.loop=!1,o.autoplay=!1,m())})),{anim:o,style:a,lavContainer:i}}};var m=a(4260);const p=(0,m.Z)(u,[["render",i]]),w=p},125:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var l=a(3673),o=a(2323),i=a(8880);const s=e=>((0,l.dD)("data-v-216ec864"),e=e(),(0,l.Cn)(),e),r={class:"q-pa-xs row items-start q-gutter-md"},n=s((()=>(0,l._)("div",{class:"text-h6"},"신나는 방학! Quiz Game",-1))),c=s((()=>(0,l._)("div",{class:"text-subtitle2"},"by 아빠",-1))),d=s((()=>(0,l._)("img",{src:"https://cdn.quasar.dev/img/avatar2.jpg"},null,-1))),u=s((()=>(0,l._)("img",{src:"https://cdn.quasar.dev/img/mountains.jpg"},null,-1))),m={class:"q-pa-md row items-start q-gutter-md justify-between"},p=s((()=>(0,l._)("div",{class:"text-h7 text-weight-medium"},"나라점수",-1))),w=s((()=>(0,l._)("div",{class:"text-h7 text-weight-medium"},"수도점수",-1))),g=s((()=>(0,l._)("div",{class:"text-h7 text-weight-medium"},"포켓점수",-1))),f={class:"q-pa-xs row items-start q-gutter-md justify-between"},h=s((()=>(0,l._)("div",{class:"text-h6"},"이름",-1)));function y(e,t,a,s,y,v){const _=(0,l.up)("q-card-section"),x=(0,l.up)("q-card"),q=(0,l.up)("q-avatar"),W=(0,l.up)("q-item-section"),b=(0,l.up)("q-item-label"),Z=(0,l.up)("q-item"),k=(0,l.up)("q-pull-to-refresh"),Q=(0,l.up)("lottie-animation"),S=(0,l.up)("page-home"),U=(0,l.up)("q-input"),z=(0,l.up)("q-btn"),C=(0,l.up)("q-card-actions"),D=(0,l.up)("q-dialog"),M=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(M,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"bg-brand"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{onRefresh:s.refresh},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(x,{flat:"",class:"my-card bg-brand"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[n,c])),_:1})])),_:1}),(0,l.Wm)(x,{flat:"",class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[d])),_:1})])),_:1}),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-weight-bold text-indigo-6"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.userNm),1)])),_:1})])),_:1}),(0,l.Wm)(W,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{rounded:""},{default:(0,l.w5)((()=>[u])),_:1})])),_:1})])),_:1})])),_:1})]),(0,l._)("div",m,[(0,l.Wm)(x,{flat:"",class:"score-card text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[p])),_:1}),(0,l.Wm)(_,{class:"q-pt-none text-h4 text-weight-bold text-indigo-6"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.countryScore),1)])),_:1})])),_:1}),(0,l.Wm)(x,{flat:"",class:"score-card text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(_,{class:"q-pt-none text-h4 text-weight-bold text-indigo-6 text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.capitalScore),1)])),_:1})])),_:1}),(0,l.Wm)(x,{flat:"",class:"score-card text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(_,{class:"q-pt-none text-h4 text-weight-bold text-indigo-6 text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.pocketScore),1)])),_:1})])),_:1})])])),_:1},8,["onRefresh"]),(0,l._)("div",f,[(0,l.Wm)(x,{class:"my-card",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[(0,l.Uk)("뱃지 : "+(0,o.zw)(s.store.state.lottie[0].lottie_nm),1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Q,{path:s.store.state.lottie[0].lottie_file},null,8,["path"])])),_:1})])])),_:1}),(0,l.Wm)(D,{modelValue:s.prompt,"onUpdate:modelValue":t[2]||(t[2]=e=>s.prompt=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)(_,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{dense:"",modelValue:s.addUser,"onUpdate:modelValue":t[0]||(t[0]=e=>s.addUser=e),autofocus:"",onKeyup:t[1]||(t[1]=(0,i.D2)((e=>s.prompt=!1),["enter"]))},null,8,["modelValue"])])),_:1}),(0,l.Wm)(C,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{flat:"",label:"저장",onClick:s.saveUser},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var v=a(1959),_=a(3231),x=a(3162),q=a(5798);const W={name:"Home",components:{LottieAnimation:q.Z},setup(){const e=(0,v.iH)(!1),t=(0,v.iH)(""),a=(0,v.iH)(""),o=(0,v.iH)(0),i=(0,v.iH)(0),s=(0,v.iH)(0);(0,l.dl)((async()=>{await r()}));const r=async()=>{let t=await _.Z.getUserAll();if(0===t.length)e.value=!0;else{a.value=t[0].user;let e=await _.Z.getQuizeScore("country"),l=await _.Z.getQuizeScore("capital"),r=await _.Z.getQuizeScore("pocket");o.value=e.score,i.value=l.score,s.value=r.score}},n=async()=>{await _.Z.setUser(t.value),await _.Z.initScore(),e.value=!1,r()},c=e=>{setTimeout((()=>{r(),e()}),1e3)};return{prompt:e,addUser:t,saveUser:n,store:x.Z,userNm:a,countryScore:o,capitalScore:i,pocketScore:s,refresh:c}}};var b=a(4260),Z=a(3720),k=a(151),Q=a(5589),S=a(3414),U=a(2035),z=a(5096),C=a(2350),D=a(3045),M=a(2426),A=a(9367),H=a(8240),I=a(677),N=a(7518),j=a.n(N);const V=(0,b.Z)(W,[["render",y],["__scopeId","data-v-216ec864"]]),L=V;j()(W,"components",{QPullToRefresh:Z.Z,QCard:k.Z,QCardSection:Q.Z,QItem:S.Z,QItemSection:U.Z,QAvatar:z.Z,QItemLabel:C.Z,QDialog:D.Z,QInput:M.Z,QCardActions:A.Z,QBtn:H.Z}),j()(W,"directives",{ClosePopup:I.Z})}}]);