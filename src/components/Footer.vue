<template>
    
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">

  footer{
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-top: solid 1px #eee;
    padding : 5px 0;
    background-color: #fff;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

  }

  footer button{
    width: 15%;
    height: 15%;

    font-size: 5px;
  }

  footer img{
    display: block;
    margin: 0 auto;
    width: 15px;
    height: 15px;
  }

  .content {
    text-align: left;
  }

</style>