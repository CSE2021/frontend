<template>
  <Chatting/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
//  import ChatList from './components/ChatList.vue'
  import Chatting from './components/Chatting.vue'


export default {
  name: 'App',
  components: {
    Chatting
   // HelloWorld,
    //ChatList,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
