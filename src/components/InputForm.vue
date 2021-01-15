<template>
  <div class="input-form">
    <form class="ui form" @submit.prevent="submitForm">
      <div class="field">
        <input type="text" v-model="input.newItem" placeholder="Add an item!" />
      </div>
      <div class="field">
        <input
          type="email"
          v-model="input.email"
          placeholder="What's your email"
        />
      </div>
      <div class="field">
        <label>Urgency</label>
        <select class="ui fluid search dropdown" v-model="input.urgency">
          <option disabled value="">Please select one</option>
          <option>Nonessential</option>
          <option>Moderate</option>
          <option>Urgent</option>
        </select>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input id="termsAndConditions" type="checkbox" v-model="input.termsAndConditions">
          <label for="termsAndConditions">I accept the terms and conditions</label>
        </div>
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
import { EmptyField, InputField } from "@/models/InputField";

export default defineComponent({
  name: "InputForm",
  props: {},
  setup(props, context) {
    const input = ref<InputField>(EmptyField);
    const itemList = ref<InputField[]>([]);
    const submitForm = (e: Event) => {
      itemList.value.push(input.value);
      input.value = EmptyField;
    };

    return {
      submitForm,
      input,
      itemList
    };
  }
});
</script>

<style lang="scss" scoped></style>
