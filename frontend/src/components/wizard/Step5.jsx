import React from "react";

function Step5({ equipment, setEquipment }) {
  const equipmentOptions = [
    { id: 45, label: "None" },
    { id: 2, label: "Dumbbells" },
    { id: 1, label: "Barbell" },
    { id: 4, label: "Cardio Machine" },
    { id: 3, label: "Exercise Mat" },
    { id: 7, label: "Kettlebell" },
    { id: 10, label: "Resistance Bands" },
  ];

  const handleCheckboxChange = (id) => {
    setEquipment((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Select Your Equipment</h2>
      <div className="space-y-4 w-full">
        {equipmentOptions.map((option) => (
          <label
            key={option.id}
            className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200"
          >
            <input
              type="checkbox"
              value={option.id}
              checked={equipment.includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
              className="form-checkbox text-blue-600 h-5 w-5"
            />
            <span className="ml-3 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step5;
