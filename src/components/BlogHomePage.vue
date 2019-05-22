<template>
  <div id="blog_homepage">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a target="_blank" href="https://nodejs.org/">Node.js</a></li>
      <li><a target="_blank" href="https://www.javascript.com/">JavaScript</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'blog homepage',
  data () {
    return {
      msg: 'Welcome to my blog!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 50px
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: darkblue;
  font-size: 30px;
}
</style>
