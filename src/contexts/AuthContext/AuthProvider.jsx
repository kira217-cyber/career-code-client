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
import { auth } from "../../firebase/firebase.inti";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // if(currentUser?.email){
      //   const userData = {email : currentUser?.email}
      //   axios.post('https://job-portal-server-tau-gray.vercel.app/jwt', userData,{
      //     withCredentials:true
      //   }).then(res=>{
      //     console.log(res.data)
      //   }).catch(err=>{
      //     console.log(err)
      //   })
      // }

      console.log("user in the auth state", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const AuthInfo = {
    signInGoogle,
    user,
    login,
    loading,
    logOut,
    register,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
