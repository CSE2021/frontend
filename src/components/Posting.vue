<template>
    <div class="posting">
        <header class="posting-header">
            <button class="back">
                <img src='../assets/right.png' class='back' alt='back to last page'/>
            </button>
            <p class="header-title">공구 작성</p>
            <button class="submit">저장하기</button>
        
        </header>
        

        
            <div class="posting-content">

                <div class="adding">
                    <p class="title">공동구매 제목<span>*</span></p>
                    <input type="text" placeholder="제목 입력" class="input" v-model="title"/>
                </div>

                <div class="adding">
                    <p class="title">대표 이미지<span>*</span></p>
                    <button>등록하기</button>
                </div>

                <div class="adding">
                    <p class="title">모집 시작일<span>*</span></p>
                    <input type="text" placeholder="예)20210101" class="input" v-model="recruit"/>
                    <datepicker ></datepicker>
                </div>

                <div class="adding">
                    <p class="title">모집 종료일<span>*</span></p>
                    <input type="text" placeholder="예)20210101" class="input" v-model="recruite"/>
                </div>
                <div class="adding">
                    <p class="title">배송 시작 예정일<span>*</span></p>
                    <input type="text" placeholder="예)20210101" class="input" v-model="ship"/>
                </div>
                <div class="adding">
                    <p class="title">배송 도착 예정일<span>*</span></p>
                    <input type="text" placeholder="예)20210101" class="input" v-model="shipe"/>
                </div>
                <div class="adding">
                    <p class="title">배부 시작 예정일<span>*</span></p>
                    <input type="text" placeholder="예)20210101" class="input" v-model="share"/>
                </div>
                <div class="adding">
                    <p class="title">배부 마감 예정일<span>*</span></p>
                    <input type="text" placeholder="예)20210101" class="input" v-model="sharee"/>
                </div>
                <div class="adding">
                    <p class="title">배부 예정 시간<span>*</span></p>
                    <input type="text" placeholder="예)20210101" class="input" v-model="sharetime"/>
                </div>
                <div class="adding">
                    <p class="title">배부 장소<span>*</span></p>
                    <input type="text" placeholder="가톨릭대 김수환관 식당 앞" class="input" v-model="place"/>
                </div>
                <div class="adding">
                    <p class="title">페이지 URL</p>
                    <p class="desc">공동구매 하려는 사이트의 링크가 있다면 적어주세요.
                        구매자가 구매를 선택할 때 도움을 줄 수 있습니다.</p>
                    <input type="url" placeholder="https://" class="input" v-model="siteurl"/>
                </div>
                <div class="adding">
                    <p class="title">최소 주문수량</p>
                    <p class="desc">한명의 구매자가 구매해야 하는 수량을 지정해 주세요</p>
                    <input type="text" placeholder="1개" class="input" v-model="mPrice"/>
                </div>
                <div class="adding">
                    <p class="title">최대 주문수량</p>
                    <p class="desc">이 구매수량이 늘어날 시, 더 이상의 모집을 받지 않습니다.</p>
                    <input type="text" placeholder="100개" class="input" v-model="goal"/>
                </div>
                <div class="adding">
                    <p class="title">상품설명</p>
                    <input type="text" placeholder="100개" class="input" v-model="content"/>
                </div>
                <button class="chat-btn post-btn" type="submit" @click="submitForm">등록하기</button>

            </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';

export default {
    components:{
        Datepicker
    },
    name: 'Posting',
    data(){
        return { //집가서 타입 지정하기 
            wid: '1',
            thumbnail: 'http://',
            title: '',
            recruit:'',
            recruite: '',
            ship: '',
            shipe: '',
            share: '',
            sharee: '',
            place: '',
            sharetime: '',
            mPrice: '',
            siteurl: '',
            goal: '',
            content: '',

            date: new Date().toISOString().substr(0,10),
            s_date: new Date().toISOString().substr(0,10),
            e_date: new Date().toISOString().substr(0,10),
            menu1: false,
            menu2: false
        }
    },
    methods: { // 메서드 구현
    submitForm: function() {
      var url = 'http://shbox.shop:3002/board/add';
      //이 url로 데이터를 보내고 받을 수 있음
      var data = {
        wid: this.wid,
        thumbnail: this.thumbnail,
        title: this.title,
        recruit: this.recruit,
        recruite: this.recruite,
        ship: this.ship,
        shipe: this.shipe,
        share: this.share,
        sharee: this.sharee,
        place: this.place,
        sharetime: this.sharetime,
        mPrice: this.mPrice,
        siteurl: this.siteurl,
        goal: this.goal,
        content: this.content
      }
      console.log(data)
      axios.post(url, data)
        .then(res => {
            console.log(res.data)
        })
        .catch(function(error){
          console.log(error);
        })
    },
    s_date_search(v){
        this.s_date = v;
        this.menu1 = false;
        this.$refs.menu1.save(v);
    },
    e_date_search(v){
        this.e_date = v;
        this.menu2 = false;
        this.$refs.menu2.save(v);
    }
  },
}


</script>

<style lang="scss">
.posting{
    margin-bottom:45px;
}
.posting-header{
    display: flex;
    position: fixed;
    .back{
        position:initial;
    }
    .submit{
        margin:0;
    }
}
.header-title{
    position: absolute;
    left : 50%;
    transform: translate(-50%, 0);

}
.adding{
    margin-bottom:30px;
    span{
        color:#f66;
    }
}

.title{
    font-size: 16px;
    color:#333;
}
.input{
    width:100%;
    margin-top: 5px;
    padding:15px;
    border: 1px solid #ccc;
}

input::-webkit-input-placeholder {
    font-size: 16px;
    line-height: 3;
}

.desc{
    font-size: 12px;
    color:#90949c;
    margin: 5px 0;
}


.posting-content{
    margin: 0 10px;
    padding : 16px;
}

// 사진삽입
    .photo{
        padding: 0 5px 5px 5px;
        border-bottom : 1px solid #eee;
    }
    .photo-img{
        margin: 0 auto;
        display: block;
        width:20px;
        height:20px;
    }
    .adding-photo{
        padding: 10px 15px;
        border: 1px solid #333;
        border-radius: 10px;
    }

.post-btn{
    width:100%;
}
</style>