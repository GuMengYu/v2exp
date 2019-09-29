<template>
    <v-card>
        <div class="topic_author">
            <v-list-item>
                <v-list-item-avatar>
                    <v-img :src="topic.member"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{topic.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{topic.last_reply_by}}</v-list-item-subtitle>
                </v-list-item-content>                
            </v-list-item>
        </div>
        <section class="topic-info" v-html="topic.content"/>
    </v-card>
</template>
<script>
import Service from '@/util/service';

export default {
    name: 'topicPage',
    data: () =>({
        topic: {},
    }),
    props: {
        id: String,
    },
    mounted() {
        Service.getTopicInfo(this.id).then(result => {
            console.log(result);
            this.topic = result.data[0];
        });
    },
}
</script>
<style lang="less" scoped>

</style>