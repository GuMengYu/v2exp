<template>
  <div class="inetease-app d-flex">
    <side-nav />
    <div class="content">
      <play-bar />
      <v-container tag="main">
        <div></div>
      </v-container>
    </div>
      <!-- <my-footer /> -->
  </div>
</template>

<script>
import sideNav from './nav.vue';
import playBar from './playbar/index';
import { mdiCogOutline, mdiInformation } from '@mdi/js';

export default {
  name: 'Layout',
  components: {sideNav, playBar},
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
  mounted() {
    console.log(this.$vuetify.application);
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
  .content {
    width: calc(100% - 230px);
  }
  main {
    max-height: calc(#{$playerHeight} - #{$playerbarHeight});
    overflow-y: auto;
  }
}
</style>
