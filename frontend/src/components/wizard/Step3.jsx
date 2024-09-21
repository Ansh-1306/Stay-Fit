import React from "react";

function Step3({ goal, setGoal }) {
  const goalOptions = [
    "Weight Loss",
    "Enhance Strength",
    "Muscle Gain",
  ];

  const handleChange = (event) => {
    setGoal(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-2xl max-w-md mx-auto">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">Select Your Fitness Goal</h2>
  <div className="space-y-4 w-full">
    {goalOptions.map((option, index) => (
      <label
        key={index + 1}
        className="flex items-center p-4  rounded-lg bg-gray-200 cursor-pointer transition-colors duration-200"
      >
        <input
          type="radio"
          value={index + 1}
          checked={goal === index + 1}
          onChange={handleChange}
          className="form-radio text-blue-400 h-5 w-5"
        />
        <span className="ml-3 text-gray-700">{option}</span>
      </label>
    ))}
  </div>
</div>

  );
}

export default Step3;
