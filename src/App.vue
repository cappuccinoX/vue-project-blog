<template>
  <div id="app">
    <tab></tab>
    <div class="container-fluid introduction">
      <about></about>
      <gate-way></gate-way>
    </div>
    <div class="container-fluid illustration">
      <banner></banner>
    </div>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'
import about from '@/components/base/about'
import gateWay from '@/components/base/gateWay'
import banner from '@/components/base/banner'

export default {
  components: {
    tab,
    about,
    gateWay,
    banner
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

.introduction {
  width: 30%;
  float: right;
  height: 600px;
}

.illustration {
  width: 70%;
  float: left;
  height:600px
}
</style>
