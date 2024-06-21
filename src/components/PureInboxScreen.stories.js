import { createApp } from 'vue';
import Vuex from "vuex";
import PureInboxScreen from "./PureInboxScreen.vue";
import { action } from "@storybook/addon-actions";
import { defaultTasksData } from "./PureTaskList.stories";
const app = createApp(PureInboxScreen);

// Utilisez Vuex avec l'application créée
app.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: defaultTasksData,
  },
  actions: {
    pinTask(context, id) {
      action("pinTask")(id);
    },
    archiveTask(context, id) {
      action("archiveTask")(id);
    },
  },
});

export default {
  title: "PureInboxScreen",
  excludeStories: /.*store$/,
};

export const Default = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen />`,
  store,
});

export const error = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen :error="true" />`,
});
