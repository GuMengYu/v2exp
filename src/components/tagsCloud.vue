<template>
  <v-card
    :flat="true"
    :outlined="true"
    color="#f8f9fa"
  >
    <v-card-title v-text="title" />
    <v-divider class="tagcard_devider" />
    <div class="card-content node-list">
      <div
        v-if="loading"
        class="skeleton-loading"
      >
        <v-skeleton-loader
          type="chip"
          class="max-auto"
        />
      </div>
      <tag
        v-for="(node, index) in data"
        :key="index"
        :options="node"
      />  
    </div>
  </v-card>
</template>
<script>
import Tag from '@/components/tag';
export default {
    name: 'TagsCard',
    components: {Tag},
    props: {
        title: {
            type: String,
            default: '',
        },
        data: {
            type: Array,
            default: () => ([]),
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        go() {

        },
    },
};
</script>
<style lang="less" scoped>
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

</style>