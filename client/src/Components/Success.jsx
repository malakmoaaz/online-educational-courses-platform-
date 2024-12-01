import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { recordPurchase } from "../utils/recordPurchase"; // Import the updated recordPurchase function

const Success = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get user from Auth context

  useEffect(() => {
    const handlePurchase = async () => {
      const courseId = "CTRL-S Course"; // Replace with the actual course ID

      await recordPurchase(user, courseId); // Record the purchase along with user status

      // Redirect to the home page with a query parameter indicating success
      const timer = setTimeout(() => {
        navigate("/?paymentSuccess=true"); // Add query parameter to indicate success
      }, 2000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    };

    if (user) {
      handlePurchase(); // Call the purchase handling function
    }
  }, [navigate, user]);

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p>You will be redirected to the homepage shortly.</p>
    </div>
  );
};

export default Success;
