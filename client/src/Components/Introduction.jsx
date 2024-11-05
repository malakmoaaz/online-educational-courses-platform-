import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import students from "../assets/students.png";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth
import { createUserDocument } from "../utils/createUserDocument";

function Introduction() {
  const { user } = useAuth(); // Access user from the AuthContext
  const introRef = useRef(null);
  const [introHeight, setIntroHeight] = useState(0);

  useEffect(() => {
    if (introRef.current) {
      setIntroHeight(introRef.current.offsetHeight);
    }
  }, []);

  const handleEnrollClick = async () => {
    try {
      if (!user) {
        console.log("User is not authenticated. Please log in first.");
        return; // Exit if user is not logged in
      }

      console.log("User is authenticated:", user);
      console.log("Attempting to create user document...");
      await createUserDocument(user); // Pass user to the function
      console.log("User document created on enrollment.");
    } catch (error) {
      console.error("Error creating user document on enroll:", error);
    }
  };

  return (
    <Element
      name="introduction"
      className="introduction-section container mx-auto flex px-5 flex-col items-center"
      ref={introRef}
    >
      <div className="flex">
        <div className="lg:flex-grow xl:w-3/5 xl:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-0">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-4xl mb-2 sm:mb-0">
              Introduction
            </h1>
          </div>
          <p className="mb-8 leading-relaxed lg:text-xl text-lg">
            "Welcome to the exciting world of Information Technology! This
            course offers a practical understanding of essential concepts
            shaping today's digital landscape. Whether you want to enhance your
            skills, explore technology for personal growth, or build a strong
            foundation for future studies, you'll find everything you need here.
            We combine hands-on activities with theoretical knowledge, helping
            you gain the confidence to navigate and succeed in a
            technology-driven world."
          </p>
        </div>
        <div className="xl:w-2/5 xl:max-w-full max-w-[600px] ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={students}
          />
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center py-4 mt-5 w-screen">
        <h2 className="text-xl font-bold">
          🚀 Unlock Your Future in IT: Enroll Now and Get 10% Off! 🎓
        </h2>
        <button
          onClick={handleEnrollClick} // Attach the handler to the button click
          className="mt-2 inline-block bg-[#59C4B4] text-white py-2 px-4 rounded transition duration-300 hover:bg-[#47AAB1]"
        >
          Enroll Now
        </button>
      </div>
    </Element>
  );
}

export default Introduction;
