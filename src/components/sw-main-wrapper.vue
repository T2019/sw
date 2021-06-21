<template>
  <swHeader></swHeader>
  <div class="main-wrapper">
    <div class="container">
      <router-view></router-view>
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
import { mapGetters } from 'vuex'

export default {
  name: 'sw-main-wrapper',
  // components: { swCatalog, swCart },
  components: { swHeader },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style scoped>

</style>
