<template>
  <div class="catalog">
    <div>{{EXP_HEROES}}</div>
    <div class="search-field">
      <input
        class="search-field__input"
        type="text"
        placeholder="Найди своего героя..."
        v-model="searchValue"
      >
<!--      <button class="search-field__btn" @click="search">-->
<!--        <i class="icon-search"></i>-->
<!--      </button>-->
    </div>

    <div class="gallery">
      <ul class="gallery__list">
        <swCatalogItem
          v-for="hero in paginatedHeroes"
          :key="hero.id"
          :hero_data="hero"
          @addToCart="addToCart"

        />
      </ul>
    </div>

    <div class="pagination">
      <div class="page"
        v-for="page in pages"
           :key="page"
           @click="pageClick(page)"
           :class="{'page_selected': page===pageNumber}"

      >{{page}}
      </div>
    </div>
    <div>
      <pagination v-model="page" :records="500" :per-page="25" @paginate="myCallback"/>
    </div>
  </div>

</template>

<script>
import swCatalogItem from './sw-catalog-item'
import { mapActions, mapGetters } from 'vuex'
import Pagination from 'v-pagination-3';


export default {
  name: 'sw-catalog',
  components: { swCatalogItem, Pagination},
  props: {},
  data () {
    return {
      searchValue: '',
      sortedHeroes: [],
      myItem: [],

      heroPerPage: 10,
      pageNumber: 1,

      page: 1
    }
  },
  methods: {
    ...mapActions([
      'GET_HEROES_FROM_API',
      'ADD_TO_CART'
    ]),

    // добавляем героя
    addToCart (data) {
      this.ADD_TO_CART(data)
    },

    // поиск
    sortHeroesBySearchValue (value) {
      this.sortedHeroes = [...this.HEROES]
      if (value) {
        this.sortedHeroes = this.sortedHeroes.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.sortedHeroes = [...this.HEROES]
      }
    },

    // по клику переходим на выбранную страницу пагинации
    pageClick (page) {
      this.pageNumber = page
    },
    pageChangeHandler(){

    }
  },
  computed: {
    ...mapGetters([
      'HEROES',
      'EXP_HEROES'
    ]),
    pages () {
      return Math.ceil(this.sortedHeroes.length / this.heroPerPage)
    },

    paginatedHeroes () {
      const from = (this.pageNumber - 1) * this.heroPerPage
      const to = from + this.heroPerPage

      if (this.sortedHeroes.length <= this.heroPerPage) {
        return this.sortedHeroes.slice(0, this.sortedHeroes.length)
      } else {
        return this.sortedHeroes.slice(from, to)
      }
    }
  },
  mounted () {
    this.GET_HEROES_FROM_API()
    //   .then((response) => {
    //   if (response.data) {
    //     this.sortHeroesBySearchValue(this.searchValue)
    //   }
    // })
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
