// src/components/firebase/firebase.js
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAh4sIgusnOdA1ut9kztT88SJ9sEDaLz4k",
  authDomain: "archive-kalk.firebaseapp.com",
  databaseURL: "https://archive-kalk.firebaseio.com",
  projectId: "archive-kalk",
  storageBucket: "",
  messagingSenderId: "626295031716"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export default firebase
