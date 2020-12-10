<template>
  <header
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
          @click="playPause"
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
            :src="$$(song, 'al', 'picUrl')"
            height="50"
            width="50"
            max-height="50"
            max-width="50"
            :class="{ 'on-hover': hover }"
          />
        </v-hover>
        <div class="d-flex flex-column text-caption ml-2 justify-center">
          <span class="song-name">{{ song.name }} - {{ $$(song, 'ar', '0', 'name') }}</span>
          <div>
            <span class="song-time">{{ playTime | formatDuring }}</span>/<span class="song-time">{{ song.dt | formatDuring }}</span>
          </div>
        </div>
      </v-col>

      <v-col
        lg="4"
        class="pa-2"
      >
        <audio
          ref="audio"
          :src="musicUrl"
          @play="onPlayAndPause"
          @pause="onPlayAndPause"
        >
          Your browser does not support the <code>audio</code> element.
        </audio>
      </v-col>
    </v-row>
    <v-slider
      v-model="playTime"
      height="10"
      dense
      hide-details
      :max="song.dt"
      min="0"
      track-color="grey lighten-2"
      color="#de7a7b"
      track-fill-color="#de7a7b"
      @start="handleChangeTimeStart"
      @change="handleSlideChange"
    />
  </header>
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
    interval: null,
    playTime: 0,
  }),
  computed: {
    musicUrl() {
      return this.$store.state.music.resourceUrl;
    },
    song() {
      return this.$store.state.music.song;
    },
    playing() {
      return this.$store.state.music.playing;
    },
    currentTime() {
      return this.$store.state.music.currentTime;
    },
  },
  watch: {
    playing(val) {
      this.$nextTick(() => {
        if(val) {
          this.setPlayTime();
          this.player.play();
        } else {
          clearInterval(this.interval);
          this.player.pause();
        }
      });
    },
    currentTime(val) {
      this.playTime = val;
    },
  },
  mounted() {
    this.player = new Audio(this.$refs.audio);
    // todo: delete me for test
    this.$store.dispatch('music/startPlayMusic', '288003');
  },
  methods: {
    playPause() {
      this.$store.commit('music/UPDATE_PLAYER', {playing: !this.playing});
    },
    // 外部控制
    onPlayAndPause(e) {
      this.$store.commit('music/UPDATE_PLAYER', {playing: e?.type === 'play'});
    },
    nextSong() {
      this.$store.dispatch('music/startPlayMusic');
    },
    prevSong() {
      this.$store.dispatch('music/startPlayMusic');
    },
    setPlayTime() {
      this.interval = setInterval(() => {
        this.$store.commit('music/UPDATE_PLAYER', {currentTime: this.player.element.currentTime * 1000});
      }, 500);
    },
    // 停止进度条
    stopPlayTime() {
      clearInterval(this.interval);
    },
    // 拉动进度条的时候，停止时间计时
    handleChangeTimeStart() {
      console.log('slider move start');
      this.stopPlayTime();
    },
    handleSlideChange(v) {
      console.log('slider change end');
      this.player.element.currentTime = v / 1000;
      this.$store.commit('music/UPDATE_PLAYER', {currentTime: v});
      this.playing && this.setPlayTime();
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
