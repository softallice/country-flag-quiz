import Localbase from 'localbase';

// DB 커넥션
let db = new Localbase('db');

const getUserAll = ( async ( ) => {
    let response;
    
    response = await db.collection('users').get()
    
    
    return response;
})

const getUser = ( async ( user ) => {
    let response;
    try {
        response = await db.collection('users').doc({ user: user }).get();
    } catch(e) {
        console.log('error', e);
    }
    
    return response;
})

const setUser = ( async ( user ) => {
    let data = {
        user : user
    };

    await db.collection('users').add(data) ;
})

const initScore = ( async () => {
    let country = {
        id: 1,
        name: 'country',
        score: 0
      };
    let capital = {
        id: 2, 
        name: 'capital',
        score: 0
      }; 

    let pocket = {
        id: 3, 
        name: 'pocket',
        score: 0
    }; 

    // 문제 저장
    let pocketLv = {
        id: 1, 
        name: 'pocket',
        lv: 1
    }; 


    await db.collection('scores').add(country) ;
    await db.collection('scores').add(capital) ;
    await db.collection('scores').add(pocket) ;

    await db.collection('lvs').add(pocketLv) ;
})

const getQuizeScore = ( async ( flag ) => {
    let id = 1;
    
    if (flag === 'capital' ) {
        id = 2;
    } else if ( flag === 'pocket') {
        id = 3;
    }
    
    let orgScore = await db.collection('scores').doc({ id: id }).get();

    return orgScore;
})

const getQuizeLv = ( async ( flag ) => {
    let id = 1;
    
    if (flag === 'pocket' ) {
        id = 1;
    } 
    
    let lv = await db.collection('lvs').doc({ id: id }).get();

    return lv;
})

const setQuizeScore = ( async ( flag, score ) => {
    let id = 1;
    
    if (flag === 'capital' ) {
        id = 2;
    } else if ( flag === 'pocket') {
        id = 3;
    }
    
    let orgScore = await db.collection('scores').doc({ id: id }).get();

    await db.collection('scores').doc({ id: id }).update({
        score: orgScore.score + score
      }) ;
})

const setQuizelv = ( async ( flag, lv ) => {
    let id = 1;
    
    if (flag === 'pocket' ) {
        id = 1;
    } 

    let lvNo = await db.collection('lvs').doc({ id: id }).get();

    
    await db.collection('lvs').doc({ id: id }).update({
        lv: lvNo.lv + lv
      }) ;
})

// 로컬 indexedDB에 저장
const setImage = ( async ( name , image ) => {
    
    let data = {
        id : name,
        image : image
    };
    
    await db.collection('images').add(data) ;

})

// 로컬 이미지 가져오기
const getImage = ( async ( name ) => {
    let response
    try {
        response = await db.collection('images').doc({ name: name }).get()
    } catch(e) {
        console.log('error', e);
    }
    
    return response;
})

const getImageAll = (async ( ) => {
    let response = await db.collection('images').get()

    return response;
})

// 컬랙션 삭제
const deleteCollection = ( async ( collection ) => {    
    await db.collection(collection).delete() ;
})

const localInfo = {
    getUser,
    getUserAll,
    setUser,
    initScore,
    getQuizeScore,
    setQuizelv,
    getQuizeLv,
    setQuizeScore,
    getImage,
    getImageAll,
    setImage,
    deleteCollection
};

export default localInfo;