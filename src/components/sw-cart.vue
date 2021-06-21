<template>
  <div class="cart">
    <h1>Cart</h1>
    <swCartItem></swCartItem>
  </div>
</template>

<script>
import swCartItem from './sw-cart-item'
export default {
  name: 'sw-cart',
  components: { swCartItem }
}
</script>

<style scoped>

</style>
