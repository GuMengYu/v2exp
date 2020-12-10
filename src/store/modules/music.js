import {getSongData, getSongUrl, getPlayList} from '@util/musicService';

export default {
  namespaced: true,
  state: {
    playing: false,
    resourceUrl: '',
    song: {},
    currentTime: 0,
    playList: {},
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
    async playList({commit}, listId) {
      const {playlist} = await getPlayList(listId);
      commit('UPDATE_PLAYLIST', playlist);
    },
  },
  mutations: {
    UPDATE_PLAYLIST(state, list) {
      state.playList = list;
    },
    UPDATE_SONG(state, song) {
      state.song = song;
    },
    UPDATE_PLAYER(state, payload) {
      Object.keys(payload).map(key => {
        state[key] = payload[key];
      });
    },
  },
};
