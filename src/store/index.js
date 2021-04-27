import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rend: "",
    home: "",
    eight: "",
    five: "",
    flag: "",
    six: "",
  },
  mutations: {
    render(state) {
      state.rend = true;
    },
    showMenuHome(state) {
      (state.home = true),
        (state.eight = false),
        (state.five = false),
        (state.flag = false),
        (state.six = false);
    },
    showMenuEight(state) {
      (state.home = false),
        (state.five = false),
        (state.flag = false),
        (state.six = false),
        (state.eight = true);
    },
    showMenuFive(state) {
      (state.home = false),
        (state.eight = false),
        (state.five = true),
        (state.flag = false),
        (state.six = false);
    },
    showMenuFlag(state) {
      (state.home = false),
        (state.eight = false),
        (state.five = false),
        (state.flag = true),
        (state.six = false);
    },
    showMenuSix(state) {
      (state.home = false),
        (state.eight = false),
        (state.five = false),
        (state.flag = false),
        (state.six = true);
    },
  },
  actions: {},
  modules: {},
});
