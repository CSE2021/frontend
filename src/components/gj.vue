<template>
    <div class="gj">
        <h3>입금 확인을 해주세요!</h3>
        <div class="item-choice">
            <div class="판매 아이템" v-for="i in 3" :key="i">
                <div class="top">
                    진행상황
                    <button class="chat-btn">입금 확인하러가기</button>
                </div>
                <div class="item-image">
                    <img  src="../assets/seaweed.jpeg" class="list-img" alt="item-img"/>
                </div>
                <div class="item-contents">
                <h4 class="item-title">[최소수량 10봉] 조미김 공동구매 합니다</h4>
                <div class="item-footer">
                    <div class="progress">
                    <div class="progress-bar"></div>
                    <span>23%</span>
                    </div>
                    <div class="end-time">3일 남음</div>
                </div>

                <p class="item-content">쿠팡에서 사는 곰곰 조미김 대량구매합니다. 필요하신분 신청해주세요.</p>
                <div class="price">3000원 이상</div>
                </div>
            </div>


        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.gj{
    margin: 10px 16px;
}
.item-choice{
    padding : 10px;
    border-radius: 3px;
    border : 1px solid #eee;
    font-size: 14px; 
    font-weight: 500;
    color:#333;
      box-shadow: 0 15px 30px 0 rgba(53, 51, 51, 0.15);

    span{
        color:#676363
    }
}
</style>