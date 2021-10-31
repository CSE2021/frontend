<template>
    <div class="gajang-list">
        <header class="posting-header">
            <button class="back">
                <img src='../assets/right.png' class='back' alt='back to last page'/>
            </button>
            <p class="header-title">가장 - 신청 내역</p>
        </header>
        <h2 class="my-gajang"> 나의 가장 </h2>
        <div class="btn-table">
            <router-link to="/GajangList/gj" class="gj-btn" focused>나의 가장 내역</router-link>
            <router-link to="/GajangList/apply" class="gj-btn">가장 신청 내역</router-link>
        </div>
    </div>
        <router-view></router-view>
</template>


<script>
export default {

  name: 'GajangList',
  data(){
    return{
      step : 0,
    }
  },
}
</script>

<style lang="scss">
@import '../style/reset.scss';

.my-gajang{
    margin-top: 30%;
    text-align: center;
}
.btn-table{
    margin: 30px 0 20px;
}
.gj-btn{
    display: inline-block;
    width :50%;
    height : 40px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #eee;

}
// .gj{
//     border-bottom: 2px solid #009B4C;
//     color:#009B4C;
// }



.gj-btn:focus{
    border-bottom: 2px solid $btn-green;
    color:$btn-green;


}
</style>