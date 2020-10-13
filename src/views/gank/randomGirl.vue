<template>
  <v-card outlined>
    <v-img
      max-height="400"
      :aspect-ratio="1/1"
      lazy-src="@/assets/girl.jpg"
      :src="$$(girl, 'images', '0')"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <div class="media-overlay pa-8 d-flex flex-column justify-space-between">
        <header class="d-flex flex-column">
          <span class="d-block text-lg-h3">{{ day }}</span>
          <time
            class="d-block text-caption"
          >{{ monthYear }}</time>
        </header>
        <footer class="media-overlay-footer">
          <div class="ml-1">
            <a
              href="/post/5e512d8107d934eade79461c"
              target="_blank"
              class="body-title text-body-1"
            >妹子图{{ girl.title }}</a>
          </div>
          <div class="mt-2">
            <div class="d-flex justify-space-between">
              <v-chip
                small
                color="teal"
                text-color="white"
              >
                随机发张妹纸
              </v-chip>
              <div>
                <a
                  href="javascript:"
                  data-id="1"
                  class="refresh-random-post"
                  @click="handelRandom"
                ><v-icon
                  color="white"
                  :class="{ loading: isLoading }"
                >mdi-refresh</v-icon></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </v-img>
  </v-card>
</template>

<script>
import gankService from '@/util/gankService';

export default {
  data: () => {
    const now = new Date();
    return {
      now: {
        day: now.getDay(),
        month: now.getMonth(),
        year: now.getFullYear(),
      },
      isLoading: false,
      girl: {},
    };
  },
  computed: {
      monthYear() {
          return this.$dayjs(this.girl?.createdAt).format('MM, YYYY');
      },
      day() {
          return this.$dayjs(this.girl?.createdAt).format('DD');
      },
  },
  created() {
      this.handelRandom();
  },
  methods: {
    handelRandom() {
      this.isLoading = true;
      gankService
        .randomGet({ category: 'Girl', type: 'Girl', count: 1 })
        .then(([girl = {}]) => {
          this.girl = girl;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    randomGril() {},
  },
};
</script>

<style lang="less" scoped>
.media-overlay {
  color: #fff;
  height: 100%;
  a:link,
  a:visited {
    text-decoration: none;
    color: #fff;
  }
  footer {
    .loading {
      animation: spin 1s linear infinite;
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>