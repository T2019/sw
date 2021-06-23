<template>
  <swHeader></swHeader>
  <div class="main-wrapper">
    <div class="container">
     <router-view v-slot="{ Component }"> <!--  так решил проблему с постоянным запуском хука created-->
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
     </router-view>
<!--      <p>Main wrappss</p>-->
<!--      <swCatalog></swCatalog>-->
<!--      <swCart v-if="CART.length"-->
<!--      :cart_data="CART"-->
<!--      >-->
<!--      </swCart>-->
    </div>
  </div>
</template>

<script>
import swHeader from './sw-header'
// import swCatalog from './sw-catalog'
// import swCart from './sw-cart'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'sw-main-wrapper',
  // components: { swCatalog, swCart },
  components: { swHeader },
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
