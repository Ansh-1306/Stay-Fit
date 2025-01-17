import React from "react";

function Step4({ experience, setExperience }) {
  const handleChange = (event) => {
    setExperience(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-2xl max-w-md mx-auto">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">Select Your Experience Level</h2>
  <div className="space-y-4 w-full">
    <label className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200">
      <input
        type="radio"
        value={1}
        checked={experience === 1}
        onChange={handleChange}
        className="form-radio text-blue-600 h-5 w-5"
      />
      <span className="ml-3 text-gray-700">Beginner</span>
    </label>
    <label className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200">
      <input
        type="radio"
        value={2}
        checked={experience === 2}
        onChange={handleChange}
        className="form-radio text-blue-600 h-5 w-5"
      />
      <span className="ml-3 text-gray-700">Intermediate</span>
    </label>
    <label className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200">
      <input
        type="radio"
        value={3}
        checked={experience === 3}
        onChange={handleChange}
        className="form-radio text-blue-600 h-5 w-5"
      />
      <span className="ml-3 text-gray-700">Advanced</span>
    </label>
  </div>
</div>

  );
}

export default Step4;
