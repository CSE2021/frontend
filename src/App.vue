<template>
<div class="app">
  <router-view></router-view>
  <!-- <div v-if="step == 0">
    <Header/>
    <ItemList />
  </div>

  <div v-if="step == 1">
    <Posting />
  </div>
  
  <div v-if="step == 2">
    <PageDetail/>
  </div>

  <div v-if="step == 3">
    <Mypage />
  </div> -->



  <footer>

    <button class="home" >
      <router-link to="/">
      <img class="home-icon" src="./assets/home.png"/>
      장보기
      </router-link>
    </button>

    <button class="post" @click=" step=1">
      <router-link to="/Post">
      <img class="post-icon" src="./assets/post.png"/>
      모집완료
      </router-link>

    </button>

    <button class="chat" @click=" step=2" >
      <img class="chat-icon" src="./assets/chat.png"/>
      구매내역
    </button>

    <button class="mypage" @click=" step=3">
      <img class="mypage-icon" src="./assets/user.png"/>
      내정보
    </button>
    
  </footer>
</div>
</template>

<script >
// import Header from './components/Header.vue'
// import ItemList from './components/ItemList.vue'
// import Posting from './components/Posting.vue'
// import Mypage from './components/Mypage.vue'
// import PageDetail from './components/PageDetail.vue'
import './style/reset.scss'
export default {
  name: 'App',
  data(){
    return{
      step : 0,
    }
  },
  components: {
    // Header,
    // ItemList,
    // Posting,
    // Mypage,
    // PageDetail
  },
  props:{
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}
footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: solid 1px #eee;
    padding : 7px 0 5px;
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






