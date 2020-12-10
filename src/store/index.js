import Vuex from 'vuex';
import Vue from 'vue';
import system from './modules/system';
import music from './modules/music';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    system,
    music,
  },
});
