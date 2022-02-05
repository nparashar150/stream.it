import * as React from "react"
import { navigate } from "@reach/router"
import {
  NotFoundWrapper,
  NotFoundHeading,
  NotFoundInfo,
} from "../components/404/NotFound"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC = () => {
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2500)
  }, [])

  return (
    <Layout isLanding={false}>
      <Seo title="404: Not found" />
      <NotFoundWrapper className="container d-flex justify-content-center align-items-center">
        <NotFoundHeading>Made with Typescript</NotFoundHeading>
        <NotFoundInfo>
          This is just a dummy page.
          <br />
          Please wait, taking you back...
        </NotFoundInfo>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage
