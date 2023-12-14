import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import FirstComponentVue from "./FirstComponent.vue";

describe("First Component", () => {
  it("should renders the component", () => {
    const wrapper = mount(FirstComponentVue);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toBe('First Component')
  });
});
