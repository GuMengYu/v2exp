import Vuex from 'vuex';
import Vue from 'vue';
import system from './modules/system';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {system},
});
