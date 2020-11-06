<template>
  <main class="v2exp_app">
    <left-nav :drawer="drawer" />
    <setting-drawer
      :open="openSetting"
      @setting-close="handleSettingClose"
    />
    <v-app-bar
      app
      color="white"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      :elevate-on-scroll="false"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
        <span class="logo" />
        <span class="logo-sub">&nbsp;•&nbsp;{{ $t('message.logo_text') }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="openSetting = !openSetting"
      >
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <language-select />
      <v-btn
        icon
        to="../../about"
      >
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-app-bar>
    <main
      class="content"
      :class="{open : drawer}"
    >
      <router-view />
    </main>
    <my-footer />
  </main>
</template>

<script>
import myFooter from './footer';
import languageSelect from './languageSelect';
import settingDrawer from './setting';
import leftNav from './left-nav';
export default {
  name: 'Layout',
  components: {myFooter, languageSelect, settingDrawer, leftNav},
  data: () => ({
    drawer: true,
    openSetting: false,
  }),
  methods: {
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
    color: #5f6368;
    font-size: 22px;
    line-height: 26px;
  }
}
</style>
