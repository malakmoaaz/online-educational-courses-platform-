import React from "react";
import videoSource from "../assets/video.mp4"; // Path to your video file
import { useAuth } from "../contexts/AuthContext"; // Use the custom hook
import PurchaseButton from "./PurchaseButton";

function HeroSection() {
  const { isAuthenticated } = useAuth(); // Access authentication status

  return (
    <section className="flex items-center justify-center bg-cover bg-center">
      <div className="flex flex-col items-center mx-auto px-5 py-16 container">
        <video
          className="xl:w-[748px] lg:w-[748px] md:w-[600px] mb-10 object-cover object-center rounded"
          src={videoSource}
          controls
          playsInline
          muted
          autoPlay
        />
        <div className="flex justify-center">
          {isAuthenticated ? (
            <PurchaseButton courseId={"it-course"} />
          ) : (
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Start Learning
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
