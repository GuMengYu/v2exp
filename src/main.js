import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import plugins from './plugins';
import './mock/index';
import filters from './filters';
import i18n from './i18n';
import './scss/global.scss';
import store from './store';
Object.entries(filters).map(([key, fn]) => {
  Vue.filter(key, fn);
});

Vue.use(plugins);
Vue.config.productionTip = false;

const initApp = () => {
  const locale = store.getters['system/locale'];
  new Vue({
    i18n: i18n(locale),
    router,
    store,
    vuetify,
    render: h => h(App),
  }).$mount('#app');
};
initApp();
