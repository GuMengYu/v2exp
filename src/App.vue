<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="e => {miniToogle = !miniToogle}"></v-app-bar-nav-icon>
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
    <v-content>
      <v-navigation-drawer permanent :mini-variant.sync="miniToogle">
      <v-list
        dense
        nav
        shaped
      >
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-list>
       <v-divider></v-divider>
       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
      <transition name="fade" mode="out-in">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
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
    miniToogle: false,

  }),
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
