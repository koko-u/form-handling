<template>
  <div class="input-form">
    <form class="ui form" @submit.prevent="submitForm">
      <div class="field">
        <label>
          New Item
          <input type="text" v-model="input.newItem" placeholder="Add an item!" />
        </label>
        <span class="error">{{ error.newItem }}</span>
      </div>
      <div class="field">
        <label>
          Email
          <input type="email" v-model="input.email" placeholder="What's your email" />
        </label>
        <span class="error">{{ error.email }}</span>
      </div>
      <div class="field">
        <label>
          Urgency
          <select class="ui fluid search dropdown" v-model="input.urgency">
            <option disabled value="">Please select one</option>
            <option>Nonessential</option>
            <option>Moderate</option>
            <option>Urgent</option>
          </select>
        </label>
        <span class="error">{{ error.urgency }}</span>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input id="termsAndConditions" type="checkbox" v-model="input.termsAndConditions" />
          <label for="termsAndConditions">
            I accept the terms and conditions
          </label>
          <span class="error">{{ error.termsAndConditions }}</span>
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
import { defineComponent, toRefs, reactive } from "vue";
import {
  EmptyField,
  hasError,
  InputField,
  InputFieldError
} from "@/models/InputField";
import { validateForm } from "@/validator";

export default defineComponent({
  name: "InputForm",
  props: {},
  setup(props, context) {
    const state = reactive({
      input: { ...EmptyField },
      error: {} as InputFieldError,
      itemList: [] as InputField[]
    });
    const submitForm = () => {
      state.error = validateForm(state.input);
      if (hasError(state.error)) {
        return;
      }

      state.itemList.push(state.input);
      state.input = EmptyField;
    };

    return {
      ...toRefs(state),
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
