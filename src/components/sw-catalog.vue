<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="gallery">
      <ul class="gallery__list">
        <swCatalogItem
          v-for="hero in $store.state.heroes"
          :key="hero.id"
          :hero_data="hero"
          @sendId="showChildId"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import swCatalogItem from './sw-catalog-item'
import { mapActions } from 'vuex'

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
    showChildId (data) {
      console.log(data)
    }
  },
  mounted () {
    this.GET_HEROES_FROM_API()
  }
}

</script>

<style scoped>

</style>
