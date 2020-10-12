
import Vue from 'vue';
import {Message} from './snackbar';
Vue.prototype.$message = Message;

const install = function(Vue, opts = {}) {
    Vue.prototype.$message = Message;
  };

export default {
    install,
}