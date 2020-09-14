<template>
  <v-app>
    <v-main class="app">
      <Splashscreen/>
      <LandingPage></LandingPage>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import LandingPage from './components/landingPage/LandingPage.vue';
import beerChamp from './service/beers';
import Splashscreen from './components/splashscreen/Splashscreen.vue';

export default {
  name: 'App',

  components: {
    Splashscreen,
    LandingPage,
  },
  methods: {
    ...mapActions('menu', ['initialize']),
  },

  async mounted() {
    await beerChamp.fetchData((err, data) => {
      this.initialize(data);
    });
  },
};
</script>

<style scoped>
  .app {
    background: rgb(210,173,22);
  }
</style>
