<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <img class="logo-img" alt="logo" src="../assets/avocado.png"> 
      </div>
      <h3>양파 거래방</h3>
      
      <button class="alram"><img alt="alram" src="../assets/alarm.png"/></button>
    </div>

    <div class="body">
      <div class="chat_wrap">
          <div class="chat_log">
              <div class="another_msg">
                  <span class="another_user">User1</span>
                  <span class="msg">상대방 메시지1</span>
              </div>
              <div class="my_msg">
                  <span class="msg">내 메시지1</span>
              </div>
          </div>
          <form id="chat_form">
              <input type="text" autocomplete="off" size="30" id="message" placeholder="Enter the message">
              <input type="submit" value="send">
          </form>
      </div>
    </div>
      

    
  </div>
</template>

<script>
export default {
  name: 'Chatiing',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
  
<style>
*{
  width: 320px;
}

.header {
  width: 100%;
  height: 50px;
  border: 2px solid skyblue;
  background-color: skyblue;
  display: flex;
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


.chat_wrap{
    width: 320px;
    border: 1px solid #ddd;
}
.chat_log{
    height: 700px; 
    overflow-y: auto;
    padding: 10px;
}
.my_msg{
    text-align: right;
    
}
.another_msg{
    text-align: left;
    margin-bottom: 5px;
}
.msg{
    display: inline-block;
    border-radius: 15px;
    padding: 7px 15px;
    margin-bottom: 10px;
    margin-top: 5px;
    margin-right: 20px;
    
}
.another_msg .msg{
    width: 200px;
    background-color: gray;
    color: white;
}
.my_msg .msg{
    width: 200px;
    background-color: rgb(45, 173, 45);
    color: white;
}
.another_user{
    font-size: 15px;
    display: block;
}
.chat_form{
    display: block;
    width: 280px;
    height: 50px;
    border-top: 2px solid #f0f0f0;
}
.message{
    height: calc(100%-1px);
    border: none;
    padding-bottom: 0;
}
.message:focus{
    outline: none;
}
.chat_form > input[type=submit]{
    outline: none;
    border: none;
    background: none;
    color: #0084ff;
    font-size: 17px;
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