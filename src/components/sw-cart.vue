<template>
  <div class="catalog">

    <div class="gallery">
      <ul class="gallery__list">
        <p v-if="!CART.length">Любимых героев пока не добавлено.</p>

        <swCartItem
          v-for="(item,index) in CART"
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
import { mapActions, mapGetters } from 'vuex'
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
