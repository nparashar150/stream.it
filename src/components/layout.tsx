import * as React from "react"
import PropTypes from "prop-types"
import * as layout from "./layout.module.css"
import { GlobalStyle, lightTheme } from "../theme/global-theme"
import { ThemeProvider } from "styled-components"
import Navbar from "./Shared/Navbar/Navbar"
import Footer from "./Shared/Footer/Footer"

const Layout = ({ children, isLanding }) => {
  return (
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isLanding: PropTypes.bool,
}

export default Layout
