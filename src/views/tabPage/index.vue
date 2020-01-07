<template>
    <section>
        <div class="skeletion-loader-list" v-if="loading">
            <nav class="tab-node-list">
                <v-skeleton-loader class="mx-auto" type="chip"/>
            </nav>
            <v-card :flat="true" :outlined="true" class="tab-content">
                <v-skeleton-loader v-for="n in 7" :key="n" class="mx-auto" type="list-item-avatar-two-line"/>
            </v-card>
        </div>
        <div v-else>
            <nav class="tab-node-list" v-if="tabNodes.length > 0">
                <tag v-for="(node, index) in tabNodes" :key="index" :options="node"/>
            </nav>
            <v-card :flat="true" :outlined="true" class="tab-content">
                <v-list two-line>
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
        </div>
    </section>
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