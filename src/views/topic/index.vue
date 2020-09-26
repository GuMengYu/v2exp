<template>
<section>
    <v-breadcrumbs :items="breadcrumbs" :large="true" class="topic-breadcrumbs">
        <template v-slot:divider><v-icon>mdi-forward</v-icon></template>
    </v-breadcrumbs>
    <v-card :outlined="true">
        <div class="topic-header">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>{{topic.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{topic.last_reply_by}}  {{topic.last_touched}} {{topic.replies}}</v-list-item-subtitle>
                </v-list-item-content>    
                <v-list-item-avatar size="60">
                    <v-img :src="topic.member.avatar_large"></v-img>
                </v-list-item-avatar>            
            </v-list-item>
        </div>
        <v-divider/>
        <section class="topic-content" v-html="topic.content_rendered"/>
    </v-card>
    <v-card class="topic-reply-area">
        
    </v-card>
</section>
</template>
<script>
import {getTopicInfo} from '@/util/service';

export default {
    name: 'topic',
    data: () =>({
        topic: {},
        breadcrumbs: [],
    }),
    computed: {},
    props: {
        id: {
            type: String,
            default: '',
        },
    },
    watch: {
        id() {
            this.fetchData();
        },
    },
    created() {
        getTopicInfo(this.id).then(result => {
            this.topic = result[0];
            const {node} = result[0];
            this.breadcrumbs = [node.name, node.parent_node_name].map(i => ({
                text: i.toUpperCase(),
                disabled: false,
                href: `${i}`,
            }));
        });
    },
    mounted() {},
    methods: {
        
    },
}
</script>
<style lang="less" scoped>
.topic-breadcrumbs {
    padding-left: 5px;
}
.topic-header {
    padding: 15px 10px;
}
.topic-content {
    padding: 25px 20px;
}
</style>