<template>
    <div class="mypage">
        <header class="header">
            <p class="loaction"> 
                <img src="../assets/avocado.png" class="logo" alt="logo"/>
                마이페이지
            </p>
        </header>
        
        <div class="mypage-content">
            <div class="mypage-profile">
                <div class="mp-profile">
                    <img src="../assets/profile.jpeg" class="mp-img" alt="seller profile img" />
                </div>
                <div class="mypage-desc">
                    <p class="mp-id">승효니</p>
                    <p class="fresh-text">신선도</p>
                    <div class="fresh"> 
                        <div class="fresh-bar"></div>
                    </div>
                    <div class="fresh-tmp">46°c</div>
                </div>
            </div>

            <a href="/" class="setting location">
                닉네임 변경
            </a>
            <a href="/" class="setting location">
                거래지역 설정
            </a>
            <a href="/" class="setting location">
                작성글 보기
            </a>
            <a href="/" class="setting location">
                설정
            </a>
            <a href="/" class="setting location">
                버전정보
            </a>

            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Posting',
}
</script>

<style lang="scss">


// 프로필
.mypage-profile{
    padding :10px 0;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 7px solid #eee;
}
.mp-img{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    overflow: hidden;
}
.mypage-desc{
    margin-left: 30px;
    width:50%;

}
.mp-id {
    font-size: 20px;
    font-weight: 700;
}

.fresh-text{
    margin-top:3px;
    font-size: 12px;
    font-weight: 500;
}

// 설정
.setting{
    display: block;
    padding: 20px 10px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    
}
</style>