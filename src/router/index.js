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
