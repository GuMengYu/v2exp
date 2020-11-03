<template>
  <v-container tag="article">
    <v-breadcrumbs
      :items="breadcrumbs"
      :large="true"
      class="topic-breadcrumbs"
    >
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col lg="8">
        <v-card>

        </v-card>
      </v-col>
      <v-col lg="4">
        <hot-list
          class="mb-6"
          :title="$t('gank.start_goods')"
          :data="likes"
          :loading="loading"
        />
        <hot-list
          class="mb-6"
          :title="$t('gank.view_goods')"
          :data="views"
          :loading="loading"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HotList from '@component/hotList';
import Service from '@util/gankService';
export default {
  name: 'Post',
  components: {HotList},
  props: {
    postId: {
      type: String,
      default: '404',
    },
  },
  data: () => ({
    likes: [],
    views: [],
    loading: false,
    article: {},
  }),
  computed: {
    breadcrumbs() {
      return [{
        text: this.article.category,
        disabled: false,
      }, {
        text: this.article.title,
        disabled: true,
      }];
    },
  },
  created() {
    this.loading = true;
    Promise.all([...['likes', 'views'].map(type => Service.hot('GanHuo', type)), Service.post(this.postId)]).then(([likes, views, article]) => {
      [views, likes].map(item => {
        item.forEach((i) => {
          i.datetime = this.$dayjs(i.publishedAt).fromNow();
          i.img = i?.images?.[0];
          i.title = i.desc;
        });
      });
      this.likes = likes;
      this.views = views;
      this.article = article;
    }).finally(() => {
      this.loading = false;
    });
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
