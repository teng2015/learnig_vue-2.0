import Vue from 'vue'
import router from './router'
import App from './App'

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
