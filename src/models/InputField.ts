export type InputField = {
  newItem: string;
  email: string;
  urgency: string;
  termsAndConditions: boolean;
};

export const EmptyField: InputField = {
  newItem: "",
  email: "",
  urgency: "",
  termsAndConditions: false
};
