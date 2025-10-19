import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, passowrd) => {
    return createUserWithEmailAndPassword(auth, email, passowrd)
  }
  const signInUser = (email, passowrd) => {
    return signInWithEmailAndPassword(auth, email, passowrd)
  }

  // get current user info
  onAuthStateChanged(auth, (currnetUser) => {
    if(currnetUser) {
      console.log("Inside Observer: If", currnetUser)
    } else {
      console.log("Inside Observer: Else", currnetUser)
    }
  })
  const userInfo = {
    createUser,
    signInUser,
  }
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
