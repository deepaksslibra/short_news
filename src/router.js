// import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from './views/StoriesView.vue'


Vue.use(Router)

// Story view factory

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', component: StoriesView },
  ]
})
