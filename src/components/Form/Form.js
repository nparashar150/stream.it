import React from "react"
import { Formik } from "formik"
import {
  FormFullPageWrapper,
  FormWrapper,
  FormSubmit,
  FormHeading,
  FormInstead,
  FormLoginWithGoogleWrapper,
  LogInWithGoogle,
  DividerLine,
  OrLine,
} from "./FormElements"
import { FormInput } from "./FormInput"
import * as Yup from "yup"
import { lightTheme } from "../../theme/global-theme"
import {
  createUserAccount,
  loginUserAccount,
  resetEmailPassword,
  loginWithGoogleAccount,
} from "../../firebase"
import { FcGoogle } from "react-icons/fc/index"

const Form = ({
  formHeading,
  formSubmit,
  formInputValues,
  formValidators,
  formInstead,
  formInsteadRoute,
  formSubmitFunction,
  loginInGoogle,
}) => {
  const ButtonConfig = {
    padding: ".5rem 2rem",
    curve: ".65rem",
    fontSize: "1.15rem",
    bold: true,
    color: lightTheme.font,
    hoverBg: lightTheme.userBorderColor,
  }

  const configHandler = params => {
    if (formSubmitFunction === "create") {
      return createUserAccount(params.email, params.password)
    }
    if (formSubmitFunction === "login") {
      return loginUserAccount(params.email, params.password)
    }
    if (formSubmitFunction === "forgotPassword") {
      return resetEmailPassword(params.email)
    }
  }

  const handleGoogleLogin = e => {
    e.preventDefault()
    loginWithGoogleAccount()
  }

  const validators = Yup.object({ ...formValidators })
  return (
    <FormFullPageWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={validators}
        onSubmit={params => configHandler(params)}
      >
        {formik => (
          <div className="d-flex justify-content-center align-items-center">
            <FormWrapper className="d-flex justify-content-center align-items-center flex-column">
              <FormHeading>{formHeading}</FormHeading>
              {loginInGoogle && (
                <FormLoginWithGoogleWrapper
                  onClick={e => handleGoogleLogin(e)}
                  className="d-flex justify-content-center align-items-center flex-column"
                >
                  <LogInWithGoogle>
                    <FcGoogle style={{ marginTop: "-5px" }} size="1.75rem" />{" "}
                    Sign In with Google
                  </LogInWithGoogle>
                  <DividerLine>
                    <OrLine>or</OrLine>
                  </DividerLine>
                </FormLoginWithGoogleWrapper>
              )}
              {formInputValues?.map((element, key) => {
                return (
                  <FormInput
                    key={key}
                    autoComplete={element.autoComplete}
                    type={element.type}
                    name={element.name}
                    label={element.label}
                    placeholder={element.placeholder}
                  />
                )
              })}
              <FormSubmit {...ButtonConfig} type="submit">
                {formSubmit}
              </FormSubmit>
              <FormInstead to={formInsteadRoute}>{formInstead}</FormInstead>
            </FormWrapper>
          </div>
        )}
      </Formik>
    </FormFullPageWrapper>
  )
}

export default Form
