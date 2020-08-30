const Mock = require('mockjs')
const localConfig  = require('../config/local.config');
const request = `${localConfig.protocal}//${localConfig.url}:${localConfig.port}`;

import {produceNewsData, indexNodes, tabData} from './test';

Mock.mock(`${request}/mock/test`, produceNewsData);
Mock.mock(`${request}/getIndexNodes`, indexNodes);
Mock.mock(/getTabInfo/, tabData);




