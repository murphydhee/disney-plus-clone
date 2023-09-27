import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
