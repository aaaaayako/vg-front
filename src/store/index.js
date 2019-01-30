import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fullName: '',
  },

  getters: {
    fullName(state) {
      return state.fullName;
    },
  },

  mutations: {
    setFullName(state, payload) {
      state.fullName = payload.fullName;
    },
  },

  actions: {
    doUpdate({ commit }, fullName) {
      commit('setFullName', { fullName });
    },
  },
});

export default store;
