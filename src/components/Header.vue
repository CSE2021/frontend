<template>
    <header class="header">
        <p class="loaction"> 
        <img src="../assets/avocado.png" class="logo" alt="logo"/>
        심곡동
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
    
    height:50px;

    padding: 0 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color:#fff;
    font-weight: 700;
    .logo{
        width: 20px;
        height: 20px;
        object-fit: cover;
        margin-right: 5px;
    }
}

.header button{
    width: 20px;
    height: 20px;
}

.icon-btn{
    margin-right: 10px;

    img{
        width : 20px;
        height: 20px;
        object-fit: cover;
    }

}



</style>