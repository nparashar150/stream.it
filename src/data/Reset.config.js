import * as Yup from "yup"

export const formConfig = {
  formHeading: "Reset Password",
  formSubmit: "Reset",
  formInputValues: [
    {
      autoComplete: "off",
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email",
    },
  ],
  formValidators: {
    email: Yup.string()
      .email("Invalid Email Format.")
      .required("Email is required."),
  },
  formInstead: "Back to Sign In",
  formInsteadRoute: "/auth/signin",
  formSubmitFunction: "forgotPassword"
}
