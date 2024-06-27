<template>
  <PureInboxScreen :error="isError" />
</template>

<script>
import PureInboxScreen from "./PureInboxScreen.vue";

import { computed } from "vue";

import { useTaskStore } from "../store";

export default {
  name: "InboxScreen",
  components: { PureInboxScreen },
  setup() {
    const store = useTaskStore();

    const isError = computed(() => store.status === "error");
    return {
      isError,
    };
  },
};
</script>
