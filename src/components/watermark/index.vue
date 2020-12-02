<template>
  <div
    ref="watermark"
    class="watermark"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'hello world',
    },
    rotate: {
      type: Number,
      default: 35,
    },
  },
  data(){
    return {
      watermarkDataUrl: '',
    };
  },
  computed: {
    watermark() {
      return this.$refs.watermark;
    },
    parentNode() {
      return this.$refs.watermark?.parentNode;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.observerChange();
    });
  },
  methods: {
    init() {
      this.parentNode.style.position = 'relative';
      this.createWatermark(this.text);
      this.setStyle();
    },
    createWatermark(content) {
      if(typeof content === 'string') {
        let canvas = document.createElement('canvas');
        canvas.height = 150;
        canvas.width = 150;
        let ctx = canvas.getContext('2d');
        ctx.rotate((Math.PI/180) * 30);
        ctx.font = '18px serif';
        ctx.fillStyle = 'rgba(225,65,53, 0.3)';
        ctx.fillText(content, 65, 36);
        this.watermarkDataUrl = canvas.toDataURL();
      }
    },
    restoreWatermark() {
      !this.parentNode.getElementsByClassName('watermark').length && this.parentNode.append(this.watermark);
    },
    setStyle() {
      Object.assign(this.watermark.style, {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          'pointer-events': 'none',
          'background-repeat': 'repeat',
          'backgroundImage': `url(${this.watermarkDataUrl})`,
        });
    },
    observerChange() {
      // 选择需要观察变动的节点
      const targetNode = this.watermark;

      // 观察器的配置（需要观察什么变动）
      const config = { attributes: true, childList: true, subtree: true };
      const self = this;
      // 当观察到变动时执行的回调函数
      const callback = function(mutationsList) {
          for(let mutation of mutationsList) {
              if (mutation.removedNodes?.[0] === self.watermark) {
                  console.log('watermark was removed');
                  self.restoreWatermark();
              }
              else if (mutation.type === 'attributes') {
                  self.setStyle();
              }
          }
      };

      // 创建一个观察器实例并传入回调函数
      const observer = new MutationObserver(callback);

      // 以配置开始观察目标节点
      observer.observe(this.parentNode, {childList: true});
      observer.observe(targetNode, config);
    },
  },
};
</script>
