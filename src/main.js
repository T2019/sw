import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'

import './style.css'

createApp(App).use(store).use(Vuex).use(router).mount('#app')

// import Vue from 'vue'
// import App from './App'
// import store from './store/index.js'
// import './style.css'
// Vue.use(Vuex)
//
// Vue.config.productionTip = false;
// new Vue({
//   h=>h(App),
//   store
// })$mount()
