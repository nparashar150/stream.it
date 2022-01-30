import React from "react"
import Form from "../../components/Form/Form"
import { formConfig } from "../../data/SignUp.config"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function login() {
  return (
    <Layout>
      <Seo title="Sign Up" />
      <div>
        <Form createmobileview {...formConfig} />
      </div>
    </Layout>
  )
}
