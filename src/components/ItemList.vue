<template>
  <div class="main">


    <div class="body">

      <div class="item-header">
        <div class="location">역곡동</div>
      </div>
     
      <h2 class=list-title> 현재 모집중인 공동구매 </h2>
      <div class="item-list" v-for="(a,i) in 4" :key="i" @click="fnView(`${row.i}`)">
          <div class="item-image">
            <img  src="../assets/onion.jpeg" class="list-img" alt="item-img"/>
          </div>
          <div class="item-contents">
            <h4 class="item-title">[최소수량 2봉] 조미김 공동구매 합니다</h4>
            <div class="item-footer">
              <div class="progress">
                <div class="progress-bar"></div>
                <span>199%</span>
              </div>
              <div class="end-time">3일 남음</div>
            </div>

            <p class="item-content">그린팜마트에서 양파 같이 사실분</p>
            <div class="price">3000원 이상</div>
          </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    
  },
  methods: {
    fnView(num){
      this.body.num = num;
			this.$router.push({path:'/PageDetail/:id',query:this.body}); //추가한 상세페이지 라우터
      console.log(this.body.num);
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
  
<style lang="scss">
@import '../style/reset.scss';

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
