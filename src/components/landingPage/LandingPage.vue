<template>
  <v-container id="landing-page" class="pa-0" fluid>
    <v-img src="../../assets/logo.png"/>
    <div class="my-5">
      <DropdownMenu></DropdownMenu>
      <Gallery></Gallery>
    </div>
  </v-container>
</template>

<script>
import gsap from 'gsap';
import Gallery from '../gallery/Gallery.vue';
import DropdownMenu from '../dropdownMenu/DropdownMenu.vue';

export default {
  name: 'LandingPage',
  components: { DropdownMenu, Gallery },
  mounted() {
    gsap.fromTo('#landing-page', { yPercent: 10, autoAlpha: 0 }, {
      yPercent: 0, autoAlpha: 1, duration: 4.5, ease: 'power4.out',
    });
  },
};
</script>
