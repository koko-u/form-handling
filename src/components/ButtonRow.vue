<template>
  <div>
    <UiButton name="button-hoodie" value="fullstack-hoodie">
      Hoodie
    </UiButton>
    <UiButton name="button-tee" value="fullstack-tee">
      Tee
    </UiButton>
    <UiButton name="button-fitted" value="fullstack-fitted-cap">
      Fitted Cap
    </UiButton>
    <UiButton name="button-jaket" value="fullstack-jacket">
      Jacket
    </UiButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiButton from "./UiButton.vue";

export default defineComponent({
  name: "ButtonRow",
  components: { UiButton },
  props: {},
  setup(props, context) {
    return {
    };
  }
});
</script>

<style lang="scss" scoped></style>
