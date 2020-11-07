<template>
  <v-container
    class="gank container"
    fluid
  >
    <v-row>
      <v-col
        lg="8"
        tag="main"
      >
        <v-carousel
          height="400"
          cycle
          :delimiter-icon="mdiMinus"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.image"
            lazy-src="@/assets/girl.jpg"
          />
        </v-carousel>
        <v-tabs
          :icons-and-text="true"
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.id"
          >
            {{ tab.title }}
            <v-icon
              :color="tab.color"
              class="mr-1"
              v-text="tab.icon"
            />
          </v-tab>
          <v-tab-item
            v-for="tab in tabs"
            :key="tab.id"
          >
            <gank-tab :tab-id="tab.id" />
          </v-tab-item>
        </v-tabs>
      </v-col>
      <v-col
        lg="4"
        tag="aside"
      >
        <random-girl class="mb-6" />
        <hot-list
          class="mb-6"
          :title="$t('gank.hot_article')"
          :data="article"
          :loading="loading"
        />
        <hot-list
          class="mb-6"
          :title="$t('gank.hot_gank')"
          :data="ganhuo"
          :loading="loading"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GankTab from './nav-tab/index';
import RandomGirl from './randomGirl';
import HotList from '@component/hotList';
import gankService from '@util/gankService';
import { mdiApple, mdiAndroid, mdiReact, mdiLanguageJava, mdiMonitorCellphone, mdiWhatsapp, mdiFaceWomanShimmer, mdiMinus } from '@mdi/js';

export default {
  components: { GankTab, RandomGirl, HotList },
  props: {},
  data: () => ({
    slides: [],
    currentTab: null,
    tabs: [
      {
        title: 'iOS',
        icon: mdiApple,
        id: 'iOS',
        color: '#f95e74',
      },
      {
        title: '安卓',
        icon: mdiAndroid,
        id: 'android',
        color: '#34a853',
      },
      {
        title: '前端',
        icon: mdiReact,
        id: 'frontend',
        color: '#ea4335',
      },
      {
        title: '后端',
        icon: mdiLanguageJava,
        id: 'backend',
        color: '#ea4335',
      },
      {
        title: 'Flutter',
        icon: mdiMonitorCellphone,
        id: 'Flutter',
        color: '#ff9a00',
      },
      {
        title: 'App',
        icon: mdiWhatsapp,
        id: 'app',
        color: '#ff9a00',
      },
      {
        title: '妹子',
        icon: mdiFaceWomanShimmer,
        val: 'Girl',
        color: 'pink',
      },
    ],
    loading: false,
    article: [],
    ganhuo: [],
    mdiMinus,
  }),
  created() {
    this.loading = true;
    Promise.all([
      gankService.getBanner(),
      ...['GanHuo', 'Article'].map((i) => gankService.hot(i)),
    ])
      .then(([banners, ganhuo, article]) => {
        ganhuo.forEach((i) => {
          i.img = i?.images?.[0];
          i.datetime = this.$dayjs(i.publishedAt).fromNow();
        });
        article.forEach((i) => {
          i.datetime = this.$dayjs(i.publishedAt).fromNow();
          i.img = i?.images?.[0];
        });
        this.slides = banners;
        this.ganhuo = ganhuo;
        this.article = article;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.v-tab {
  text-transform: initial !important;
}
</style>
