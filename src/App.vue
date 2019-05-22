<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'
import blogHomePage from '@/components/BlogHomePage'

export default {
  components: {
    tab,
    blogHomePage
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
  margin-top: 60px;
}
body{
  /*background-image: url('./assets/sky.jpg')*/
}
</style>
