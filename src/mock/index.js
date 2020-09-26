const Mock = require('mockjs')
const localConfig  = require('../../config/local.config');
const request = `${localConfig.protocal}//${localConfig.url}:${localConfig.port}`;

import {produceNewsData, toDayHot, tabTopicList, topicData} from './test';

Mock.mock(`${request}/mock/test`, produceNewsData);
Mock.mock(`${request}/getToDayHot`, toDayHot);
Mock.mock(/getTabInfo/, tabTopicList);
Mock.mock(/getTopicInfo/, topicData);





