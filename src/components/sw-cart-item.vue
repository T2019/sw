<template>
  <li class="gallery__item">
    <div class="card">
      <img :src=" 'https://starwars-visualguide.com/assets/img/characters/' + cart_item_data.imgNumber +'.jpg' " alt="">
      <p class="card__name">{{cart_item_data.name}}</p>
        <a class="card__like" @click="deleteItem"><i class="icon-heart-empty"></i></a>
    </div>
  </li>

</template>

<script>
export default {
  name: 'sw-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    deleteItem () {
      this.$emit('deleteItem')
    }
  }
}
</script>

<style scoped>

</style>
