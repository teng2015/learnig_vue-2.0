<template>
  <div id="app">
  	<nav-bar></nav-bar>
  	<transition name="fade">
  		<router-view></router-view>
  	</transition>
  </div>
</template>

<script>
// 对于额外引入的less文件, vue-loader并不会用postcss对其进行编译, 需要单独编写less loader
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>