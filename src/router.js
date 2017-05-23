// import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from './views/StoriesView.vue'
import ListView from './components/ListView.vue'
import DetailView from './views/DetailView.vue'

Vue.use(Router)

// Story view factory

export default new Router({
  // mode: 'abstract',
  routes : [
    {path:'/', component : StoriesView , children : [
      {path: '/', component : ListView},
    ]},
    {path:'/detail/:jobId', component : DetailView},
  ]
})
