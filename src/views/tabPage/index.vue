<template>
    <section>
        <div class="tab-title"><h2>{{tab}}</h2></div>
        <div class="skeletion-loader-list" v-if="loading">
            <v-card :flat="true" :outlined="true" class="tab-content">
                <nav class="tab-node-list">
                    <v-skeleton-loader class="mx-auto" type="chip"/>
                </nav>
                <v-skeleton-loader v-for="n in 7" :key="n" class="mx-auto" type="list-item-avatar-two-line"/>
            </v-card>
        </div>
        <div v-else>
            <v-card :flat="true" :outlined="true" class="tab-content">
                <nav class="tab-node-list" v-if="tabNodes.length > 0">
                    <tag v-for="(node, index) in tabNodes" :key="index" :options="node"/>
                </nav>
                <v-list two-line>
                    <template v-for="(topic, index) in tabTopics">
                        <topic-item :key="topic.id" :topic="topic"/>
                        <v-divider v-if="tabTopics.length > index + 1" :key="index"/>
                    </template>
                </v-list>
            </v-card>
        </div>
    </section>
</template>

<script>
import {getTabInfo} from '@/util/service';
import Tag from '@/components/tag';
import TopicItem from './topic-item';
export default {
    name: 'tabPage',
    components: {Tag, TopicItem},
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
            getTabInfo(this.tab).then(result => {
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
.tab-title {
    margin-bottom: 10px;
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