<template>
  <v-sheet
    class="inetease-app d-flex"
    elevation="1"
  >
    <side-nav />
    <div class="content">
      <play-bar />
      <pending-list
        :open="true"
        class="pending-list"
      />
      <v-container tag="main">
        <div />
      </v-container>
    </div>
  </v-sheet>
</template>

<script>
import sideNav from './nav.vue';
import playBar from './playbar/index';
import { mdiCogOutline, mdiInformation } from '@mdi/js';
import PendingList from '@/views/netease/playbar/pending-list';

export default {
  name: 'Layout',
  components: {PendingList, sideNav, playBar},
  data: () => ({
    openNav: true,
    openSetting: false,
    mdiCogOutline,
    mdiInformation,
  }),
  methods: {
    handleNav(val) {
      this.openNav = val;
    },
    handleSettingClose() {
      this.openSetting = false;
    },
  },
};
</script>
<style lang="scss" scoped>
$playerHeight:700px;
$palyerWidth:1200px;
$playerbarHeight: 64px;
.inetease-app {
  width: $palyerWidth;
  height: $playerHeight;
  max-height: $playerHeight;
  margin: 0 auto;
  position: relative;
  transform: translate(0%);
  .pending-list {
    top: 80px!important;
    height: calc(100% - 80px) !important;
  }
  .content {
    width: calc(100% - 230px);
  }
  main {
    max-height: calc(#{$playerHeight} - #{$playerbarHeight});
    overflow-y: auto;
  }
}
</style>
