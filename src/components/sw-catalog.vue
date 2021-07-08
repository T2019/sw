<template>
  <div class="catalog">

    <div class="search-field">
      <input
        class="search-field__input"
        type="text"
        placeholder="Найди своего героя..."
        v-model="searchValue"
      >
      <button class="search-field__btn" @click="searchTheHero">
        <i class="icon-search"></i>
      </button>
    </div>


    <h2 v-if="NOTHING_FOUND===true">По данному запросу ничего не нашлось</h2>

    <div class="gallery">
      <ul class="gallery__list">
        <swCatalogItem
          v-for="hero in RESP"
          :key="hero.imgNumber"
          :hero_data="hero"
          @addToCart="addToCart"
        />
      </ul>
    </div>
    <p v-if="TRANSITION===true">
      <span class="backToList" @click="GET_HEROES_FROM_API(page)">Назад к списку</span>
    </p>

    <div>
      <pagination
        v-model="page"
        :records="HEROES_VOLUME"
        :per-page="10"
        @paginate="GET_HEROES_FROM_API(page)"
      />
    </div>
  </div>

</template>

<script>
import swCatalogItem from './sw-catalog-item'
import { mapActions, mapGetters } from 'vuex'
import Pagination from 'v-pagination-3';
import axios from "axios";


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

      page: 1, //стартовая страница пагинации
      resp: {},
      heroesVolume: 82,
      filterData:[],

    }
  },
  methods: {
    // getHeroesFromURL(page){
    //   if(page === 1){
    //     return axios
    //       .get('https://swapi.dev/api/people/')
    //       .then((response) => {
    //         const setValueToPagination = (data) => {
    //           this.resp = data
    //           this.heroesVolume = data.count
    //
    //           const filterData = Object.keys(data.results).map(key => {
    //             return {
    //               id: Number(key)+1,
    //               name: data.results[key].name,
    //               gender: data.results[key].gender
    //             }
    //           })
    //           console.log(filterData)
    //
    //         }
    //         setValueToPagination(response.data)
    //
    //
    //       })
    //   }else{
    //     return axios
    //       .get('https://swapi.dev/api/people/?page=' + page)
    //       .then((response) => {
    //         const setValueToPagination = (data) => {
    //           this.resp = data
    //           this.heroesVolume = data.count
    //
    //           const filterData = Object.keys(data.results).map(key => {
    //             return {
    //               id: Number(key)+1,
    //               name: data.results[key].name,
    //               gender: data.results[key].gender
    //             }
    //           })
    //           console.log(filterData)
    //         }
    //         setValueToPagination(response.data)
    //
    //       })
    //   }

    //},
    ...mapActions([
      'ADD_TO_CART',
      'PAGE_TO_STORE',
      'GET_HEROES_FROM_API',
      'SEARCH',

    ]),
    // добавляем героя
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    // по клику переходим на выбранную страницу пагинации
    pageClick (page) {
      this.pageNumber = page
    },
    searchTheHero(value){
      this.SEARCH(this.searchValue)
    }

  },
  computed: {
    ...mapGetters([
      'HEROES',
      'EXP_HEROES',
      'CURRENT_PAGE', //текущая страница пагинации
      'HEROES_VOLUME',
      'RESP',
      'FILTER_DATA',
      'IMG_NUM',
      'NOTHING_FOUND',
      'TRANSITION',
    ]),
    // pages () {
    //   return Math.ceil(this.sortedHeroes.length / this.heroPerPage)
    // },
    // totalPages(){
    //   return Math.ceil(this.heroesVolume / this.heroPerPage)
    // },
    // paginatedHeroes () {
    //   const from = (this.pageNumber - 1) * this.heroPerPage
    //   const to = from + this.heroPerPage
    //
    //   if (this.sortedHeroes.length <= this.heroPerPage) {
    //     return this.sortedHeroes.slice(0, this.sortedHeroes.length)
    //   } else {
    //     return this.sortedHeroes.slice(from, to)
    //   }
    // }
  },
  mounted () {

    this.GET_HEROES_FROM_API(this.page)

  },
  watch: {
    // searchValue () {
    //   this.sortHeroesBySearchValue(this.searchValue)
    // },
    page(){
      this.PAGE_TO_STORE(this.page)

    },
  }
}

</script>

<style scoped>

</style>
