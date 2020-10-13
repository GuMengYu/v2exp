import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import plugins from './plugins';
require('./mock/index');

Vue.use(plugins);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  next();
});
new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
