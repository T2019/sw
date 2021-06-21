<template>
  <div class="main-wrapper">
    <div class="container">
      <p>Main wrappss</p>
      <swCatalog></swCatalog>
      <swCart v-if="CART.length"></swCart>
    </div>
  </div>
</template>

<script>
import swCatalog from './sw-catalog'
import swCart from './sw-cart'
import { mapGetters } from 'vuex'

export default {
  name: 'sw-main-wrapper',
  components: { swCatalog, swCart },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style scoped>

</style>
