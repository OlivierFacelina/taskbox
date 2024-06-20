import TaskList from "./TaskList.vue";
import { taskData, actionsData } from "./Task.stories";

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story /></div>',
  };
};
export default {
  title: "TaskList",
  excludeStories: /.*Data$/,
  decorators: [paddedList],
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

export const Default = () => ({
  components: { TaskList },
  template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
  props: {
    tasks: {
      default: () => defaultTasksData,
    },
  },
  methods: actionsData,
});

export const WithPinnedTasks = () => ({
  components: { TaskList },
  template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
  props: {
    tasks: {
      default: () => withPinnedTasksData,
    },
  },
  methods: actionsData,
});

export const Loading = () => ({
  components: { TaskList },
  template: `<task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
  methods: actionsData,
});

export const Empty = () => ({
  components: { TaskList },
  template: `<task-list @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
  methods: actionsData,
});
