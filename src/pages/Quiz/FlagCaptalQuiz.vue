<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back
          label="홈"
        />
      </template>
      <template #title>수도 맞추기</template>
    </page-header>
    <page-body>
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
      >
        <div class="row justify-center">
            <q-card v-if="flag" flat class="q-pa-md">
                <q-card-section class="q-pt-xs">
                    <div class="text-h6 q-mt-sm q-mb-xs">문제. {{ flag.index }}</div>
                </q-card-section>
                <q-img
                    :src="flag.url"
                    class="no-pointer-events"
                    no-transition
                    no-spinner
                    style="max-width: 300px"
                >
                </q-img>
                <q-card-section>
                    <div class="q-pa-lg  column">
                    <!-- <div class="column">{{ flag.caption }}</div> -->
                        <div v-if="answers" class="q-gutter-md">
                            <div v-for="answer in answers" :key="answer.index">
                                <q-btn 
                                    style="width:250px"
                                    unelevated 
                                    rounded 
                                    color="primary" 
                                    :label="answer.capital_nm"
                                    @click="questionAnswer(answer.country_nm, answer.capital_nm)"
                                />
                            </div>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
            
        </div>
      </transition>
    </page-body>
  </page>
</template>

<script>
import { onActivated, onDeactivated, ref } from 'vue'
import { useQuasar } from 'quasar'
import store from 'src/myStore'

export default {
  name: 'Flag',
  setup() {

      const $q = useQuasar()

        let flag = ref();
        let answers = ref();
        let questionIndex = 1;


        let questionCount = (()=>{
            questionIndex += 1;
        })

        const shuffleArray = ((inputArray) => {
            inputArray.sort(()=> Math.random() - 0.5);
        })

        const showNotif = (( trueOrFalse , answerNm ) => {
            let icon = trueOrFalse ? 'task_alt' : 'announcement' ;
            let message = trueOrFalse ? answerNm + ' 유승혁 !! 정답입니다.'  : '틀렸습니다.' ;
            $q.notify({
                message: message,
                icon: icon
            })
        })

        onActivated(() => {
            flag.value = store.getters.getFlag(String(questionIndex));
            answers.value = store.getters.getRandom()
            answers.value.push(flag.value);
            
            flag.value.url = '/images/'+ flag.value.country_nm + '.gif';    

            shuffleArray(answers.value);
        })

        onDeactivated(() => {
            flag.value = null;
            answers.value = null;
        })

        const question = (()=>{
            flag.value = null;
            answers.value = null;

            flag.value = store.getters.getFlag(String(questionIndex));
            answers.value = store.getters.getRandom();
            answers.value.push(flag.value);

            flag.value.url = '/images/'+ flag.value.country_nm + '.gif';    
            
            shuffleArray(answers.value);

        })

        const nextQuestion = (()=>{        
            questionCount();
            question();        
        })

        const questionAnswer = (( answerNm, capital_nm )=>{
            // 정답
            let qna = false;
            
            if (flag.value.country_nm == answerNm) {
                qna = true;

                setTimeout(() => {
                    nextQuestion();
                }, 2000)
                
            }
            showNotif(qna, capital_nm); 
        })

        return {
            store,
            flag,
            answers,
            questionAnswer
        }
  }
}
</script>
