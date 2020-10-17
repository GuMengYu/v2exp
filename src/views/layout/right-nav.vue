<template>
  <div class="right-nav">
    <weather 
      v-if="enableWeather"
      class="mb-6"
    />
    <hot-list
      title="热议主题"
      :data="nodeData.hotTopics"
      :loading="loading"
      type="list-item-avatar"
      class="mb-4"
    />
    <tags-cloud
      title="热门节点"
      :data="nodeData.hotNodes"
      :loading="loading"
      class="mb-4"
    />
    <tags-cloud
      title="新增节点"
      :data="nodeData.newNodes"
      :loading="loading"
      class="mb-4"
    />
  </div>
</template>
<script>
import TagsCloud from '@/components/tagsCloud';
import HotList from '@/components/hotList';
import Weather from '@/components/weather';
import { getToDayHot } from '@/util/service';

export default {
  components: { HotList, TagsCloud, Weather },
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
<style lang="less">
.right-nav {
  padding-top: 45px;
}
</style>
