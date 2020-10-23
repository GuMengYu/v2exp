<template>
  <v-container>
    <canvas ref="waveCanvas" id="waveCanvas"></canvas>
  </v-container>
</template>

<script>
import { ready, drawCircle } from './wave';

let requestAnimation = null;
export default {
  name: 'Wave',
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 500,
    },
    process: {
      type: Number,
      default: 50,
    },
  },
  data() {
    let config = {
      height: this.height,
      width: this.width,
      speed: 0.2,
      waveHeight: 5,
      waveWidth: 0.05,
    };
    return {
      config,
      wave: {
        config,
        ctx: null,
      },
      draw: ready({config}),
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
      this.wave.ctx = canvas.getContext('2d');
      drawCircle(this.wave);
      this.start();
    },
    start() {
      this.draw(this.wave.ctx, this.process);
      if (requestAnimation && this.process >= 100) {
        cancelAnimationFrame(requestAnimation);
        return;
      }
      requestAnimation = requestAnimationFrame(this.start);
    },
    stop() {

    },
  },
};
</script>
