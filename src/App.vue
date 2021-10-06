<template>
  <div class="app">
    <div v-if="step == 0">
      <!-- <HelloWorld /> -->
    </div>
    
    <div v-if="step == 2">
      <PageDetail />
    </div>
    
    <div v-if="step == 1">
      <Posting />
    </div>


    <footer>

      <button class="home">
        <img class="home-icon" src="./assets/home.png"/>
        장보기
      </button>

      <button class="post" @click=" step=2 ">
        <img class="post-icon" src="./assets/post.png"/>
        글쓰기
      </button>

      <button class="chat" @click=" step=1" >
        <img class="chat-icon" src="./assets/chat.png"/>
        채팅
      </button>

      <button class="mypage">
        <img class="mypage-icon" src="./assets/user.png"/>
        내정보
      </button>
      
    </footer>
  </div>
</template>

<script >
// import HelloWorld from './components/HelloWorld.vue'
import PageDetail from './components/PageDetail.vue'
import Posting from './components/Posting.vue'
import './style/reset.css'
export default {
  name: 'App',
  data(){
    return{
      step : 0,
    }
  },
  components: {
    // HelloWorld,
    PageDetail,
    Posting,
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