<template>
    <div class="gj">
        <div class="item-choice">
            <div class="판매 아이템" >
            <div class="top">
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

                <div class="seller-progress">
                    진행상황
                    <select class="option-seller option-sel">
                        <option>3일 남음</option>
                        <option>모집완료</option>
                        <option>상품 배부 중</option>
                        <option>상품 배부 완료</option>
                    </select>
                    <button class="chat-btn ask gj-status">상태 변경</button>
                </div>
                <h3 class="deposit-msg">입금 확인을 해주세요!</h3>
                <div class="deposit-user">
                    <img src="../assets/profile.jpeg" class="profile-img" alt="seller profile img" />
                    <div class="depo-desc">
                        <p class="depo-user">승효니
                            <span class="depo-loca">심곡동</span>
                        </p>
                        <p class="depo-info"><span>12000원</span> | 21.11.05 11:35</p>
                    </div>
                    <div class="btn-desc">
                        <button class="depo-btn">입금확인</button>
                        <button class="depo-btn">신청거절</button>
                    </div>
                </div>
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
@import '../style/reset.scss';
.gj{
    margin: 10px 16px 45px;
}
.more{
    width: 15px;
    height:15px;
    float: right;
}
.option-seller{
    padding : 5px 20px 5px 10px;
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
    .top{
        padding : 0 10px;
        font-size: 12px;
    }
}
.seller-progress{
    margin-top:20px;
}
.deposit-msg{
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}
.gj-status{
    margin-left: 20px;
    padding:  5px 15px;
    border : 1px solid #ddd;
}
.deposit-user{
    display: grid;
    grid-template-columns: 1fr 3fr 1.5fr;
    place-items: center;
    .profile-img{
        width:50px;
        height:50px;
        border-radius: 25px;
    }
    .depo-user{
        font-weight: 700;
        span{
            font-size: 10px;
        }
    }
    .depo-info{
        margin-top:3px;
        font-size: 13px;
        color: #676363;
        span{
            color: #333;
            font-weight: 600;
        }
    }
}

.depo-btn{
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 3px;
    border: 1px solid #eee;
    font-size: 12px;
    font-weight: 600;
    color: $gj-green;
    &+&{
        margin-top: 3px;
    }
}
.depo-btn:focus{
    color:#fff;
    background-color: $btn-green;

}
</style>