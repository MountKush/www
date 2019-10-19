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
import appHero from '~/assets/images/appHero.png'
import appHeroSmall from '~/assets/images/appHeroSmall.png'
import clientsHero from '~/assets/images/clientsHero.png'
import clientsHeroSmall from '~/assets/images/clientsHeroSmall.png'
import newsletterHero from '~/assets/images/newsletterHero.png'
import newsletterHeroSmall from '~/assets/images/newsletterHeroSmall.png'
import blogHero from '~/assets/images/blogHero.png'
import blogHeroSmall from '~/assets/images/blogHeroSmall.png'
import themesHero from '~/assets/images/themesHero.png'
import themesHeroSmall from '~/assets/images/themesHeroSmall.png'
import aboutHero from '~/assets/images/aboutHero.png'
import aboutHeroSmall from '~/assets/images/aboutHeroSmall.png'


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
          image: themesHero,
          imageSmall: themesHeroSmall,
          headline: 'Themes',
          text: 'Build your brand and increase sales with a premium ecommerce experience.',
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
          image: appHero,
          imageSmall: appHeroSmall,
          headline: 'Apps',
          text: 'Add extra functionality to improve your marketing, conversions, and more.',
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
          image: aboutHero,
          imageSmall: aboutHeroSmall,
          headline: 'Agency',
          text: 'Ready for Shopify Plus? Let our agency team build the perfect solution.',
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
          image: clientsHero,
          imageSmall: clientsHeroSmall,
          headline: 'Clients',
          text: 'See what your peers have to say about us.',
          links: [
            {
              link: 'linkText',
              linkText: 'See more'
            }
          ]
        },
        {
          image: blogHero,
          imageSmall: blogHeroSmall,
          headline: 'Explore',
          text: 'Shopify news, and eCommerce advice to help you increase sales.',
          links: [
            {
              link: 'linkText',
              linkText: 'Read blog'
            }
          ]
        },
        {
          image: newsletterHero,
          imageSmall: newsletterHeroSmall,
          headline: 'Newsletter',
          text: 'Grow your business with insight from Shopify experts.',
          links: [
            {
              link: 'linkText',
              linkText: 'Subscribe'
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
  margin: 0 $unit*2

.work
  // @extend %container-content

  &__headline
    @extend %text-headline

  &__list
    display: grid
    grid-gap: $unit*2
    +mq-m
      grid-template-columns: repeat(2, 1fr)

  &__item

  &__card
    height: 500px
    +mq-m
      height: unset
      min-height: 580px

</style>
