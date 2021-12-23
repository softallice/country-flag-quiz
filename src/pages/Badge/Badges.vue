<template>
  <page>
    <page-header>
      <template #title>뱃지 모으기 </template>
    </page-header>
    <page-body>
        <q-tabs
          v-model="tab"
          dense
          class="bg-purple text-white"
          active-color="secondary"
          indicator-color="purple"
          align="justify"
        >
          <q-tab class="text-subtitle2 text-weight-bold" name="badge" label="뱃지" />
          <q-tab class="text-subtitle2 text-weight-bold" name="pocket" label="포켓몬" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated class="bg-primary text-white">
          <q-tab-panel name="badge">
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
          </q-tab-panel>
          <q-tab-panel name="pocket">
            <div>
                <q-banner inline-actions class="text-white bg-primary">
                  문제하나당 하나의 포켓몬을 얻을수 있습니다.                    
                </q-banner>
            </div>
            <div class="row q-pa-md items-start justify-center q-gutter-md "> 
                <q-card 
                    v-for="pocket in pockets"
                    :key="pocket.index"
                    class="my-card"
                    flat bordered
                >
                    <q-card-section>
                        <div class="text-h7 q-mb-xs text-dark text-weight-bold text-center">{{pocket.name}}</div>
                    </q-card-section>

                    <img :src="pocket.url" style="width:148px; height:148px">
                </q-card>
                
            </div>
          </q-tab-panel>
        </q-tab-panels>
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
    const tab = ref('badge');
    const score = ref();
    const badgeCnt = ref();
    const badges = ref();

    const pockets = ref();

    // console.log(store.state.lottie.length);

    
    const calScore = (async () => {
        let couScore = await localInfo.getQuizeScore('country');
        let capScore = await localInfo.getQuizeScore('capital');
        let pocScore = await localInfo.getQuizeScore('pocket');

        score.value = couScore.score + capScore.score;

        badgeCnt.value = score.value > 155 ? 31 : Math.trunc(score.value/5) ;

        badges.value = store.state.lottie.filter((item) => item.index <= badgeCnt.value );

        pockets.value = store.state.pockets.filter((item) => item.index <= pocScore.score );
    });

    onActivated(()=>{
        calScore();
    })


    return {
      store,
      score,
      badges,
      badgeCnt,
      pockets,

      tab
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
