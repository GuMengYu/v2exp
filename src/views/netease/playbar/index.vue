<template>
  <v-card
    elevation="0"
    class="playbar"
  >
    <v-row
      justify="space-between"
      class="ml-0 mr-0"
    >
      <v-col
        lg="2"
        class="d-flex justify-space-around pa-2 align-center"
      >
        <v-btn
          icon
          @click="nextSong"
        >
          <v-icon>
            {{ icon.mdiSkipPreviousCircleOutline }}
          </v-icon>
        </v-btn>
        <v-btn
          icon
          @click="playing = !playing"
        >
          <v-icon x-large>
            {{ playing ? icon.mdiPauseCircleOutline : icon.mdiPlayCircleOutline }}
          </v-icon>
        </v-btn>
        <v-btn
          icon
          @click="prevSong"
        >
          <v-icon>
            {{ icon.mdiSkipNextCircleOutline }}
          </v-icon>
        </v-btn>
      </v-col>
      <v-col
        lg="6"
        class="d-flex pa-2 align-center"
      >
        <v-hover v-slot="{ hover }">
          <v-img
            src="../../../assets/girl.jpg"
            height="50"
            width="50"
            max-height="50"
            max-width="50"
            :class="{ 'on-hover': hover }"
          />
        </v-hover>
        <div class="d-flex flex-column text-caption ml-2 justify-center">
          <span class="song-name">{{ audio.name }}</span>
          <div>
            <span class="song-time">{{ currentTime * 1000 | formatDuring }}</span>/<span class="song-time">{{ dt * 1000 | formatDuring }}</span>
          </div>
        </div>
      </v-col>

      <v-col lg="4" class="pa-2">
        <audio
          ref="audio"
          src="@assets/时光.mp3"
          @play="onPlayAndPause"
          @pause="onPlayAndPause"
        >
          Your browser does not support the <code>audio</code> element.
        </audio>
      </v-col>
    </v-row>
    <v-slider
      v-model="currentTime"
      height="10"
      dense
      hide-details
      :max="dt"
      min="0"
      track-color="grey lighten-2"
      color="#de7a7b"
      track-fill-color="#de7a7b"
      @start="handleChangeTimeStart"
      @click="handleChangeTimeEnd"
    />
  </v-card>
</template>

<script>
import {
  mdiHeartOutline,
  mdiSkipPreviousCircleOutline,
  mdiSkipNextCircleOutline,
  mdiPlayCircleOutline,
  mdiPauseCircleOutline,
} from '@mdi/js';
import Audio from './audio';

export default {
  data: () => ({
    icon: {
      mdiHeartOutline,
      mdiSkipPreviousCircleOutline,
      mdiSkipNextCircleOutline,
      mdiPlayCircleOutline,
      mdiPauseCircleOutline,
    },
    player: {},
    audio: {
      src: '',
      name: '时光 - 啊',
    },
    playing: false,
    interval: null,
    currentTime: 0,
    dt: 245,
  }),
  watch: {
    playing(val) {
      if(val) {
         this.setCurrentTime();
         this.player.play();
      } else {
        clearInterval(this.interval);
        this.player.pause();
      }
    },
  },
  mounted() {
    this.player = new Audio(this.$refs.audio);
  },
  methods: {
    onPlayAndPause(e) {
      this.playing = e?.type === 'play';
    },
    nextSong() {

    },
    prevSong() {

    },
    setCurrentTime() {
      this.interval = setInterval(() => {
        this.currentTime = this.player.element.currentTime;
      }, 100);
    },
    handleChangeTimeEnd() {
      this.setCurrentTime();
      this.player.element.currentTime = this.currentTime;
    },
    handleChangeTimeStart(e) {
      console.log(e);
      clearInterval(this.interval);
    },
  },
};
</script>

<style lang="scss" scoped>
.song-name {
  text-align: center;
}
.song-time {
  display: inline-block;
  width: 38px;
  text-align: center;
}
</style>
