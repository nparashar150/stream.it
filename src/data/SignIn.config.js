import * as Yup from "yup"

export const formConfig = {
  formHeading: "Sign In",
  formSubmit: "Log In",
  formInputValues: [
    {
      autoComplete: "off",
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      autoComplete: "off",
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "password",
    },
  ],
  formValidators: {
    email: Yup.string()
      .email("Invalid Email Format.")
      .required("Email is required."),
    password: Yup.string()
      .max(20, "Password must be less or equal to 20 characters.")
      .min(8, "Password must be at least 8 characters long.")
      .required("Password is required."),
    passwordConfirm: Yup.string()
  },
  formInstead: "Sign Up instead ?",
  formInsteadRoute: "/auth/signup",
  formSubmitFunction: "login",
  loginInGoogle: true
}
