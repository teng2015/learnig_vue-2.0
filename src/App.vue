<template>
  <div id="app">
  	<div class="title">HEllo Vue2.0</div>
  	<router-link to="/home">home</router-link>
  	<router-view></router-view>
  </div>
</template>

<script>
// 对于额外引入的less文件, vue-loader并不会用postcss对其进行编译, 需要单独编写less loader
// import './asserts/less/base.less'

export default {
  name: 'app',
  components: {
    
  }
}
</script>
<style lang="less">
@import './asserts/less/base.less';
/* 通过继承的写法, 将各个class的共同属性归类到一起 */
.title {
	&:extend(.flex);
}
</style>