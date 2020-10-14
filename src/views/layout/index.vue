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
        <v-list-item-group color="primary">
          <v-list-item
            v-for="item in tabs"
            :key="item.title"
            link
            @click="toSub(item.val)"
          >
            <v-list-item-icon>
              <v-icon
                :color="item.color"
                v-text="item.icon"
              />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider />
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
        <span class="logo-sub">&nbsp;•&nbsp;划水</span>
      </v-toolbar-title>
      <v-spacer />
      <!-- <v-text-field placeholder="请输入" solo rounded dense :hide-details="true" prepend-inner-icon="mdi-magnify"/> -->
      
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            text  
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>
              mdi-translate
            </v-icon>
            {{ cLocale }}
            <v-icon right>
              mdi-menu-down
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </template>
        <v-list 
          nav 
          dense
        >
          <v-list-item
            v-for="o in locales"
            :key="o.val"
            @click="changeLocale(o.val)"
          >
            <v-list-item-title v-text="o.name" />
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon>
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
import footer from './footer';

const supportLocalMap = {
  en: 'English',
  zh: '简体中文',
};
export default {
    name: 'Layout',
    components: {myFooter: footer},
    data: function(){
      return {
        tabs: [
          { title: this.$t('main.nav.tech'), icon: 'mdi-laptop', val: 'tech', color: '#42a5f5' },
          { title: this.$t('main.nav.creative'), icon: 'mdi-thought-bubble', val: 'creative', color: '#66bb6a'},
          { title: this.$t('main.nav.play'), icon: 'mdi-mushroom', val: 'play', color: '#ffa726' },
          { title: this.$t('main.nav.apple'), icon: 'mdi-apple', val: 'apple', color: '#000000' },
          { title: this.$t('main.nav.jobs'), icon: 'mdi-briefcase', val: 'jobs', color: '#9c27b0' },
          { title: this.$t('main.nav.deals'), icon: 'mdi-bank-transfer', val: 'deals', color: '#4db6ac' },
          { title: this.$t('main.nav.city'), icon: 'mdi-city', val: 'city', color: '#90a4ae' },
          { title: this.$t('main.nav.qna'), icon: 'mdi-help-box', val: 'qna', color: '#03a9f4' },
          { title: this.$t('main.nav.hot'), icon: 'mdi-trending-up', val: 'hot', color: '#e53935' },
          { title: this.$t('main.nav.gank'), icon: 'mdi-dev-to', val: 'gank', color: '#f95e74' },
          ],
        drawer: true,
        locales: [
          {
            name: '简体中文',
            val: 'zh',
          },
          {
            name: 'English',
            val: 'en',
          },
          {
            name: '日本語',
            val: 'ja',
          },
          {
            name: '한국어',
            val: 'ko',
          },
        ],
      };
    },
    computed: {
      cLocale() {
        const cLocale = localStorage.getItem('locale');
        return supportLocalMap[cLocale];
      },
    },
    mounted() {
    },
    methods: {
        toSub(id) {
          if(id === 'gank') {
              this.$router.push({path: '/gank'});
          } else {
              this.$router.push({path: `/v2/tab/${id}`});
          }
        },
        changeLocale(locale) {
          if(Object.keys(supportLocalMap).includes(locale)) {
            localStorage.setItem('locale', locale);
            location.reload();
          } else {
            this.$message({message: this.$t('common.not_support'), type: 'error'});
          }
        },
    },
};
</script>
<style lang="less" scoped>
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