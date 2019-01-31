import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fullName: '',
    prizeWinner: '',
  },

  getters: {
    fullName(state) {
      return state.fullName;
    },
    prizeWinner(state) {
      return state.prizeWinner;
    },
  },

  mutations: {
    setFullName(state, payload) {
      state.fullName = payload.fullName;
    },
    setPrizeWinner(state, payload) {
      state.prizeWinner = payload.data.name;
    },
  },

  actions: {
    doUpdate({ commit }, fullName) {
      commit('setFullName', { fullName });
    },
    post({ commit }, fullName) {
      // CORSエラー解決したらこっち
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ name: fullName }),
        url: 'https://r17eo472bg.execute-api.ap-northeast-1.amazonaws.com/dev/users/random',
      };
      axios(options).then((res) => {
        if (res.status === 200 && res.data.status === 'ok') {
          commit('setPrizeWinner', { res });
        } else {
          throw new Error('レスポンスエラー');
        }
      }).catch((error) => {
        console.log(error);
      });
      // test data
      commit('setPrizeWinner', { data: { name: unescape('\u8352\u5ddd\u6dbc\u592a') } });
    },
  },
});

export default store;
