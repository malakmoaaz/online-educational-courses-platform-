import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const recordPurchase = async (user, courseId) => {
  try {
    if (user && user.email) {
      const userEmail = user.email.replace(".", ","); // Replace '.' with ',' for Firestore document naming

      // Create a reference to the user's document in Firestore using email
      const userDocRef = doc(db, "users", userEmail);

      // Save the purchase status in the user's document
      await setDoc(userDocRef, { merge: true });

      console.log("Purchase status updated successfully!");

      // Create a reference to the CTRL-S_course subcollection
      const courseDocRef = doc(
        db,
        "users",
        userEmail,
        "CTRL-S_course",
        courseId
      );

      // Check if the CTRL-S_course document exists
      const docSnapshot = await getDoc(courseDocRef);
      if (!docSnapshot.exists()) {
        console.log("Creating new CTRL-S_course document for user.");
        await setDoc(courseDocRef, {
          hasPurchased: true,
          purchaseDate: new Date().toISOString(),
        });
      } else {
        // Update the existing document if it exists
        await setDoc(
          courseDocRef,
          {
            hasPurchased: true,
            purchaseDate: new Date().toISOString(),
          },
          { merge: true }
        );
      }

      console.log("Purchase recorded successfully.");
    } else {
      console.log("No user found. Unable to record purchase.");
    }
  } catch (error) {
    console.error("Error recording purchase: ", error);
  }
};
