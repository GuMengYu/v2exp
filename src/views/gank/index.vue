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
          >
          </v-carousel-item>
        </v-carousel>
        <v-tabs>
          <v-tab v-for="tab in tabs" :key="tab.id">
            <v-icon :color="tab.color" v-text="tab.icon"/>{{ tab.title }}
          </v-tab>
          <v-tab-item
            v-for="tab in tabs"
            :key="tab.id"
          >
            <gank-tab :tab-id="tab.id"></gank-tab>
        </v-tab-item>
        </v-tabs>
      </v-col>
      <v-col lg="4" tag="aside">
        <random-girl></random-girl>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gankTab from './tab/index';
import RandomGirl from './randomGirl';
import gankService from '@/util/gankService';

export default {
  components: {gankTab, RandomGirl},
  props: {},
  data: () => ({
    slides: [],
    tabs: [
      {
        title: 'iOS',
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
  }),
  methods: {

  },
  created() {
    gankService.getBanner().then(banners => {
      this.slides = banners;
    }).finally(() => {
      console.log('已加载');
    });
  }
};
</script>
<style lang="less" scoped>
// .container {
//   .v-carousel {
//     @media (max-width: 1736px) {
//       width: 740px;
//       height: 370px !important;
//     }
//     @media (max-width: 1260px) {
//       width: 620px;
//       height: 310px !important;
//     }
//   }
// }
</style>