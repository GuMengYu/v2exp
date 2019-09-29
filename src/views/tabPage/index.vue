<template>
    <v-card :loading="loading" :flat="true" class="tab-content">
        <nav class="tab-node-list">
            <tag v-for="(node, index) in tabNodes" :key="index" :options="node"/>
        </nav>
        <v-divider/>
        <v-list three-line>
            <template v-for="(topic, index) in tabTopics">
            <v-list-item
                :key="topic.title"
                @click="go(topic.id)"
                >
                <v-list-item-avatar size="35">
                    <v-img :src="topic.avator"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="topic.title"/>
                    <v-list-item-subtitle>
                        {{topic.nodeName}} . {{topic.author }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-divider v-if="tabTopics.length > index + 1" :key="index"/>
            </template>
      </v-list>
    </v-card>
</template>

<script>
import Service from '@/util/service';
import Tag from '@/components/tag';
export default {
    name: 'tabPage',
    components: {Tag},
    props: {
        tab: {
            type: String,
            default: 'tech',
        }
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
            Service.getTabInfo(this.tab).then(result => {
                this.tabNodes = result.tabNodes;
                this.tabTopics = result.tabTopics;
                this.loading = false;
            }).finally(() => {
                this.loading = false;
            });
        },
        go(id) {
            this.$router.push({path: `/topic/${id}`});
        },
    },
}
</script>

<style lang="less" scoped>
.tab-content {
    height: 100%;
    .tab-node-list {
        padding: 10px;
        button {
            margin-right: 10px;
        }
    }
}
</style>