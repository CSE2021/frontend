<template>
    <div class="register">
        <header class="header">
            <p class="loaction"> 
                <img src="../assets/avocado.png" class="logo" alt="logo"/>
                회원가입
            </p>
        </header>

        <div class="regist-content">
                <h3 class="regist-title">프로필 설정</h3>
            <div class="regist-profile">
                <button class="add-profile">
                    <img src="../assets/add-user.png" class="add-user icon-btn">
                </button>
                <input type="text" placeholder="닉네임 입력"/>
                <button class="nic btn">중복확인</button>
            </div>
            <div class="self-auth">
                <h3 class="regist-title">본인인증</h3>
                <div class="num">
                    <input type="text" placeholder="휴대폰 번호 입력"/>
                    <button class="nic btn">인증번호 받기</button>
                </div>
                <div class="num">
                    <input type="text" placeholder="인증번호 입력"/>
                    <button class="nic btn">확인</button>
                </div>

            </div>
            <div class="regional">
                <h3 class="regist-title">거래지역 인증</h3>
                <img class="map" src="../assets/item.jpeg">
                <p>현재위치는 {{역곡동}} 입니다</p>
                <button class="nic btn">다른지역 선택하기</button>
            </div>
            <button class="submit btn">
                거래하러 가기!
            </button>
        </div>

    </div>
</template>

<script>
export default {
    setup() {
        
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
