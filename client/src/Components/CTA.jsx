import React from "react";

const CTA = () => {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="px-5 py-24 mx-auto container">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            Join us today and explore the fascinating world of information
            technology!
          </h1>
          <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
