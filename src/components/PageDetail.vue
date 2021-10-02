<template>
  <div class="page-detail">
    <header>
      <p class="loaction"> 
        <img src="../assets/avocado.png" class="logo" alt="logo"/>
        심곡동
      </p>
      <div class="side-icon">
        <button class="search"><img alt="search" src="../assets/search.png"/></button>
        <button class="alram"><img alt="alram" src="../assets/alarm.png"/></button>
      </div>
    </header>


    <div class="item-detail">
      <div class="item-img">
        <img src="../assets/item.jpeg" class="selling-img" alt="selling item"/>
      </div>

      <div class="user-profile">
        <img src="../assets/profile.jpeg" class="profile-img" alt="seller profile img" />
        <div class="user-desc">
          <h1 class="user-id">승효니</h1>
          <div class="fresh-bar">46'c</div>
        </div>
        <div class="scrap">
          <img alt="heart"/>
        </div>
      </div>

      <div class="item-desc">

      </div>
      <div class="item-price"></div>
      <div class="item-chatting"></div>
    </div>



    <footer>

      <button class="home">
        <img class="home-icon" src="../assets/home.png"/>
        Home
      </button>

      <button class="post">
        <img class="post-icon" src="../assets/post.png"/>
        post
      </button>

      <button class="chat">
        <img class="chat-icon" src="../assets/chat.png"/>
        chat
      </button>

      <button class="mypage">
        <img class="mypage-icon" src="../assets/user.png"/>
        mypage
      </button>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PageDetail',
  props: {

  }
}
</script>

<style>
  header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 5px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
  }

  .logo{
    margin-right: 5px;
  }

  header button{
    width: 20px;
    height: 20px;
  }

  button{
    margin-right: 10px;
  }
  button img{
    width : 100%;
    height: 20px;
    object-fit: cover;
  }
  header img{
    width: 20px;
    height: 20px;
    object-fit: cover;
  }



  .item-img{
    width: 320px;
  }
  .selling-img{
    width: 100%;
  }

  .user-profile{
    display: flex;

  }
  .profile-img{
    width:30px;
    height: 30px;
    overflow: hidden;
    border-radius: 15px;
  }




  footer{
    display: flex;
    justify-content: space-around;

    border-top: solid 1px #eee;
    padding : 5px 0;

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
    width: 15px;
    height: 15px;
  }

  .content {
    text-align: left;
  }

</style>
