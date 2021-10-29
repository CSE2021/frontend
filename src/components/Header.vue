<template>
    <header class="header">
        <p class="loaction"> 
        <img src="../assets/logo.png" class="logo" alt="logo"/>
        </p>

        <div class="side-icon">
        <button class="icon-btn search"><img alt="search" src="../assets/search.png"/></button>
        <button class="icon-btn alram"><img alt="alram" src="../assets/alarm.png"/></button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    height:49px;

    padding: 0 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color:#fff;
    font-weight: 700;
    .logo{
        width: 90px;
        height: 30px;
        object-fit: contain;
    }
}


.icon-btn{
    margin-left: 10px;

    img{
        width : 20px;
        height: 20px;
        object-fit: cover;
        overflow: hidden;
    }

}



</style>