<template>
    <v-card
        class="right_card"
        :flat="true"
        :outlined="true"
        color="#f8f9fa"
    >
        <v-card-title v-text="title"/>
        <v-divider class="tagcard_devider"></v-divider>
        <div class="card-content topic-list">
            <div class="skeleton-loading" v-if="loading">
              <v-skeleton-loader v-for="n in 8" :key="n" type="list-item-avatar" class="max-auto skeleton-loading-item"></v-skeleton-loader>
            </div>
            <v-list dense v-else class="topic-list-content">
                <template v-for="topic in data">
                    <v-list-item
                    @click="go"
                    :key="topic.id"
                    >
                        <v-list-item-avatar size="30">
                            <v-img :src="topic.avatarImg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="topic.title"/>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </div>
    </v-card>
</template>
<script>
export default {
    name: 'hot-list',
    props: {
        title: '',
        data: {
            type: Array,
            default: () => ([]),
        },
        loading: false,
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
    margin-right: 20px;
    min-width: 370px;
    @media(max-width: 1366px) {
        min-width: 330px;
    }
    min-width: 300px;
    .tagcard_devider {
        margin: 0 16px 0 16px;
    }
    .v-card__title {
        padding: 12px 0 12px 16px;
        font-size: 1rem;
        line-height: 21px;
        color:rgb(95, 99, 104);
    }
    .topic-list {
        padding: 0;
        .topic-list-content {
            background: transparent;
        }
        .list-item-divider {
            margin: 0 16px 0 16px;
        }
    }
}

</style>