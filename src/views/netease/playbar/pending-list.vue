<template>
  <v-navigation-drawer
    v-show="open"
    fixed
    permanent
    right
    width="300"
  >
    <v-toolbar
      tag="header"
      flat
      class="v-app-underline"
    >
      <div class="font-weight-medium text--primary">
        播放队列
      </div>
    </v-toolbar>
    <v-list
      dense
      two-line
    >
      <v-list-item-group
        v-model="currentSong"
        color="primary"
      >
        <song-bar
          v-for="(song, i) in pendingList"
          :key="i"
          :song="song"
        />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiClose } from '@mdi/js';
import { mapState } from 'vuex';
import SongBar from '../component/songbar';
export default {
  components: {SongBar},
  data(){
    return {
      mdiClose,
    };
  },
  computed: {
    ...mapState({
      open: state => state.music.showList === true,
      pendingList: state => state.music.pendingList,
    }),
    currentSong: {
      get() {
        return this.$store.state.music.song?.id;
      },
      set(val) {
        this.$store.dispatch('music/startNewMusic', val);
      },
    },
  },
  watch: {
  },
  created() {

  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.list-delete-button {
  min-width: 20px!important;
  padding: 0!important;
}
</style>
