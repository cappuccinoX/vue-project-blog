<template>
  <div id="about" class="panel panel-default">
    <div class="panel-heading" id="title">
      <h3 class="=panel-title">
        关于本站
      </h3>
    </div>
    <div class="panel-body">
      {{msg}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '本站用于学习并应用VUE相关知识\r\n本站用于学习并应用VUE相关知识\r\n本站用于学习并应用VUE相关知识\r\n本站用于学习并应用VUE相关知识\r\n'
    }
  }
}
</script>
<style>
#about {
  width: 300px;
  height: 350px;
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
</style>
