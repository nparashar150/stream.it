import React from "react"
import Form from "../../components/Form/Form"
import { formConfig } from "../../data/SignIn.config"
// import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function SignIn() {
  return (
    <>
      <Seo title="Sign In" />
      <div>
        <Form createmobileview={false} {...formConfig} />
      </div>
    </>
  )
}
