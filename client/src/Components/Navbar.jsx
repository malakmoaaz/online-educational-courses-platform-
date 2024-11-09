import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { Link, scroller } from "react-scroll";
import LogoCtrls from "../assets/ctrls-logo.png";
import { useAuth } from "../contexts/AuthContext"; // Import your authentication context

function Navbar({ introHeight }) {
  const { user, signOut } = useAuth(); // Get user and signOut function from context
  const navigate = useNavigate(); // Initialize useNavigate

  const scrollToIntroductionEnd = () => {
    scroller.scrollTo("introduction", {
      smooth: true,
      duration: 500,
      offset: introHeight - window.innerHeight,
    });
  };

  const handleSignOut = async () => {
    console.log("Signing out user:", user); // Log the user state
    try {
      await signOut(); // Call the signOut function
      navigate("/"); // Redirect to home page after sign out
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex md:flex-nowrap flex-wrap px-5 flex-col lg:flex-row items-center">
        {/* Navbar Logo */}
        <div className="flex title-font font-medium text-gray-900 mb-4 lg:mb-0 w-full lg:w-1/5 lg:justify-start justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <RouterLink to="/">
              <img
                className="w-20 text-white p-2 rounded-full cursor-pointer"
                src={LogoCtrls}
                alt="CTRL-S LOGO"
              />
            </RouterLink>
          </div>
        </div>

        {/* Navbar Links */}
        <nav className="lg:ml-auto lg:mr-auto flex flex-wrap items-center text-xl font-bold justify-center">
          <span
            onClick={() => scrollToIntroductionEnd()}
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Introduction
          </span>
          <Link
            to="course-overview"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Course Overview
          </Link>
          <Link
            to="our-team"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Our Team
          </Link>
        </nav>

        {/* Login/Logout Button */}
        <div className="flex lg:justify-end justify-center w-full lg:w-1/5">
          <RouterLink to="/auth">
            <button
              onClick={user ? handleSignOut : undefined} // Handle sign out if user is logged in
              className="inline-flex items-center bg-[#91C2D1] border-0 py-1 px-3 focus:outline-none hover:bg-[#68A8C2] rounded text-lg font-bold mt-4 lg:mt-0"
            >
              {user ? "Sign Out" : "Log In / Sign Up"}{" "}
              {/* Display button text based on login state */}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </RouterLink>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center p-2">
        <div className="md:text-5xl text-4xl font-medium">
          Welcome to CTRL-S
        </div>
        <div className="md:text-2xl text-xl font-medium">
          Secure your future with CTRL-S | Learn Practice Succeed
        </div>
      </div>
    </header>
  );
}

export default Navbar;
