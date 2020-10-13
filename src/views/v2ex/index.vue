<template>
  <v-container fluid>
    <v-row>
      <v-col
        lg="8"
        tag="main"
      >
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </v-col>
      <v-col
        lg="4"
        tag="aside"
      >
        <right-nav />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rightNav from '@/views/layout/right-nav.vue';

export default {
    components: {rightNav},
};
</script>

<style>

</style>