// src/contexts/AuthContext.js
import { signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthenticated(!!currentUser);
      setLoading(false); // Set loading to false after checking auth state
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  const updateCoursePurchaseStatus = (status) => {
    // Logic to update course purchase status, if needed
    console.log("Course purchase status updated:", status);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        signOut,
        updateCoursePurchaseStatus,
      }}
    >
      {loading ? <div>Loading...</div> : children} {/* Show loading message */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
