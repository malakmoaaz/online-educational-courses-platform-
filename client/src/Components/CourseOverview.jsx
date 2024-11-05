import {
  faComputer,
  faDatabase,
  faGlobe,
  faLock,
  faMicrochip,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Element } from "react-scroll";

function CourseOverview() {
  return (
    <Element name="course-overview" className="text-gray-600 body-font w-full ">
      <div className="px-5 py-12 mx-auto container">
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
            Course Overview
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-800 text-xl">
            Explore the essential concepts of information technology in this
            foundational course designed for students aged 14-18.
          </p>
        </div>

        {/* Theoretical Section */}
        <h2 className="sm:text-4xl text-2xl font-medium title-font mb-8 text-gray-900 text-center">
          Theoretical Section
        </h2>
        <div className="flex flex-wrap -m-4">
          {/* Computer System */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faComputer} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Computer System
              </h2>
              <p className="leading-relaxed text-base">
                "Discover the fundamental components of a computer system,
                including the CPU, memory, and software, and how they interact
                to power modern technology."
              </p>
            </div>
          </div>
          {/* Input & Output Devices */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faMicrochip} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Input & Output Devices
              </h2>
              <p className="leading-relaxed text-base">
                "Learn about the devices used to input and output data, from
                keyboards and scanners to monitors and printers, and their role
                in communication with computers."
              </p>
            </div>
          </div>
          {/* Storage Devices */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faDatabase} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Storage Devices
              </h2>
              <p className="leading-relaxed text-base">
                "Explore different storage solutions, such as hard drives, SSDs,
                and cloud storage, and understand how data is saved, managed,
                and accessed."
              </p>
            </div>
          </div>
          {/* Networks */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Networks
              </h2>
              <p className="leading-relaxed text-base">
                "Understand how computers connect and communicate through
                networks, exploring key concepts like protocols, IP addresses,
                and the internet."
              </p>
            </div>
          </div>
          {/* Security */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faLock} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Security
              </h2>
              <p className="leading-relaxed text-base">
                "Learn how to protect your data from cyber threats with best
                practices in cybersecurity, encryption, and authentication."
              </p>
            </div>
          </div>
        </div>

        {/* Practical Section */}
        <h2 className="sm:text-4xl text-2xl font-medium title-font mb-8 text-gray-900 text-center mt-20">
          Practical Section
        </h2>
        <div className="flex flex-wrap -m-4">
          {/* Word Document */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faWrench} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Word Document
              </h2>
              <p className="leading-relaxed text-base">
                "Create, edit, and format professional documents efficiently
                with Microsoft Word."
              </p>
            </div>
          </div>
          {/* Mail Merge */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faWrench} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Mail Merge
              </h2>
              <p className="leading-relaxed text-base">
                "Save time by automating the creation of personalized letters or
                emails with Mail Merge."
              </p>
            </div>
          </div>
          {/* Access */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faWrench} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Access
              </h2>
              <p className="leading-relaxed text-base">
                "Organize and manage data with Microsoft Access through
                user-friendly databases."
              </p>
            </div>
          </div>
          {/* PowerPoint */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faWrench} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                PowerPoint
              </h2>
              <p className="leading-relaxed text-base">
                "Design engaging presentations with PowerPoint to communicate
                ideas effectively."
              </p>
            </div>
          </div>
          {/* Excel */}
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FontAwesomeIcon icon={faWrench} className="w-6 h-6" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Excel
              </h2>
              <p className="leading-relaxed text-base">
                "Analyze data and create spreadsheets for informed
                decision-making with Microsoft Excel."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default CourseOverview;
