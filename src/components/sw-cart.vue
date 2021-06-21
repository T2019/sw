<template>
  <div class="catalog">
    <h1>Cart</h1>
    <div class="gallery">
      <ul class="gallery__list">
        <swCartItem
          v-for="(item,index) in cart_data"
          :key="item.id"
          :cart_item_data="item"
          @deleteItem="deleteItem(index)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import swCartItem from './sw-cart-item'
import { mapActions } from 'vuex'
export default {
  name: 'sw-cart',
  components: { swCartItem },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteItem (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>

</style>
