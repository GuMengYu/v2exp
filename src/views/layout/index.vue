<template>
  <main class="v2exp_app">
    <left-nav
      :open="openNav"
      @left-nav-toggle="handleNav"
    />
    <setting-drawer
      :open="openSetting"
      @setting-close="handleSettingClose"
    />
    <v-app-bar
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      :elevate-on-scroll="false"
    >
      <v-app-bar-nav-icon @click.stop="openNav = !openNav" />
      <v-toolbar-title class="headline">
        <span class="logo" />
        <span class="logo-sub">&nbsp;•&nbsp;{{ $t('message.logo_text') }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="openSetting = !openSetting"
      >
        <v-icon>{{ mdiCogOutline }}</v-icon>
      </v-btn>
      <language-select />
      <v-btn
        icon
        to="../../about"
      >
        <v-icon>{{ mdiInformation }}</v-icon>
      </v-btn>
    </v-app-bar>
    <main
      class="content"
      :class="{open : openNav}"
    >
      <keep-alive>
        <transition>
          <router-view />
        </transition>
      </keep-alive>
    </main>
    <!-- <my-footer /> -->
  </main>
</template>

<script>
import languageSelect from './languageSelect';
import settingDrawer from './setting';
import leftNav from './left-nav';
import { mdiCogOutline, mdiInformation } from '@mdi/js';

export default {
  name: 'Layout',
  components: {languageSelect, settingDrawer, leftNav},
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
.v2exp_app {
  // background: white !important;
  .headline {
    display: flex;
    padding-left: 10px !important;
  }
  .content {
    display: flex;
    max-width: 1276px;
    margin: auto;
    padding: 64px 10px 32px;
  }

  .open {
    @media(max-width: 1736px) {
        margin-left: 256px;
    }
  }
  .search-wrap {
      padding: 0 10px;
      border-radius: 4px;
      max-width: 700px;
    }
  .font-weight-light {
    padding-left: 1em;
    font-size: 0.4em;
  }
  .logo {
    line-height: 24px;
    vertical-align: middle;
    &::before{
      content: url(../../assets/googlelogo_clr_74x24px.svg);
      display: inline-block;
      height: 24px;
      width: 74px;
    }
  }
  .logo-sub {
    font-size: 22px;
    line-height: 26px;
  }
}
</style>
