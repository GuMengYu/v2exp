import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import plugins from './plugins';
import './mock/index';
import filters from './filters';
import i18n from './i18n';

Object.entries(filters).map((key, fn) => {
  Vue.filter(key, fn);
});

Vue.use(plugins);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  next();
});
new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
