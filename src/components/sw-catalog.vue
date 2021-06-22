<template>
  <div class="catalog">

    <div class="search-field">
      <input
        class="search-field__input"
        type="text"
        placeholder="Найди своего героя..."
      >
      <button class="search-field__btn">
        <i class="icon-search"></i>
      </button>
    </div>

    <div class="gallery">
      <ul class="gallery__list">
        <swCatalogItem
          v-for="hero in HEROES"
          :key="hero.id"
          :hero_data="hero"
          @addToCart="addToCart"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import swCatalogItem from './sw-catalog-item'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'sw-catalog',
  components: { swCatalogItem },
  props: {},
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'GET_HEROES_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart (data) { // тут выводили объект по которому кликнули. При клике
      this.ADD_TO_CART(data)
    }
  },
  computed: {
    ...mapGetters([
      'HEROES'
    ])
  }

}

</script>

<style scoped>

</style>
