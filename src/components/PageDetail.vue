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
        <div class="profile">
          <img src="../assets/profile.jpeg" class="profile-img" alt="seller profile img" />
          <div class="user-desc">
            <p class="user-id">승효니</p>
            <div class="fresh"> 
              <div class="fresh-bar" >
              </div>
            </div>
              <div class="fresh-tmp">46°c</div>
          </div>
        </div>
        <div class="scrap">
          <img alt="heart" src="../assets/heart.png"/>
        </div>
      </div>


      <div class="item-desc">
        <h3 class="desc-title"><span>[모집] </span>아이폰 13 pro 삽니다</h3>
        <p class="desc-description">이번 핑크 삽니다 가격 선제시</p>
        <span class="rating">조회수 3</span>
      </div>

      <div class="item-price">
        <h4 class="price-title">가격</h4>
        <div class="price-info">
          <div class="total-price">전체가격 : 6000원</div>
          <div class="personal-price">2000원/ 인당</div>
        </div>
      </div>
      <div class="item-chatting">
        <div class="recruit">
          <p>모집인원 (1/3)명</p>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
        </div>
        <button class="chat-btn">참여하기</button>
      </div>
        

    </div>



    <footer>

      <button class="home">
        <img class="home-icon" src="../assets/home.png"/>
        장보기
      </button>

      <button class="post">
        <img class="post-icon" src="../assets/post.png"/>
        글쓰기
      </button>

      <button class="chat">
        <img class="chat-icon" src="../assets/chat.png"/>
        채팅
      </button>

      <button class="mypage">
        <img class="mypage-icon" src="../assets/user.png"/>
        내정보
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

<style lang="scss">
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
    background-color:#fff;
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

    img{
      width : 100%;
      height: 20px;
      object-fit: cover;
    }
  }

  
  header img{
    width: 20px;
    height: 20px;
    object-fit: cover;
  }


 /* body */
.item-detail{
  overflow-y:scroll; 
  overflow-x:hidden; 
  width:100%; 
  height: 80%;
  margin-bottom:32%;

}

  .item-img{
    margin: 0 auto;
    margin-bottom: 5px;
    width: 100%;
  }
  .selling-img{
    width: 100%;
  }

  /* user profile  */

  .user-profile{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    border-bottom: 1px solid #eee;

  }
  .profile{
    display: flex;
    width:100%;
  }
  .profile-img{
    width:30px;
    height: 30px;
    overflow: hidden;
    margin-right :10px;
    border-radius: 15px;
  }
.user-desc{
  width: 40%;
}
.user-id{
  font-size :14px;
  font-weight: 700;
  text-align: left;
}


.fresh {
  display: inline-block;
  width: 70%;
  height: 8px;
  
  margin-top:5px;
  margin-right: 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #eee;
}

.fresh-bar {
  width: 46%;
  height: 8px;
  border-radius: 5px;
  background-color: pink;
}
.fresh-tmp{
  display: inline;
  font-size: 10px;
}

.scrap{
  width:20px;
  height: 20px;
  img{
    
    width:20px;
    height: 20px;
    object-fit: cover;
  }
}



/* item-desc */

.item-desc{
  padding:10px 0 10px 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.desc-title{
  margin-bottom: 5px;
  font-size: 16px;
}
.desc-description{
  font-size: 14px;
  font-weight: 500;
}
.rating{
  color:#333;
  font-size: 12px;
}


/* itme-price */
.item-price{
  margin: 5px 10px;
}
.price-title{
  margin-bottom: 2px;
  font-size: 16px;
  text-align: left;
}

.price-info{
    display: flex;
    margin: 0 30px;
    margin-right: 40px;
    justify-content: space-between;
    font-size: 14px;
  
}




/* item-chatting */

.item-chatting{
  display: flex;
  width:100%;
  justify-content: space-around;
  align-items: center;

  padding : 10px 0;
  border-top: 1px solid #eee;
  background-color: #fff;

  position: fixed;
  bottom: 7%;
  left: 0;
  right: 0;
}

.recruit{
  width: 45%;
  font-size: 12px;
}

.progress {
  width: 100%;
  margin-top:5px;
  background: #eee;
  border: 1px solid #fff;
  border-radius: 20px;
  height: 10px;
}

.progress-bar {
  height: 100%;
  width: 30%;
  border-radius: 15px;
  background: green;
}



.chat-btn{
  padding :5px 8px;
  width: 30%;
  height: 30px;
  border-radius: 3px;

  background-color: green;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
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
