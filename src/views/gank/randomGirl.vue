<template>
  <v-card>
    <v-img
      max-height="400"
      :aspect-ratio="2 / 3"
      src="https://ae01.alicdn.com/kf/U23adfcbb49e94b329cca4240ffd2a360y.jpg"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <div class="media-overlay pa-8 d-flex flex-column justify-space-between">
        <div class="d-flex flex-column white--text">
          <span class="d-block text-lg-h3">{{now.day}}</span>
          <time class="d-block text-caption">{{now.month}}月, {{now.year}}</time>
        </div>
        <div class="media-overlay-footer white--text">
          <div class="body">
            <a
              href="/post/5e512d8107d934eade79461c"
              target="_blank"
              class="body-title text-body-1 white--text"
              >妹子图第5期</a
            >
          </div>
          <div class="footer mt-2">
            <div class="d-flex justify-space-between">
              <v-chip small color="teal" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                Random Girl
              </v-chip>
              <div>
                <a
                  href="javascript:"
                  data-id="1"
                  class="refresh-random-post white--text"
                  :click="handelRandom"
                  ><v-icon color="white">mdi-refresh</v-icon></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data: () => {
    const now = new Date();
    return {
      now: {
        day: now.getDay(),
        month: now.getMonth(),
        year: now.getFullYear(),
      },
    };
  },
  methods: {
    handelRandom() {},
  },
};
</script>

<style lang="less" scoped>
.media-overlay {
  height: 100%;
  a:link,
  a:visited {
    text-decoration: none;
  }
}
</style>