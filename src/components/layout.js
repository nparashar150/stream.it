/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import * as layout from "./layout.module.css"
// import { AuthContextProvider } from "../context/auth/AuthContext"
import { GlobalStyle, lightTheme } from "../theme/global-theme"
import { ThemeProvider } from "styled-components"
import Navbar from "./Shared/Navbar/Navbar"
import Footer from "./Shared/Footer/Footer"

const Layout = ({ children, isLanding }) => {
  return (
    // <AuthContextProvider>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div className={layout.wrapper}>
        <Navbar />
        <div>
          <main>{children}</main>
          <Footer isLanding={isLanding} />
        </div>
      </div>
    </ThemeProvider>
    // </AuthContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
