import Vue from "vue";
import PureTaskList from "../../src/components/PureTaskList.vue";
import { withPinnedTasksData } from "../../src/components/PureTaskList.stories";

// eslint-disable-next-line no-undef
it("renders pinned tasks at the start of the list", () => {
  const Constructor = Vue.extend(PureTaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasksData },
  }).$mount();
  const lastTaskInput = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );
  // eslint-disable-next-line no-undef
  expect(lastTaskInput).not.toBe(null);
});
