import {getSongData, getSongUrl} from '@util/musicService';

export default {
  namespaced: true,
  state: {
    playing: false,
    resourceUrl: '',
    song: {},
    currentTime: 0,
    pendingList: [],
    showList: false,
  },
  getters: {

  },
  actions: {
    async startPlayMusic({ commit }, id) {
      commit('UPDATE_PLAYER', {playing: false, currentTime: 0});
      const [{songs}, {data}] = await Promise.all([getSongData([id]), getSongUrl(id)]);
      console.log(songs, data);
      commit('UPDATE_SONG', songs[0]);
      commit('UPDATE_PLAYER', {
        playing: false,
        resourceUrl:  data?.[0]?.url,
      });
    },
  },
  mutations: {
    UPDATE_PENDING_LIST(state, list) {
      state.pendingList = list;
    },
    UPDATE_SONG(state, song) {
      state.song = song;
    },
    UPDATE_PLAYER(state, payload) {
      Object.keys(payload).map(key => {
        state[key] = payload[key];
      });
    },
    UPDATE_WAIT_LIST(state, showList = false) {
      state.showList = showList;
    },
  },
};
