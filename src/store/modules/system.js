import localState from '../localState';

export default {
  namespaced: true,
  state: {
    theme: localState.get('theme') ?? 'system',
    locale: localState.get('locale') ?? 'zh',
  },
  mutations: {
    updateTheme(state, theme) {
      if(state.theme !== theme) {
        localState.set('theme', theme);
        state.theme = theme;
      }
    },
    updateLanguage(state, locale) {
      if(state.locale !== locale) {
        localState.set('locale', locale);
        state.locale = locale;
      }
    },
  },
  actions: {

  },
  getters: {
    theme(state) {
      return state.theme;
    },
    locale(state) {
      return state.locale;
    },
  },
};
