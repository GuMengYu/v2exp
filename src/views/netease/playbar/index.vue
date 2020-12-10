<template>
  <header
    class="playing-bar"
  >
    <v-row
      justify="space-between"
      class="ml-0 mr-0 now-playing-bar"
    >
      <v-col
        lg="3"
        class="now-playing-bar__left pr-0"
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
        <div class="song-info">
          <a>
            <span
              class="song-name"
              :title="`${song.name} - ${$$(song, 'ar', '0', 'name')}`"
            >
              {{ song.name }} - {{ $$(song, 'ar', '0', 'name') }}
            </span>
          </a>
          <div class="song-time">
            <span>{{ playTime | formatDuring }}</span>/
            <span>{{ song.dt | formatDuring }}</span>
          </div>
        </div>
      </v-col>
      <v-col
        lg="6"
        class="now-playing-bar__center"
      >
        <div class="playing-control">
          <div class="playing-control-buttons">
            <v-btn
              icon
              text
              color="#f9223b"
            >
              <v-icon small>
                {{ icon.mdiHeart }}
              </v-icon>
            </v-btn>
            <v-btn
              icon
              text
              color="purple"
              @click="nextSong"
            >
              <v-icon small>
                {{ icon.mdiSkipPrevious }}
              </v-icon>
            </v-btn>
            <v-btn
              icon
              text
              color="deep-orange"
              @click="playPause"
            >
              <v-icon x-large>
                {{ playing ? icon.mdiPause : icon.mdiPlay }}
              </v-icon>
            </v-btn>
            <v-btn
              icon
              text
              color="green"
              @click="prevSong"
            >
              <v-icon small>
                {{ icon.mdiSkipNext }}
              </v-icon>
            </v-btn>
            <v-btn
              icon
              text
              color="blue"
              @click="playOrder"
            >
              <v-icon small>
                {{ icon.mdiRepeat }}
              </v-icon>
            </v-btn>
          </div>
          <div class="playing-control-slider">
            <v-slider
              v-model="playTime"
              height="10"
              dense
              hide-details
              :max="song.dt"
              min="0"
              color="#de7a7b"
              track-fill-color="#de7a7b"
              @start="handleChangeTimeStart"
              @change="handleSlideChange"
            />
          </div>
        </div>
      </v-col>
      <v-col
        lg="3"
        class="now-playing-bar__right"
      >
        <div class="ExtraControls">
          <v-btn
            icon
            text
            color="blue"
          >
            <v-icon small>
              {{ icon.mdiPlaylistMusic }}
            </v-icon>
          </v-btn>
          <div class="volume-bar d-flex align-center">
            <v-btn
              icon
              text
              color="blue"
              @click="toggleVolume"
            >
              <v-icon small>
                {{ volumeIconState }}
              </v-icon>
            </v-btn>
            <v-slider
              v-model="volume"
              dense
              hide-details
              :max="1"
              min="0"
              step="0.01"
              @change="volumeChange"
            />
          </div>
        </div>
      </v-col>
    </v-row>
    <audio
      ref="audio"
      :src="musicUrl"
      @play="onPlayAndPause"
      @pause="onPlayAndPause"
    >
      Your browser does not support the <code>audio</code> element.
    </audio>
  </header>
</template>

<script>
import {
  mdiHeart,
  mdiSkipPrevious,
  mdiSkipNext,
  mdiPlay,
  mdiPause,
  mdiRepeat,
  mdiDolby,
  mdiVolumeHigh,
  mdiPlaylistMusic,
  mdiVolumeMute,
  mdiVolumeMedium,
  mdiVolumeLow,
} from '@mdi/js';

import Audio from './audio';
let prevVolume = 1;
export default {
  data: () => ({
    icon: {
      mdiHeart,
      mdiSkipPrevious,
      mdiSkipNext,
      mdiPlay,
      mdiPause,
      mdiRepeat,
      mdiDolby,
      mdiVolumeHigh,
      mdiVolumeMedium,
      mdiVolumeLow,
      mdiVolumeMute,
      mdiPlaylistMusic,
    },
    player: {},
    interval: null,
    playTime: 0,
    volume: 1,
    prevVolume: 1,
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
    volumeIconState() {
      if (this.volume === 0) {
        return this.icon.mdiVolumeMute;
      } else if (this.volume > 0 && this.volume <= 0.4) {
        return this.icon.mdiVolumeLow;
      } else if (this.volume > 0.4 && this.volume <= 0.7) {
        return this.icon.mdiVolumeMedium;
      } else {
        return this.icon.mdiVolumeHigh;
      }
    },
  },
  watch: {
    playing(val) {
      this.$nextTick(() => {
        if (val) {
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
    toggleVolume() {
      if (this.volume === 0) {
        this.volume = prevVolume;
      } else {
        prevVolume = this.volume;
        this.volume = 0;
      }
    },
    playOrder() {

    },
    volumeChange(val) {
      console.log(val);
      this.player.element.volume = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.playing-bar {
  background: #E0DFDE;
  .now-playing-bar__left {
    display: flex;
    align-items: center;
    justify-content: start;
    .song-info {
      display: flex;
      flex-flow: column;
      margin: 0 14px;
    }
    .song-name {
      display: inline-block;
      max-width: 180px;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #6a737d;
    }
    .song-time {
      font-size: 12px;
      display: flex;
      justify-content: center;
    }
  }
  .now-playing-bar__center {
    .playing-control {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .playing-control-buttons {
        display: flex;
        width: 200px;
        justify-content: space-around;
        margin-bottom: 10px;
      }
      .playing-control-slider {
        width: 90%;
      }
    }
  }
  .now-playing-bar__right {
    display: flex;
    align-items: center;
    .ExtraControls {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .volume-bar {
        width: 130px;
      }
    }
  }

}
</style>
