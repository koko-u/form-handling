import { InputField, InputFieldError } from "../models/InputField";
import * as EmailValidator from "email-validator";

const required = (name: string, value: string|boolean): string|undefined => {
  if (value) {
    return undefined;
  } else {
    return `${name} is Requird`;
  }
};

export const validateForm = (inputField: InputField): InputFieldError => {
  const error = {
    newItem: required("New Item", inputField.newItem),
    email: required("Email", inputField.email),
    urgency: required("Urgency", inputField.urgency),
    termsAndConditions: required(
      "Terms and condition",
      inputField.termsAndConditions
    )
  };
  if (!error.email && !EmailValidator.validate(inputField.email)) {
    error.email = "Invalid Email";
  }

  return error;
};
