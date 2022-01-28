import React from "react"
import Form from "../../components/Form/Form"
import { formConfig } from "../../data/SignIn.config"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function login() {
  return (
    <Layout>
      <Seo title="Sign In" />
      <div>
        <Form {...formConfig} />
      </div>
    </Layout>
  )
}
