<template lang='pug'>
div(
  id='pricing'
  class='container-prices'
)
  section(class='prices')
    h2(class='prices__headline') Pricing

    ul(class='prices__list')
      li(
        v-for='(item, index) in cards'
        :key='item + index'
        class='prices__item'
      )
        div(class='prices__card card')
          h2(class='card__title') {{ item.title }}
          p(class='card__description')
            | {{ item.description }}&nbsp;
            a(class='card__link') Learn more
          ul(class='card__list')
            li(
              v-for='(cardItem, cardIndex) in item.list'
              :key='cardItem + cardIndex'
              class='card__item'
            )
              p(class='card__copy') {{ cardItem }}
          //- p
            //- span(class='card__title') Cost:&nbsp;
          span(class='card__price') {{ item.price }}
          button(class='card__button') {{ item.button }}

</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      cards: [
        {
          title: 'Spark Theme',
          description: 'Blazing-fast Shopify theme for the growing Cannabis brand.',
          price: 'Free',
          button: 'Get started',
          list: [
            'Professional Shopify theme',
            'Fully customizable',
            '100% Page Speed rating',
            'Responsive',
            'GDPR compliant',
            'Google Analytics enabled',
            'Accessibility support'
          ]
        },
        {
          title: 'Theme Support',
          description: 'A dedicated team of Shopify experts ready to help.',
          price: '$5,000 minimum',
          button: 'Get started',
          list: [
            'Expert Spark Theme support',
            'Plugin integration',
            'Design additions',
            'Development additions',
            'Analytic report',
            'Expert Shopify support',
            'Custom CMS'
          ]
        },
        {
          title: 'Custom Project',
          description: 'Have a big idea? Let\'s build it together.',
          price: '$25,000 minimum',
          button: 'Get started',
          list: [
            'Project management',
            'Tech lead',
            'Design lead',
            'Weekly progress reports'
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-prices
  @extend %container-main
  // margin-bottom: $unit*10

.prices
  @extend %container-content

  &__headline
    @extend %text-headline

  &__list
    @extend %flex--column
    +mq-m
      flex-direction: row

  &__item
    @extend %flex--column
    @extend %card-container
    flex: 1
    margin-bottom: $unit*5
    background: $white
    &:last-child
      margin-bottom: unset
    +mq-m
      margin: 0 $unit*5 0 0
      &:last-child
        margin-right: unset

  &__card


.card
  @extend %card-container
  border: 1px solid $grey
  padding: $unit*2
  display: grid
  grid-gap: $unit*2
  grid-template-rows: auto auto 1fr auto auto
  height: 100%
  // box-shadow: 0px 0px $unit rgba(34, 34, 34, 0.05)

  &__title
    font-weight: $fw-bold
    text-align: center

  &__description
    @extend %text-copy
    // text-align: center

  &__link
    color: $pri-cl
    display: none

  &__list

  &__item
    border-top: 1px solid $grey
    padding: $unit

    &:last-child
      border-bottom: 1px solid $grey

  &__copy
    @extend %text-copy
    text-align: center

  &__price
    // @extend %text-copy
    text-align: center
    margin: $unit*2 0

  &__button
    @extend %card-container
    width: 100%
    padding: $unit $unit*2
    // margin-top: $unit*2
    background: $grey
    color: $blue
    // display: none
    // box-shadow: 0px $unit $unit*3 rgba(34, 34, 34, 0.25)

    &:hover
      background: $blue
      color: $white


</style>
