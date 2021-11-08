<template>
  <div class="main">


    <div class="body">
      <Header/>
      <div class="item-header">
        <div class="location">역곡동</div>
      </div>
     
      <h2 class=list-title> 현재 모집중인 공동구매 </h2>
      <div class="item-list" @click="fnView(1)">
          <!-- <router-link to="{name: 'Pagedetail',params:{id:i}"> -->
            <div class="item-image">
              <img  src="../assets/seaweed.jpeg" class="list-img" alt="item-img"/>
            </div>
            <div class="item-contents">
              <h4 class="item-title">[최소수량 10봉] 조미김 공동구매 합니다</h4>
              <div class="item-footer">
                <div class="progress">
                  <div class="progress-bar pg-46"></div>
                  <span>46%</span>
                </div>
                <div class="end-time">3일 남음</div>
              </div>

              <p class="item-content">쿠팡에서 사는 곰곰 조미김 대량구매합니다. 필요하신분 신청해주세요.</p>
              <div class="price">2000원 이상</div>
            </div>
          <!-- </router-link> -->

      </div>
      <div class="item-list">
          <!-- <router-link to="{name: 'Pagedetail',params:{id:i}"> -->
            <div class="item-image">
              <img  src="../assets/rice.jpg" class="list-img" alt="item-img"/>
            </div>
            <div class="item-contents">
              <h4 class="item-title">[최소수량 3개] 햇반 한박스 나눠서 사실분 </h4>
              <div class="item-footer">
                <div class="progress">
                  <div class="progress-bar pg-23"></div>
                  <span>23%</span>
                </div>
                <div class="end-time">5일 남음</div>
              </div>

              <p class="item-content">햇반 한박스(36개) 나눠서 사실분 구합니다.</p>
              <div class="price">3000원 이상</div>
            </div>
          <!-- </router-link> -->

      </div>
      <div class="item-list">
          <!-- <router-link to="{name: 'Pagedetail',params:{id:i}"> -->
            <div class="item-image">
              <img  src="../assets/oatmeal.jpg" class="list-img" alt="item-img"/>
            </div>
            <div class="item-contents">
              <h4 class="item-title">[10개 단위 거래]오트밀바이트 100개 공동구매합니다</h4>
              <div class="item-footer">
                <div class="progress">
                  <div class="progress-bar pg-81"></div>
                  <span>81%</span>
                </div>
                <div class="end-time">2일 남음</div>
              </div>

              <p class="item-content">100개 묶음 오트밀바이트 10개 단위로 거래합니다</p>
              <div class="price">1000원 이상</div>
            </div>
          <!-- </router-link> -->

      </div>
      <div class="item-list" >
          <!-- <router-link to="{name: 'Pagedetail',params:{id:i}"> -->
            <div class="item-image">
              <img  src="../assets/chicken.jpg" class="list-img" alt="item-img"/>
            </div>
            <div class="item-contents">
              <h4 class="item-title">[최소수량 5개] 닭가슴살 공동구매하실분</h4>
              <div class="item-footer">
                <div class="progress">
                  <div class="progress-bar pg-100"></div>
                  <span>100%</span>
                </div>
                <div class="end-time end">모집종료</div>
              </div>

              <p class="item-content">아워홈 닭가슴살 같이 사실분 연락주세요!</p>
              <div class="price">10000원 이상</div>
            </div>
          <!-- </router-link> -->

      </div>

    </div>

  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'ItemList',
  props: {
    
  },
  methods: {
    fnView(id){
      this.paramId =id;
      let router = this.$router;
      router.push({name:'Pagedetail', params:{productId:this.paramId}});
    }
  },
  components: {
    Header,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
  
<style lang="scss">
@import '../style/reset.scss';
.pg-46{
  width: 46%;
}
.pg-100{
  width: 100%;
}
.pg-23{
  width: 23%;
}
.pg-81{
  width: 81%;
}


.item-header{
  font-size : 18px;
  font-weight: 700;
  padding : 0px 10px 10px;
  border-bottom : 1px solid #eee;
  margin-bottom: 10px;
}

.item-list{
  display: block;
  margin: 0 16px 30px;
  border-radius: 3px;
  box-shadow: 0 15px 30px 0 rgba(53, 51, 51, 0.15);
}

.list-title{
  margin-left:16px;
  margin-bottom: 10px;
}


.list-img{
  width: 100%;
  height: 45%;
  border-radius: 3px 3px 0 0 ;
}
.item-contents{
  padding : 10px 16px;
}

.item-footer{
  margin-bottom : 10px;
  display: flex;
  justify-content: space-between;
  .progress{
    width:50%;
    span{
      font-size:12px;
      line-height: 10px;
      font-weight: 700;
      color: $gj-green;
    }
  }
}
.end-time{
  font-size:12px;
  font-weight: 700;
  color: $gj-green;
  .end{
    color:orange;
  }
}

.item-content{
  margin-top: 30px;
}
.price{
  display: inline-block;
    color:#333;
  font-size: 14px;
  font-weight: 700;
  line-height: 12px;
}
</style>
