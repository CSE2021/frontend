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
                <form @submit.prevent="onUpload">
                    <div class="adding">
                        <p class="title">공동구매 제목<span>*</span></p>
                        <input type="text" placeholder="제목 입력" class="input" v-model="title"/>
                    </div>

                    <div class="adding">
                        <p class="title">대표 이미지<span>*</span></p>
                        <input type="file" accept="image/*" placeholder="사진 선택" class="input-file" @change="onChange"/>
                    </div>

                    <div class="adding">
                        <p class="title">모집 시작일<span>*</span></p>
                        <label for="start_recruite"></label>
                        <Datepicker v-model="recruit" :enableTimePicker="false"></Datepicker>
                    </div>

                    <div class="adding">
                        <p class="title">모집 종료일<span>*</span></p>
                    <Datepicker v-model="recruite" :enableTimePicker="false"></Datepicker>
                    </div>
                    <div class="adding">
                        <p class="title">배송 시작 예정일<span>*</span></p>
                        <Datepicker v-model="ship" :enableTimePicker="false"></Datepicker>
                    </div>
                    <div class="adding">
                        <p class="title">배송 도착 예정일<span>*</span></p>
                        <Datepicker v-model="shipe" :enableTimePicker="false"></Datepicker>
                    </div>
                    <div class="adding">
                        <p class="title">배부 시작 예정일<span>*</span></p>
                        <Datepicker v-model="share" :enableTimePicker="false"></Datepicker>
                    </div>
                    <div class="adding">
                        <p class="title">배부 마감 예정일<span>*</span></p>
                        <Datepicker v-model="sharee" :enableTimePicker="false"></Datepicker>
                    </div>
                    <div class="adding">
                        <p class="title">배부 예정 시간<span>*</span></p>
                        <Datepicker v-model="time" timePicker ></Datepicker>
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
                        <p class="title">최소 주문수량<span>*</span></p>
                        <p class="desc">한명의 구매자가 구매해야 하는 수량을 지정해 주세요</p>
                        <input type="text" placeholder="1개" class="input" v-model="mPrice"/>
                    </div>
                    <div class="adding">
                        <p class="title">최대 주문수량<span>*</span></p>
                        <p class="desc">이 구매수량이 늘어날 시, 더 이상의 모집을 받지 않습니다.</p>
                        <input type="text" placeholder="100개" class="input" v-model="goal"/>
                    </div>
                    <div class="adding">
                        <p class="title">상품설명<span>*</span></p>
                        <input type="text" placeholder="100개" class="input" v-model="content"/>
                    </div>
                    <button class="chat-btn post-btn" type="submit" @click="submit" >등록하기</button>
                </form>
            </div>
        
    </div>
</template>




<script>
import axios from 'axios';
import dayjs from 'dayjs'
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import {ref} from 'vue';


export default {
   
    components:{
     Datepicker
    },
    name: 'Posting',
    data: function(){
        
        return { 
            
            wid: '1',
            image: null,
            title: '',
            recruit: '',
            recruite: '',
            ship: '',
            shipe: '',
            share: '',
            sharee: '',
            place: '',
            sharetime: this.time,
            mPrice: '',
            siteurl: '',
            goal: '',
            content: '',

            

        }
     
    },
    setup(){
        let time = ref({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        });
        return {
            time,
        }
    },
   
    methods: { // 메서드 구현
        onChange(event){
            this.image = event.target.files[0]
        },
        async submit(){
            var url = 'http://shbox.shop:3002/board/add';

            const formData = new FormData();
            formData.append('wid',this.wid);
            formData.append('img',this.image);
            formData.append('title',this.title);
            formData.append('recruit',dayjs(this.recruit).format("YYYYMMDD"));
            formData.append('recruite',dayjs(this.recruite).format("YYYYMMDD"));
            formData.append('ship',dayjs(this.ship).format("YYYYMMDD"));
            formData.append('shipe',dayjs(this.shipe).format("YYYYMMDD"));
            formData.append('share',dayjs(this.share).format("YYYYMMDD"));
            formData.append('sharee',dayjs(this.sharee).format("YYYYMMDD"));
            formData.append('place',this.place);
            formData.append('sharetime',String(this.time.hours)+ String(this.time.minutes) +  "00"); 
            formData.append('mPrice',this.mPrice);
            formData.append('siteurl',this.siteurl);
            formData.append('goal',this.goal);
            formData.append('content',this.content);

          

            axios.post(url,formData)
                .then(response => {
                    console.log('response : ' , JSON.stringify(response,null))
                }) .catch(error => {
                    console.log('failed', error)
                })
        },

        fileSelect(file){
            this.image = file;
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