import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth"

const provider = new GoogleAuthProvider()
const auth = getAuth()

export const createUserAccount = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

export const loginUserAccount = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

export const resetEmailPassword = async email => {
  try {
    const res = await sendPasswordResetEmail(auth, email)
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

export const loginWithGoogleAccount = async () => {
  try {
    const res = await signInWithPopup(auth, provider)
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

export const signOutUser = async () => {
  try {
    signOut(auth).then(() => {
      console.log("Sign Out success")
    })
  } catch (err) {
    console.error(err)
  }
}
