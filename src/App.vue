<template>
  <div class="ui container">
    <h2 class="ui header">Fullstack Clothing Inquiry Sheet</h2>
    <InputForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputForm from "./components/InputForm.vue";

export default defineComponent({
  name: "App",
  components: {
    InputForm
  }
});
</script>

<style lang="scss">
</style>
