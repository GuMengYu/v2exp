import xhr from './xhr';

// 获取分类下的节点和主题信息
const getTabInfo = tabId => xhr.get(`/getTabInfo?tab=${tabId}`);

//获取首页右侧节点，热门主题
const getNodes = () => xhr.get(`/getIndexNodes`);

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
}
