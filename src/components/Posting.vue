<template>
    <div class="posting">
        <header class="posting-header">
            <button class="back">
                <img src='../assets/right.png' class='back' alt='back to last page'/>
            </button>
            <p>공구 작성</p>
            <button class="submit">저장하기</button>
        
        </header>
        


        <div class="posting-content">

            <div class="adding">
                <p class="title">공동구매 제목<span>*</span></p>
                <input type="text" placeholder="제목 입력" class="input" />
            </div>

            <div class="adding">
                <p class="title">대표 이미지<span>*</span></p>
                <button>등록하기</button>
            </div>

            <div class="adding">
                <p class="title">모집 종료일<span>*</span></p>
                <input type="text" placeholder="예)20210101" class="input" />
            </div>
            <div class="adding">
                <p class="title">배부 일정<span>*</span></p>
                <input type="text" placeholder="예)20210101" class="input" />
            </div>
            <div class="adding">
                <p class="title">배부 장소<span>*</span></p>
                <input type="text" placeholder="가톨릭대 김수환관 식당 앞" class="input" />
            </div>
            <div class="adding">
                <p class="title">페이지 URL</p>
                <p class="desc">공동구매 하려는 사이트의 링크가 있다면 적어주세요.
                    구매자가 구매를 선택할 때 도움을 줄 수 있습니다.</p>
                <input type="url" placeholder="https://" class="input" />
            </div>
            <div class="adding">
                <p class="title">최소 주문수량</p>
                <p class="desc">한명의 구매자가 구매해야 하는 수량을 지정해 주세요</p>
                <input type="text" placeholder="1개" class="input" />
            </div>
            <div class="adding">
                <p class="title">최대 주문수량</p>
                <p class="desc">이 구매수량이 늘어날 시, 더 이상의 모집을 받지 않습니다.</p>
                <input type="text" placeholder="100개" class="input" />
            </div>
            <div class="adding">
                <p class="title">상품설명</p>
                <input type="text" placeholder="100개" class="input" />
            </div>
            <button class="chat-btn post-btn" type="submit">등록하기</button>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Posting',
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