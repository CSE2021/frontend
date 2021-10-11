<template>
  <div class="chat-list">
    <header class="header">
        <p class="loaction"> 
            <img src="../../assets/avocado.png" class="logo" alt="logo"/>
            마이페이지
        </p>
    </header>

    <div class="body">
      <div class="chatlist" v-for="(a,i) in 4 " :key="i">
          <img class="thumbnail-img" alt="thumbnail-img" />
        <div class="chatroom">
          
          <h3 class="chat-title">양파 한 망</h3>
          <h4 class="chat-preview">어디서 만나실래요?</h4>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'ChatList',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
  
<style>
*{
  width: 320px;
}


.logo {
    display: inline-block;
    width: 50px;
    height: 100%;
}
.logo-img{
    width: 100%;
    object-fit: cover;
}

.header h3{
  display: inline-block;
  }
  
.header button{
  width: 50px;
  height: 50px;
  }

.header img{
  width: 30px;
  height: 30px;
  }

.chatlist {
    display: flex;
}

.footer button{
  width: 25%;
  height: 25%;
  }

.footer img{
  width: 40px;
  height: 40px;
  }

.chatroom {
  text-align: left;
}
.item-futter {
  display: flex;
}
</style>