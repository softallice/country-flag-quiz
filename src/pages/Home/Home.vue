<template>
  <page>
    <page-home class="bg-brand ">
      <!-- 대시보드 헤더 -->
      <q-pull-to-refresh @refresh="refresh">
        <div class="q-pa-xs row items-start q-gutter-md">
          <q-card flat class="my-card bg-brand">
            <q-card-section>
              <div class="text-h6">신나는 방학! Quiz Game</div>
              <div class="text-subtitle2">by 아빠</div>
            </q-card-section>
          </q-card>

          <q-card flat class="my-card">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-weight-bold text-indigo-6">{{userNm}}</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-avatar rounded>
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      <!-- 스코어 -->
        <div class="q-pa-md row items-start q-gutter-md justify-between">
          <!-- 나라 -->
          <q-card flat  class="score-card text-center">
            <q-card-section>
              <div class="text-h7 text-weight-medium ">나라점수</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-h4 text-weight-bold text-indigo-6">
              {{countryScore}}
            </q-card-section>
          </q-card>
          <!-- 수도 -->
          <q-card flat  class="score-card text-center">
            <q-card-section>
              <div class="text-h7 text-weight-medium">수도점수</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-h4 text-weight-bold text-indigo-6 text-center">
              {{capitalScore}}
            </q-card-section>
          </q-card>
          <!-- 포켓몬 -->
          <q-card flat  class="score-card text-center">
            <q-card-section>
              <div class="text-h7 text-weight-medium">포켓점수</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-h4 text-weight-bold text-indigo-6 text-center">
              {{pocketScore}}
            </q-card-section>
          </q-card>
        </div>
      </q-pull-to-refresh>
      <!-- 뱃지 -->
      <div class="q-pa-xs row items-start q-gutter-md justify-between">
        <q-card class="my-card" flat>
          <q-item>
            <q-item-section>
              <q-item-label class="text-weight-bold">뱃지 : {{store.state.lottie[0].lottie_nm}}</q-item-label>
            </q-item-section>
          </q-item>

          <lottie-animation
            :path="store.state.lottie[0].lottie_file"
          />
        </q-card>
      </div>
    </page-home>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">이름</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="addUser" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <!-- <q-btn flat label="취소" v-close-popup /> -->
          <q-btn flat label="저장" @click="saveUser" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </page>
</template>

<script>
import { onActivated, ref } from 'vue';
import localInfo from 'src/use/useLocalDB';
import store from 'src/myStore';

import LottieAnimation  from 'src/components/Lottie/LottieAnimation.vue'

export default {
  name: 'Home',
  components: {
      LottieAnimation
  },
  setup () {
    const prompt = ref(false);
    const addUser  = ref('');   
    const userNm = ref('');   
    const countryScore = ref(0);
    const capitalScore = ref(0);
    const pocketScore = ref(0);

    onActivated( async ()=>{
      await init();
    })

    const init = ( async () =>{
      let user = await localInfo.getUserAll();
      
      if (user.length === 0 ) {
        prompt.value = true;
      } else {
        userNm.value = user[0].user;
        let couScore = await localInfo.getQuizeScore('country');
        let capScore = await localInfo.getQuizeScore('capital');
        let pocScore = await localInfo.getQuizeScore('pocket');
        countryScore.value = couScore.score;
        capitalScore.value = capScore.score;
        pocketScore.value = pocScore.score;
      }


    })

    const saveUser = (async () => {
      await localInfo.setUser(addUser.value);
      await localInfo.initScore();
      prompt.value = false;
      init();
    })

    const refresh = ((done) => {
      setTimeout(() => {
          init();
          done()
        }, 1000)
    })

    return {
      prompt,
      addUser,
      saveUser,
      store,
      userNm,
      countryScore,
      capitalScore,
      pocketScore,
      refresh
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  // max-width: 250px

.bg-brand 
  background: #F2F6F9 !important

.score-card
  width: 100%
  max-width: 90px
</style>
