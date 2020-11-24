<template>
  <v-card
    elevation="0"
    class="playbar"
  >
    <v-row
      justify="space-between"
      class="ml-0 mr-0"
    >
      <v-col lg="4">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="0"
            :class="{ 'on-hover': hover }"
          >
            <v-row class="pa-0 ma-0">
              <v-col lg="4" class="pa-0 ma-0">
                <v-img
                  src="../../../assets/girl.jpg"
                  height="40"
                  width="40"
                />
              </v-col>
              <v-col lg="8" class="pa-0 ma-0">
                <v-card-title>mindisa</v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
      <v-col
        lg="4"
        class="d-flex justify-center"
      >
        <v-btn icon>
          <v-icon>
            {{ icon.mdiSkipPreviousCircleOutline }}
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon x-large>
            {{ icon.mdiPlayCircleOutline }}
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>
            {{ icon.mdiSkipNextCircleOutline }}
          </v-icon>
        </v-btn>
      </v-col>
      <v-col lg="4">
      </v-col>
    </v-row>
    <v-slider
      height="10"
      dense
      hide-details
      max="100"
      min="0"
    >
    </v-slider>
  </v-card>
</template>

<script>
import {
  mdiHeartOutline,
  mdiSkipPreviousCircleOutline,
  mdiSkipNextCircleOutline,
  mdiPlayCircleOutline,
} from '@mdi/js';
import IInput from '../component/input';

export default {
  components: {IInput},
  data: () => ({
    icon: {
      mdiHeartOutline,
      mdiSkipPreviousCircleOutline,
      mdiSkipNextCircleOutline,
      mdiPlayCircleOutline,
    },
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
