<template>
  <v-container id="gallery" fluid>
    <v-layout row wrap>
      <v-flex lg3 md4 sm6 xs12 v-for="beer in this.filteredAppData" :key="beer.title">
        <v-card class="ma-5 pa-5">
          <v-img contain height="300px" :src="getBeerImage(beer)">
          </v-img>
          <v-card-title class="text-md-h5 text-break text-ellipsis">
            {{ getBeerTitle(beer) }}
          </v-card-title>
          <v-card-title>{{ getBeerDisplayInformation(beer) }}</v-card-title>
          <v-card-text class="text--primary">
            <div class="text-md-h6">{{ getBeerStyle(beer) }}</div>
            <div class="text-md-body-1">
              Alcohol percentage: {{ getBeerAlcoholPercentage(beer) }}
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Gallery',
  methods: {
    getBeerImage(beer) {
      return beer.images[0].image;
    },
    getBeerDisplayInformation(beer) {
      return beer.displayInformationPrice.price;
    },
    getBeerTitle(beer) {
      return beer.title;
    },
    getBeerStyle(beer) {
      return beer.style;
    },
    getBeerAlcoholPercentage(beer) {
      return beer.alcoholPercentage;
    },
  },
  computed: {
    ...mapState('menu', ['filteredAppData']),
  },
};
</script>

<style scoped>
  .text-ellipsis {
    text-overflow: ellipsis;

    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
  }
</style>
