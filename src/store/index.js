import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    heroes: [],
    cart: []

  },
  mutations: {
    SET_HEROES_TO_STATE: (state, tempArr) => {
      state.heroes = state.heroes.concat(tempArr)
    },
    SET_CART: (state, hero) => {
      if (state.cart.length) {
        let isHeroExists = false
        state.cart.forEach(item => {
          if (item.id === hero.id) {
            isHeroExists = true
            // return
          }
        })
        if (!isHeroExists) {
          state.cart.push(hero)
        }
      } else {
        state.cart.push(hero)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_HEROES_FROM_API ({ commit }) {
      return new Promise((resolve, reject) => {
        let tempArr = [] // временное хранилище массивов, то есть сюда каждую итерацию поступают новые общъекты
        getHeroesData('https://swapi.dev/api/people')
        function getHeroesData (apiURL) {
          axios
            .get(apiURL)
            .then((response) => {
              const showDetail = (data) => {
                const filterData = Object.keys(data.results).map(key => {
                  return {
                    id: Number(key) + 1 + tempArr.length,
                    name: data.results[key].name,
                    gender: data.results[key].gender
                  }
                })

                tempArr = tempArr.concat(filterData) // конкатенируем массив

                if (data.next) {
                  getHeroesData(data.next)
                } else {
                  commit('SET_HEROES_TO_STATE', tempArr)// как только кончились следующие объекты, то делаем коммит мутации
                  resolve(response)
                }
              }
              showDetail(response.data)
            }, error => {
              reject(error)
            })
        }
      })
    },
    ADD_TO_CART ({ commit }, hero) {
      commit('SET_CART', hero)
    },
    DELETE_FROM_CART ({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
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
