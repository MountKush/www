<template lang='pug'>
div(
  id='hero'
  class='container-hero'
)

  section(class='hero')
    div(class='hero__body')
      h1(class='hero__headline') {{ headline }}
      p(class='hero__text')
        | We're
        span(class='hero__text--bold') &nbsp;Mount Kush
        | , a Shopify software agency helping Cannabis merchants succeed.
      a(
        v-scroll-to='"#contact"'
        class='hero__link'
      ) {{ link }}

    //- HeroComposite(class='hero__composite')
    video(
      :src='video'
      class='video'
      autoplay
      loop
      muted
      playsinline
    )
    //- img(
    //-   :src='image'
    //-   class='video'
    //- )
</template>


<script>
import Card from '~/components/Card.vue'
import HeroComposite from '~/components/HeroComposite.vue'
import atomEditor from '~/assets/images/cannabisHero2.jpg'
import video from '~/assets/video2.mp4'

export default {
  components: {
    HeroComposite,
    Card
  },
  props: {},
  data () {
    return {
      headline: 'Shopify Experts',
      // text: 'We\'re Mount Kush, a Shopify development agency specializing in growing Cannabis brands.',
      // text: 'We\'re Mount Kush, a Shopify development agency helping Cannabis brands succeed.',
      text: '',
      link: 'Get In Touch',
      image: atomEditor,
      video: video
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-hero
  @extend %container-main
  background: $white

.hero
  @extend %container-content
  position: relative
  // height: calc(100vh + 200px)
  display: grid
  grid-template-rows: 1fr auto
  grid-template-columns: 1fr
  +mq-s
    // grid-template-rows: 100vh auto
    // grid-template-columns: repeat(2, 1fr)

  &__body
    height: 100%
    max-height: 1000px
    position: relative
    z-index: 3
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding: $unit*20 0

  &__headline
    font-size: $fs2
    font-weight: 900
    +mq-s
      font-size: $fs3

  &__text
    @extend %text-copy
    max-width: $fs*28
    margin-top: $unit*2

    &--bold
      @extend %text-copy
      font-weight: $fw-bold

    &--highlight
      @extend %text-copy
      // color: #a28c14

  &__link
    @extend %card-container
    display: inline-block
    padding: $unit $unit*2
    margin-top: $unit*4
    background: $blue
    color: $white
    box-shadow: 0px $unit $unit*3 rgba(34, 34, 34, 0.25)

  &__composite
    grid-row: 2 / 3
    grid-column: 1 / 2

.video
  grid-row: 2 / 3
  grid-column: 1 / 2
  width: 100%
  max-height: 492px
  background: $grey
  object-fit: cover
  // margin: 120px 0 0 0
  box-shadow: 0px 8px 24px rgba(34, 34, 34, 0.5)
  border-radius: 6px
</style>
