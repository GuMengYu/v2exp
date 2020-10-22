<template>
  <v-container>
    <canvas ref="waveCanvas" id="waveCanvas"></canvas>
  </v-container>
</template>

<script>
export default {
  name: 'Wave',
  data: () => ({
    canvas: {
      el: '',
      height: 200,
      width: 200,
      speed: 0.2,
      offset: 0,
    },
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = this.$refs.waveCanvas;
      canvas.height = this.canvas.height;
      canvas.width = this.canvas.width;
      this.canvas.el = canvas;
      const ctx = canvas.getContext('2d');
      this.drawSin(ctx);
    },
    drawSin(ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const points = [];
      const canvasWidth = this.canvas.width;
      const canvasHeight = this.canvas.height;
      const startX = 0;
      const waveWidth = 0.16; // 波浪宽度,数越小越宽
      const waveHeight = 3; // 波浪高度,数越大越高
      this.canvas.offset += this.canvas.speed; // 水平位移

      ctx.beginPath();
      for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
        const y = waveHeight * Math.sin((startX + x) * waveWidth + this.canvas.offset);
        points.push([x, (canvasHeight / 2) + y]);
        ctx.lineTo(x, (canvasHeight / 2) + y);
      }
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.lineTo(startX, canvasHeight);
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.fillStyle = 'darkgoldenrod';
      ctx.strokeStyle = 'darkgoldenrod';
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.drawSin.bind(this, ctx));
    },
  },
};
</script>

<style scoped lang="less">
#waveCanvas {
  border: 1px solid darkgoldenrod;
  border-radius: 200px;
}
</style>
