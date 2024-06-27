import { createApp } from "vue";
import { createStore } from "vuex";
import PureInboxScreen from "./PureInboxScreen.vue";
import { action } from "@storybook/addon-actions";
import { defaultTasksData } from "./PureTaskList.stories";

const store = createStore({
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

export const Default = () => {
  const app = createApp({
    components: { PureInboxScreen },
    template: `<pure-inbox-screen />`,
  });
  app.use(store);
  return app.mount("#root");
};

export const error = () => {
  const app = createApp({
    components: { PureInboxScreen },
    template: `<pure-inbox-screen :error="true" />`,
  });
  app.use(store);
  return app.mount("#root");
};
