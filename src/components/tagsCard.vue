<template>
    <v-card
        class="right_card"
        :flat="true"
        :outlined="true"
        color="#f8f9fa"
    >
        <v-card-title v-text="title"/>
        <v-divider class="tagcard_devider"></v-divider>
        <div class="card-content node-list" v-if="type === 'node'">
            <div class="skeleton-loading" v-if="loading">
              <v-skeleton-loader type="chip" class="max-auto"></v-skeleton-loader>
            </div>
            <tag v-for="(node, index) in data" :options="node" :key="index" />  
        </div>
        <div class="card-content topic-list" v-else-if="type === 'topic'">
            <div class="skeleton-loading" v-if="loading">
              <v-skeleton-loader v-for="n in 8" :key="n" type="list-item-avatar" class="max-auto"></v-skeleton-loader>
            </div>
            <v-list dense v-else class="topic-list-content">
                <template v-for="(topic, index) in data">
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
                    <!-- <v-divider class="list-item-divider" v-if="data.length > index + 1" :key="index"/> -->
                </template>
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
            default: () => ([]),
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
    margin-right: 20px;
    min-width: 401px;
    @media(max-width: 1366px) {
        min-width: 344px;
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
    .node-list {
        margin: 16px 5px 8px 16px;
        &::v-deep .v-chip {
            background: white!important;
            &.v-chip--label {
                border-radius: 8px !important;
            }
            margin: 0 8px 8px 0;
            .v-chip__content {
                font-size: 0.9em;
                font-weight: 500;
                color:rgb(95, 99, 104);
            }
            
        }
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