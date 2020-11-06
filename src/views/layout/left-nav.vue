<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :floating="true"
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
              v-text="item.icon"
            />
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
        <v-list-item-icon><v-icon>mdi-github</v-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            GitHub <v-icon :size="12">
              mdi-open-in-new
            </v-icon>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true,
    },
  },
  data: function(){
        return {
          tabs: [
            { icon: 'mdi-laptop', val: 'tech', color: '#42a5f5' },
            { icon: 'mdi-thought-bubble', val: 'creative', color: '#66bb6a'},
            { icon: 'mdi-mushroom', val: 'play', color: '#ffa726' },
            { icon: 'mdi-apple', val: 'apple', color: '#000000' },
            { icon: 'mdi-briefcase', val: 'jobs', color: '#9c27b0' },
            { icon: 'mdi-bank-transfer', val: 'deals', color: '#4db6ac' },
            { icon: 'mdi-city', val: 'city', color: '#90a4ae' },
            { icon: 'mdi-help-box', val: 'qna', color: '#03a9f4' },
            { icon: 'mdi-trending-up', val: 'hot', color: '#e53935' },
            { icon: 'mdi-dev-to', val: 'gank', color: '#f95e74' },
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
