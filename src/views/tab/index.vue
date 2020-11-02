<template>
  <section>
    <div class="tab-header">
      <div class="">
        <h2 class="text-h6">
          {{ $t(`main.nav.${id}`) }}
        </h2>
      </div>
      <div>
        <a
          href="javascript:void(0);"
          class="link more"
        >
          {{ $t('main.tab.more', [$t(`main.nav.${id}`)]) }}
        </a>
      </div>
    </div>
    <div
      v-if="loading"
      class="skeletion-loader-list"
    >
      <v-card
        :flat="true"
        :outlined="true"
        class="tab-content"
      >
        <nav class="tab-node-list">
          <v-skeleton-loader
            class="mx-auto"
            type="chip"
          />
        </nav>
        <v-skeleton-loader
          v-for="n in 7"
          :key="n"
          class="mx-auto"
          type="list-item-avatar-two-line"
        />
      </v-card>
    </div>
    <div v-else>
      <v-card
        :flat="true"
        :outlined="true"
        class="tab-content"
      >
        <nav
          v-if="tabNodes.length > 0"
          class="tab-node-list"
        >
          <tag
            v-for="(node, index) in tabNodes"
            :key="index"
            :options="node"
          />
        </nav>
        <v-list two-line>
          <template v-for="(topic, index) in tabTopics">
            <topic-item
              :key="topic.id"
              :topic="topic"
            />
            <v-divider
              v-if="tabTopics.length > index + 1"
              :key="index"
            />
          </template>
        </v-list>
      </v-card>
    </div>
  </section>
</template>

<script>
import {getTabInfo} from '@util/service';
import Tag from '@component/tag';
import TopicItem from './topic-item';
export default {
    name: 'Tab',
    components: {Tag, TopicItem},
    props: {
        id: {
            type: String,
            default: '技术',
        },
    },
    data: () =>({
        tabNodes: [],
        tabTopics: [],
        loading: false,
    }),
    watch: {
        tab() {
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true;
            getTabInfo(this.id).then(result => {
                this.tabNodes = result.tabNodes;
                this.tabTopics = result.tabTopics;
            }).finally(() => {
                this.loading = false;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.tab-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
    .more {
      font-family: 'Google Sans',sans-serif;
      font-size: 0.8125rem;
      font-weight: 500;
      word-break: break-word;
      overflow-wrap: break-word;
      line-height: 36px;
      text-decoration: none;
    }
}
.tab-content {
  height: 95%;
}
.tab-node-list {
  padding: 10px;
  .v-chip {
      margin-right: 10px;
  }
}
.skeletion-loader-list {
  min-width: 100%;
}
</style>
