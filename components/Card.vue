<template lang='pug'>
article(class='card')
  a(
    target='_blank'
    class='card__link'
    @click='trackEvent'
  )

  CardCopy(
    class='card__body'
    :headline='cardData.headline'
    :text='cardData.text'
    :links='cardData.links'
  )

  //- display
  div(
    v-if='card.image'
    class='card__display'
  )
    figure(
      v-lazy:background-image='card.image'
      class='card__image'
    )
    figure(
      v-if='card.imageSmall'
      v-lazy:background-image='card.imageSmall'
      class='card__image card__image--small'
    )
</template>


<script>
import CardCopy from '~/components/CardCopy.vue'

export default {
  components: {
    CardCopy
  },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    card () {
      return {
        image: this.cardData.image ? this.cardData.image : '',
        imageSmall: this.cardData.imageSmall ? this.cardData.imageSmall : ''
      }
    }
  },
  methods: {
    trackEvent () {
      const data = {
        eventCategory: 'Hero Tile',
        eventAction: 'click',
        eventLabel: this.cardData.headline
      }
      this.$ga.event(data)
      console.log('track event: ', data)
    }
  }
}
</script>


<style lang='sass' scoped>
.card
  display: grid
  grid-template-rows: auto 1fr
  grid-template-columns: 1fr
  // height: 100%
  // min-height: 520px
  background: $grey

  &__link
    grid-row: 1 / 3
    grid-column: 1 / 2
    position: relative
    z-index: 3

  &__body
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding: $unit*10 0
    position: relative
    z-index: 4

  &__display
    grid-row: 1 / 3
    grid-column: 1 / 2
    position: relative
    z-index: 1
    display: flex

  &__image
    display: none
    +mq-m
      display: block
    // max-width: 520px
    // max-height: 520px
    width: 100%
    background-repeat: no-repeat
    background-position: center bottom
    position: absolute
    top: 0
    height: 100%

    &--small
      display: block
      background-size: 876px 600px
      +mq-s
        background-position: 50% 80%
        background-size: 1076px 700px
      +mq-m
        display: none


// override(s)
.no-shadow

  & .card__image
    box-shadow: unset


</style>
