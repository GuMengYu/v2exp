<template>
  <v-sheet
    tag="header"
    class="playing-bar"
    elevation="2"
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
          <v-card
            class="playing-cover-card"
            :img="$$(song, 'al', 'picUrl')"
            max-height="50"
            max-width="50"
            min-width="50"
            min-height="50"
          >
            <v-fade-transition>
              <v-overlay
                :value="hover"
                absolute
              >
                <v-card-actions>
                  <v-btn icon @click="showMusic = !showMusic">
                    <v-icon color="pink">
                      {{ icon.mdiArrowExpand }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-overlay>
            </v-fade-transition>
          </v-card>
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
        </div>
      </v-col>
      <v-col
        lg="6"
        class="now-playing-bar__center pb-0"
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
              @click="playPrev"
            >
              <v-icon small>
                {{ icon.mdiSkipPrevious }}
              </v-icon>
            </v-btn>
            <v-btn
              icon
              text
              color="blue"
              @click="playPause"
            >
              <v-icon x-large>
                {{ playing ? icon.mdiPauseCircle : icon.mdiPlayCircle }}
              </v-icon>
            </v-btn>
            <v-btn
              icon
              text
              color="green"
              @click="playNext"
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
                {{ orderIconState }}
              </v-icon>
            </v-btn>
          </div>
          <div class="playing-control-slider">
            <div class="playing-time mr-1">
              <span>{{ playTime | formatDuring }}</span>
            </div>
            <v-slider
              v-model="playTime"
              dense
              hide-details
              :max="song.dt"
              min="0"
              color="#de7a7b"
              track-fill-color="#de7a7b"
              @start="handleChangeTimeStart"
              @change="handleSlideChange"
            />
            <div class="playing-time ml-1">
              <span>{{ song.dt | formatDuring }}</span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        lg="3"
        class="now-playing-bar__right"
      >
        <div class="ExtraControls">
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
            />
          </div>
          <v-btn
            icon
            text
            color="blue"
            @click="toggleWaitList"
          >
            <v-icon small>
              {{ icon.mdiPlaylistMusic }}
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-expand-transition>
      <v-sheet v-show="showMusic" class="musicStation">
        <div>
          expand content
        </div>
      </v-sheet>
    </v-expand-transition>
    <audio
      ref="audio"
      :src="musicUrl"
      @ended="playNext"
    >
      Your browser does not support the <code>audio</code> element.
    </audio>
  </v-sheet>
</template>

<script>
import { mapState } from 'vuex';
import {
  mdiHeart,
  mdiSkipPrevious,
  mdiSkipNext,
  mdiPlayCircle,
  mdiPauseCircle,
  mdiRepeat,
  mdiVolumeHigh,
  mdiPlaylistMusic,
  mdiVolumeMute,
  mdiVolumeMedium,
  mdiVolumeLow,
  mdiReorderHorizontal,
  mdiRepeatOnce,
  mdiMusicNoteOffOutline,
  mdiArrowExpand,
} from '@mdi/js';

import Audio from './audio';
let prevVolume = 1;
const PLAY_MODE = {
  ORDER: 0,
  CYCLE: 1,
  SINGLE_CYCLE: 2,
  RANDOM: 3,
};
export default {
  data: () => ({
    icon: {
      mdiHeart,
      mdiSkipPrevious,
      mdiSkipNext,
      mdiPlayCircle,
      mdiPauseCircle,
      mdiPlaylistMusic,
      mdiArrowExpand,
    },
    player: {},
    interval: null,
    playTime: 0,
    volume: 1,
    prevVolume: 1,
    playMode: PLAY_MODE.ORDER,
    showMusic: false,
  }),
  computed: {
    ...mapState({
      song: state => state.music.song,
      musicUrl: state => state.music.musicUrl,
      playing: state => state.music.playing,
      pendingList: state => state.music.pendingList,
      currentTime: state => state.music.currentTime,
      showList: state => state.music.showList,
    }),
    songIndex() {
      return this.pendingList.findIndex(song => song.id === this.song.id);
    },
    next() {
      return this.pendingList[(this.songIndex + 1) === this.pendingList.length ? 0 : this.songIndex + 1];
    },
    prev() {
      return this.pendingList[this.songIndex  === 0 ? (this.pendingList.length - 1) : this.songIndex - 1];
    },
    volumeIconState() {
      if (this.volume === 0) {
        return mdiVolumeMute;
      } else if (this.volume > 0 && this.volume <= 0.4) {
        return mdiVolumeLow;
      } else if (this.volume > 0.4 && this.volume <= 0.7) {
        return mdiVolumeMedium;
      } else {
        return mdiVolumeHigh;
      }
    },
    orderIconState() {
      return ({
        [PLAY_MODE.ORDER] : mdiReorderHorizontal,
        [PLAY_MODE.CYCLE] : mdiRepeat,
        [PLAY_MODE.SINGLE_CYCLE] : mdiRepeatOnce,
        [PLAY_MODE.RANDOM] : mdiMusicNoteOffOutline,
      })[this.playMode];
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
    volume(val) {
      this.player.element.volume = val;
    },
    song() {
      this.initMediaSession();
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
    playNext() {
      let id = this.next.id;
      const len = this.pendingList.length;
      if (this.playMode === PLAY_MODE.RANDOM) {
        id = this.pendingList[Math.floor(Math.random() * len)]?.id;
      } else if (this.playMode === PLAY_MODE.SINGLE_CYCLE) {
        this.rePlay();
      } else if (this.playMode === PLAY_MODE.ORDER && this.songIndex === len - 1) {
        this.$store.commit('music/UPDATE_PLAYER', {currentTime: 0, playing: false});
      } else {
        this.$store.dispatch('music/startPlayMusic', id);
      }
    },
    playPrev() {
      this.$store.dispatch('music/startPlayMusic', this.prev.id);
    },
    rePlay() {
      this.handleSlideChange(0);
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
      this.playMode < 3 ? this.playMode++ : (this.playMode = 0);
    },
    toggleWaitList() {
      this.$store.commit('music/UPDATE_WAIT_LIST', !this.showList);
    },
    initMediaSession() {
      // https://developers.google.com/web/updates/2017/02/media-session
      if ('mediaSession' in navigator) {
        // eslint-disable-next-line no-undef
        navigator.mediaSession.metadata = new MediaMetadata({
          title: this.song.name,
          artist: this.song.ar?.[0]?.name,
          album: 'Whenever You Need Somebody',
          artwork: [
            { src: this.song.al?.picUrl, sizes: '512x512', type: 'image/png' },
          ],
        });
        [
          ['play', this.playPause],
          ['pause', this.playPause],
          ['previoustrack', this.playPrev],
          ['nexttrack', this.playNext],
        ].map(([name, fn]) => navigator.mediaSession.setActionHandler(name, fn));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/common';
.playing-bar {
  background: #E0DFDE;
  .now-playing-bar__left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    .playing-cover-card {
      @include bg_blur;
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
      }
      .playing-control-slider {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        .playing-time {
          font-size: 14px;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
          -webkit-font-smoothing: antialiased;
        }
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
  .musicStation {
    position: absolute;
    top: 80px;
    height: 100%;
    width: 100%;
    z-index: 999;
  }
}
</style>
