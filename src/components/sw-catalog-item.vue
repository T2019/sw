<template>
  <li class="gallery__item">
    <div class="card">
      <img class="card__img" :src=" 'https://starwars-visualguide.com/assets/img/characters/' + hero_data .imgNumber +'.jpg' " alt="">
      <p class="card__name">{{hero_data.name}}</p>
      <a class="card__like" @click="addToCart"><i class="icon-heart-empty"></i></a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'sw-catalog-item',
  props: {
    hero_data: {
      type: Object,
      default () {
        return {

        }
      }
    }

  },
  data () {
    return {

    }
  },
  computed: {},
  methods: {
    addToCart () {
      this.$emit('addToCart', this.hero_data)
    }
  }
}
</script>

<style scoped>

</style>
