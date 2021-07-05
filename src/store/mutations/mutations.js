export default {
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
  },
  SET_TO_STATE:(state, response) => {
    state.resp = response
  },

  SET_PAGE_TO_STORE:(state, page)=>{
    state.currentPage = page
  }
}

