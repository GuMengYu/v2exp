const Mock = require('mockjs')
import localConfig from '../config/local.config';
const request = `${localConfig.protocal}//${localConfig.url}:${localConfig.port}`;

Mock.mock(`${request}/mock/test`, require('./test'));

