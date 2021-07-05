<template>
  <div class="catalog">
    <div>{{resp}}</div>
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
      <pagination
        v-model="page"
        :records="heroesVolume"
        :per-page="10"
        @paginate="getHeroesFromURL"
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
      heroesVolume: 0,
      filterData:[],
    }
  },
  methods: {
    getHeroesFromURL(page){
      if(page === 1){
        return axios
          .get('https://swapi.dev/api/people/')
          .then((response) => {
            const setValueToPagination = (data) => {
              this.resp = data
              this.heroesVolume = data.count

              const filterData = Object.keys(data.results).map(key => {
                return {
                  id: Number(key)+1,
                  name: data.results[key].name,
                  gender: data.results[key].gender
                }
              })
              console.log(filterData)

            }
            setValueToPagination(response.data)


          })
      }else{
        return axios
          .get('https://swapi.dev/api/people/?page=' + page)
          .then((response) => {
            const setValueToPagination = (data) => {
              this.resp = data
              this.heroesVolume = data.count

              const filterData = Object.keys(data.results).map(key => {
                return {
                  id: Number(key)+1,
                  name: data.results[key].name,
                  gender: data.results[key].gender
                }
              })
              console.log(filterData)
            }
            setValueToPagination(response.data)

          })
      }




    },
    ...mapActions([
      'ADD_TO_CART',
      'PAGE_TO_STORE'
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
      'EXP_HEROES',
      'CURRENT_PAGE',
    ]),
    pages () {
      return Math.ceil(this.sortedHeroes.length / this.heroPerPage)
    },
    totalPages(){
      return Math.ceil(this.heroesVolume / this.heroPerPage)
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
    //this.GET_HEROES_FROM_API()
    //   .then((response) => {
    //   if (response.data) {
    //     this.sortHeroesBySearchValue(this.searchValue)
    //   }
    // })
    this.getHeroesFromURL(this.page)
  },
  watch: {
    searchValue () {
      this.sortHeroesBySearchValue(this.searchValue)
    },
    page(){
      this.PAGE_TO_STORE(this.page)

    },


  }

}

</script>

<style scoped>

</style>
