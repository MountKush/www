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
import headshot from '~/assets/images/headshot.png'


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
          image: mockupVessel,
          headline: 'Themes',
          text: 'Premium cannabis themes guarenteed to increase your user engagement.',
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
          image: feedMeSugarMockup,
          headline: 'Next Generation Dashboard',
          text: 'A 100+ exclusive advanced Shopify applications.',
          links: [
            {
              link: 'linkText',
              linkText: 'Learn more'
            },
            {
              link: 'linkText',
              linkText: 'Create account'
            }
          ]
        },
        {
          image: headshot,
          headline: 'About Us',
          text: 'A deep understanding of the Cannabis industry, and a data-driven approach makes us unique.',
          links: [
            {
              link: 'linkText',
              linkText: 'Learn more'
            },
            {
              link: 'linkText',
              linkText: 'Contact us'
            }
          ]
        },
        {
          image: chatCiaoMockup,
          headline: 'Our Clients',
          text: 'See what your peers have to say about us.',
          links: [
            {
              link: 'linkText',
              linkText: 'See more'
            }
          ]
        },
        {
          image: galleryMockup,
          headline: 'We Write',
          text: 'We share Shopify pro tips regularly, explore our blog to learn something new.',
          links: [
            {
              link: 'linkText',
              linkText: 'See more'
            }
          ]
        },
        {
          image: adventMockup,
          headline: 'Weekly Newsletter',
          text: 'Weekly newsletter of the latest trends in the Cannabis industry.',
          links: [
            {
              link: 'linkText',
              linkText: 'Subscribe'
            }
          ]
        }
        // {
        //   image: dashMockup,
        //   headline: 'Dash — Single Page Application',
        //   text: 'Minimalist chat utility that is secure and easy to use.',
        //   link: ''
        // },
        // {
        //   image: adventMockup,
        //   headline: 'Advent',
        //   text: 'Mobile-first, brand development digital agency.',
        //   link: 'https://advent-digital-agency.herokuapp.com/'
        // },
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
  margin: 0 $unit*2

.work
  // @extend %container-content

  &__headline
    @extend %text-headline

  &__list
    display: grid
    grid-gap: $unit*2
    +mq-s
      grid-template-columns: repeat(2, 1fr)

  &__item

  &__card

</style>
