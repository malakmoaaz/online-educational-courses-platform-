import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebaseConfig"; // Import Firebase auth

function AuthForm() {
  const { setUser, updateCoursePurchaseStatus } = useAuth(); // Remove setIsAuthenticated
  const navigate = useNavigate(); // For navigation
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // State for name
  const [hasPurchasedCourse, setHasPurchasedCourse] = useState(false); // State for course purchase status
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    setErrorMessage(""); // Clear any error message when toggling
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any error messages before submission

    try {
      if (isSignUp) {
        // Register user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Set user information
        const user = {
          uid: userCredential.user.uid,
          email,
          name,
          hasPurchasedCourse,
        }; // Save uid, email, name, and purchase status
        setUser(user); // Set user information in context
        // Authentication is handled in AuthContext, you don't need to set it here
        updateCoursePurchaseStatus(hasPurchasedCourse); // Update purchase status
        alert("User registered successfully!");
        navigate("/"); // Redirect to home after sign-up
      } else {
        // Sign in user
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Set user information (you can include uid here if needed)
        const user = { uid: userCredential.user.uid, email }; // Save uid and email
        setUser(user); // Set user information in context
        // Authentication is handled in AuthContext, you don't need to set it here
        updateCoursePurchaseStatus(hasPurchasedCourse); // Update purchase status (if applicable)
        navigate("/"); // Redirect to home after sign-in
      }
    } catch (error) {
      setErrorMessage(error.message); // Set error message
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white rounded-lg shadow-lg border-4 border-grey p-8 w-full max-w-md mx-4">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 font-bold hover:underline"
          >
            ← Back to Home
          </button>
          {isSignUp && (
            <button
              onClick={toggleForm}
              className="text-blue-600 font-bold hover:underline"
            >
              ← Back to Login
            </button>
          )}
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {isSignUp ? (
          <div className="min-h-[300px]">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {/* <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={hasPurchasedCourse}
                  onChange={(e) => setHasPurchasedCourse(e.target.checked)} // Update purchase status
                  className="mr-2"
                />
                I have purchased the course
              </label> */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition duration-200"
              >
                Sign Up
              </button>
            </form>
          </div>
        ) : (
          <div className="min-h-[300px]">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition duration-200"
              >
                Sign In
              </button>
            </form>
            <p className="text-center mt-4 text-sm">
              Don’t have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-600 font-bold hover:underline"
              >
                Create one!
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
