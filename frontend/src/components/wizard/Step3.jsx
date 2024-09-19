import React from "react";

function Step3({ goal, setGoal }) {
  const goalOptions = [
    "Weight Loss",
    "Muscle Gain",
    "Maintain Weight",
    "Improve Endurance",
    "Increase Flexibility",
  ];

  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Select Your Fitness Goal</h2>
      <div className="space-y-2">
        {goalOptions.map((option,index) => (
          
          <label key={index+1} className="flex items-center">
            <input
              type="radio"
              value={index+1}
              checked={goal === index+1}
              onChange={handleChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step3;
