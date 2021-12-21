<template>
  <page>
    <page-header>
      <template #title>설정하기 </template>
    </page-header>
    <page-body>
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

export default {
  name: 'Setting',
  setup() {

    const uploadImage = ref(null);
    let rawImg = ref(null);
    let mobileImage = ref(null);

    const userNm = ref();

    const userImage = ref();
    
    onActivated( async ()=>{
        let user = await localInfo.getUserAll();
        userNm.value = user[0].user;

        userImage.value = await localInfo.getImageAll(); 
    })

    const createBase64Image = (async (fileObject) => {
        // 이미지 base64
        let reader = new FileReader();
        reader.onload = async (e) => {
            rawImg.value = e.target.result;
            // imageInfo.setImage(fileObject.name, rawImg.value);
            // 서버에 이미지 저장
                await localInfo.setImage(userNm.value, rawImg.value );
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


    return {
        uploadImage,
        mobileImage,
        handleImagesMobile,
        userImage
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 150px
//   height: 270px
.my-file
    width: 100%
    max-width: 200px
</style>
