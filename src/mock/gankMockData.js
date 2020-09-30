import Mock from 'mockjs';
// 获取 mock.Random 对象
const MRandom = Mock.Random
// mock数据，包括标题title、内容desc, 创建时间createdAt
const GanHuo = function () {
  let GanHuoList = []
  for (let i = 0; i < 10; i++) {
    let obj = {
        _id: MRandom.guid(),
        author: MRandom.cname(),
        category: 'Ganhuo',
        createdAt: MRandom.datetime(),
        desc: "用于项目测试，崩溃记录日志【可以查看，分享】和重启【多种重启app方式】，性能检测，网路拦截查看的工具小助手。提高开发效率……",
        images: ["https://gank.io/images/656582c9a5f94fe0bf98533350a412a2"],
        likeCounts: MRandom.integer(0, 100),
        publishedAt: MRandom.datetime(),
        stars: MRandom.integer(0, 100),
        type: "Android",
        url: MRandom.url(),
        views: MRandom.integer(0, 100),
        title: MRandom.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
    }
    GanHuoList.push(obj)
  }
  return {data: GanHuoList, status: 100, page: 1, page_count: 246, total_counts: 2453};
}

const Girls = () => {
  let GirlList = []
  for (let i = 0; i < 4; i++) {
    let obj = {
      author: MRandom.cname(),
      category: "Girl",
      createdAt: MRandom.datetime(),
      desc: "与其安慰自己平凡可贵，不如拼尽全力活得漂亮。​​​​",
      images: ["http://gank.io/images/f4f6d68bf30147e1bdd4ddbc6ad7c2a2"],
      likeCounts: MRandom.integer(0, 100),
      publishedAt: MRandom.datetime(),
      stars: MRandom.integer(0, 100),
      title: "第96期",
      type: "Girl",
      views: MRandom.integer(0, 100),
      _id: MRandom.guid(),
      url: MRandom.url(),
    }
    GirlList.push(obj)
  }
  return {data: GirlList, status: 100, page: 1, page_count: 246, total_counts: 2453};
}
export { GanHuo , Girls};
