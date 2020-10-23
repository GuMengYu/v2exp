const ready = ({config}) => {
  let offset = 0;
  return (ctx, process) => {
    ctx.clearRect(0, 0, config.width, config.height);


    const {width, height} = config;

    const startX = 0;
    const waveHeight = config.waveHeight; // 波浪高度,数越大越高
    offset += config.speed; // 水平位移

    const absoluteOffSet = waveHeight + height; // 相对于开始时垂直偏移量
    const processHeight = (process + 3) * waveHeight;
    ctx.lineWidth = 1;

    const renderByPoint = (ctx) => {
      const points = [];
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      for (let x = startX; x < startX + width; x += 20 / width) {
        const y =  absoluteOffSet + (waveHeight) * Math.sin((startX + x) * (config.waveWidth) + offset) - processHeight;
        points.push([x, y]);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(startX, height);
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.stroke();

      let lingered = ctx.createLinearGradient(0, height,0,0);
      lingered.addColorStop(0,'#fff');
      lingered.addColorStop(0.5, '#009688');
      lingered.addColorStop(1, '#00695C');
      ctx.fillStyle = lingered;
      ctx.fill();
    };
    renderByPoint(ctx);
  };
};
const drawCircle = ({ctx, config}) => {
  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(config.width / 2,config.height / 2,(config.width - 5) / 2,0,Math.PI*2,true);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.clip();
  return ctx;
};
export {
  ready,
  drawCircle,
};
