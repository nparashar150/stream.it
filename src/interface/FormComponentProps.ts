import { RequiredStringSchema } from "yup/lib/string"
import { AnyObject } from "yup/lib/types"

export interface FormComponentProps {
  formHeading?: string
  formSubmit?: string
  formInputValues?: Array<{
    autoComplete: "off" | "on"
    type: "password" | "email" | "text"
    name: "password" | "email" | "firstName" | "lastName" | "passwordConfirm"
    placeholder:
      | "First name"
      | "Last name"
      | "Email"
      | "Password"
      | "Confirm Password"
    label:
      | "password"
      | "email"
      | "firstName"
      | "lastName"
      | "passwordConfirm"
      | "First name"
      | "Last name"
      | "Email"
      | "Password"
      | "Confirm Password"
  }>
  formValidators?: {
    firstName?: RequiredStringSchema<string, AnyObject>
    lastName?: RequiredStringSchema<string, AnyObject>
    email?: RequiredStringSchema<string, AnyObject>
    password?: RequiredStringSchema<string, AnyObject>
    passwordConfirm?: RequiredStringSchema<string, AnyObject>
  }
  formInstead?: string
  formInsteadRoute?: string
  formSubmitFunction?: string
  loginInGoogle?: boolean
  forgotPassword?: boolean
  createmobileview?: boolean
}
