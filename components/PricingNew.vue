<template lang='pug'>
div(
  id='work'
  class='container-work'
)

  section(class='work')
    //- h2(class='work__headline') {{ headline }}
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
import dashMockup from '~/assets/images/dashMockup.png'
import feedMeSugarMockup from '~/assets/images/feedMeSugarMockup.png'
import chatCiaoMockup from '~/assets/images/chatCiaoMockup.png'
import kushMockup from '~/assets/images/kushMockup.png'
import adventMockup from '~/assets/images/adventMockup.png'
import galleryMockup from '~/assets/images/galleryMockup.png'
import mockupVessel from '~/assets/images/mockupVessel.jpg'


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
          image: kushMockup,
          headline: 'Shopify Experts',
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
          image: adventMockup,
          headline: 'Spark Theme',
          text: 'Blazing-fast professional Shopify theme for the growing Cannabis online store.',
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
          image: chatCiaoMockup,
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

</style>
