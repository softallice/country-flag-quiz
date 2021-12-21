<template>
  <div :style="style" ref="lavContainer"/>
</template>
<script>
import { onMounted, watch, ref } from 'vue'
import lottie from "lottie-web";
import axios from "axios";

export default {
  name: 'LottieAnimation',
  props: {
    path: {
      required: true
    },
    speed: {
      type: Number,
      required: false,
      default: 1
    },
    width: {
      type: Number,
      required: false,
      default: -1
    },
    height: {
      type: Number,
      required: false,
      default: -1
    },
    loop: {
      type:Boolean,
      required: false,
      default: true
    },
    autoPlay: {
      type:Boolean,
      required: false,
      default: true
    },
    loopDelayMin: {
      type: Number,
      required: false,
      default: 0
    },
    loopDelayMax: {
      type: Number,
      required: false,
      default: 0
    },
  },
  setup(props, context) {

    const style = {
        width: (props.width != -1 )? `${props.width}px` : '100%',
        height: (props.height != -1 )? `${props.height}px` : '100%',
        overflow: "hidden",
        margin: "0 auto"
      };
    let anim ;
    let lavContainer = ref();

    const rendererSettings = {
      scaleMode: "centerCrop",
      clearCanvas: true,
      progressiveLoad: false,
      hideOnTransparent: true
    };

    async function loadJsonData(path) {
      return await axios.get("/badges/" + path).then(response => {
        return response.data;
      });
    }

    onMounted (async () => {
    // async function init() {
      
      let jsonData = await loadJsonData(props.path);
      
      if(anim) {
        anim.destroy(); // Releases resources. The DOM element will be emptied.
      }
      anim = lottie.loadAnimation({
        container: lavContainer.value,
        renderer: "svg",
        loop: props.loop,
        autoplay: props.autoPlay,
        animationData: jsonData,
        rendererSettings: rendererSettings
      });
      context.emit("AnimControl", anim);
      anim.setSpeed(props.speed);
      if (props.loopDelayMin > 0) {
        anim.loop = false;
        anim.autoplay = false;
        executeLoop();
      }
    })

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    function executeLoop() {
      anim.play();
      setTimeout(() => {
        anim.stop();
        executeLoop();
      }, getRandomInt(props.loopDelayMin, props.loopDelayMax == 0? props.loopDelayMin : props.loopDelayMax));
    }


      // console.log('props.path : ', props.path)

    // watch(props.path, (path, prevpath) => {
    //   init();
    // })
    // onMounted(() => {

    //   init();
    // })
    // const style = {
    //   width: props.width,
    //   height: props.height,
    //   overflow: 'hidden',
    //   margin: '0 auto',
    // };

    // const aniContainer = ref();

    // onMounted(() => {
    //     const anim = lottie.loadAnimation({
    //         container: aniContainer.value,
    //         renderer: 'svg',
    //         loop: !!props.options.loop,
    //         autoplay: !!props.options.autoplay,
    //         animationData: props.options.animationData,
    //         rendererSettings: props.options.rendererSettings,
    //     })
        
    //     context.emit('animCreated', anim)
    // })

    return {
      anim,
      style,
      lavContainer
    }
  },
}
</script>