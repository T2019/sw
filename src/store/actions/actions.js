import axios from 'axios'


export default {

  GET_HEROES_FROM_API ({commit},page) {
      return axios
          .get('https://swapi.dev/api/people/?page=' + page)
          .then((response) => {

            const setValueToPagination = (data) => {

              const filterData = Object.keys(data.results).map(key => {
                return {

                  name: data.results[key].name,
                  gender: data.results[key].gender,
                  imgNumber: parseInt((data.results[key].url).match(/(\d+)/)[0])
                }
              })

              commit('SET_HEROES_TO_STATE',{
                respFilter:filterData,
                heroesVolumeA:data.count,
              })
            }
            setValueToPagination(response.data)
          })

  },
  SEARCH({commit}, searchValue){
    return axios
      .get('https://swapi.dev/api/people/?search=' + searchValue)
      .then((response)=>{

        const setValueToPagination = (data) => {
          if(searchValue.length===0){

          } else if(data.results.length===0){
            commit('NOTHING_FOUND_MSG')
          } else {

            const filterData = Object.keys(data.results).map(key => {
              return {

                name: data.results[key].name,
                gender: data.results[key].gender,
                imgNumber: parseInt((data.results[key].url).match(/(\d+)/)[0])
              }
          })

            commit('SET_HEROES_TO_STATE',{
              respFilter:filterData,
              heroesVolumeA:data.count,
              showBtn:true,
            })
          }
        }

        setValueToPagination(response.data)
      })
  },
  ADD_TO_CART ({ commit }, hero) {
    commit('SET_CART', hero)
  },
  DELETE_FROM_CART ({ commit }, index) {
    commit('REMOVE_FROM_CART', index)
  },
  PAGE_TO_STORE({commit}, page){
    commit('SET_PAGE_TO_STORE', page)
  },
}
