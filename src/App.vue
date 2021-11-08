<template>
<div class="app">
  <router-view></router-view>


  <footer>
    <button @click="getData">눌러</button>
    <button class="home" >
      <router-link to="/">
      <img class="home-icon" src="./assets/home.png"/>
      장보기
      </router-link>
    </button>

    <button class="post" >
      <router-link to="/Post">
      <img class="post-icon" src="./assets/post.png"/>
      모집하기
      </router-link>

    </button>

    <button class="chat" >
      <router-link to="/GajangList/gj">
        <img class="chat-icon" src="./assets/chat.png"/>
        가장내역
      </router-link>
    </button>

    <button class="mypage" >
      <router-link  to="/mypage"> 
        <img class="mypage-icon" src="./assets/user.png"/>
        내정보
      </router-link>
    </button>
    
  </footer>
</div>
</template>

<script >
import './style/reset.scss'
import axios from 'axios'


export default {
  name: 'App',
  data(){
    return{
      step : 0,
    }
  },
  components: {
  },
  props:{
  },
  methods: {
    getData(){
      console.log('gksdfd');
      axios.get('http://shbox.shop:3002/users/1')
      .then(function(result) {
        console.log('안녕');
        console.log(result);
      })
    }
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






