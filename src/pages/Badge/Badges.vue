<template>
  <page>
    <page-header>
      <template #title>뱃지 모으기 </template>
    </page-header>
    <page-body>
        <div>
            <q-banner inline-actions class="text-white bg-primary">
                현재 점수는 <span class="text-h6 text-weight-bold text-orange-3"> {{score}} </span> 입니다. 
                뱃지 <span class="text-h6 text-weight-bold text-orange-3"> {{badgeCnt}} </span>개를 얻었습니다.
                뱃지는 5점당 하나씩 얻을수 있습니다. 
                
            </q-banner>
        </div>
        <div class="row q-pa-md items-start justify-center q-gutter-md "> 
            <q-card 
                v-for="badge in badges"
                :key="badge.index"
                class="my-card"
                flat bordered
            >
                <q-card-section>
                    <div class="text-h7 q-mb-xs text-dark text-weight-bold text-center">{{badge.lottie_nm}}</div>
                </q-card-section>

                <lottie-animation
                    :path="badge.lottie_file"
                    :width="148"
                    :height="148"
                />

                <q-card-actions align="right">
                    <q-btn flat round color="red" icon="favorite" />
                    <q-btn flat round color="teal" icon="bookmark" />
                </q-card-actions>
            </q-card>
            
        </div>
    </page-body>
  </page>
</template>

<script>
import { onActivated, onDeactivated, ref } from 'vue';
import store from 'src/myStore';
import LottieAnimation  from 'src/components/Lottie/LottieAnimation.vue';
import localInfo from 'src/use/useLocalDB';

export default {
  name: 'Badges',
  components: {
      LottieAnimation
  },
  setup() {
    const score = ref();
    const badgeCnt = ref();
    const badges = ref();

    // console.log(store.state.lottie.length);

    
    const calScore = (async () => {
        let couScore = await localInfo.getQuizeScore('country');
        let capScore = await localInfo.getQuizeScore('capital');
        score.value = couScore.score + capScore.score;

        badgeCnt.value = score.value > 155 ? 31 : Math.trunc(score.value/5) ;

        badges.value = store.state.lottie.filter((item) => item.index <= badgeCnt.value );
    });

    onActivated(()=>{
        calScore();
    })


    return {
      store,
      score,
      badges,
      badgeCnt
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 150px
//   height: 270px
</style>
