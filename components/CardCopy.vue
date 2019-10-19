<template lang='pug'>
div(
  class='copy'
)
  h3(
    class='copy__headline'
  ) {{ headline }}
  p(
    class='copy__text'
  ) {{ text }}
  div(
    class='copy__cta-links'
  )
    a(
      v-for='(item, index) in links'
      :key='item + index'
      class='copy__link'
      @click='trackEvent(item.linkText)'
    )
      | {{ item.linkText }}
      IconChevron(class='copy__link-svg')
</template>


<script>
import IconChevron from '~/assets/svg/icon-chevron.svg'

export default {
  components: {
    IconChevron
  },
  props: {
    headline: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    trackEvent (linkText) {
      const data = {
        eventCategory: 'Hero Tile Link',
        eventAction: 'click',
        eventLabel: `${this.headline} - ${linkText}`
      }
      this.$ga.event(data)
      console.log('track event: ', data)
    }
  }
}
</script>


<style lang='sass' scoped>
.copy
  @extend %flex--column-center
  pointer-events: none

  &__headline
    font-weight: $fw-bold
    font-size: $fs1
    text-align: center
    max-width: 520px
    width: 90%
    +mq-xs
      font-size: $fs2

  &__text
    text-align: center
    max-width: 520px
    width: 90%
    margin-top: $unit
    +mq-m
      font-size: $fs1
    +mq-m
      max-width: 740px

  &__cta-links
    display: flex
    justify-content: center
    flex-wrap: nowrap

  &__link
    @extend %flex--row-center
    margin-top: $unit*2
    color: $blue
    pointer-events: auto

    &:nth-child(n+2)
      margin-left: $unit*2

    &:hover
      text-decoration: underline

    &-svg
      width: $unit
      margin-left: $unit
      fill: currentColor
      transform: rotate(90deg)
</style>
