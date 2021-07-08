import { createStore } from 'vuex'
// import axios from 'axios'

import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

export default createStore({
  state: {
    heroes: [],
    cart: [],
    // resp: null,

    currentPage: 0, //текущая страница пагинации
    heroesVolume:0,//количество объектов
    resp:[],//данные объектов
    //filterData:[],
    imgNum:0, //номер для изображения
    nothingFound: false,
    transition: false,
  },
  mutations,
  actions,
  getters
})
