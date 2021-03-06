// import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#root',
  render: h => h(App),
  router: router
})

router.push('/');