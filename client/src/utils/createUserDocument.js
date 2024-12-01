// src/utils/createUserDocument.js
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const createUserDocument = async (user) => {
  if (!user) return;

  const { email } = user; // Use email instead of displayName

  try {
    await setDoc(doc(db, "users", email), {
      email,
      createdAt: new Date().toISOString(),
    });
    console.log("User document created successfully.");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
};
