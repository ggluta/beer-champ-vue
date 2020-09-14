<template>
  <div>
    <v-row class="justify-space-around" justify="center">
      <div>
        <v-select
          :items="this.getTitles"
          label="Beer name"
          :value="this.title"
          @input="this.setTitle"
          solo
        ></v-select>
        <v-chip
          v-if="this.titleSelected"
          class="ma-2"
          close
          @click:close="this.resetTitle">
          {{ this.title }}
        </v-chip>
      </div>
      <div>
        <v-select
          :items="this.getStyles"
          label="Beer style"
          :value="this.style"
          @input="this.setStyle"
          solo></v-select>
        <v-chip
          v-if="this.styleSelected"
          class="ma-2"
          close
          @click:close="this.resetStyle">
          {{ this.style }}
        </v-chip>
      </div>
      <div>
        <v-select
          :items="this.getColors"
          label="Beer color"
          :value="this.color"
          @input="this.setColor"
          solo></v-select>
        <v-chip
          v-if="this.colorSelected"
          class="ma-2"
          close
          @click:close="this.resetColor">
          {{ this.color }}
        </v-chip>
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'DropdownMenu',
  methods: {
    ...mapMutations('menu', ['setTitle', 'resetTitle', 'setStyle', 'resetStyle', 'setColor', 'resetColor']),
  },
  computed: {
    ...mapState('menu', ['title', 'style', 'color', 'titleSelected', 'styleSelected', 'colorSelected']),
    ...mapGetters('menu', ['getTitles', 'getColors', 'getStyles', 'getImages',
    ]),
  },
};
</script>
