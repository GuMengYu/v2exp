<template>
  <v-hover v-slot="{ hover }">
    <v-sheet
      max-width="200"
      class="music-card"
    >
      <v-card
        :img="data.picUrl"
        min-width="200"
        min-height="200"
        max-width="200"
        max-height="200"
        rounded
        class="pa-2 d-flex align-end justify-end"
      >
        <v-fade-transition>
          <v-overlay
            :value="hover"
            absolute
          >
            <v-card-actions>
              <v-btn
                elevation="0"
                fab
                color="pink"
                class="play-fab"
                width="40"
                height="40"
                @click="play"
              >
                <v-icon
                  large
                  color="white"
                >
                  {{ mdiPlay }}
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-overlay>
        </v-fade-transition>
      </v-card>
      <a>
        <span class="h-2x mt-2 mb-2 black--text text-caption">{{ data.name }}</span>
        <span class="h-1x grey--text text-caption">{{ data.copywriter }}</span>
      </a>
    </v-sheet>
  </v-hover>
</template>

<script>
import {mdiPlay} from '@mdi/js';
export default {
  name: 'MusicCard',
  props: {
    data: {
      type: Object,
      default: () =>({
        'id': 3117618863,
        'type': 0,
        'name': '所以你并没有坚定选择过我.',
        'copywriter': '热门推荐',
        'picUrl': 'https://p1.music.126.net/6mnrODz-pMVBq8UReZqfLA==/109951165533152791.jpg',
        'canDislike': true,
        'trackNumberUpdateTime': 1607695860268,
        'playCount': 2202719,
        'trackCount': 463,
        'highQuality': false,
        'alg': 'cityLevel_unknow',
      }),
    },
  },
  data() {
    return {
      mdiPlay,
    };
  },
  computed: {

  },
  methods: {
    play() {
      this.$emit('play', this.data?.id);
    },
  },

};
</script>

<style lang="scss" scoped>
.music-card {
  ::v-deep .v-overlay__content {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
}
</style>
