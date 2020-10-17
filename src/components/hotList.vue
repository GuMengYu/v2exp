<template>
  <v-card
    :outlined="true"
    color="#f8f9fa"
  >
    <v-card-title v-text="title" />
    <v-divider class="card_devider" />
    <div class="card-content list">
      <div
        v-if="loading"
        class="skeleton-loading"
      >
        <template v-if="type === 'list-item-avatar'">
          <v-skeleton-loader
            :type="`${type}@3`"
            class="max-auto skeleton-loading-item"
          />
        </template>
        <template v-else>
          <v-boilerplate
            :tile="true"
            type="list-item-avatar-two-line@3"
          />
        </template>
      </div>
      <v-list
        v-else-if="type==='list-item-avatar'"
        dense
        class="list-content list-item-avatar"
      >
        <template v-for="item in data">
          <v-list-item
            :key="item.id"
            @click="go(item.id)"
          >
            <v-list-item-avatar size="30">
              <v-img :src="item.img" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-list
        v-else
        dense
        class="list-content list-item-image"
      >
        <template v-for="item in data">
          <v-list-item
            :key="item.id"
            @click="go(item.id)"
          >
            <v-img
              :src="item.img"
              height="66"
              max-width="91"
              lazy-src="@/assets/girl.jpg"
            />
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
              <v-list-item-subtitle v-text="item.datetime" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'HotList',
  inject: ['theme'],
    components: {
      // Create a new component that
      // extends v-skeleton-loader
      VBoilerplate: {
        functional: true,
        render (h, { data, props, children }) {
          return h('v-skeleton-loader', {
            ...data,
            props: {
              boilerplate: false,
              ...props,
            },
          }, children);
        },
      },
    },
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
        type: String,
        default: 'list-item-avatar',
    },
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
        type: Boolean,
        default: true,
    },
  },
  methods: {
    go(val) {
        this.$emit('go', val);
    },
  },
};
</script>
<style lang="less" scoped>
.card_devider {
  margin: 0 16px 0 16px;
}
.v-card__title {
  padding: 12px 0 12px 16px;
  font-size: 1rem;
  line-height: 21px;
  color: rgb(95, 99, 104);
}
.list {
  padding: 0;
  .list-content {
    background: transparent;
  }
  .list-item-image {
    .v-list-item {
      padding: 10px 16px;
      .v-image {
        margin-right: 15px;
      }
   }
  }
}
.skeleton-loading {
  .v-skeleton-loader {
    margin: 10px 16px;
    > div {
      background: transparent !important;
    }
  }
}
</style>
