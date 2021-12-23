<template>
  <page>
    <page-header>
      <template #title>설정하기 </template>
    </page-header>
    <page-body>
        <div class="q-pa-md">
            <q-btn color="black" class="full-width" label="이름과 점수 초기화" @click="zeroInit()"/>
            <!-- <q-card class="my-card" flat bordered>
                <q-item>
                    <q-item-section avatar>
                        <q-avatar rounded >
                            <div style="width:32px">
                                <div v-if="userImage">
                                    <img :src="userImage.image" alt="image">
                                </div>
                                <div v-else @click="clickInputTag()">
                                    <input ref="image" id="input"
                                        type="file" name="image" accept="image/*" multiple="multiple"
                                        class="hidden"
                                        @change="uploadImage()">
                                    <q-icon name="las la-plus-circle" class="text-teal" style="font-size: 2em" />
                                </div>
                            </div>
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label class="text-weight-bold text-indigo-6">{{userNm}}</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                        <q-btn color="primary" label="변경" @click="clickInputTag()">
                            <input ref="image" id="input"
                                        type="file" name="image" accept="image/*" multiple="multiple"
                                        class="hidden"
                                        @change="uploadImage()">
                        </q-btn>
                    </q-item-section>
                </q-item>
                
                
            </q-card>             -->
        </div>
        <!-- <div class="q-pa-md my-file"> 
            <q-file
                v-model="mobileImage"
                label="사진을 선택해 주세요"
                filled
                accept=".jpg, image/*"
                @input="handleImagesMobile"
            >
                <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop />
                </template>
                <template v-slot:append>
                    <q-icon name="close" @click.stop="mobileImage = null" class="cursor-pointer" />
                </template>
            </q-file>
        </div> -->
    </page-body>
  </page>
</template>

<script>
import { onActivated, onDeactivated, ref } from 'vue';
import localInfo from 'src/use/useLocalDB';
import { useRouter } from 'vue-router'

export default {
  name: 'Setting',
  setup() {
    const $router = useRouter()
    // const uploadImage = ref(null);
    let rawImg = ref(null);
    let mobileImage = ref(null);

    const userNm = ref();

    const userImage = ref();

    const images = ref();
    const image = ref();
    
    // 배열의 마지막 값 가져오기
    const getLastArrItem = ((arr) => {
        return arr[arr.length-1] ;
    })

    // onActivated( async ()=>{
    //     let user = await localInfo.getUserAll();
    //     userNm.value = user[0].user;

    //     let userImages = await localInfo.getImageAll(); 
    //     userImage.value = getLastArrItem(userImages) ;
    // })

    const createBase64Image = (async (fileObject) => {
        // 이미지 base64
        let reader = new FileReader();
        reader.onload = async (e) => {
            rawImg.value = e.target.result;
            // imageInfo.setImage(fileObject.name, rawImg.value);
            // 서버에 이미지 저장
                await localInfo.setImage(userNm.value, rawImg.value );

                userImage.value = {
                    image: rawImg.value
                };
            // loc.url = remoteUrl.id;                              
        };
        reader.readAsDataURL(fileObject);
        // reader.readAsBinaryString(fileObject);
    })

    const handleImagesMobile = ( async (files) => {
        let file = files.currentTarget.files[0];

        let arrFile = [file];

        arrFile.map(async ( arr ) => {
            createBase64Image(arr);
        })
    })

    const uploadImage = (()=>{
        let upImage = image.value.files[0];
        // console.log("image", upImage);
        let arrFile = [upImage];

        arrFile.map(async ( arr ) => {
            createBase64Image(arr);
        })
    })

    const clickInputTag = (()=>{
        image.value.click();
    })

    const zeroInit = (async () => {
        await localInfo.deleteCollection('scores');
        await localInfo.deleteCollection('users');
        await localInfo.deleteCollection('lvs');
        $router.replace('/Home');
    })


    return {
        mobileImage,
        handleImagesMobile,
        userImage,
        userNm,
        zeroInit,

        images,
        image,
        clickInputTag,
        uploadImage
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
//   max-width: 150px
//   height: 150px
.my-file
    width: 100%
    max-width: 200px
</style>
