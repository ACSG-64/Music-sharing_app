import { createStore } from 'vuex';
import auth from './modules/auth';
import player from './modules/player';

export default createStore({
  modules: {},
  state: {
    ...auth.state,
    ...player.state,
  },
  getters: {
    ...auth.getters,
    ...player.getters,
  },
  mutations: {
    ...auth.mutations,
    ...player.mutations,
  },
  actions: {
    ...auth.actions,
    ...player.actions,
  },
});
