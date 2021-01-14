<template>
  <div class="ui container">
    <h2 class="ui header">What is your favorite Fullstack clothing item?</h2>
    <ButtonRow />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonRow from "@/components/ButtonRow.vue";

export default defineComponent({
  name: "App",
  components: {
    ButtonRow
  }
});
</script>

<style lang="scss"></style>
