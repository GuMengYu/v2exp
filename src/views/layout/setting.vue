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
        {{ mdiClose }}
      </v-icon>
    </v-toolbar>
    <v-container>
      <span class="text-subtitle-2 font-weight-black">{{ $t('common.theme') }}</span>
      <v-item-group
        v-model="theme"
        mandatory
      >
        <v-row>
          <v-col>
            <v-item
              v-slot="{ active, toggle }"
              value="light"
            >
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>Light</span>
                <v-icon>{{ mdiBrightness6 }}</v-icon>
              </v-card>
            </v-item>
          </v-col>
          <v-col>
            <v-item
              v-slot="{ active, toggle }"
              value="night"
            >
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>Dark</span>
                <v-icon>{{ mdiBrightness4 }}</v-icon>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-item
              v-slot="{ active, toggle }"
              value="system"
            >
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>System</span>
                <v-icon>{{ mdiDesktopClassic }}</v-icon>
              </v-card>
            </v-item>
          </v-col>
          <v-col>
            <v-item
              v-slot="{ active, toggle }"
              value="mixed"
            >
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : baseClass"
                @click="toggle"
              >
                <span>Mixed</span>
                <v-icon>{{ mdiThemeLightDark }}</v-icon>
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
import { mdiBrightness6, mdiDesktopClassic, mdiThemeLightDark, mdiBrightness4, mdiClose } from '@mdi/js';
import DetectMode from '@util/detectMode';
const MODE = {
  NIGHT: 'night',
  LIGHT: 'light',
};
const THEME = {
  SYSTEM: 'system',
  NIGHT: 'night',
  LIGHT: 'light',
  MIXED: 'mixed',
};
export default {
  props: {
    open: {
      type: Boolean,
      defalut: false,
    },
  },
  data(){
    return {
      theme: this.$store.getters['system/theme'],
      detectMode: new DetectMode(),
      mdiBrightness6,
      mdiThemeLightDark,
      mdiDesktopClassic,
      mdiBrightness4,
      mdiClose,
    };
  },
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
    'theme': function(newTheme) {
      this.$store.commit('system/updateTheme', this.theme);
      this.switchTheme(newTheme);
    },
  },
  created() {
    this.switchTheme(this.theme);
    this.detectMode.onChange((e) => {
      if(this.theme === THEME.SYSTEM || !this.theme) {
        this.$vuetify.theme.dark = e.matches;
      }
    });
  },
  methods: {
    switchTheme(theme) {
      const toDark = isDark => this.$vuetify.theme.dark = isDark;
      ({
        light: toDark.bind(void 0, false),
        night: toDark.bind(void 0, true),
        system: toDark.bind(void 0, this.detectMode.currentMode() === MODE.NIGHT),
        mixed: toDark.bind(void 0, false),
      })[theme]();
    },
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
