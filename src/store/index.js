import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    heroes: [],
    cart: []
  },
  mutations: {
    SET_HEROES_TO_STATE: (state, filterData) => {
      state.heroes = state.heroes.concat(filterData)
    }
  },
  actions: {
    GET_HEROES_FROM_API ({ commit }) {
      function getHeroesData (apiURL) {
        axios
          .get(apiURL)
          .then(function (response) {
            showDetail(response.data)
          }).catch(error => console.log(error))
      }
      let tempArr = [] // временное хранилище массивов, то есть сюда каждую итерацию поступают новые общъекты
      const showDetail = (data) => { // стрелочная дает возможность обращаться к значениям в data
        // const prevSum = this.heroes.length

        const filterData = Object.keys(data.results).map(key => {
          return {
            id: Number(key) + 1 + tempArr.length,
            name: data.results[key].name,
            gender: data.results[key].gender
          }
        })

        // this.heroes = this.heroes.concat(filterData)
        // commit('SET_HEROES_TO_STATE',filterData)

        tempArr = tempArr.concat(filterData)

        if (data.next) {
          getHeroesData(data.next)
        } else {
          commit('SET_HEROES_TO_STATE', tempArr) // как только кончились следующие объекты, то делаем коммит мутации
        }
      }
      getHeroesData('https://swapi.dev/api/people')
    }
  },
  getters: {
    HEROES (state) {
      return state.heroes
    },
    CART (state) {
      return state.cart
    }
  }
})
