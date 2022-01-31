import React, { useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { navigate } from "gatsby"
// import { AuthContext } from "../context/auth/AuthContext"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [check, setCheck] = useState(false)
  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if (!user && (location.pathname !== `/auth/signin`) | `/auth/signup`) {
      navigate("/auth/signin")
      return null
    } else {
      setCheck(true)
    }
  })
  return check && <Component {...rest} />
}
export default PrivateRoute
