<template>
  <div class="input-form">
    <form class="ui form" @submit.prevent="submitForm">
      <div class="field">
        <input type="text" v-model="newItem" placeholder="Add an item!" />
      </div>
      <button class="ui button">Submit</button>
    </form>
    <div class="ui segment" v-if="itemList.length > 0">
      <h4 class="ui header">Items</h4>
      <ul>
        <li class="item" v-for="item in itemList" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InputForm",
  props: {},
  setup(props, context) {
    const newItem = ref<string>("");
    const itemList = ref<string[]>([]);
    const submitForm = (e: Event) => {
      itemList.value.push(newItem.value);
      newItem.value = "";
    };

    return {
      submitForm,
      newItem,
      itemList
    };
  }
});
</script>

<style lang="scss" scoped></style>
