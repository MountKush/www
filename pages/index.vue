<template lang='pug'>
main(class='container-index')
  PricingNew
  //- Hero
  //- Services
  Work

  //- About
  //- Pricing
  //- Testimonial
  //- Contact
</template>


<script>
import Hero from '~/components/Hero.vue'
import PricingNew from '~/components/PricingNew.vue'
import Services from '~/components/Services.vue'
import Work from '~/components/Work.vue'
import Testimonial from '~/components/Testimonial.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import Pricing from '~/components/Pricing.vue'


export default {
  components: {
    Hero,
    Services,
    Work,
    Testimonial,
    About,
    Contact,
    Pricing,
    PricingNew
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.container-index
  display: grid
  grid-gap: $unit*2
  padding-top: $unit*6

</style>
