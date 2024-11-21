import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7fDbZ7PQ2Qk4B2ukAIgOLx16Q6wX4DZY",
  authDomain: "afritrim-b1a83.firebaseapp.com",
  projectId: "afritrim-b1a83",
  storageBucket: "afritrim-b1a83.firebasestorage.app",
  messagingSenderId: "999657331498",
  appId: "1:999657331498:web:4fe9158dd04a5b5f255c53"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
