<template lang='pug'>
div(class='nav-bar-container')
  div(class='nav-bar')

    nuxt-link(
      to='/'
      class='nav-bar__logo'
    )
      IconM(class='nav-bar__icon')
      p Mount Kush

    ul(class='nav-bar__list')
      li(
        v-for='(item, index) in nav'
        :key='item + index'
        class='nav-bar__item'
      )
        a(
          @click='handleNavLink(item)'
          class='nav-bar__link'
        ) {{ item.text }}

    Hamburger(class='nav-bar__hamburger')

</template>


<script>
import { mapState, mapMutations } from 'vuex'
import Hamburger from '~/components/Hamburger.vue'
import IconM from '~/assets/svg/iconM.svg'

export default {
  components: {
    Hamburger,
    IconM
  },
  props: {},
  data () {
    return {
      nav: [
        // {
        //   text: 'Services'
        // },
        {
          text: 'Work'
        },
        // {
        //   text: 'Bio'
        // },
        {
          text: 'Pricing'
        },
        // {
        //   text: 'Team'
        // },
        {
          text: 'Contact'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      scrollY: state => state.app.scroll.y
    })
  },
  methods: {
    handleNavLink ({ text }) {
      const anchor = `#${text.toLowerCase()}`

      this.$router.push('/')

      this.$nextTick(() => {
        window.scrollTo(0, this.scrollY)
        this.$scrollTo(anchor)
      })
    }
  }
}
</script>


<style lang='sass' scoped>
.nav-bar-container
  background: $white
  padding: $unit 0
  border-bottom: 1px solid $grey

.nav-bar
  @extend %container-content
  display: grid
  grid-auto-flow: column
  grid-template-columns: auto 1fr

  &__hamburger
    justify-self: end
    margin-left: $unit*5
    +mq-s
      display: none

  &__logo
    @extend %card-container
    display: flex
    align-items: center
    color: $blue
    // color: #caa94a
    // color: $white
    // border: 2px solid #caa94a
    padding: $unit
    background: $grey
    // background: #caa94a

    & p
      margin-left: $unit
      text-transform: uppercase
      color: currentColor
      font-size: 14px
      font-family: $sec-font
      letter-spacing: 2px

  &__icon
    width: 24px
    height: 24px
    fill: currentColor
    // display: none

  &__list
    display: none
    +mq-s
      display: grid
      grid-auto-flow: column
      align-items: center
      grid-gap: $unit*5
      justify-self: end

  &__item

  &__link




</style>
