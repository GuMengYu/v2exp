import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    },
    'zh-CN': {
        message: {
            hello: '你好世界'
        }
    },
}
const i18n = new VueI18n({
    locale: 'zh',
    messages,
})
export default i18n;