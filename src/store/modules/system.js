export default {
  namespaced: true,
  state: {
    theme: localStorage.getItem('setting')?.theme ?? 'system',
    locale: localStorage.getItem('setting')?.locale ?? 'cn',
  },
  mutations: {
    updateTheme(state, theme) {
      const system = localStorage.getItem('setting') ?? {};
      localStorage.setItem('setting', JSON.stringify({...system, theme}));
    },
  },
  actions: {

  },
  getters: {

  },
};
