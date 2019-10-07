<template>
    <v-card
        class="right_card"
        :flat="true"
        :loading="loading"
        :outlined="true"
    >
        <v-card-title v-text="title"/>
        <v-divider class="tagcard_devider"></v-divider>
        <div class="card-content node-list" v-if="type === 'node'">
            <tag v-for="(node, index) in data" :options="node" :key="index" />  
        </div>
        <div class="card-content topic-list" v-else-if="type === 'topic'">
            <v-list dense>
                <v-list-item
                :key="index"
                v-for="(topic, index) in data"
                @click="go"
                >
                <v-list-item-avatar size="30">
                    <v-img :src="topic.avatarImg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="topic.title"/>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </div>
    </v-card>
</template>
<script>
import Tag from '@/components/tag';
export default {
    name: 'tags-card',
    components: {Tag},
    props: {
        title: '',
        data: {
            type: Array,
            default: [],
        },
        loading: false,
        type: {
            type: String,
            default: 'node',
        }
    },
    methods: {
        go() {

        }
    },
}
</script>
<style lang="less" scoped>
.right_card {
    margin-bottom: 10px;
    min-width: 401px;
    @media(max-width: 1366px) {
        min-width: 344px;
    }
    min-width: 300px;
    .tagcard_devider {
        margin: 0 10px 0 10px;
    }
    .v-card__title {
        padding: 10px 10px 5px 10px;
        font-size: 1em;
    }
    .node-list {
        padding: 10px 10px 0 10px;
        button {
            margin: 0 7px 7px 0;
        }
    }
    .topic-list {
        padding: 0;
    }
}

</style>