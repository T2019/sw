<template>
  <div class="catalog">
    <h1>Catalog</h1>
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
      'GET_HEROES_FROM_API'
    ]),
    addToCart (data) { // выводим объект по которому кликнули
      console.log(data)
    }
  },
  computed: {
    ...mapGetters([
      'HEROES'
    ])
  },
  mounted () {
    this.GET_HEROES_FROM_API()
  }
}

</script>

<style scoped>

</style>
