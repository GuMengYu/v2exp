<template>
  <v-card
    outlined
  >
    <v-row
      justify="space-between"
      class="ml-0 mr-0"
    >
      <v-col lg="4">
        <a
          :href="`/#/post/${data.id}`"
          target="_blank"
        >
          <v-img
            height="145"
            :src="data.images[0]"
          />
        </a>
      </v-col>
      <v-col
        lg="8"
        class="d-flex flex-column justify-space-between"
      >
        <div>
          <v-card-title class="pa-0 list-title">
            <v-chip
              color="#448ef6"
              label
              text-color="white"
              small
            >
              {{
                data.type
              }}
            </v-chip>
            <a
              :href="`/#/post/${data.id}`"
              class="ml-2 text-decoration-none"
              target="_blank"
            ><span>{{ data.title }}</span></a>
          </v-card-title>
          <v-card-text class="pl-0 pt-2 pb-2 list-content">
            <span class="h-3x text-body-2">{{ data.desc }}</span>
          </v-card-text>
        </div>
        <footer class="pl-0 pt-0 pb-0 list-footer">
          <v-row
            justify="space-between"
            class="ml-0 mr-0"
          >
            <div>
              <v-avatar
                rounded="true"
                size="16"
              >
                <v-img
                  src="https://ae01.alicdn.com/kf/U0a3fb04845c14bcab78c6e6af1f8fefci.jpg"
                />
              </v-avatar>
              <span class="text-caption ml-2">
                <a
                  :title="`由${data.author}发布`"
                  rel="author"
                >{{
                  data.author
                }}</a>
              </span>
              <i class="text-caption ml-2 mr-2 blue--text">-</i>
              <a
                href="/Girl"
                target="_blank"
                class="text-decoration-none"
              >
                <span class="text-caption">{{ data.type }}</span>
              </a>
            </div>
            <div>
              <span class="text-caption">
                <time class="mx-1">{{ $dayjs(data.publishedAt).fromNow() }}</time>
              </span>
            </div>
          </v-row>
        </footer>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import './card.scss';
import cardBase from '@/components/cardBase';
export default {
  mixins: cardBase,
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
