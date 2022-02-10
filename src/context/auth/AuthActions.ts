export const LoginStart: Function = () => ({
  type: "LOGIN_START",
})

export const LoginSuccess: Function = (user: {} | null) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
})

export const LoginFailure: Function = (error: {} | string) => ({
  type: "LOGIN_FAILURE",
  payload: error,
})

export const LogOut: Function = () => ({
  type: "LOGOUT_SUCCESS",
})
