import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: "1", title: "Quelque chose", state: "TASK_INBOX" },
      { id: "2", title: "Quelque chose de plus", state: "TASK_INBOX" },
      { id: "3", title: "Autre chose", state: "TASK_INBOX" },
      { id: "4", title: "Encore quelque chose", state: "TASK_INBOX" },
    ],
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = "TASK_ARCHIVED";
    },
    PIN_TASK(state, id) {
      state.tasks.find((task) => task.id === id).state = "TASK_PINNED";
    },
  },
  actions: {
    archiveTask({ commit }, id) {
      commit("ARCHIVE_TASK", id);
    },
    pinTask({ commit }, id) {
      commit("PIN_TASK", id);
    },
  },
});
