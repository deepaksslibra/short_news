// import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from './Screens/Homescreen.vue'
import Header from './components/header.vue'
import Banner from './components/banner.vue'
import Categories from './components/categories.vue'
import Recommended from './components/recommended.vue'
import CategoryPage from './Screens/CategoryPage.vue'
import ProductDetail from './Screens/ProductDetail.vue'
import CartPage from './Screens/CartPage.vue'
import PaymentPage from './Screens/PaymentPage.vue'
import ViewPager from './Screens/ViewPager.vue'
Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
      { path: '/', component: ViewPager },
      {	path: '/categories/:name', component: CategoryPage},
      { path: '/product/:productName', component: ProductDetail},
      {	path: '/cart/', component: CartPage},
      { path: '/payment/', component: PaymentPage}
  ]
})
