const Mock = require('mockjs');
const localConfig  = require('../../config/local.config');
const request = `${localConfig.protocal}//${localConfig.url}:${localConfig.port}`;

import {produceNewsData, toDayHot, tabTopicList, topicData, replies} from './test';
import {GanHuo, Girls, Banners, Post} from './gankMockData';
import {musicDetail, playList, songUrl} from './music';
import { songList } from '@/mock/songListData';

Mock.mock(`${request}/mock/test`, produceNewsData);
Mock.mock(`${request}/getToDayHot`, toDayHot);
Mock.mock(/getTabInfo/, tabTopicList);
Mock.mock(/getTopicInfo/, topicData);
Mock.mock(/getTopicReply/, replies);


Mock.mock(/data\/category\/GanHuo\/type/, GanHuo);
Mock.mock(/data\/category\/Girl\/type/, Girls);
Mock.mock(/banner/, Banners);
Mock.mock(/post/, Post);

Mock.mock(/song\/detail/, musicDetail);
Mock.mock(/song\/url/, songUrl);
Mock.mock(/playlist\/detail/, playList);
Mock.mock(/personalized/, songList);


