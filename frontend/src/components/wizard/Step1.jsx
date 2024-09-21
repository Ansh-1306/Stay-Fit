import React from "react";

function Step1({ gender, setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-black shadow-2xl hover:shadow-black hover:shadow-[0_10px_25px_rgba(0,0,0,0.75)] transition-shadow duration-300 max-w-md mx-auto text-4xl">
  <h2 className="text-4xl font-semibold mb-6 text-gray-800">Select Your Gender</h2>
  <div className="space-y-4 w-full">
    <label className="flex items-center cursor-pointer bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-300 transition duration-150">
      <input
        type="radio"
        value="M"
        checked={gender === "M"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-3 text-2xl text-gray-700">Male</span>
    </label>
    <label className="flex items-center cursor-pointer bg-gray-100 px-4 py-3 rounded-lg hover:bg-gray-300 transition duration-150">
      <input
        type="radio"
        value="F"
        checked={gender === "F"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span className="ml-3 text-2xl text-gray-700">Female</span>
    </label>
  </div>
</div>


  );
}

export default Step1;
