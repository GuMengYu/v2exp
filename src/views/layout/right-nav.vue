<template>
  <div class="right-nav">
    <weather
      v-if="enableWeather"
      class="mb-6"
    />
    <hot-list
      :title="$t('v2ex.hot_topics')"
      :data="nodeData.hotTopics"
      :loading="loading"
      type="list-item-avatar"
      class="mb-4"
    />
    <tags-cloud
      :title="$t('v2ex.hot_nodes')"
      :data="nodeData.hotNodes"
      :loading="loading"
      class="mb-4"
    />
    <tags-cloud
      :title="$t('v2ex.new_nodes')"
      :data="nodeData.newNodes"
      :loading="loading"
      class="mb-4"
    />
    <tweet/>
  </div>
</template>
<script>
import TagsCloud from '@component/tagsCloud';
import HotList from '@component/hotList';
import Weather from '@component/weather';
import Tweet from '@component/twitter-tweet';
import { getToDayHot } from '@util/service';

export default {
  components: { HotList, TagsCloud, Weather, Tweet },
  data: () => ({
    nodeData: {},
    loading: false,
    enableWeather: !!navigator.geolocation,
  }),
  mounted() {
    this.loading = true;
    getToDayHot()
      .then(res => {
          res.hotTopics.forEach(i => i.img = i.avatarImg);
          this.nodeData = res;
      }).finally(() => (this.loading = false));
  },
};
</script>
<style lang="scss">
.right-nav {
  padding-top: 45px;
}
</style>
