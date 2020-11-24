<template>
  <v-navigation-drawer
    color="#d1d0d3"
    width="230"
  >
    <div class="searchArea ma-2">
      <i-input />
    </div>

    <v-list
      dense
      nav
    >
      <v-list-item-group
        v-model="activeTab"
      >
        <template v-for="o in sideBar">
          <v-list-item-subtitle
            :key="o.val"
            class="mt-2 mb-2 font-weight-bold grey--text text--darken-2 text-caption"
          >
            {{ o.name }}
          </v-list-item-subtitle>
          <v-list-item
            v-for="tab in o.child"
            :key="tab.val"
            link
            :value="tab.val"
          >
            <v-list-item-icon class="ml-2 mr-2 mt-1 mb-1 d-flex align-center">
              <v-icon
                color="#f9223b"
                size="18"
              >
                {{ tab.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ tab.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiMotionPlay, mdiMusicNoteEighth, mdiPodcast, mdiPlaylistMusicOutline, mdiAlbum, mdiMicrophoneVariant, mdiHistory, mdiMusicNoteHalfDotted } from '@mdi/js';
import IInput from './component/input';

export default {
  components: {IInput},
  props: {
    open: {
      type: Boolean,
      defalut: false,
    },
  },
  data: function(){
        return {
          sideBar: [
            {
              name: 'AppleMusic',
              val: 'apple',
              child: [
                { icon: mdiMotionPlay, val: 'now', name: '现在就听', color: '#42a5f5' },
                { icon: mdiMusicNoteEighth, val: 'views', name: '浏览', color: '#66bb6a'},
                { icon: mdiPodcast, val: 'broadcast', name: '广播', color: '#ffa726' },
              ],
            },
            {
              name: '资料库',
              val: 'database',
              child: [
                { icon: mdiHistory, val: 'recent', name: '最近添加', color: '#42a5f5' },
                { icon: mdiMicrophoneVariant, val: 'stars', name: '艺人', color: '#66bb6a'},
                { icon: mdiAlbum, val: 'album', name: '专辑', color: '#ffa726' },
                { icon: mdiMusicNoteHalfDotted, val: 'music', name: '歌曲', color: '#ffa726' },
              ],
            },
            {
              name: '播放列表',
              val: 'playlist',
              child: [
                { icon: mdiPlaylistMusicOutline, val: 'life', name: '划水', color: '#42a5f5' },
              ],
            },
          ],
        };
  },
  computed: {
    activeTab: {
      get() {
        return 'now';
      },
      set() {
        // this.$router.push({path: val === 'gank' ? `/${val}` : `/v2/tab/${val}`});
      },
    },
    drawer: {
      get() {
        return this.open;
      },
      set(val) {
        this.$emit('left-nav-toggle', val);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.v-navigation-drawer {
  top: 0 !important;
  max-height: 100% !important;
  .v-list-item {
    min-height: 32px !important;
  }
}
</style>
