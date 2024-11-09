import React, { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import students from "../assets/students.png";
import { useAuth } from "../contexts/AuthContext";
import { createUserDocument } from "../utils/createUserDocument";

function Introduction() {
  const { user } = useAuth();
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
        return;
      }
      await createUserDocument(user);
      console.log("User document created on enrollment.");
    } catch (error) {
      console.error("Error creating user document on enroll:", error);
    }
  };

  return (
    <Element
      name="introduction"
      className="container mx-auto py-16 px-5 sm:py-20 lg:py-24 flex flex-wrap items-center"
      ref={introRef}
    >
      <div className="w-full lg:w-4/5 mx-auto flex md:flex-nowrap flex-wrap md:space-x-6 ">
        {/* Image Section */}
        <img
          alt="hero"
          className="w-full md:w-1/2 lg:w-1/2 h-64 md:h-auto object-cover object-center rounded"
          src={students}
        />
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:pl-10 lg:py-6 mt-6 md:mt-0">
          <h1 className="text-gray-900 text-2xl sm:text-3xl title-font font-medium mb-4">
            Introduction
          </h1>
          <p className="leading-relaxed text-base sm:text-lg mb-4">
            Welcome to the exciting world of Information Technology! This course
            offers a practical understanding of essential concepts shaping
            today's digital landscape. Whether you want to enhance your skills,
            explore technology for personal growth, or build a strong foundation
            for future studies, you'll find everything you need here.
          </p>
          <button
            className="flex text-white md:mx-[0] mx-auto bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transition duration-200"
            onClick={handleEnrollClick}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </Element>
  );
}

export default Introduction;
