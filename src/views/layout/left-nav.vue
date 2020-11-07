<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    app
    floating
    :clipped="$vuetify.breakpoint.lgAndUp"
  >
    <v-list
      dense
      nav
      shaped
    >
      <v-list-item-group
        v-model="activeTab"
        color="primary"
      >
        <v-list-item
          v-for="item in tabs"
          :key="item.title"
          link
          :value="item.val"
        >
          <v-list-item-icon>
            <v-icon
              :color="item.color"
            >
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="$t(`main.nav.${item.val}`)" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider class="mt-2 mb-2" />
      <v-list-item
        link
        href="https://github.com/GuMengYu/v2exp"
        target="_blank"
      >
        <v-list-item-icon>
          <v-icon>{{ githubSvgPath }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            GitHub
            <v-icon size="14">
              {{ newSvg }}
            </v-icon>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiLaptop, mdiThoughtBubble, mdiMushroom, mdiApple, mdiBriefcase, mdiBankTransfer, mdiCity, mdiHelpBox, mdiTrendingUp, mdiDevTo, mdiOpenInNew, mdiGithub } from '@mdi/js';

export default {
  props: {
    drawer: {
      type: Boolean,
      default: true,
    },
  },
  data: function(){
        return {
          githubSvgPath: mdiGithub,
          newSvg: mdiOpenInNew,
          tabs: [
            { icon: mdiLaptop, val: 'tech', color: '#42a5f5' },
            { icon: mdiThoughtBubble, val: 'creative', color: '#66bb6a'},
            { icon: mdiMushroom, val: 'play', color: '#ffa726' },
            { icon: mdiApple, val: 'apple', color: '#000000' },
            { icon: mdiBriefcase, val: 'jobs', color: '#9c27b0' },
            { icon: mdiBankTransfer, val: 'deals', color: '#4db6ac' },
            { icon: mdiCity, val: 'city', color: '#90a4ae' },
            { icon: mdiHelpBox, val: 'qna', color: '#03a9f4' },
            { icon: mdiTrendingUp, val: 'hot', color: '#e53935' },
            { icon: mdiDevTo, val: 'gank', color: '#f95e74' },
            ],
        };
      },
  computed: {
    activeTab: {
      get() {
        return this.$route?.params?.id ?? 'hot';
      },
      set(val) {
        this.$router.push({path: val === 'gank' ? `/${val}` : `/v2/tab/${val}`});
      },
    },
  },
};
</script>
