<template>
  <v-list-item
    :key="topic.title"
    @click="go(topic.id)"
  >
    <v-list-item-avatar size="40">
      <v-img
        :src="topic.avator"
        lazy-src="@/assets/man.png"
      />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-text="topic.title" />
      <v-list-item-subtitle>
        {{ topic.nodeName }} · {{ topic.author }} · {{ $$(topic, 'reply', 'lastReplyTime') }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-chip x-small>
        {{ topic.reply ? $$(topic, 'reply', 'count') : 0 }}
      </v-chip>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
export default {
    props: {
        topic: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        go(id) {
            this.$router.push({path: `/v2/topic/${id}`});
        },
    },
};
</script>
<style scoped lang="scss">
.v-list-item__subtitle {
    margin-top: 5px;
}
</style>
