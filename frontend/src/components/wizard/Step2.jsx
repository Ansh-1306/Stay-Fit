import React, { useState } from "react";

function Step2({ age, setAge }) {
  const [currentAge, setCurrentAge] = useState(age || 25); // Set default age to 25

  const handleSliderChange = (event) => {
    const newAge = event.target.value;
    setCurrentAge(newAge);
    setAge(newAge);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-black shadow-2xl hover:shadow-black hover:shadow-[0_10px_25px_rgba(0,0,0,0.75)] transition-shadow duration-300 max-w-md mx-auto">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">Select Your Age</h2>
  <div className="w-full space-y-4">
    <div className="flex justify-between items-center">
      <span className="text-gray-600">14</span>
      <span className="text-gray-600">60+</span>
    </div>
    <input
      type="range"
      min="14"
      max="60"
      value={currentAge}
      onChange={handleSliderChange}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb focus:outline-none focus:ring-2 focus:ring-black"
    />
    <div className="text-center">
      <span className="text-2xl font-semibold text-gray-700">Age: {currentAge}</span>
    </div>
  </div>
</div>

  );
}

export default Step2;
