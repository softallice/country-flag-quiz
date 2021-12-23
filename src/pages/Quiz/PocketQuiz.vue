<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back
          label="퀴즈"
        />
      </template>
      <template #title>포켓몬 맞추기</template>
    </page-header>
    <page-body>
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
      >
        <div class="row justify-center">
            <q-card v-if="pocket" flat class="q-pa-md">
                <q-card-section class="q-pt-xs">
                    <div class="text-h6 q-mt-sm q-mb-xs">문제. {{ pocket.index }}</div>
                </q-card-section>
                <q-img
                    :src="pocket.url"
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
                                    :label="answer.name"
                                    @click="questionAnswer(answer.name)"
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
import { onActivated, onDeactivated, ref } from 'vue';
import { useQuasar } from 'quasar';
import store from 'src/myStore';
import localInfo from 'src/use/useLocalDB';

export default {
  name: 'Pocket',
  setup() {

      const $q = useQuasar()

        let pocket = ref();
        let answers = ref();
        let questionIndex = 1;


        let questionCount = (()=>{
            questionIndex += 1;
            pocketScore();
        })

        const pocketScore = ( async () => {
             await localInfo.setQuizeScore('pocket', 1 );
        })

        const shuffleArray = ((inputArray) => {
            inputArray.sort(()=> Math.random() - 0.5);
        })

        const showNotif = (( trueOrFalse , answerNm ) => {
            let icon = trueOrFalse ? 'task_alt' : 'announcement' ;
            let message = trueOrFalse ? answerNm + '  참 잘했어요 !! 정답입니다.'  : '틀렸습니다.' ;
            $q.notify({
                message: message,
                icon: icon,
                color: trueOrFalse ? 'primary' : 'secondary'
            })
        })

        onActivated(() => {
            pocket.value = store.getters.getPocket(String(questionIndex));
            answers.value = store.getters.getPocketRandom()
            answers.value.push(pocket.value);

            // pocket.value.url = '/images/'+ pocket.value.country_nm + '.gif';    
            console.log('answers.value' , answers.value);

            shuffleArray(answers.value);
        })

        onDeactivated(() => {
            pocket.value = null;
            answers.value = null;
        })

        const question = (()=>{
            pocket.value = null;
            answers.value = null;

            pocket.value = store.getters.getPocket(String(questionIndex));
            answers.value = store.getters.getPocketRandom();

            console.log('answers.value : ', answers.value);
            answers.value.push(pocket.value);

            // pocket.value.url = '/images/'+ pocket.value.country_nm + '.gif';    
            
            shuffleArray(answers.value);

        })

        const nextQuestion = (()=>{        
            questionCount();
            question();        
        })

        const questionAnswer = (( answerNm )=>{
            // 정답
            let qna = false;
            
            if (pocket.value.name == answerNm) {
                qna = true;

                setTimeout(() => {
                    nextQuestion();
                }, 2000)
                
            }
            showNotif(qna, answerNm); 
        })

        return {
            store,
            pocket,
            answers,
            questionAnswer
        }
  }
}
</script>
