import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../components/firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const createUser = (email, passowrd) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, passowrd);
  };
  const signInUser = (email, passowrd) => {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, passowrd);
  };
  const signOutUser = () => {
    setLoding(true)
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoding(true)
    return signInWithPopup(auth, googleProvider)
  }

  // get current user info
  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user is auth state change", currentUser);
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
