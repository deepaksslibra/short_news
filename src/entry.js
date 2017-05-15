
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

// sync the router with the vuex store.
// this registers `store.state.route`

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root', router}, App))

router.push('/')
