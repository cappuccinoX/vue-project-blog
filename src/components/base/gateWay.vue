<template>
  <div id="tags" class="panel panel-default">
    <div class="panel-heading" id="title">
      <h3 class="=panel-title">
        标签
      </h3>
    </div>
    <div class="panel-body">
      <span v-for="item in tags" v-bind:key="item.name" class="label label-primary" :style=""> {{item.name}} </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tags: [{name: 'vue.js', color: 'green'}, {name: 'javascript', color: 'red'}, {name: 'node.js', color: 'blue'}, {name: 'express', color: 'orange'}]
    }
  },
  computed: {

  }
}
</script>
<style>
  #tags {
    width: 300px;
    height: 200px;
    float: right;
    margin-right:20px
  }
  #title {
    background: black;
  }
  h3 {
    color: white;
    text-align: center;
  }
  span {
    margin: 2px;
    padding: 2px
  }
</style>
