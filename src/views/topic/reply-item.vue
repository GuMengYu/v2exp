<template>
  <v-list-item
    outline="true"
    @click="()=>{}"
  >
    <v-list-item-avatar size="40">
      <v-img
        :src="$$(reply, 'member', 'avatar_mini')"
        lazy-src="@/assets/man.png"
      />
    </v-list-item-avatar>
    <v-list-item-content>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-list-item-title v-html="reply.content_rendered" />
      <v-list-item-subtitle>
        {{ $$(reply, 'member', 'username') }} · {{ reply.created }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
    props: {
        reply: {
            type: Object,
            default: () =>({}),
        },
    },
};
</script>

<style>

</style>