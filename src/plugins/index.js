
import Vue from 'vue';
import { Message } from './snackbar';
import dayjs from './dayjs';
Vue.prototype.$message = Message;

const install = function(Vue, opts = {}) {
    Vue.prototype.$message = Message;
    Vue.prototype.$dayjs = dayjs;
  };

export default {
    install,
}