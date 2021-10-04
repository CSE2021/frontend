<template>
  <div class="app">
    <div class="not-logged-in" v-if="login == 0 ">
      <img src="./assets/avocado.png"/>
      <p>
        가장 : 가볍게 장보자<br/>
        물건사러 가장!
      </p>
      <button class="btn">회원가입 하기</button>
      <button class="btn" @click=" login =1 ">로그인 하기</button>
    </div>
    <div class="logged-in" v-if="login ==1">
      <div v-if="step == 0">
        <!-- <HelloWorld /> -->
        <Register />
      </div>
      <div v-if="step == 2">
        <PageDetail />
      </div>
      
      <div v-if="step == 1">
        <Posting />
      </div>
      <div v-if="step == 3">
        <Mypage />
      </div>


      <footer>
        <button class="home" @click=" step=0">
          <img class="home-icon" src="./assets/home.png"/>
          장보기
        </button>

        <button class="post" @click=" step=1 ">
          <img class="post-icon" src="./assets/post.png"/>
          글쓰기
        </button>

        <button class="chat" @click=" step=2" >
          <img class="chat-icon" src="./assets/chat.png"/>
          채팅
        </button>

        <button class="mypage" @click=" step=3">
          <img class="mypage-icon" src="./assets/user.png"/>
          내정보
        </button>
      </footer>
    </div>
  </div>
</template>

<script >
// import HelloWorld from './components/HelloWorld.vue'
import PageDetail from './components/PageDetail.vue'
import Posting from './components/Posting.vue'
import Mypage from './components/Mypage.vue'
import Register from './components/Register.vue'
import './style/reset.css'


export default {
  name: 'App',
  data(){
    return{
      login : 0,
      step : 0,
    }

  },
  components: {
    // HelloWorld,
    PageDetail,
    Posting,
    Mypage,
    Register,
  },
  props:{
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.not-logged-in{
  margin : 100px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img{
    margin-bottom: 30px;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
  p{
    font-weight: 700;
    margin-bottom: 50px;
  }
  button{
    width:80%;

    margin: 10px 0;
  }
}
.logged-in{
  margin-top: 60px;
  
  }

 footer{
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-top: solid 1px #eee;
    padding : 5px 0;
    background-color: #fff;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

  }

  footer button{
    width: 15%;
    height: 15%;

    font-size: 5px;
  }

  footer img{
    display: block;
    margin: 0 auto;
    width: 15px;
    height: 15px;
  }

  .content {
    text-align: left;
  }
</style>
