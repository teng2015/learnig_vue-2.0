<template>
  <div class="title">HEllo Vue2.0</div>
</template>

<script>
// 对于额外引入的less文件, vue-loader并不会用postcss对其进行编译, 需要单独编写less loader
import './asserts/less/base.less'

export default {
  name: 'app',
  components: {
    
  }
}
</script>
<style lang="less">
@import './asserts/less/lib.less';
.title {
	.flex();
}
</style>