<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back
          label="홈"
        />
      </template>
      <template #title>나라 맞추기</template>
    </page-header>
    <page-body>
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
      >
        <div class="row justify-center">
            <div
                v-if="flag"
                class="q-pa-md"
            >
                <q-img
                    :src="flag.url"
                    class="no-pointer-events"
                    no-transition
                    no-spinner
                    style="max-width: 300px"
                >
                    <!-- <div class="absolute-bottom-right text-subtitle2">
                        {{flag.continent_nm}}
                    </div> -->
                </q-img>
                <div class="q-pa-lg  column">
                    <!-- <div class="column">{{ flag.caption }}</div> -->
                    <div v-if="answers" class="q-gutter-md">
                        <div v-for="answer in answers" :key="answer.index">
                            <q-btn 
                                style="width:250px"
                                unelevated 
                                rounded 
                                color="primary" 
                                :label="answer.country_nm"
                                @click="questionAnswer(answer.country_nm)"
                            />
                        </div>
                    </div>
                </div>
            </div>
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

        const showNotif = (( trueOrFalse ) => {
            let icon = trueOrFalse ? 'task_alt' : 'announcement' ;
            let message = trueOrFalse ? '정답입니다.' : '틀렸습니다.' ;
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

            console.log('answer.value', answers.value);
            
            flag.value.url = '/images/'+ flag.value.country_nm + '.gif';    
            
            shuffleArray(answers.value);

        })

        const nextQuestion = (()=>{        
            questionCount();
            question();        
        })

        const questionAnswer = (( answerNm )=>{
            // 정답
            let qna = false;
            
            if (flag.value.country_nm == answerNm) {
                qna = true;

                setTimeout(() => {
                    nextQuestion();
                }, 3000)
                
            }

            showNotif(qna);
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
