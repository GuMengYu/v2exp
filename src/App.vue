<template>
  <v-app>
    <v-navigation-drawer app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
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
         <v-list-item-icon><v-icon>mdi-github-circle</v-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            GitHub <v-icon :size="12">mdi-open-in-new</v-icon>
          </v-list-item-title>
          </v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>V2EX</span>
        <span class="font-weight-light"> by Vuetify</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-text-field placeholder="请输入" solo :hide-details="true" prepend-inner-icon="mdi-magnify"/>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text>首页</v-btn>
        <v-btn text>链接</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content class="content">
      <v-container fluid>
          <v-row>
              <v-col lg="9" tag="main">
                  <keep-alive v-if="$route.meta.keepAlive">
                    <router-view/>
                  </keep-alive>
                  <router-view v-if="!$route.meta.keepAlive"/>
              </v-col>
              <v-col lg="3" tag="aside">
                  <tags-card title="热议主题" :data="hotTopics" :loading="loading" type="topic"/>
                  <tags-card title="热门节点" :data="hotNodes" :loading="loading"/>
                  <tags-card title="新增节点" :data="newNodes" :loading="loading"/>
              </v-col>
          </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TagsCard from '@/components/tagsCard';
import service from '@/util/service';

export default {
  name: 'App',
  components: {TagsCard},
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
      { title: '全部', icon: 'mdi-all-inclusive', val: 'all', color: 'none' },
      { title: 'R2', icon: 'mdi-alphabetical-off', val: 'r2', color: '#000000' },
      ],
    right: null,
    drawer: true,
    hotNodes: [],
    newNodes: [],
    hotTopics: [],
    loading: false,
  }),
  methods: {
    toSub(id) {
      this.$router.push({path: `/sub/${id}`});
    },
  },
  mounted() {
    this.loading = true;
    service.getNodes().then(res => {
      this.hotNodes = res.hotNodes;
      this.newNodes = res.newNodes;
      this.hotTopics = res.hotTopics;
      this.loading = false;
    });
  },
};
</script>
<style lang="less" scoped>
.headline {
  display: flex;
}
.search-wrap {
    padding: 0 10px;
    border-radius: 4px;
    max-width: 700px;
  }
.font-weight-light {
  font-size: 0.4em;
}

</style>
