<template>
  <v-card outlined>
    <v-row justify="space-between" class="ml-0 mr-0">
      <v-col lg="4">
        <v-img height="145" :src="data.images[0]"></v-img>
      </v-col>
      <v-col lg="8">
        <v-card-title class="pa-0">
          <v-chip color="#448ef6" label text-color="white" x-small>{{
            data.type
          }}</v-chip>
          <span class="ml-2">{{ data.title }}</span>
        </v-card-title>
        <v-card-text class="pl-0 pt-2 pb-2">
          <span class="ml-2">{{ data.desc }}</span>
        </v-card-text>
        <v-card-text class="pl-0 pt-2 pb-2">
          <v-row justify="space-between" class="ml-0 mr-0">
            <div>
              <v-avatar rounded="true" size="16" class="mr-1">
                <v-img
                  src="https://ae01.alicdn.com/kf/U0a3fb04845c14bcab78c6e6af1f8fefci.jpg"
                />
              </v-avatar>
              <span class="text-caption">
                <a :title="`由${data.author}发布`" rel="author">{{
                  data.author
                }}</a>
              </span>
              <i class="text-caption ml-1 mr-1">-</i>
              <span class="text-caption">
                <a href="/Girl" target="_blank">{{ data.type }}</a>
              </span>
            </div>
            <div>
              <span class="text-caption">
                <time class="mx-1">{{ data.publishedAt }}</time>
              </span>
            </div>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>