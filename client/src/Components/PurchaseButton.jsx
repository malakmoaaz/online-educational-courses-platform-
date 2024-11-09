import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { recordPurchase } from "../utils/recordPurchase";

// Move this to an environment variable in production
const stripePromise = loadStripe(
  "pk_test_51QFT2uDsfkJdeFG0y2nD4ohx5LZeilJEJrUixexlAB3hrMoerL0ARJ6xB4ZwvH1NOf2pz9Hcq9Wt10h0Xa8vc2lD00LDzQL8r4"
);

const PurchaseButton = ({ courseId }) => {
  const { user } = useAuth();

  const handlePurchase = async () => {
    const stripe = await stripePromise;

    try {
      // Use absolute URL for API endpoint
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          userId: user?.uid,
          // Add any other necessary data
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();

      if (session.url) {
        // Redirect to Checkout using the session URL
        window.location.href = session.url;
      } else {
        // Legacy approach using redirectToCheckout
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          throw new Error(result.error.message);
        }
      }

      // Record purchase after successful redirect
      if (session.courseId) {
        await recordPurchase(user.uid, session.courseId);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <button
      onClick={handlePurchase}
      className="inline-flex items-center bg-[#47AAB1] border-0 py-1 px-3 focus:outline-none hover:bg-[#68A8C2] rounded text-lg font-bold mt-4 lg:mt-0"
    >
      Purchase Course
    </button>
  );
};

export default PurchaseButton;
