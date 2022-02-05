import * as React from "react"
import { navigate } from "gatsby"
import {
  NotFoundWrapper,
  NotFoundHeading,
  NotFoundInfo,
} from "../components/404/NotFound"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2500)
  }, [])

  return (
    <Layout isLanding={false}>
      <Seo title="404: Not found" />
      <NotFoundWrapper className="container d-flex justify-content-center align-items-center">
        <NotFoundHeading>404: Not Found</NotFoundHeading>
        <NotFoundInfo>
          You just hit a route that doesn&#39;t exist... the sadness.
          <br />
          Please wait, taking you back...
        </NotFoundInfo>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage
