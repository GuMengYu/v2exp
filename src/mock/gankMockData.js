import Mock from 'mockjs';
// 获取 mock.Random 对象
const MRandom = Mock.Random;
// mock数据，包括标题title、内容desc, 创建时间createdAt
const images = [
  'https://ae01.alicdn.com/kf/U762ce81ae5ad48b798f241c2d91c36d3A.jpg_300x300xz.jpg',
  'https://ae01.alicdn.com/kf/U6624600595ca4e759992b895a9445cd5Q.jpg_300x300xz.jpg',
  'https://ae01.alicdn.com/kf/U72d9042334064e53bdd456fcc0414d3eC.jpg_300x300xz.jpg',
  'https://gank.io/images/131bc9a6661e46689af16b96a396facc/crop/1/w/300',
];
const type = [
  'Android',
  'iOS',
  'Flutter',
  '前端',
  'APP',
];
const GanHuo = function () {
  let GanHuoList = [];
  for (let i = 0; i < 5; i++) {
    let obj = {
      _id: MRandom.guid(),
      author: MRandom.cname(),
      category: 'Ganhuo',
      createdAt: MRandom.datetime(),
      desc: MRandom.ctitle(30, 70),
      images: [images[MRandom.integer(0, 3)]],
      likeCounts: MRandom.integer(0, 100),
      publishedAt: MRandom.datetime(),
      stars: MRandom.integer(0, 100),
      type: type[MRandom.integer(0, 4)],
      url: MRandom.url(),
      views: MRandom.integer(0, 100),
      title: MRandom.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
    };
    GanHuoList.push(obj);
  }
  return { data: GanHuoList, status: 100, page: 1, page_count: 246, total_counts: 2453 };
};

const girlsImages = [
  'http://gank.io/images/f4f6d68bf30147e1bdd4ddbc6ad7c2a2', 
  'http://gank.io/images/dc75cbde1d98448183e2f9514b4d1320', 
  'http://gank.io/images/6b2efa591564475fb8bc32291fb0007c', 
  'http://gank.io/images/d6bba8cf5b8c40f9ad229844475e9149', 
  'http://gank.io/images/9fa43020cf724c69842eec3e13f6d21c', 
  'http://gank.io/images/d237f507bf1946d2b0976e581f8aab9b', 
  'http://gank.io/images/25d3e3db2c1248bb917c09dc4f50a46f', 
  'http://gank.io/images/19c99c447e0a40a6b3ff89951957cfb1', 
  'http://gank.io/images/f0c192e3e335400db8a709a07a891b2e', 
  'http://gank.io/images/bdb35e4b3c0045c799cc7a494a3db3e0',
];
const Girls = () => {
  let GirlList = [];
  for (let i = 0; i < 4; i++) {
    let obj = {
      author: MRandom.cname(),
      category: 'Girl',
      createdAt: MRandom.datetime(),
      desc: MRandom.ctitle(15, 30),
      images: [girlsImages[MRandom.integer(0, 9)]],
      likeCounts: MRandom.integer(0, 100),
      publishedAt: MRandom.datetime(),
      stars: MRandom.integer(0, 100),
      title: '第96期',
      type: 'Girl',
      views: MRandom.integer(0, 100),
      _id: MRandom.guid(),
      url: MRandom.url(),
    };
    GirlList.push(obj);
  }
  return { data: GirlList, status: 100, page: 1, page_count: 246, total_counts: 2453 };
};
export { GanHuo, Girls };
