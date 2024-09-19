import React from "react";
// import {  RobotIcon, ZapIcon, LinkIcon, PuzzleIcon } from "lucide-react"

function Step1({ gender, setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Select Your Gender</h2>
      <div className="space-y-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            value="M"
            checked={gender === "M"}
            onChange={handleChange}
            className="form-radio text-black"
          />
          <span className="ml-3 text-gray-700">Male</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            value="F"   
            checked={gender === "F"}
            onChange={handleChange}
            className="form-radio text-black"
          />
          <span className="ml-3 text-gray-700">Female</span>
        </label>
      </div>
    </div>


   
        // <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
        //   <div className="w-full max-w-3xl">
        //     <div className="flex justify-between mb-8">
        //       <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
        //         {/* <FemaleIcon className="text-white" /> */}
        //       </div>
        //       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        //         {/* <RobotIcon className="text-gray-600" /> */}
        //       </div>
        //       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        //         {/* <MaleIcon classNa   me="text-gray-600" /> */}
        //       </div>
        //       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        //         {/* <ZapIcon className="text-gray-600" /> */}
        //       </div>
        //       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        //         {/* <LinkIcon className="text-gray-600" /> */}
        //       </div>
        //       <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        //         {/* <PuzzleIcon className="text-gray-600" /> */}
        //       </div>
        //     </div>
            
        //     <h1 className="text-3xl font-bold text-blue-600 mb-8">LETS GET STARTED</h1>
            
        //     <div className="space-y-4">
        //       <button className="w-full py-4 bg-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-300 transition-colors">
        //         Male
        //       </button>
        //       <button className="w-full py-4 bg-white rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors shadow-md">
        //         Female
        //       </button>
        //     </div>
        //   </div>
        // </div>
      )
    }

  


export default Step1;
