import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth"
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  Timestamp,
  collection,
  query,
  where,
} from "firebase/firestore"

const provider = new GoogleAuthProvider()
const auth = getAuth()
const db = getFirestore()

const saveUser = async (email, uid, name) => {
  const checkIfUserExists = query(collection(db, "email"),where("user", "==", email))
  const queryData = await getDocs(checkIfUserExists)
  let flag = [];
  queryData.forEach(doc => {
    flag.push(doc.id)
  })
  if (flag.includes(email)) {
    console.log("exists");
  } else {
    await setDoc(doc(db, "email", email), {
      user: email,
      uid,
      name,
      createdAt: Timestamp.fromDate(new Date()),
    })
    console.log("saved")
  }
}

export const createUserAccount = async (
  email,
  password,
  firstName,
  lastName
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const name = firstName + " " + lastName
    saveUser(email, res.user.uid, name)
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
    await saveUser(res.user.email, res.user.uid, res.user.displayName)
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
