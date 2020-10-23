<template>
  <div class="about">
    <wave :process="process"/>
  </div>
</template>
<script>

import wave from '../components/wave/index';

export default {
  components: {wave},
  data: () =>({
    process: 0,
  }),
};
</script>
