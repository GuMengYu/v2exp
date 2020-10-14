import VueI18n from 'vue-i18n';
import Vue from 'vue';
import zh from './resource/zh';
import en from './resource/en';

Vue.use(VueI18n);

export default (locale = 'zh') => new VueI18n({
    locale,
    messages: {zh, en},
});