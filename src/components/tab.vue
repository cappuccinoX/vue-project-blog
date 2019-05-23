<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <img src="../assets/image/logo.png" height="50" width="50">
      </div>
      <div>
        <ul class="nav navbar-nav">
          <li v-for="item in tabs" v-bind:key="item.name">
            <router-link :to="item.name" :id="item.name" @click.native="click()" style="color: white">{{item.render}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      tabs: [{name: 'home', render: '首页'}, {name: 'article', render: '文章'}, {name: 'msgboard', render: '留言板'}, {name: 'life', render: '生活'}]
    }
  },
  methods: {
    click: function () {
      document.title = this.$route.name
    }
  }
}
</script>

<style>
.router-link-active {
  background: gray;
}
.container-fluid {
  background: black;
}
</style>
