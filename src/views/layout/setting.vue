<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    right
    hide-overlay
    width="300"
    @input="handleInput"
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
        v-bind="attrs"
        @click="close"
      >
        mdi-close
      </v-icon>
    </v-toolbar>
    <v-container>
      <span class="text-subtitle-2 font-weight-black">{{ $t('common.theme') }}</span>
      <v-item-group>
        <v-row>
          <v-col>
            <v-item v-slot="{ active, toggle }">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : 'grey lighten-3'"
                @click="toggle"
              >
                <span>Light</span>
                <v-icon>mdi-brightness-6</v-icon>
              </v-card>
            </v-item>
          </v-col>
          <v-col>
            <v-item v-slot="{ active, toggle }">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : 'grey lighten-3'"
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
            <v-item v-slot="{ active, toggle }">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : 'grey lighten-3'"
                @click="toggle"
              >
                <span>System</span>
                <v-icon>mdi-desktop-classic</v-icon>
              </v-card>
            </v-item>
          </v-col>
          <v-col>
            <v-item v-slot="{ active, toggle }">
              <v-card
                outlined
                class="d-flex align-center py-3 px-4 text-center cursor-pointer d-flex justify-space-between rounded"
                :class="active ? 'primary' : 'grey lighten-3'"
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
  computed: {
    drawer() {
      return this.open;
    },
  },
  methods: {
    handleInput(val) {
      // is Close drawer
      if(!val) {
        this.close();
      }
    },
    close() {
      this.drawer = false;
      this.$emit('setting-close');
    },
  },
};
</script>

<style>

</style>
