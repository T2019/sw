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
  }
}
