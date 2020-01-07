<template>
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
        <v-list-item-action>
            <v-chip x-small>
                    {{topic.reply ? topic.reply.count : 0}}
                    回复
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
        }
    }
}
</script>
<style scoped>
.topic-item {
    padding: 10px;
}
</style>