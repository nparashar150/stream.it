import React, { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

interface INITIAL_STATE_PROPS {
  user: string | string
  isFetching: boolean
  error: boolean
  dispatch?: any
}

export const INITIAL_STATE: INITIAL_STATE_PROPS = {
  user: null,
  isFetching: false,
  error: false,
}

export const AuthContext = createContext(INITIAL_STATE)
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
