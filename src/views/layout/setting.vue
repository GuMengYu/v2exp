<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    right
    hide-overlay
    width="300"
  >
    <v-toolbar
      tag="header"
      flat
      class="v-app-underline"
    >
      <div class="text-h6 font-weight-medium text--primary">
        {{ $t('common.setting') }}
      </div>
      <v-spacer />
      <v-icon
        @click="close"
      >
        mdi-close
      </v-icon>
    </v-toolbar>
    <v-container>
      <span class="text-subtitle-2 font-weight-black">{{ $t('common.theme') }}</span>
      <v-item-group mandatory v-model="theme">
        <v-row>
          <v-col>
            <v-item v-slot="{ active, toggle }" value="light">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>Light</span>
                <v-icon>mdi-brightness-6</v-icon>
              </v-card>
            </v-item>
          </v-col>
          <v-col>
            <v-item v-slot="{ active, toggle }" value="night">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>Dark</span>
                <v-icon>mdi-brightness-4</v-icon>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-item v-slot="{ active, toggle }" value="system">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>System</span>
                <v-icon>mdi-desktop-classic</v-icon>
              </v-card>
            </v-item>
          </v-col>
          <v-col>
            <v-item v-slot="{ active, toggle }" value="mixed">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>Mixed</span>
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <v-divider />
      <span class="text-subtitle-2 font-weight-black">next setting</span>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      defalut: false,
    },
  },
  data: () => ({
    theme: localStorage.getItem('theme') ?? 'light',
  }),
  computed: {
    drawer: {
      get() {
      return this.open;
      },
      set(val) {
        if(!val) {
          this.$emit('setting-close');
        }
      },
    },
    baseClass() {
      return this.$vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-3';
    },
  },
  watch: {
    'theme': function(newVal) {
      localStorage.setItem('theme', this.theme);
      switch (newVal) {
        case 'night' :
          this.$vuetify.theme.dark = true;
          break;
        case 'light' :
          this.$vuetify.theme.dark = false;
          break;
        case 'system' :
          this.$vuetify.theme.dark = false;
          break;
        case 'mixed' :
          this.$vuetify.theme.dark = false;
          break;
      }
    },
  },
  methods: {
    close() {
      this.drawer = false;
      this.$emit('setting-close');
    },
    changeTheme() {
      console.log();

    },
  },
};
</script>

<style>

</style>
