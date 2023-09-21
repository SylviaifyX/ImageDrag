import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhKb_TVfRdz1LyUoON5k5EElBJxcwnpc8",
  authDomain: "imagegallery-34c23.firebaseapp.com",
  projectId: "imagegallery-34c23",
  storageBucket: "imagegallery-34c23.appspot.com",
  messagingSenderId: "674137341288",
  appId: "1:674137341288:web:e6d2926a0948a073ac6add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const alreadyIn = onAuthStateChanged(auth, user => setCurrentUser(user))

    return alreadyIn;

  }, [])
  return currentUser;
}

export function logout() {
  return signOut(auth)
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}