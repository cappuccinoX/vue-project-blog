<template>
  <ul class="nav-list">
    <!--<li v-for = "(item) in tabs" v-bind:key="item.name">-->
       <!--{{item.name}}-->
    <!--</li>-->
    <li><a>node</a></li>
    <li><a>js</a></li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      tabs: [{name: 'Node.js', link: 'https://nodejs.org/'}, {name: 'Javascript', link: 'https://www.javascript.com/'}]
    }
  }
}
</script>

<!--<div id="app">-->
  <!--<ol>-->
    <!--<li v-for="site in sites">-->
      <!--{{ site.name }}-->
    <!--</li>-->
  <!--</ol>-->
<!--</div>-->

<!--<script>-->
<!--export default{-->
  <!--data () {-->
    <!--return {-->
      <!--sites: [-->
        <!--{ name: 'Runoob' },-->
        <!--{ name: 'Google' },-->
        <!--{ name: 'Taobao' }-->
      <!--]-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->
<style>
  li {
    color: black;
  }
</style>
