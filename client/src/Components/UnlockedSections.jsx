import React from "react";

const UnlockedSections = () => {
  return (
    <div className="p-8 bg-green-100">
      <h2 className="text-xl font-bold">Congratulations!</h2>
      <p>
        You have successfully purchased the course. Here are your unlocked
        sections:
      </p>
      <ul>
        <li>Section 1: Introduction</li>
        <li>Section 2: Advanced Topics</li>
        <li>Section 3: Final Project</li>
      </ul>
    </div>
  );
};

export default UnlockedSections;
