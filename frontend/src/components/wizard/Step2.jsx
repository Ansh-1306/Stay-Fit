import React from "react";

function Step2({ age, setAge }) {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Select Your Age</h2>
      <input
        type="range"
        min="10"
        max="100"
        value={`${age}`}
        onChange={handleChange}
        className="slider w-full"
      />
      <span className="mt-2 text-lg">{age} years</span>
    </div>
  );
}

export default Step2;
