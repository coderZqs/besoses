import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "link-active",
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: "/home/detail/:id",
      name: "detail",
      component: () => import("./views/_home")
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/sort",
      name: "sort",
      component: () => import('./views/sort.vue')
    },
    {
      path: "/archive",
      name: "archive",
      component: () => import("./views/archive.vue")
    },
    {
      path: "/linkmore",
      name: "linkmore",
      component: () => import("./views/linkmore.vue")
    },
    {
      path: "/more",
      name: "more",
      component: () => import("./views/more.vue")
    }
  ]
})
// 简单配置
NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})


router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.afterEach((to, from, next) => {

})





export default router