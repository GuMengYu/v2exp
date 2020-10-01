<template>
  <div>
    <template v-if="data.type === 'Girl'">
     <card-image :data="data"></card-image>
    </template>
    <template v-else>
      <card-plian :data="data"></card-plian>
    </template>
  </div>
</template>

<script>
import CardPlian from '@/components/card-plain';
import CardImage from '@/components/card-image';

export default {
  components: {CardPlian, CardImage},
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>