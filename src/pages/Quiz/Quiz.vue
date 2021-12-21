<template>
  <page>
    <page-header>
      <template #title>Quiz</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">

        <div class="text-h5 q-mb-md">국가/수도 맞추기 퀴즈!</div>

        <q-btn
          to="/quiz/FlagQuiz"
          label="국가 맞추기"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />

        <q-btn
          to="/quiz/FlagCaptalQuiz"
          label="수도 맞추기"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />
      </div>
    </page-body>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">이름</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="userNm" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="취소" v-close-popup />
          <q-btn flat label="저장" @click="saveUser" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </page>
</template>

<script>
import { onActivated, ref } from 'vue';
import localInfo from 'src/use/useLocalDB';

export default {
  name: 'Home',
  setup () {
    const prompt = ref(false);
    const userNm  = ref('');   

    onActivated( async ()=>{
      init();
    })

    const init = ( async () =>{
      let user = await localInfo.getUserAll();
      console.log(user)
      if (user.length === 0 ) {
        prompt.value = true;
      }
    })

    const saveUser = (() => {
      localInfo.setUser(userNm.value);
      prompt.value = false;
    })

    return {
      prompt,
      userNm,
      saveUser
    }
  }
}
</script>
