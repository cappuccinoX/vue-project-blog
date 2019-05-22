<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'

export default {
  components: {
    tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  /*background-image: url('./assets/sky.jpg')*/
}
</style>
