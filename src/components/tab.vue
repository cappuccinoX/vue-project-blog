<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">My Blog</a>
      </div>
      <div>
        <ul class="nav navbar-nav">
          <li v-for="item in tabs" v-bind:key="item.name">
            <router-link :to="item.name" tag="div">{{item.render}}</router-link>
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
      tabs: [{name: 'home', render: '首页'}, {name: 'article', render: '文章'}, {name: 'messageboard', render: '留言板'}, {name: 'life', render: '生活'}]
    }
  }
}
</script>

<style>

</style>
