<template>
  <main class="v2exp_app">
    <v-navigation-drawer
      v-model="drawer"
      app
      :floating="true"
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
      <v-list
        dense
        nav
        shaped
      >
        <v-list-item-group
          v-model="activeTab"
          color="primary"
        >
          <v-list-item
            v-for="item in tabs"
            :key="item.title"
            link
            :value="item.val"
          >
            <v-list-item-icon>
              <v-icon
                :color="item.color"
                v-text="item.icon"
              />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="$t(`main.nav.${item.val}`)" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider class="mt-2 mb-2" />
        <v-list-item
          link
          href="https://github.com/GuMengYu/v2exp"
          target="_blank"
        >
          <v-list-item-icon><v-icon>mdi-github</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              GitHub <v-icon :size="12">
                mdi-open-in-new
              </v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      :elevate-on-scroll="false"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
        <span class="logo" />
        <span class="logo-sub">&nbsp;•&nbsp;{{ $t('message.logo_text') }}</span>
      </v-toolbar-title>
      <v-spacer />
      <!-- <v-text-field placeholder="请输入" solo rounded dense :hide-details="true" prepend-inner-icon="mdi-magnify"/> -->

      <language-select />
      <v-btn icon to="../../about">
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

export default {
    name: 'Layout',
    components: {myFooter, languageSelect},
    data: function(){
      return {
        tabs: [
          { icon: 'mdi-laptop', val: 'tech', color: '#42a5f5' },
          { icon: 'mdi-thought-bubble', val: 'creative', color: '#66bb6a'},
          { icon: 'mdi-mushroom', val: 'play', color: '#ffa726' },
          { icon: 'mdi-apple', val: 'apple', color: '#000000' },
          { icon: 'mdi-briefcase', val: 'jobs', color: '#9c27b0' },
          { icon: 'mdi-bank-transfer', val: 'deals', color: '#4db6ac' },
          { icon: 'mdi-city', val: 'city', color: '#90a4ae' },
          { icon: 'mdi-help-box', val: 'qna', color: '#03a9f4' },
          { icon: 'mdi-trending-up', val: 'hot', color: '#e53935' },
          { icon: 'mdi-dev-to', val: 'gank', color: '#f95e74' },
          ],
        drawer: true,
      };
    },
    computed: {
      activeTab: {
        get() {
          return this.$route?.params?.id ?? 'hot';
        },
        set(val) {
          this.$router.push({path: val === 'gank' ? `/${val}` : `/v2/tab/${val}`});
        },
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
