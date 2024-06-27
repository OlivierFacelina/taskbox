import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import Task from "./Task.vue";

export default {
  title: "Task",
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updated_at: new Date(2019, 0, 1, 9, 0),
};

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`;
const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

// default task state
export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: object("task", { ...taskData }),
    },
  },
  methods: actionsData,
});

// pinned task state
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: "TASK_PINNED",
      }),
    },
  },
  methods: actionsData,
});

// archived task state
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: "TASK_ARCHIVED",
      }),
    },
  },
  methods: actionsData,
});

export const LongTitle = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        title: longTitle,
      }),
    },
  },
  methods: actionsData,
});
