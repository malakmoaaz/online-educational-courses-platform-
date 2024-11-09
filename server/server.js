import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51QFT2uDsfkJdeFG0y2nD4ohx5LZeilJEJrUixexlAB3hrMoerL0ARJ6xB4ZwvH1NOf2pz9Hcq9Wt10h0Xa8vc2lD00LDzQL8r4"
);

// Helper function to get the API URL
const getApiUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://it101-website.vercel.app"; // Replace with your deployed backend URL
  }
  return "http://localhost:4000"; // Local development
};

const PurchaseButton = ({ courseId }) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    if (!user) {
      alert("Please sign in to purchase the course");
      return;
    }

    setIsLoading(true);
    const stripe = await stripePromise;

    try {
      const response = await fetch(`${getApiUrl()}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          userId: user?.uid,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          throw new Error(result.error.message);
        }
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={isLoading}
      className={`inline-flex items-center bg-[#47AAB1] border-0 py-1 px-3 focus:outline-none hover:bg-[#68A8C2] rounded text-lg font-bold mt-4 lg:mt-0 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Processing..." : "Purchase Course"}
    </button>
  );
};

export default PurchaseButton;
