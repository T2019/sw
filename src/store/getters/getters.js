export default {
  HEROES (state) {
    return state.heroes
  },
  CART (state) {
    return state.cart
  },
  EXP_HEROES(state){
    return state.resp
  },


  CURRENT_PAGE(state){        // текущая страница пагинации
    return state.currentPage
  },
  HEROES_VOLUME(state){
    return state.heroesVolume
  },

  RESP(state){
    return state.resp
  },
  FILTER_DATA(state){
    return state.filterData
  },
  IMG_NUM(state){
    return state.imgNum
  },
  NOTHING_FOUND(state) {
    return state.nothingFound
  },
  TRANSITION(state){
    return state.transition
  },

}
