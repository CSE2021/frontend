<template>
  <div class="page-detail">

    <button class="back">
      <img src='../assets/right.png' class='back' alt='back to last page'/>
    </button>

    <div class="item-detail">

      <div class="item-img">
        <img src="../assets/seaweed.jpeg" class="selling-img" alt="selling item"/>
      </div>


      <div class="item-desc">
        <h3 class="desc-title">[최소수량 10봉] 조미김 공동구매 합니다</h3>
        <div class="item-sub">
          <p class="sub">상세 설명</p>
          <p class="desc-description">쿠팡에서 사는 곰곰 조미김 대량구매합니다. 필요하신분 신청해주세요.
            ㄹㅇㄹㅎㅎㅇㄹㄴㅎㄴㅌㅇㄹㅇㄹㄴㅇㄹㅇㄹㄴㅇㄹㄴㅇㄹㅇㄹ
          </p>
        </div>

        <div class="recruit">
          <p class="sub">공동구매 정보</p>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
          <div class="side-progress">
            <div class="present-price"><span>123000</span>원 모임</div>
            <div class="aim-price"><span>500000</span>원 목표</div>
          </div>
          <div class="people"><span>13</span>명이 참여중인 상품</div>
          <div class="min-price"><span>10000</span>원 이상 구매가능</div>
        </div>

  
          <p class="sub">판매자 정보</p>
        <div class="user-profile">
          <div class="profile">
            <img src="../assets/profile.jpeg" class="profile-img" alt="seller profile img" />
            <div class="user-desc">
              <p class="user-id">승효니
                <span class="user-loca">심곡동</span>
              </p>
              
              <div class="fresh"> 
                <div class="fresh-bar" ></div>
              </div>
                <div class="fresh-tmp">46°c</div>
            </div>
          </div>
          <div class="user-data">
            <div class="user-email">이메일 
            </div>
              <div class="data">kyileee@gmail.com</div>
            <div class="user-tel">전화
            </div>
              <div class="data">010-5772-5514</div>
          </div>
          <div class="user-button">
            <button class="chat-btn ask">문의하기</button>
            <button class="chat-btn follow">+팔로우</button>
          </div>
        </div>
        
        <div class="item-chatting">
          <select class="option-sel">
              <option>수량 선택하기</option>
              <option v-for="(a,i) in 5" :key="i">{{(i+1)*10}}개</option>
          </select>
          <!-- <button class="chat-btn btn"> -->
          <router-link to="/complete" class="chat-btn btn">
          참여하기
          </router-link>
          <!-- </button> -->
        </div>
        <p class="sub">수령 정보</p>
        <div class="additional-info">
          <span>모집기간</span>
          <div class="add-title">
            2021.10.29 ~ 2021.11.13
          </div>
          <span>배송기간</span>
          <div class="add-title">
            (예상)2021.10.14 ~ 2021.11.15
          </div>
          <span>수령기간</span>
          <div class="add-title">
            (예상)2021.10.15 ~ 2021.11.20
          </div>
          <span>수령장소</span>
          <div class="add-title">
            가톨릭대 기숙사 식당 앞
          </div>
          <p>
            100% 이상 모이면 공동구매가 성공되며, 공구 마감일까지 목표 금액이 100% 모이지 않으면 공동구매가 취소되며,
            판매자를 통해 금액이 횐불됩니다.
          </p>
        </div>
      </div>

    </div>


    
  </div>
</template>

<script>



export default {
  name: 'PageDetail',
  props: {

  },

  components:{
  }
}
</script>

<style lang="scss">
@import '../style/reset.scss';
.back{
  position: fixed;
  background-color: none;
  top: 13px;
  left: 10px;
  right: 0;
  img{
    width:20px;
    height:20px;
  }
  padding:0;
    
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

    /* item-desc */
    
    .item-desc{
      border-bottom: 1px solid #eee;
      text-align: left;
      padding : 0 16px;
    }
    .desc-title{
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 500;
    }
    .desc-description{
      margin :20px 0;
      font-size: 15px;
      line-height: 1.7;
      color : #676363;
      font-weight: 500;
      
    }
  // recruit

    .sub{
      width: 45%;
      font-size: 12px;
      margin-bottom: 15px;
    }
    .recruit{
      margin: 50px 0;
      font-size: 12px;
      span{
        font-weight: 700;  
        font-size: 20px;
      }

    }
    
    .progress {
      width: 100%;
      margin-top:5px;
      background: #eee;
      border: 1px solid #fff;
      border-radius: 3px;
      height: 5px;
    }
    .progress-bar {
      height: 100%;
      width: 30%;
      border-radius: 3px;
      background: #009B4C;
    }

    .side-progress{
      display: flex;
      justify-content: space-between;
      padding-top:20px;
    }
    .people,
    .min-price{
      padding-top:20px;  
    }
    


    


  /* user profile  */

  .user-profile{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    padding : 15px;
    justify-content:flex-start;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 5px;

  }
  .profile{
    margin-bottom: 30px;
    display: flex;
    width:100%;
    
  }
  .profile-img{
    width:40px;
    height: 40px;
    overflow: hidden;
    margin-right :10px;
    border-radius: 20px;
  }
.user-desc{
  width: 40%;
}
.user-id{
  font-size :18px;
  font-weight: 700;
  text-align: left;
  span{
    font-size: 12px;
    font-weight: 500;
  }
}


.fresh {
  display: inline-block;
  width: 70%;
  height: 8px;
  
  margin-top:5px;
  margin-right: 5px;
  border: 1px solid #fff;
  border-radius: 3px;
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
.user-button{
  display: flex;
  justify-content: space-between;
}

.user-data{
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  width:100%;
  color : #676363;
  font-size: 12px;

  // .user-email,
  // .user-tel{
  //   display: flex;
 
  // }
  .data{
    margin-bottom: 10px;
    display: inline-block;
    text-align: left;
    color:#333;
    font-size:14px;
  }
}

.item-sub{
  margin:30px 0;
}

.chat-btn{
  border-radius: 3px;
  background-color: #009B4C;
  color: #fff;
  padding: 10px 45px;
  font-size: 14px;
  font-weight: 500;
  &+&{
    margin-left: 20px;
  }
}

.ask{
  background-color: inherit;
  color : #009B4C;
  border : 1px solid #eee;
}
  
  /* item-chatting */
  .option-sel{
    border : 1px solid #eee;
    border-radius: 3px;
    padding: 10px 40px;
    background-color: inherit;
    color: #676363;
  }
  .item-chatting{
    display: flex;  
    width:100%;
    height:45px;
    padding :5px 0;
    justify-content: space-around;
    align-items: center;
  
    border-top: 1px solid #eee;
    background-color: #fff;
  
    position: fixed;
    bottom: 45px;
    left: 0;
    right: 0;
  }
  
  .additional-info{
    display: grid;
    grid-template-columns: 1fr 5fr;
    :nth-child(9){
      padding-top:10px;
      grid-column: 1 / span 2;
    }
    padding : 15px;
    border-radius: 3px;
    background-color: #EBE282;
    font-size: 12px;
    font-weight: 500;
    color: #676363;
    line-height: 1.5;
    span{
      color:#777;
    }
  }

</style>
