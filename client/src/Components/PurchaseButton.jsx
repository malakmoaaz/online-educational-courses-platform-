import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuth } from "../contexts/AuthContext"; // Correct import
import { recordPurchase } from "../utils/recordPurchase";

const stripePromise = loadStripe(
  "pk_test_51QFT2uDsfkJdeFG0y2nD4ohx5LZeilJEJrUixexlAB3hrMoerL0ARJ6xB4ZwvH1NOf2pz9Hcq9Wt10h0Xa8vc2lD00LDzQL8r4"
);

const PurchaseButton = () => {
  const { user } = useAuth(); // Access user information from context

  const handlePurchase = async () => {
    const stripe = await stripePromise;

    try {
      const response = await fetch(
        `${window.location.origin}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Include necessary data
          }),
        }
      );
      console.log(`${window.location.origin}/create-checkout-session`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        alert(result.error.message);
      } else {
        // Ensure session.courseId is defined
        await recordPurchase(user.uid, session.courseId); // Adjust to include the course ID
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred. Please try again.");
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
