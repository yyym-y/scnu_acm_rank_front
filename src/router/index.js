import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTableView from '@/views/MainTableView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: MainTableView }
]

const router = new VueRouter({
  routes
})

export default router
