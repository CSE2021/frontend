<template>
    <div class="apply">
        <div class="status-info">
            <div class="status-img">
                <img src="../assets/seaweed.jpeg"/>
            </div>
            <div class="status-data">
                <h4 class="status">신청완료</h4>
                <p class="status-title">[최소수량 10봉] 조미김 공동구매 합니다</p>
                <p class="status-money">12000원</p>
                <button class="status-deposit ask" >입금확인 요청</button>
                <p class="status-date">11.1.결제</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
//     deposit(){

//     },
//     const deposit = document.getElementById("status-deposit");

//     deposit.addEventListener("click", function() {
//     if(subs.innerText === '입금확인 요청') {
//         subs.innerText = '입금 확인 중';
//     } else subs.innerText ='입금확인 요청';
// });
}
</script>

<style lang="scss">
@import '../style/reset.scss';

.apply{
    height: 130px;
    margin: 10px 16px;
    box-shadow: 0 15px 30px 0 rgba(53, 51, 51, 0.15);
    border-radius: 3px;
}
.status-info{
    display: flex;
}
.status-img{
    height: 130px;
    width: 50%;
    overflow: hidden;
    border-radius: 3px 0 0 3px;

    img{
        height: 130px;
        width: 100%;
        overflow: hidden;

        object-fit: cover;
        object-position: 50% 50%;
    }
}   
.status-data{
    margin :10px;
    position: relative;
}
.status{
    font-weight: 700;
    color :$gj-green;
}
.status-title{
    margin-top:5px;
    font-size: 14px;

}
.status-money{
    font-size: 14px;
    font-weight: 600;

}
.status-deposit{
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top:5px;
    padding : 5px 15px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 600;
}
.status-deposit:focus{
    color:#fff;
    background-color: $btn-green;

}
.status-date{
    position: absolute;
    bottom: 0px;
    font-size: 10px;
    color: #333;

}
</style>