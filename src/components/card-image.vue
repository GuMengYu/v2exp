<template>
    <v-card class="mx-auto">
    <v-img
        class="white--text align-end"
        height="300px"
        :src="data.images[0]"
    >
        <v-card-title>{{ data.desc }}</v-card-title>
    </v-img>
    <v-card-title class="pt-2 pb-2">
        <v-chip color="#448ef6" label text-color="white" x-small>妹纸</v-chip>
        <span class="ml-2">{{ data.title }}</span>
    </v-card-title>
    <v-card-text class="pb-0">
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
            <a href="/Girl" target="_blank">妹纸</a>
            </span>
        </div>
        <div>
            <span class="text-caption">
            <time class="mx-1">{{ data.publishedAt }}</time>
            </span>
        </div>
        </v-row>
    </v-card-text>
    <v-card-actions>
        <v-btn color="orange" text> Download </v-btn>
    </v-card-actions>
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