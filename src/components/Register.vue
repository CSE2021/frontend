<template>
    <v-app id="Register" class="register">
        <header class="posting-header">
            <button class="back">
                <img src='../assets/right.png' class='back' alt='back to last page'/>
            </button>
            <p class="header-title">사용자 등록</p>
            <button class="submit">저장</button>
        
        </header>

        <div class="regist-content">
                <h3 class="regist-title">프로필 설정</h3>
            <div class="adding">
                <p class="title">닉네임 입력<span>*</span></p>
                <input type="text" placeholder="제목 입력" class="input" />
                <button class="chat-btn btn">중복확인</button>
            </div>
                <div class="adding">
                <p class="title">사진 등록<span>*</span></p>
                <input type="file" accept="image/*" placeholder="제목 입력" class="input-file" />
            </div>

            <div class="self-auth adding">
                <div class="adding">
                    <p class="title">본인인증<span>*</span></p>
                    <button class="chat-btn btn" @click="loginWithKakao">카카오 인증</button>
                </div>
                <!-- <form name="form_chk" method="post">
                    <input type="hidden" name="m" value="checkplusService">
                    <input type="hidden" name="EncodeData" value="">
                </form> -->
                
            </div>
            <div class="regional">
                <h3 class="regist-title">거래지역 인증</h3>
                <div id="map" class="map" style="width:100%;height:350px;">
                </div>
                <button class="nic btn">다른지역 선택하기</button>
            </div>
            <button class="submit btn">
                거래하러 가기!
            </button>
        </div>

    </v-app>
</template>


<script >
// gps 연동

// var gps_use = null; //gps의 사용가능 여부
// var gps_lat = null; // 위도
// var gps_lng = null; // 경도
// var gps_position; // gps 위치 객체

// // gps가 이용가능한지 체크하는 함수이며, 이용가능하다면 show location 함수를 불러온다.
// // 만약 작동되지 않는다면 경고창을 띄우고, 에러가 있다면 errorHandler 함수를 불러온다.
// // timeout을 통해 시간제한을 둔다.
// if (navigator.geolocation) {
//     var options = {timeout:60000};
//     navigator.geolocation.getCurrentPosition(function(position){
//         gps_use = true;
//         gps_lat = position.coords.latitude;
//         gps_lng = position.coords.longitude;
//     });
// } else {
//     alert("GPS_추적이 불가합니다.");
//     gps_use = false;
// }



// // gps 이용 가능 시, 위도와 경도를 반환하는 showlocation함수.
// function showLocation(position) {
 
// }


// // error발생 시 에러의 종류를 알려주는 함수.
// function errorHandler(error) {
//     if(error.code == 1) {
//         alert("접근차단");
//     } else if( err.code == 2) {
//         alert("위치를 반환할 수 없습니다.");
//     }
//     gps_use = false;
// }



export default {

    
    name:'Register',
    
    setup() {
        
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            //global kakao
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2844ff5ba6815df9b368effb5f45d7b9';
            document.head.appendChild(script);
        }
    },
    methods: {
        loginWithKakao() {
            try{
                return new Promise((resolve,reject) =>{
                    if(!window.Kakao){
                        reject('Kakao 인스턴스가 존재하지 않습니다.')
                    }
                    const params = {
                        redirectUri: "http://localhost:8081/Register",
                    };
                    window.Kakao.Auth.authorize(params);

                    window.KaKao.Auth.login({
                        success: (auth)=>{
                            console.log('정상적으로 로그인되었습니다',auth)
                            this.setState({
                                isLogin:true
                            })
                        },
                        fail:(err)=>{
                            console.error(err)
                        }
                    })
                })
            }catch(err){
                console.error(err)
            }
        },
        //로그아웃
        // logoutWithKakao () =>{
        //     if(window.Kakao.Auth.getAccessToken()){
        //         console.log('카카오 인증 액세스 토큰이 존재합니다',window.Kakao.Auth.getAccessToken());
        //         this.setState({
        //             isLogin:false
        //         })
        //     };
        initMap() {
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(37.486614472824265, 126.80189352666078),
                level: 2 
            };

            var map = new kakao.maps.Map(container, options);

            var markerPosition  = new kakao.maps.LatLng(37.486614472824265, 126.80189352666078); 
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);

        },


       
        
    },
}
</script>

<style lang="scss">
.regist-content{
    padding: 0 20px;
}

.regist-profile{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #eee;

}

.add-user{
    width: 30px;
    height: 30px;
    padding: 10px;
    border-radius: 35px;
    border: 1px solid green;
}
.regist-title{
    font-size: 16px;
    margin-bottom: 5px;
}

.self-auth{
    padding: 10px 0 ;
    border-bottom: 1px solid #eee;

    input{
        margin-right:20px;
        border-bottom: 1px solid green;
    }
}
.num{
    margin-bottom: 10px;
}

.map{
    background-color: greenyellow;
    width:100%;
}
.submit{
    margin : 0 auto;
    display: block;
}
</style>
