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
      :href='item.link'
      class='copy__link'
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
  methods: {}
}
</script>


<style lang='sass' scoped>
.copy

  &__headline
    font-weight: $fw-bold
    font-size: $fs2
    text-align: center

  &__text
    text-align: center

  &__cta-links
    display: flex
    justify-content: center
    flex-wrap: nowrap

  &__link
    @extend %flex--row-center
    margin-top: $unit*2
    color: $blue

    &:nth-child(n+2)
      margin-left: $unit*2

    &-svg
      width: $unit
      margin-left: $unit
      fill: currentColor
      transform: rotate(90deg)
</style>
