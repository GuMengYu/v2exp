<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>V2EX</span>
        <span class="font-weight-light"> by Vuetify</span>
        <v-text-field
          class="search-wrap"
          :hide-details="true"
        >
          <v-icon slot="prepend" color="red">mdi-magnify</v-icon>
        </v-text-field>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">首页</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="less" scoped>
.headline {
  display: flex;
  .search-wrap {
    padding: 0 10px;
    border-radius: 4px;
  }
}
.font-weight-light {
  font-size: 0.4em;
}
</style>
