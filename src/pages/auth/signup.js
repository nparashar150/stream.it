import React from "react"
import Form from "../../components/Form/Form"
import { formConfig } from "../../data/SignUp.config"
import { GlobalStyle, lightTheme } from "../../theme/global-theme"
import { ThemeProvider } from "styled-components"

export default function login() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <GlobalStyle />
        <Form {...formConfig} />
      </div>
    </ThemeProvider>
  )
}
