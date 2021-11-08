<template>
    <div class="login">
        <header class="posting-header">
            <button class="back">
                <img src='../assets/right.png' class='back' alt='back to last page'/>
            </button>
            <p class="header-title">로그인</p>
        </header>
        


        <div class="login-content">

            <div class="adding">
                <p class="title">아이디</p>
                <input type="email" placeholder="아이디 입력" class="input" v-model="userId" />
            </div>
            <div class="adding">
                <p class="title">비밀번호</p>
                <input type="text" placeholder="8글자 이상" class="input"  v-model="userPassword"/>
            </div>ㅇ

            <button class="chat-btn post-btn" type="submit" @click='loginSubmit'>로그인</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Posting',
    data(){
        return {
            userId: null,
            userPassword: null,
        };
    },
    methods : {
        loginSubmit(){
            // let urlPath = "signIn";
            let inputData = {};
            inputData.signInId = this.userId;
            inputData.password = this.userPassword;
    
            console.log(inputData);

            axios.post(
                'http://prod.kcook-cake.com/app/sign-in', 
            // {signInId:this.userId, password:this.userPassword}
            JSON.stringify(inputData)
            )
            .then(res =>{
                console.log(res);
                this.$router.push("/");//성공 시 리스트 페이지 이동
            })
            .catch(error =>{
                console.log("에러발생:",error);
            })

    },
    },
}
</script>

<style lang="scss">
.posting{
    margin-bottom:45px;
}
.posting-header{
    display: flex;
    position: fixed;
    .back{
        position:initial;
    }
    .submit{
        margin:0;
    }
}
.header-title{
    position: absolute;
    left : 50%;
    transform: translate(-50%, 0);

}
.adding{
    margin-bottom:30px;
    span{
        color:#f66;
    }
}

.title{
    font-size: 16px;
    color:#333;
}
.input{
    width:100%;
    margin-top: 5px;
    padding:15px;
    border: 1px solid #ccc;
}

input::-webkit-input-placeholder {
    font-size: 16px;
    line-height: 3;
}

.desc{
    font-size: 12px;
    color:#90949c;
    margin: 5px 0;
}


.posting-content{
    margin: 0 10px;
    padding : 16px;
}

// 사진삽입
    .photo{
        padding: 0 5px 5px 5px;
        border-bottom : 1px solid #eee;
    }
    .photo-img{
        margin: 0 auto;
        display: block;
        width:20px;
        height:20px;
    }
    .adding-photo{
        padding: 10px 15px;
        border: 1px solid #333;
        border-radius: 10px;
    }

.post-btn{
    width:100%;
}
</style>