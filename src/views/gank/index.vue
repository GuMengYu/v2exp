<template>
  <v-container class="gank container" fluid>
    <v-row>
      <v-col lg="8" tag="main">
        <v-carousel
          height="400"
          cycle
          delimiter-icon="mdi-minus"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.image"
            lazy-src="@/assets/girl.jpg"
          >
          </v-carousel-item>
        </v-carousel>
        <v-tabs>
          <v-tab v-for="tab in tabs" :key="tab.id">
            <v-icon :color="tab.color" v-text="tab.icon" />{{ tab.title }}
          </v-tab>
          <v-tab-item v-for="tab in tabs" :key="tab.id">
            <gank-tab :tab-id="tab.id"></gank-tab>
          </v-tab-item>
        </v-tabs>
      </v-col>
      <v-col lg="4" tag="aside">
        <random-girl class="mb-6" />
        <hot-list
          class="mb-6"
          title="本周热门文章"
          :data="article"
          :loading="loading"
        />
        <hot-list
          class="mb-6"
          title="本周热门干货"
          :data="ganhuo"
          :loading="loading"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GankTab from "./tab/index";
import RandomGirl from "./randomGirl";
import HotList from "@/components/hotList";
import gankService from "@/util/gankService";

export default {
  components: { GankTab, RandomGirl, HotList },
  props: {},
  data: () => ({
    slides: [],
    tabs: [
      {
        title: "iOS",
        icon: "mdi-apple-ios",
        id: "iOS",
        color: "#f95e74",
      },
      {
        title: "安卓",
        icon: "mdi-android",
        id: "android",
        color: "#34a853",
      },
      {
        title: "前端",
        icon: "mdi-react",
        id: "frontend",
        color: "#ea4335",
      },
      {
        title: "后端",
        icon: "mdi-language-java",
        id: "backend",
        color: "#ea4335",
      },
      {
        title: "Flutter",
        icon: "mdi-monitor-cellphone",
        id: "Flutter",
        color: "#ff9a00",
      },
      {
        title: "App",
        icon: "mdi-whatsapp",
        id: "app",
        color: "#ff9a00",
      },
      {
        title: "妹子",
        icon: "mdi-face-woman-shimmer",
        val: "Girl",
        color: "pink",
      },
    ],
    loading: false,
    article: [],
    ganhuo: [],
  }),
  methods: {},
  created() {
    this.loading = true;
    Promise.all([
      gankService.getBanner(),
      gankService.hot("GanHuo"),
      gankService.hot("Article"),
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
};
</script>
<style lang="less" scoped>
</style>