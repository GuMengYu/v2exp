import xhr from './xhr';

const BKHOST = 'http://localhost:3000/';
const V2EXHOST = 'https://v2ex.com/api';

// 获取分类下的节点和主题信息
const getTabInfo = tabId => xhr.get(`${BKHOST}getTabInfo?tab=${tabId}`);

//获取首页右侧节点，热门主题
const getNodes = () => xhr.get(`${BKHOST}getIndexNodes`);

/**
 * 获取主题详细信息
 * @param id
 */
const getTopicInfo = id => xhr.get(`${V2EXHOST}topics/show.json?id=${id}`);

// 获取主题下的回复
const getTopicReply = params => xhr.get(`${V2EXHOST}replies/show?topic_id=${params.id}&page=${params.page}&page_size=${params.pageSize}`);

// 获取网站状态
const getSiteStatus = () => xhr.get(`${V2EXHOST}site/stats.json`);

// 获取节点信息 
const getNodeInfo = id => xhr.get(`${V2EXHOST}nodes/show.json?id=${id}`);

/**
 * 获取主题列表
 * @param {nodeId, nodeName, userName} params
 * nodeId 根据节点id返回
 * nodeName 根据节点名称返回
 * userName 返回用户发表的主题列表 
 */
const getTopics = params => {
    let query = [];
    params.nodeId && query.push(`node_id=${params.nodeId}`);
    params.nodeName && query.push(`nodename=${params.nodeName}`);
    params.userName && query.push(`username=${params.userName}`);
    return xhr.get(`${V2EXHOST}topics/show.json?${params.join('&')}`);
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
