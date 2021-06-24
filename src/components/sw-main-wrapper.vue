<template>
  <swHeader></swHeader>
  <div class="main-wrapper">
    <div class="container">
     <router-view v-slot="{ Component }"> <!--  так решил проблему с постоянным запуском хука created-->
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
     </router-view>
    </div>
  </div>
  <swFooter></swFooter>
</template>

<script>
import swHeader from './sw-header'
import swFooter from './sw-footer'
// import swCatalog from './sw-catalog'
// import swCart from './sw-cart'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'sw-main-wrapper',
  // components: { swCatalog, swCart },
  components: { swHeader, swFooter },
  methods: {
    ...mapActions([
      'GET_HEROES_FROM_API'

    ])
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }

}
</script>

<style scoped>

</style>
