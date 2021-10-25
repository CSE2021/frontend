<template>
  <div class="main">
     <header class="header">
        <p class="loaction"> 
            <img src="../assets/avocado.png" class="logo" alt="logo"/>
            역곡동
        </p>
    </header>

    <div class="body">

      <select class="select">
        <option value="판매" selected>판매</option>
        <option value="모집">모집</option>
      </select>

      <div class="item-lists" v-for="(a,i) in 4" :key="i">

        <div class="list-item">

          <div class="item-image">
            <img  src="../assets/onion.jpeg" class="list-img" alt="item-img"/>
          </div>
          <div class="content">
            <h4 class="item-title"><span class="division">[모집]</span>양파 한 망</h4>
            <p class="item-content">그린팜마트에서 양파 같이 사실분</p>
            <div class="item-footer">
              <div class="progress">
                <div class="progress-bar"></div>
              </div>
            </div>
              <div class="price">3000원/인당</div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
  
<style lang="scss">

.select{
  margin-bottom: 30px;
  border : 1px solid #eee;
  padding : 10px 0;
.content{
  width:230px;
}
}
.list-item{
  margin-bottom: 10px;
}
// .item-image{
//   width: 50px;
//   height: 50px;
// }
.list-img{
  width: 85px;
  height: 85px;
  border-radius: 10px;
  margin-right: 10px;
}
.logo{
  display: inline-block;
  width:50px;
  height: 100%;
  }
.logo-img{
  width: 100%;
  object-fit: cover;  
  }

h3{
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


.footer button{
  width: 25%;
  height: 25%;
  }

.footer img{
  width: 40px;
  height: 40px;
  }
  .list-item{
    display: flex;
  }
.content {
  text-align: left;
}
.item-content{
  font-size:12px;
}
.item-footer {
  display: flex;

  .progress{
    width:30%;
  }
  
}
.price{
  display: inline-block;
    color:#333;
  font-size: 12px;
  line-height: 12px;
}
</style>
