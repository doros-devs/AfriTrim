// Import the functions needed for authentication
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// Signup function
export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Forgot password function
export const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent');
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
};

// Google sign-in function
export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('User signed in with Google:', result.user);
  } catch (error) {
    console.error('Error with Google sign-in:', error);
  }
};
