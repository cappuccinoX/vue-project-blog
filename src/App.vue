<template>
  <div id="app">
    <tab></tab>
    <div class="container-fluid">
      <about></about>
    </div>
    <div class="container-fluid">
      <gate-way></gate-way>
    </div>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'
import about from '@/components/base/about'
import gateWay from '@/components/base/gateWay'

export default {
  components: {
    tab,
    about,
    gateWay
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
