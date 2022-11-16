import firebase from "firebase/compat/app"
import { firebaseConfig } from "./firebaseConfig"
import "firebase/compat/firestore"
import "firebase/compat/auth"

firebase.initializeApp(firebaseConfig)

export const myfirestore = firebase.firestore()

// Authentication module
export const auth = firebase.auth();
// Authentication provider
export const provider = new firebase.auth.GoogleAuthProvider();
// Google's utility login pop-up
export const loginWithGoogle = () => auth.signInWithPopup(provider);
// Google's utility logout pop-up
export const logout = () => auth.signOut();

export default firebase;
