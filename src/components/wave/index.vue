<template>
  <v-container>
    <canvas ref="waveCanvas" id="waveCanvas"></canvas>
  </v-container>
</template>

<script>
import { ready, drawCircle } from './wave';

export default {
  name: 'Wave',
  props: {
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    process: {
      type: Number,
      default: 50,
    },
  },
  data() {
    let staticConfig = {
      height: this.height,
      width: this.width,
      speed: 0.2,
      waveHeight: 2,
      waveWidth: 0.15,
    };
    return {
      ctx: {},
      draw: ready(staticConfig),
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = this.$refs.waveCanvas;
      canvas.height = this.height;
      canvas.width = this.width;
      this.ctx = canvas.getContext('2d');
      drawCircle(this.ctx);
      this.start();
    },
    start() {
      this.draw(this.ctx, this.process);
      requestAnimationFrame(this.start);
    },
    stop() {

    },
  },
};
</script>

<style scoped lang="less">
//#waveCanvas {
//  border: 1px solid rgba(255,0,0,0.5);
//  border-radius: 200px;
//}
</style>
