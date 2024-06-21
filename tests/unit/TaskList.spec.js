import Vue from "vue";
import TaskList from "../../src/components/TaskList.vue";
import { withPinnedTasksData } from "../../src/components/PureTaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasksData },
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );
  expect(firstTaskPinned).not.toBe(null);
});
