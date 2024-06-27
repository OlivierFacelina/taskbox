<template>
  <div>
    <div class="page lists-show" v-if="error">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <p class="title-message">Oh no!</p>
        <p class="subtitle-message">Something went wrong</p>
      </div>
    </div>
    <div class="page lists-show" v-else>
      <nav>
        <h1 class="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";

export default {
  name: "PureInboxScreen",
  components: { TaskList },
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
