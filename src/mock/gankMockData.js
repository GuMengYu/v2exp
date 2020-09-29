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
export { GanHuo };
