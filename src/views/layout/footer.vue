<template>
  <v-footer
    dark
    padless
    app
  >
    <v-card
      flat
      tile
      class="indigo white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-divider />
      <v-card-text class="white--text">
        Copyright © 2020-2020 乱七八糟的 7938217-23132
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import {mdiFacebook, mdiTwitter, mdiInstagram, mdiWechat, mdiSinaWeibo, mdiQqchat} from '@mdi/js';
export default {
  data: () => ({
    icons: [
      mdiFacebook,
      mdiTwitter,
      mdiInstagram,
      mdiWechat,
      mdiSinaWeibo,
      mdiQqchat,
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-footer {
  position: initial !important;
}
</style>
