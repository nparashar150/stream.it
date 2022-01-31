/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { AuthContextProvider } from "./src/context/auth/AuthContext"

export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>{element}</AuthContextProvider>
)
