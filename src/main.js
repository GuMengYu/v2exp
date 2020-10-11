import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import {optionalChaining} from '@/util/fn';
require('./mock/index');

import dayjs from "dayjs";
import 'dayjs/locale/zh-cn';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

Vue.prototype.$$ = optionalChaining;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  next();
});
new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
