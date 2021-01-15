export type InputField = {
  newItem: string;
  email: string;
  urgency: string;
  termsAndConditions: boolean;
};

export type InputFieldError = {
  newItem?: string;
  email?: string;
  urgency?: string;
  termsAndConditions?: string;
};

export const EmptyField: InputField = {
  newItem: "",
  email: "",
  urgency: "",
  termsAndConditions: false
};

export const hasError = (error: InputFieldError): boolean => {
  return (
    !!error.newItem ||
    !!error.email ||
    !!error.urgency ||
    !!error.termsAndConditions
  );
};
