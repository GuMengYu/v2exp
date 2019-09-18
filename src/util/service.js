import xhr from './xhr';

const BKHOST = 'http://localhost:3000/';
const V2EXHOST = 'https://v2ex.com/';
const getTabInfo = tabId => xhr.get(`${BKHOST}getTabInfo?tab=${tabId}`);
const getNodes = () => xhr.get(`${BKHOST}getIndexNodes`);

export default {
    getTabInfo,
    getNodes,
}
