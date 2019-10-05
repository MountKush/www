<template lang='pug'>
div(
  :class='{ active: isOpen }'
  class='email-collection'
)
  a(
    @click='close'
    class='email-collection__close'
  )
    IconChevron(class='email-collection__close-svg')
    span Close

  div(class='email-collection__wrapper')
    div
      h1(class='email-collection__title') Let's Chat
      p(class='email-collection__copy') Enter you're email to schedule a consultation.

    form(
      @submit.prevent='newsletterSubscribe'
      class='email-collection__form'
    )
      input(
        v-model.trim='email'
        v-validate='"required|email"'
        name='email'
        type='email'
        placeholder='example@email.com'
        class='email-collection__input'
      )
      input(
        :class='{ active: email }'
        class='email-collection__submit'
        type='submit'
        value='Send'
      )
</template>


<script>
import { firestore, auth } from '~/plugins/firebase'
import { mapState, mapMutations } from 'vuex'
import IconChevron from '~/assets/svg/icon-chevron.svg'

export default {
  components: {
    IconChevron
  },
  props: {},
  data () {
    return {
      email: ''
    }
  },
  computed: {
    ...mapState({
      isOpen: state => state.app.emailCollection.isOpen
    })
  },
  methods: {
    async newsletterSubscribe () {
      try {
        const { uid } = auth().currentUser

        const isValid = await this.$validator.validateAll()
        if (!isValid || !uid) return

        const dbRef = firestore.collection('queueNewLead')
        const data = { email: this.email }
        await dbRef.add(data)
        await this.handleSuccess()
        return
      }
      catch (e) {
        console.error(e)
      }
    },


    handleSuccess () {
      this.email = 'Thanks, got it! 🙌'
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
          this.email = ''
        }, 3000)
      })
    },


    ...mapMutations({
      close: 'app/CLOSE_EMAIL_COLLECTION'
    })
  }
}
</script>


<style lang='sass' scoped>
.email-collection
  position: fixed
  background: $white
  z-index: 999
  width: 100%
  max-width: 420px
  left: 100%
  bottom: 0
  top: 0
  display: grid
  box-shadow: 0px 0px 16px rgba(34, 34, 34, 0.1)
  transition: transform 250ms
  grid-template-rows: auto 1fr
  padding: $unit*2 $unit*2

  &.active
    transform: translateX(-100%)

  &__close
    @extend %flex--row-center
    width: min-content
    color: $blue

    &-svg
      width: $unit*2
      transform: rotate(-90deg)
      margin-right: $unit*0.5
      fill: currentColor

    & span
      color: currentColor


  &__wrapper
    margin: $unit*15 0

  &__title
    @extend %text-headline
    text-align: center
    margin: $unit*2 0

  &__copy
    @extend %text-copy
    text-align: center

  &__form
    align-self: center
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    border-radius: $unit*.75
    margin-top: $unit*5
    justify-items: center
    grid-template-columns: 1fr auto

  &__input
    width: 100%
    padding: 0 $unit
    background: transparent
    border-bottom: 1px solid $dark
    border-radius: unset

  &__submit
    width: min-content
    padding: $unit $unit*2
    background: $grey
    color: $blue
    border-radius: $unit*.75
    transition: box-shadow 250ms ease

    &.active
      background: $blue
      color: $white
      box-shadow: 0px $unit $unit*3 rgba(34, 34, 34, 0.25)
      cursor: pointer

</style>
