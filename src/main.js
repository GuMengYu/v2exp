import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import plugins from './plugins';
import './mock/index';
import filters from './filters';
import i18n from './i18n';
import './scss/global.scss';

Object.entries(filters).map((key, fn) => {
  Vue.filter(key, fn);
});

Vue.use(plugins);
Vue.config.productionTip = false;

const initApp = () => {
  const locale = localStorage.getItem('locale') || 'zh';
  new Vue({
    i18n: i18n(locale),
    router,
    vuetify,
    render: h => h(App),
  }).$mount('#app');
};
initApp();
