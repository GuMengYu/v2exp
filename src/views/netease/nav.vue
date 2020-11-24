<template>
  <v-navigation-drawer
    permanent
    fixed
    color="#d1d0d3"
    :clipped="$vuetify.breakpoint.lgAndUp"
  >
    <div class="searchArea ma-2">
      <v-input dense :hide-details="true" class="input-field" :class="{'actived': searchInputActived}" v-click-outside="onClickOutside">
        <input class="searchInput" placeholder="搜索" @click="searchInputActived = true"/>
      </v-input>
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
            class="mt-2 mb-2 font-weight-bold grey--text text--darken-2"
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
              <v-list-item-title>{{ tab.val }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiMotionPlay, mdiMusicNoteEighth, mdiPodcast, mdiPlaylistMusicOutline, mdiAlbum, mdiMicrophoneVariant, mdiHistory, mdiMusicNoteHalfDotted, mdiTrendingUp, mdiDevTo, mdiOpenInNew, mdiGithub } from '@mdi/js';

export default {
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
                { icon: mdiMotionPlay, val: 'now', name: '现在播放', color: '#42a5f5' },
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
          searchInputActived: false,
        };
  },
  computed: {
    activeTab: {
      get() {
        return 'now';
      },
      set(val) {
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
  methods: {
    onClickOutside() {
      this.searchInputActived = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-list-item {
  min-height: 32px !important;
}
.input-field {
  height: 32px;
  width: 100%;
  padding: 0 20px ;
  border-radius: 4px;
  border: 1px solid #bcbbbd;
  background-color: #d5d4d4;
  line-height: 32px;
  display: inline-block;
  font-size: 13px;
  transition: all .1s ease-in-out;
}
.actived {
  border: 2px solid #de7a7b;
}
.searchInput {
  max-height: 28px;
  width: 100%;
}
</style>
