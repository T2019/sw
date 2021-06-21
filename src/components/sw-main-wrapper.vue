<template>
  <div class="main-wrapper">
    <div class="container">
      <p>Main wrappss</p>
      <swCatalog></swCatalog>
      <swCart></swCart>
    </div>
  </div>
</template>

<script>
import swCatalog from './sw-catalog'
import swCart from './sw-cart'

export default {
  name: 'sw-main-wrapper',
  components: { swCatalog, swCart }
}
</script>

<style scoped>

</style>
