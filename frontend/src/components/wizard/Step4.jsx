import React, { useState } from "react";

function Step4({experience,setExperience}) {

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Select Your Experience Level</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="radio"
            value={1}
            checked={experience == 1}
            onChange={handleChange}
            className="mr-2"
          />
          Beginner
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value={2}
            checked={experience == 2}
            onChange={handleChange}
            className="mr-2"
          />
          Intermediate
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value={3}
            checked={experience == 3}
            onChange={handleChange}
            className="mr-2"
          />
          Advanced
        </label>
      </div>
    </div>
  );
}

export default Step4;
