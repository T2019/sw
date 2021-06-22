<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__nav">
          <nav class="menu">
            <span class="menu__toggle icon-menu" @click="menuIsOpen = !menuIsOpen"></span>
            <ul class="menu__list" :class="{'menu__list_dropdown' : menuIsOpen}">
              <li class="menu__item" >
                <router-link to="/" class="menu__link">Главная</router-link>
              </li>
              <li class="menu__item" >
                <router-link to="/cart" class="menu__link">Любимые герои</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <img class="header__logo" src="../assets/logo.svg" alt="">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      menuIsOpen: false
    }
  },
  methods: {
    toggleMenu () {

    }

  },
  computed: {

  }
}
</script>
