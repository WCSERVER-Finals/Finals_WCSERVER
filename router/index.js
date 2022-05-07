import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../components/MenuComponent')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/CreateComponent')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactUsComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router