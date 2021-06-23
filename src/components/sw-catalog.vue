<template>
  <div class="catalog">

    <div class="search-field">
      <input
        class="search-field__input"
        type="text"
        placeholder="Найди своего героя..."
        v-model="searchValue"
      >
      <button class="search-field__btn" @click="search">
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
      searchValue: '',
      sortedHeroes: []
    }
  },
  methods: {
    ...mapActions([
      // 'GET_HEROES_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart (data) { // тут выводили объект по которому кликнули. При клике
      this.ADD_TO_CART(data)
    },
    sortHeroesBySearchValue (value) {
      this.sortedHeroes = [...this.HEROES]
      if (value) {
        this.sortedHeroes = this.sortedHeroes.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.sortedHeroes = this.HEROES
      }
    }
  },
  computed: {
    ...mapGetters([
      'HEROES'
    ])
  },
  watch: {
    searchValue () {
      this.sortHeroesBySearchValue(this.searchValue)
    }

  }

}

</script>

<style scoped>

</style>
