// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu7lRjHXE2n3YZHjQUVUJfCfz5Bbs8upU",
  authDomain: "disneyplus-clone-f43b4.firebaseapp.com",
  projectId: "disneyplus-clone-f43b4",
  storageBucket: "disneyplus-clone-f43b4.appspot.com",
  messagingSenderId: "925920873391",
  appId: "1:925920873391:web:a0e14964483ea21ae37d5a",
  measurementId: "G-0V0R8LMNC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
