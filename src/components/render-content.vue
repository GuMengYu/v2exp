<template>
  <!--eslint-disable vue/no-v-html -->
  <div v-html="content" />
</template>

<script>
import markdown from '@util/md';
import '@/scss/markdown.scss';

const md = markdown();

export default {
  props: {
    source: {
      type: String,
      default: 'empty',
    },
    type: {
      type: String,
      default: 'html',
    },
  },
  computed: {
    content() {
      return this.type === 'markdown' ? md.render(this.source) :this.source;
    },
  },
};
</script>
