import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Element } from "react-scroll";
import AbdelsalamImage from "../assets/abdelsalam.jpg";
import AmrImage from "../assets/amr.jpg";

function Team() {
  return (
    <Element name="instructor" className="text-gray-900 body-font w-full">
      <div className="px-5 py-24 mx-auto container">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Meet our dedicated instructors who are experts in their fields and
            passionate about teaching.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Instructor 1 */}
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                src={AbdelsalamImage}
                alt="Abdulsalam Elsayed"
                className="flex-shrink-0 rounded-full w-40 h-40 object-cover object-center mb-4"
              />
              <div className="md:w-2/3 w-full">
                <h2 className="title-font font-medium text-lg ">
                  Abdulsalam Elsayed
                </h2>
                <h3 className=" mb-3">Computer Science Student</h3>
                <p className="mb-4">
                  "Hey! I’m Abdulsalam, a Computer Science student specializing
                  in Big Data. As a general delegate at Grant Trust Ed, I assist
                  international students in enrolling at Egyptian universities.
                  My goal is to make technology simple and accessible to
                  everyone."
                </p>
                <span className="text-black inline-flex">
                  {/* Social Icons */}

                  <a
                    className="ml-2 transform transition-transform duration-300 hover:scale-110"
                    href="#"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  </a>
                  <a
                    className="ml-2 transform transition-transform duration-300 hover:scale-110"
                    href="#"
                    aria-label="WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* Instructor 2 */}
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                src={AmrImage}
                alt="Amr Eldesouky"
                className="flex-shrink-0 rounded-full w-40 h-40 object-cover object-center mb-4"
              />
              <div className="md:w-2/3 w-full">
                <h2 className="title-font font-medium text-lg ">
                  Amr Eldesouky
                </h2>
                <h3 className=" mb-3">Computer Science Student</h3>
                <p className="mb-4">
                  "Hello! I’m Amr, a Computer Science student focusing on
                  Artificial Intelligence. With experience as a football coach,
                  I bring a creative and energetic approach to my teaching,
                  making learning enjoyable and engaging."
                </p>
                <span className="text-black inline-flex">
                  {/* Social Icons */}
                  <a
                    className="transform transition-transform duration-300 hover:scale-110"
                    href="#"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  </a>
                  <a
                    className="ml-2 transform transition-transform duration-300 hover:scale-110"
                    href="#"
                    aria-label="WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Team;
