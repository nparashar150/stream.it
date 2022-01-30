import React from "react"
import Form from "../../components/Form/Form"
import { formConfig } from "../../data/Reset.config"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function Reset() {
  return (
    <Layout>
      <Seo title="Reset Password" />
      <div>
        <Form {...formConfig} />
      </div>
    </Layout>
  )
}
