<template lang='pug'>
div(
  class='container-work'
)

  section(class='work')
    ul(class='work__list')
      li(
        v-for='(item, index) in work'
        :key='item + index'
        class='work__item'
      )
        Card(
          :cardData='item'
          class='work__card'
        )
</template>


<script>
import Card from '~/components/Card.vue'
import servicesHero from '~/assets/images/servicesHero.png'
import servicesHeroSmall from '~/assets/images/servicesHeroSmall.png'
import agencyHero from '~/assets/images/agencyHero.png'
import agencyHeroSmall from '~/assets/images/agencyHeroSmall.png'
import sparkHero from '~/assets/images/sparkHero.png'
import sparkHeroSmall from '~/assets/images/sparkHeroSmall.png'



export default {
  components: {
    Card
  },
  props: {},
  data () {
    return {
      headline: 'Select Work',
      work: [
        {
          image: agencyHero,
          imageSmall: agencyHeroSmall,
          headline: 'Sell More',
          text: 'We\'re a Shopify development agency helping Cannabis merchants thrive.',
          links: [
            {
              link: 'linkText',
              linkText: 'Learn more'
            },
            {
              link: 'linkText',
              linkText: 'Schedule a consultation'
            }
          ]
        },
        {
          image: sparkHero,
          imageSmall: sparkHeroSmall,
          headline: 'Spark Theme',
          text: 'Performance driven features, with epic design flexibility.',
          links: [
            {
              link: 'linkText',
              linkText: 'Learn more'
            },
            {
              link: 'linkText',
              linkText: 'Buy'
            }
          ]
        },
        {
          image: servicesHero,
          imageSmall: servicesHeroSmall,
          headline: 'Pro Theme Support',
          text: 'A dedicated team of Shopify experts ready to help.',
          links: [
            {
              link: 'linkText',
              linkText: 'Learn more'
            },
            {
              link: 'linkText',
              linkText: 'Buy'
            }
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
.container-work
  // @extend %container-main

.work
  // @extend %container-content

  &__headline
    @extend %text-headline

  &__list
    display: grid
    grid-gap: $unit*2
    +mq-s
      // grid-template-columns: repeat(2, 1fr)

  &__item

  &__card
    color: white
    height: 500px
    +mq-m
      height: unset
      min-height: 736px

</style>
