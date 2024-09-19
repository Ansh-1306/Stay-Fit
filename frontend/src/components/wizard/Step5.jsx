import React from "react";

function Step5({ equipment, setEquipment }) {
  const equipmentOptions = [
    "None",
    "Dumbbells",
    "Barbell",
    "Resistance Bands",
    "Kettlebell",
    "Exercise Mat",
    "Cardio Machine",
  ];

  const handleCheckboxChange = (index) => {
    setEquipment((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Select Your Equipment</h2>
      <div className="space-y-2">
        {equipmentOptions.map((option,index) => (
          <label key={index+1} className="flex items-center">
            <input
              type="checkbox"
              value={index+1}
            //   checked={equipment.includes(option)}
              onChange={() => handleCheckboxChange(index+1)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step5;
