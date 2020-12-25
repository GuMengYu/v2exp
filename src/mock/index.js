const Mock = require('mockjs');
const localConfig  = require('../../config/local.config');
const request = `${localConfig.protocal}//${localConfig.url}:${localConfig.port}`;

import {produceNewsData, toDayHot, tabTopicList, topicData, replies} from './test';
import {GanHuo, Girls, Banners, Post} from './gankMockData';
import {musicDetail, songUrl, songLrc} from '@/mock/music/music';
import recommendPlayList from '@/mock/music/playlist-recommend.json';
import playlist from '@/mock/music/playlist.json';
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
Mock.mock(/playlist\/detail/, () => playlist);
Mock.mock(/personalized/, () => recommendPlayList);
Mock.mock(/lyric/, songLrc);


