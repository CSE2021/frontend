<template>
  <div class="main">
    <header class="header">
        <p class="loaction"> 
            <img src="../../assets/avocado.png" class="logo" alt="logo"/>
            역곡동
        </p>
    </header>

    <div class="body">

      <h2>사람들이 기다리는 물품들</h2>
      <select>
        <option value="판매" selected>판매</option>
        <option value="모집">모집</option>
      </select>

      <div class="item-lists" v-for="(a,i) in 4" :key="i">

        <div class="list-item">

          <img class="item-img" alt="item-img">

          <div class="content">
            <h4 class="item-title"><span class="division">[모집]</span>양파 한 망</h4>
            <p class="item-content">그린팜마트에서 양파 같이 사실분</p>
            <div class="item-futter">
              <div class="progress-bar">progress-bar</div>
              <p class="price">원/인당</p>
            </div>
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
  
<style>
*{
  width: 320px;
}

.header {
  /* width: 100%;
  height: 50px;
  display: flex; */
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
.item-futter {
  display: flex;
}
</style>
