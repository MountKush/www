<template lang='pug'>
main(class='container-index')
  div(class='logo-container')
    div(class='logo')
      div
      h1 Mount Kush
  Hero
  Services
  Work
  Testimonial
  //- About
  Contact
</template>


<script>
import Hero from '~/components/Hero.vue'
import Services from '~/components/Services.vue'
import Work from '~/components/Work.vue'
import Testimonial from '~/components/Testimonial.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'


export default {
  components: {
    Hero,
    Services,
    Work,
    Testimonial,
    About,
    Contact
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.container-index


.logo-container
  @extend %container-content
  padding: $unit*3 0
  display: none



.logo
  display: inline-flex
  background: $black
  color: #d0a443
  padding: $unit $unit*2
  min-height: $unit*5
  align-items: center


  & h1
    color: currentColor
    text-transform: uppercase
    font-size: 14px
    font-weight: bold

</style>
