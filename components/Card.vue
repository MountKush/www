<template lang='pug'>
article(class='card')
  a(
    target='_blank'
    class='card__link'
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
    img(
      v-lazy='card.image'
      class='card__image'
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
        image: this.cardData.image ? this.cardData.image : ''
      }
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.card
  display: grid
  grid-template-rows: auto 1fr
  grid-template-columns: 1fr
  height: 100%
  min-height: 520px
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
    grid-row: 2 / 3
    grid-column: 1 / 2
    position: relative
    z-index: 1
    display: flex
    justify-content: center
    align-items: flex-end

  &__image
    max-width: 520px
    max-height: 520px

// override(s)
.no-shadow

  & .card__image
    box-shadow: unset


</style>
