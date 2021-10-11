<template>
  <div class="main">
    
    <div v-if="step == 0">
      <ItemList />
    </div>

    <div v-if="step == 1">
      <Posting />
    </div>
    
    <div v-if="step == 2">
      <ChatList />
    </div>

    <div v-if="step == 3">
      <Mypage />
    </div>
      


    <footer>

      <button class="home" @click=" step=0">
        <img class="home-icon" src="../assets/home.png"/>
        장보기
      </button>

      <button class="post" @click=" step=1">
        <img class="post-icon" src="../assets/post.png"/>
        글쓰기
      </button>

      <button class="chat" @click=" step=2" >
        <img class="chat-icon" src="../assets/chat.png"/>
        채팅
      </button>

      <button class="mypage" @click=" step=3">
        <img class="mypage-icon" src="../assets/user.png"/>
        내정보
      </button>
      
    </footer>
  </div>
</template>

<script >
import ItemList from './maintap/ItemList.vue'
import Posting from './maintap/Posting.vue'
import ChatList from './maintap/ChatList.vue'
import Mypage from './maintap/Mypage.vue'

export default {
  name: 'Main',
  data(){
    return{
      step : 0,
    }
  },
  components: {
    ItemList,
    Posting,
    ChatList,
    Mypage
  },
  props:{
  }
}

</script>

<style lang="scss">

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






