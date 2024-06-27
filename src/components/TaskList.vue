<template>
  <PureTaskList
    :tasks="tasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import PureTaskList from "./PureTaskList.vue";

import { computed } from "vue";

import { useTaskStore } from "../store";

export default {
  components: { PureTaskList },
  name: "TaskList",
  setup() {
    const store = useTaskStore();

    const tasks = computed(() => store.getFilteredTasks);

    const archiveTask = (task) => store.archiveTask(task);
    const pinTask = (task) => store.pinTask(task);

    return {
      tasks,
      archiveTask,
      pinTask,
    };
  },
};
</script>
