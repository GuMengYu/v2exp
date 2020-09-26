<template>
  <v-app class="v2exp_app">
    <v-navigation-drawer app
      v-model="drawer"
      :floating="true"
      :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense nav shaped>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="item in tabs"
          :key="item.title"
          link
          @click="toSub(item.val)"
        >
          <v-list-item-icon>
            <v-icon :color="item.color" v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider></v-divider>
      <v-list-item link href="https://github.com/GuMengYu/v2exp" target="_blank">
         <v-list-item-icon><v-icon>mdi-github</v-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            GitHub <v-icon :size="12">mdi-open-in-new</v-icon>
          </v-list-item-title>
          </v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp" color="white" :elevate-on-scroll="false">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span class="logo"></span>
        <span class="logo-sub">&nbsp;•&nbsp;划水</span>
      </v-toolbar-title>
      <v-spacer/>
      <!-- <v-text-field placeholder="请输入" solo rounded dense :hide-details="true" prepend-inner-icon="mdi-magnify"/> -->
      <v-toolbar-items>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-apps</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-home</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-information</v-icon></v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <main class="content" :class="{open : drawer}">
      <router-view/>
    </main>
  </v-app>
</template>

<script>
import rightNav from '@/views/layout/right-nav.vue';
export default {
  name: 'App',
  components: {rightNav},
  data: () => ({
    tabs: [
      { title: '技术', icon: 'mdi-laptop', val: 'tech', color: '#42a5f5' },
      { title: '创意', icon: 'mdi-thought-bubble', val: 'creative', color: '#66bb6a'},
      { title: '好玩', icon: 'mdi-mushroom', val: 'play', color: '#ffa726' },
      { title: 'Apple', icon: 'mdi-apple', val: 'apple', color: '#000000' },
      { title: '酷工作', icon: 'mdi-briefcase', val: 'jobs', color: '#9c27b0' },
      { title: '交易', icon: 'mdi-bank-transfer', val: 'deals', color: '#4db6ac' },
      { title: '城市', icon: 'mdi-city', val: 'city', color: '#90a4ae' },
      { title: '问与答', icon: 'mdi-help-box', val: 'qna', color: '#03a9f4' },
      { title: '最热', icon: 'mdi-trending-up', val: 'hot', color: '#e53935' },
      { title: '干货-gank.io', icon: 'mdi-dev-to', val: 'gank', color: '#f95e74' }
      // { title: '干货-IOS', icon: 'mdi-apple-ios', val: 'gank_ios', color: '#f95e74' },
      // { title: '干货-Android', icon: 'mdi-android', val: 'gank_android', color: '#34a853' },
      // { title: '干货-前端', icon: 'mdi-angular', val: 'gank_fe', color: '#ea4335' },
      // { title: '干货-妹子', icon: 'mdi-face-woman-shimmer', val: 'gank_girl', color: 'pink' },
      // { title: '干货-休息视频', icon: 'mdi-video-vintage', val: 'gank_video', color: '#ff9a00' },
      ],
    drawer: true,
  }),
  methods: {
    toSub(id) {
      if(id === 'gank') {
        this.$router.push({path: `/gank`});
      } else {
        this.$router.push({path: `/v2/tab/${id}`});
      }
    },
  },
  mounted() {
    console.log(this.$vuetify.application);

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
      content: url(./assets/googlelogo_clr_74x24px.svg);
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
