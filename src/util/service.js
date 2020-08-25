import xhr from './xhr';

// 获取分类下的节点和主题信息
const getTabInfo = tabId => xhr.get(`/getTabInfo?tab=${tabId}`);

//获取首页右侧节点，热门主题
const getNodes = () => Promise.resolve({"hotNodes":[{"id":"qna","label":"问与答"},{"id":"jobs","label":"酷工作"},{"id":"programmer","label":"程序员"},{"id":"share","label":"分享发现"},{"id":"macos","label":"macOS"},{"id":"create","label":"分享创造"},{"id":"python","label":"Python"},{"id":"apple","label":"Apple"},{"id":"career","label":"职场话题"},{"id":"bb","label":"宽带症候群"},{"id":"android","label":"Android"},{"id":"gts","label":"全球工单系统"},{"id":"iphone","label":"iPhone"},{"id":"mbp","label":"MacBook Pro"},{"id":"cv","label":"求职"}],"newNodes":[{"id":"msfs","label":"微软飞行模拟"},{"id":"pygame","label":"PyGame"},{"id":"godot","label":"Godot"},{"id":"busuu","label":"Busuu"},{"id":"notion","label":"Notion"},{"id":"neovim","label":"Neovim"},{"id":"ps5","label":"PlayStation 5"},{"id":"watchos","label":"watchOS"},{"id":"ipados","label":"iPadOS"},{"id":"terminal","label":"Terminal"},{"id":"miracleplus","label":"奇绩创坛"},{"id":"bilibili","label":"哔哩哔哩"},{"id":"testflight","label":"TestFlight"},{"id":"wenyan","label":"文言文编程语言"},{"id":"graphql","label":"GraphQL"},{"id":"2020","label":"2020"},{"id":"nebula","label":"Nebula"},{"id":"objc","label":"Objective-C"},{"id":"cpp","label":"C++"},{"id":"meraki","label":"Meraki"}],"hotTopics":[{"avatarImg":"https://cdn.v2ex.com/gravatar/86ba9c00cf69caa0776f3207ffe8ea4b?s=24&d=retro","id":"701141","title":"你们遇到过组长强制要求代码实现的吗?"},{"avatarImg":"https://cdn.v2ex.com/gravatar/c1135859d89adce020dbdc0343b2eb69?s=24&d=retro","id":"701025","title":"1W 多的 MBP 和 五六千的 WIN 本，差距大吗？不看屏幕的话"},{"avatarImg":"https://cdn.v2ex.com/avatar/7cb3/ea38/465532_normal.png?m=1579222590","id":"701128","title":"有没有什么助眠的方法"},{"avatarImg":"https://cdn.v2ex.com/avatar/ada0/7f07/330266_normal.png?m=1584896457","id":"701082","title":"晚上 10 点躺在床上，发现合租了两年的室友把你的 AirPods Pro 调包了，你会怎么办？"},{"avatarImg":"https://cdn.v2ex.com/gravatar/9d78d98eb716bac9bc41db70958f6b31?s=24&d=retro","id":"701131","title":"三年工作经验平薪跳槽去大厂值得吗？"},{"avatarImg":"https://cdn.v2ex.com/avatar/46c6/6e44/206024_normal.png?m=1574980271","id":"701241","title":"你怎么评价纯银这个人？"},{"avatarImg":"https://cdn.v2ex.com/avatar/1886/2182/461515_normal.png?m=1577863370","id":"701124","title":"也没融钱，就俩程序员自己搞， 12 个月从 0 到 700 万"},{"avatarImg":"https://cdn.v2ex.com/gravatar/a19cf4180202dab1be072042bd9c990b?s=24&d=retro","id":"701157","title":"如何获得对自己长的好不好看的客观评价？"}]});
 // xhr.get(`/getIndexNodes`);

/**
 * 获取主题详细信息
 * @param id
 */
const getTopicInfo = id => xhr.get(`/getTopicInfo?id=${id}`);

// 获取主题下的回复
const getTopicReply = params => xhr.post('/getTopicReply', params);

// 获取网站状态
const getSiteStatus = () => xhr.get('/status');

// 获取节点信息 
const getNodeInfo = id => xhr.get(`/getNodeInfo?id=${id}`);

// mock data
const mockTest = () => xhr.get('/mock/test');
/**
 * 获取主题列表
 * @param {nodeId, nodeName, userName} condition
 * nodeId 根据节点id返回
 * nodeName 根据节点名称返回
 * userName 返回用户发表的主题列表 
 */
const getTopics = condition => {
    return xhr.post('/getTopics', condition);
}
export default {
    getTabInfo,
    getNodes,
    getNodeInfo,
    getTopicInfo,
    getTopics,
    getTopicReply,
    getSiteStatus,
    mockTest,
}
