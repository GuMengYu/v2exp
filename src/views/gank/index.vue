<template>
  <v-container class="gank container" fluid>
    <v-row>
      <v-col lg="8" tag="main">
        <v-carousel 
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
      </v-col>
      <v-col lg="4" tag="aside"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {},
  data: () => ({
    slides: [
      {
        image: "http://gank.io/images/cfb4028bfead41e8b6e34057364969d1",
        title: "\u5e72\u8d27\u96c6\u4e2d\u8425\u65b0\u7248\u66f4\u65b0",
        url: "https://gank.io/migrate_progress",
      },
      {
        image: "http://gank.io/images/aebca647b3054757afd0e54d83e0628e",
        title:
          "- \u6625\u6c34\u521d\u751f\uff0c\u6625\u6797\u521d\u76db\uff0c\u6625\u98ce\u5341\u91cc\uff0c\u4e0d\u5982\u4f60\u3002",
        url: "https://gank.io/post/5e51497b6e7524f833c3f7a8",
      },
      {
        image: "https://pic.downk.cc/item/5e7b64fd504f4bcb040fae8f.jpg",
        title:
          "\u76d8\u70b9\u56fd\u5185\u90a3\u4e9b\u514d\u8d39\u597d\u7528\u7684\u56fe\u5e8a",
        url: "https://gank.io/post/5e7b5a8b6d2e518fdeab27aa",
      },
    ],
  }),
};
</script>
<style lang="less" scoped>
.container {
  .v-carousel {
    @media(max-width: 1736px){
      width: 740px;
      height: 370px !important;
    }
    @media(max-width: 1260px){
      width: 620px;
      height: 310px !important;
    }
  }
}
</style>