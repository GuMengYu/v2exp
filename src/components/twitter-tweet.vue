<template>
  <div :id="`tweet-${id}`">
    <blockquote class="twitter-tweet">
      <p
        lang="und"
        dir="ltr"
      >
        😏 <a href="https://t.co/ldXT1idKxI">pic.twitter.com/ldXT1idKxI</a>
      </p>&mdash; 小洪小洪根正苗红 (@YuhoRob) <a
        href="https://twitter.com/YuhoRob/status/1325719238464602115?ref_src=twsrc%5Etfw"
      >November 9, 2020</a>
    </blockquote>
  </div>
</template>

<script>
import loadjs from 'loadjs';

export default {
  name: 'Tweet',
  props: {
    id: {
      type: String,
      default: '1325719238464602115',
    },
    userName: {
      type: String,
      default: 'YuhoRob',
    },
  },
  data() {
    return {};
  },
  created() {
    loadjs('https://platform.twitter.com/widgets.js', () => {
      console.log('twitter widget js load success');
    });
  },
};
</script>
