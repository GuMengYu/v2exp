<template>
  <section>
    <v-breadcrumbs
      :items="breadcrumbs"
      :large="true"
      class="topic-breadcrumbs"
    />
    <v-card :outlined="true">
      <div class="topic-header">
        <div>
          <h2 class="topic-title">
            {{ topic.title }}
          </h2>
          <span class="topic-sub-title">{{ topic.last_reply_by }} · {{ topic.last_touched }} · {{ topic.replies }}次点击</span>
        </div>
        <v-avatar size="70">
          <v-img
            :src="$$(topic, 'member', 'avatar_large')"
            lazy-src="@/assets/man.png"
          />
        </v-avatar>
      </div>
      <v-divider />
      <render-content
        class="pa-4"
        type="html"
        :source="topic.content_rendered"
      />
    </v-card>
    <v-card
      class="topic-reply-area"
      :outlined="true"
    >
      <reply-item
        v-for="o in replies"
        :key="o.id"
        :reply="o"
      />
    </v-card>
    <watermark text="测试水印" />
  </section>
</template>
<script>
import {getTopicInfo, getTopicReply} from '@util/service';
import replyItem from './reply-item';
import RenderContent from '@component/render-content';
import watermark from '@component/watermark';

export default {
    name: 'Topic',
    components: {replyItem, RenderContent, watermark},
    props: {
        id: {
            type: String,
            default: '',
        },
    },
    data: () =>({
        topic: {},
        breadcrumbs: [],
        replies:[],
    }),
    computed: {},
    watch: {
        id() {
            this.fetchData();
        },
    },
    created() {
        getTopicInfo(this.id).then(result => {
            const {node} = result?.[0];
            this.topic = result?.[0];
            this.breadcrumbs = [node.parent_node_name, node.name].map(i => ({
                text: i.toUpperCase(),
                disabled: false,
                href: `${i}`,
            }));
        });
        getTopicReply({}).then(res => {
            this.replies  = res;
        });
    },
};
</script>
<style lang="scss" scoped>
.topic-breadcrumbs {
    padding: 10px 0 12px 5px;
}
.topic-header {
    display: flex;
    padding: 15px 10px;
    justify-content: space-between;
    align-items: center;
}
.topic-content {
    padding: 25px 20px;
}
</style>
