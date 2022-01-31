import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/auth/AuthContext"
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
  ForgotPassword,
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
import { navigate } from "gatsby"

const Form = ({
  formHeading,
  formSubmit,
  formInputValues,
  formValidators,
  formInstead,
  formInsteadRoute,
  formSubmitFunction,
  loginInGoogle,
  forgotPassword,
  createmobileview,
}) => {
  const ButtonConfig = {
    padding: ".5rem 2rem",
    curve: ".65rem",
    fontSize: "1.15rem",
    bold: true,
    color: lightTheme.font,
    hoverBg: lightTheme.userBorderColor,
  }
  const [mailSent, setMailSent] = useState(false)
  let { user, dispatch } = useContext(AuthContext)

  const configHandler = params => {
    if (formSubmitFunction === "create") {
      return createUserAccount(
        params.email,
        params.password,
        params.firstName,
        params.lastName,
        user,
        dispatch
      )
    }
    if (formSubmitFunction === "login") {
      return loginUserAccount(params.email, params.password, user, dispatch)
    }
    if (formSubmitFunction === "forgotPassword") {
      return handleReset(params)
    }
  }

  const handleGoogleLogin = e => {
    e.preventDefault()
    loginWithGoogleAccount(user, dispatch)
  }

  const handleReset = params => {
    setMailSent(true)
    resetEmailPassword(params.email)
  }

  const validators = Yup.object({ ...formValidators })

  useEffect(() => {
    if (user) {
      navigate("/auth/browse")
    }
  }, [user])

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
            <FormWrapper
              createmobileview={createmobileview}
              className="d-flex justify-content-center align-items-center flex-column"
            >
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
              {forgotPassword && (
                <ForgotPassword onClick={() => navigate("/auth/reset")}>
                  Reset Password
                </ForgotPassword>
              )}
              {mailSent && <ForgotPassword>Check your Email</ForgotPassword>}
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
