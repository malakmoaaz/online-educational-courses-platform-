import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after a short delay
    const timer = setTimeout(() => {
      navigate("/"); // Navigate to home page
    }, 2000); // Adjust the delay as needed

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-2xl font-bold">Payment Canceled</h1>
      <p>You will be redirected to the homepage shortly.</p>
    </div>
  );
};

export default Cancel;
