import * as Yup from "yup"
import { FormComponentProps } from "../interface/FormComponentProps"

export const formConfig: FormComponentProps = {
  formHeading: "Create Account",
  formSubmit: "Sign Up",
  formInputValues: [
    {
      autoComplete: "off",
      type: "text",
      name: "firstName",
      placeholder: "First name",
      label: "First name",
    },
    {
      autoComplete: "off",
      type: "text",
      name: "lastName",
      placeholder: "Last name",
      label: "Last name",
    },
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
    {
      autoComplete: "off",
      type: "password",
      name: "passwordConfirm",
      placeholder: "Confirm Password",
      label: "passwordConfirm",
    },
  ],
  formValidators: {
    firstName: Yup.string()
      .max(25, "First name must be less or equal to 25 characters.")
      .required("First name is required"),
    lastName: Yup.string()
      .max(30, "Last name must be less or equal to 30 characters.")
      .required("Last name is required."),
    email: Yup.string()
      .email("Invalid Email Format.")
      .required("Email is required."),
    password: Yup.string()
      .max(20, "Password must be less or equal to 20 characters.")
      .min(8, "Password must be at least 8 characters long.")
      .required("Password is required."),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Password check is required."),
  },
  formInstead: "Log In instead ?",
  formInsteadRoute: "/auth/signin",
  formSubmitFunction: "create",
}
