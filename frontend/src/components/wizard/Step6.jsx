import React from "react";

function Step6({ muscleGroups, setMuscleGroups }) {
  // Updated structure with id and label for each muscle group
  const muscleOptions = [
    { id: 13, label: "Back" },
    { id: 2, label: "Chest" },
    { id: 1, label: "Arms" },
    { id: 48, label: "Shoulders" },
    { id: 3, label: "Legs" },
    { id: 12, label: "Core" },
    { id: 7, label: "Cardio" },
  ];

  const handleCheckboxChange = (id) => {
    setMuscleGroups((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Select Muscle Groups to Focus On</h2>
      <div className="space-y-4 w-full">
        {muscleOptions.map((muscle) => (
          <label
            key={muscle.id}
            className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200"
          >
            <input
              type="checkbox"
              value={muscle.id}
              checked={muscleGroups.includes(muscle.id)}
              onChange={() => handleCheckboxChange(muscle.id)}
              className="form-checkbox text-blue-600 h-5 w-5"
            />
            <span className="ml-3 text-gray-700">{muscle.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step6;
