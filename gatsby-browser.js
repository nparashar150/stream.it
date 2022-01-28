/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from "react"
import AuthProvider from "./src/context/Auth"

export const wrapRootElement = ({ element }) => {
  ;<AuthProvider>{element}</AuthProvider>
}
