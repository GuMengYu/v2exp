<template>
    <v-card>
        <div class="topic_author">
            <v-list-item>
                <v-list-item-avatar>
                    <v-img :src="topic.member.avatar_mini"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{topic.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{topic.last_reply_by}}  {{topic.last_touched}} {{topic.replies}}</v-list-item-subtitle>
                </v-list-item-content>                
            </v-list-item>
        </div>
        <v-divider/>
        <section class="topic_content" v-html="topic.content_rendered"/>
    </v-card>
</template>
<script>
import {getTopicInfo} from '@/util/service';

export default {
    name: 'topicPage',
    data: () =>({
        topic: {},
    }),
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
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            getTopicInfo(this.id).then(result => {
                this.topic = result;
            });
        },
    },
}
</script>
<style lang="less" scoped>
.topic_author {
    padding: 15px 10px;
}
.topic_content {
    padding: 10px;
}
</style>