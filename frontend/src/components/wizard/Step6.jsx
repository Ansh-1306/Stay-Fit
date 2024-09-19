import React, { useState } from "react";

function Step5({muscleGroups,setMuscleGroups}) {

  const muscleOptions = [
    "Chest",
    "Back",
    "Arms",
    "Shoulders",
    "Legs",
    "Core",
    "Cardio",
  ];

  const handleCheckboxChange = (index) => {
    setMuscleGroups((prev) =>
      prev.includes(index)
        ? prev.filter((m) => m !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Select Muscle Groups to Focus On</h2>
      <div className="space-y-2">
        {muscleOptions.map((muscle,index) => (
          <label key={index} className="flex items-center">
            <input
              type="checkbox"
              value={index}
              checked={muscleGroups.includes(muscle)}
              onChange={() => handleCheckboxChange(index)}
              className="mr-2"
            />
            {muscle}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step5;
