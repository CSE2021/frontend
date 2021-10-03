<template>
    <div class="posting">
        <header class="post-header">
            <div class="logo">
                <img src="../assets/avocado.png" class="logo"/>
            </div>
            <div class="header-title">게시글작성</div>
            <button class="post">완료</button>
        </header>


        <div class="posting-content">
            <div class="photo">
                <button class="adding-photo">
                    <img class="icon-btn photo-img" src="../assets/camera.png" alt="camera-image">
                    <span>0/10</span>
                </button>
            </div>

            <div class="adding title">
                <select class="sorting"> 
                    <option>모집</option>
                    <option>판매</option>
                </select>
                <input type="text" placeholder="글제목 입력" class="title" />
            </div>
            <div class="adding member">
                <p>목표인원 설정</p>
                <select class="member-select">
                    <option v-for='i in 9' :key="i">{{i}}</option>
                </select>
                명
            </div>
            <div class="adding shelf-life">
                <div class="cal-icon">
                    <img/>
                </div>
                <input type="text" placeholder="유통기한을 입력하세욘" class="calender"/>
                <input type="checkbox" class="checkbox"/> 유통기한 없음
            </div>

            <div class="adding price">
                <input type="text" placeholder="가격을 입력하세요">원
            </div>
            <div class="adding content">
                <input type="text" placeholder="게시글 내용 입력">
                
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Posting',
}
</script>

<style lang="scss">
.posting-content{
    margin: 0 10px;
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

.adding{
    padding: 20px 0;
    border-bottom : 1px solid #eee;

}

// 제목부분
.adding{
    padding: 20px 0;
    border-bottom : 1px solid #eee;

}
    .sorting{
        margin-right : 10px;
        display: inline-block;
        
    }

// 인원수
.member{
    padding: 20px 0;
    border-bottom : 1px solid #eee;

    display: flex;
    p{
        margin-right: 30px;
    }
    select{
        margin-right:10px;
    }
}   
</style>