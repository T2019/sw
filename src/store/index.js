import { createStore } from 'vuex'
// import axios from 'axios'

import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

export default createStore({
  state: {
    heroes: [],
    cart: []

  },
  mutations,
  actions,
  getters
})
