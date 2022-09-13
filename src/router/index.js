import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../views/home/home.vue');
const Categories=()=>import('../views/categories/categories.vue');
const Cart=()=>import('../views/cart/cart.vue');
const Profile=()=>import('../views/profile/profile.vue')
const Detail=()=>import('../views/detail/detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/categories',
    component:Categories
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
