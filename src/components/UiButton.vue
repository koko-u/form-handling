<template>
  <button class="ui button" :name="name" :value="value" @click="onButtonClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "UiButton",
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    value: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props, context) {

    const onButtonClick = (e: MouseEvent) => {
      const element = e.target;
      if (element) {
        const button = element as HTMLButtonElement;
        console.log(`The user clicked ${button.name}: ${button.value}`);
      }
    };

    return {
      onButtonClick
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
