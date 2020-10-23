<template>
  <v-container>
    <canvas ref="waveCanvas" id="waveCanvas"></canvas>
  </v-container>
</template>

<script>
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
    color: {
      type: String,
      default: 'rgba(255,0,0,0.3)',
    },
  },
  data() {
    return {
      canvas: {
        el: '',
        height: this.height,
        width: this.width,
        speed: 0.2,
        xOffset: 0,
        process: 50,
      },
    };
  },
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
      this.drawContainer(ctx);
      this.drawSin(ctx);
    },
    drawContainer(ctx) {
      // Create a circular clipping path
      ctx.beginPath();
      ctx.arc(100,100,98,0,Math.PI*2,true);
      ctx.strokeStyle = '#26C000';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.clip();
    },
    drawSin(ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const points = [];
      const canvasWidth = this.canvas.width;
      const canvasHeight = this.canvas.height;

      const startX = 0;
      const waveWidth = 0.03; // 波浪宽度,数越小越宽
      const waveHeight = 2; // 波浪高度,数越大越高
      this.canvas.xOffset += this.canvas.speed; // 水平位移
      const absoluteOffSet = waveHeight + canvasHeight; // 相对于开始时垂直偏移量
      const yOffset = this.canvas.process * (waveHeight);

      ctx.beginPath();
      for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
        const y =  absoluteOffSet + waveHeight * Math.sin((startX + x) * waveWidth + this.canvas.xOffset) - yOffset;
        points.push([x, y]);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.lineTo(startX, canvasHeight);
      ctx.lineTo(points[0][0], points[0][1]);
      let lingered = ctx.createLinearGradient(0, canvasHeight,0,0);
      lingered.addColorStop(0,'#fff');
      lingered.addColorStop(0.5, '#26C000');
      lingered.addColorStop(1, '#00ABEB');
      ctx.fillStyle = lingered;
      ctx.strokeStyle = lingered;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.drawSin.bind(this, ctx));
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
