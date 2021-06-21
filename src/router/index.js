// import { createRouter, createWebHistory } from 'vue-router'
// import swCatalog from '../components/sw-catalog'
// import swCart from '../components/sw-cart'
//
//
// const routes = [
//   {
//     path:'/',
//     name: 'catalog',
//     component: swCatalog
//   },
//   {
//     path:'cart',
//     name: '/cart',
//     component: swCart
//   },
// ]
//
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
//
// export default router

import { createRouter, createWebHistory } from 'vue-router'
import swCatalog from '../components/sw-catalog'
import swCart from '../components/sw-cart'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: swCatalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: swCart,
      props: true
    }
  ],

  linkActiveClass: 'active-link'
})
