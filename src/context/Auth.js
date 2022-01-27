import React, { createContext, useState, useEffect } from 'react';
import firebase from "gatsby-plugin-firebase-v9.0";

export const AuthContext = createContext("")
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    firebase.auth.onAuthStateChanged(user, setUser(user));
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider