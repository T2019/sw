<template>
  <li class="gallery__item">
    <div class="card">
      <img class="card__img" alt="">
      <p class="card__name">{{hero_data.name}}</p>
      <div class="card__like-wrap">
        <a class="card__like" @click="sendDataToParent"><i class="icon-heart-empty"></i></a>
      </div>
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
        return {}
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    sendDataToParent () {
      // this.$emit('sendId',this.hero_data.id)  передаем родителю айдишник карточки по которой кликнули
      console.log(this.$store.state.heroes)
    }
  }
}
</script>

<style scoped>

</style>
