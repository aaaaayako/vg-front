import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fullName: '',
    chocoNumber: 1,
    prizeWinner: [],
    createdChannelUrl: '',
  },

  getters: {
    fullName(state) {
      return state.fullName;
    },
    chocoNumber(state) {
      return state.chocoNumber;
    },
    prizeWinner(state) {
      return state.prizeWinner;
    },
    createdChannelUrl(state) {
      return state.createdChannelUrl;
    },
  },

  mutations: {
    setFullName(state, payload) {
      state.fullName = payload.fullName;
    },
    setChocoNumber(state, payload) {
      state.chocoNumber = payload.chocoNumber;
    },
    setPrizeWinner(state, payload) {
      state.prizeWinner = payload.data.name;
      state.createdChannelUrl = payload.data.url;
    },
  },

  actions: {
    doUpdate({ commit }, { fullName }) {
      commit('setFullName', { fullName });
    },
    doUpdateNum({ commit }, { chocoNumber }) {
      commit('setChocoNumber', { chocoNumber });
    },
    async post({ commit }, { fullName, chocoNumber }) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ name: fullName, number: parseInt(chocoNumber, 10) }),
        url: '',
      };
      await axios(options).then((res) => {
        if (res.status === 200) {
          commit('setPrizeWinner', res);
        } else {
          throw new Error('レスポンスエラー');
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
      router.push('/Result');
    },
  },
});

export default store;
