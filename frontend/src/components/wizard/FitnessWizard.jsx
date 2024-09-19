import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import { DumbbellIcon, HeartPulseIcon, TrophyIcon, GoalIcon, ZapIcon, HeartIcon } from "lucide-react";

function FitnessWizard() {
  const navigate = useNavigate();
  const [wizardInstance, setWizardInstance] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState();
  const [experience, setExperience] = useState();
  const [equipment, setEquipment] = useState([]);
  const [muscleGroups, setMuscleGroups] = useState([]);

  const totalSteps = 6; // Total number of steps

  const nextStep = () => {
    if (wizardInstance) {
      wizardInstance.nextStep();
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps)); // Increment current step
    }
  };

  const prevStep = () => {
    if (wizardInstance) {
      wizardInstance.previousStep();
      setCurrentStep((prev) => Math.max(prev - 1, 1)); // Decrement current step
    }
  };

  // Handle the finish action
  const handleFinish = () => {
    const data = { gender, age, goal, experience, equipment, muscleGroups };
    console.log(data);
    navigate("/ex", {
      state: { data },
    });
  };

  // Calculate the percentage of progress based on the current step
  const progressPercentage = (currentStep / totalSteps) * 100;

  // Utility to set the active/inactive styles for icons based on the step
  const getIconClasses = (step) =>
    currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500";

  return (
    <div className="wizard-container">
      <div className="wizard-header flex justify-center space-x-4 my-4">
        <div className="bg-gray-100 p-12 w-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(1)}`}>
                <DumbbellIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 mx-2 h-1 bg-gray-300">
                {/* <div className="h-full bg-blue-600" style={{ width: `${progressPercentage}%` }}></div> */}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(2)}`}>
                <HeartPulseIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 mx-2 h-1 bg-gray-300">
                {/* <div className="h-full bg-blue-600" style={{ width: `${progressPercentage}%` }}></div> */}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(3)}`}>
                <TrophyIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 mx-2 h-1 bg-gray-300">
                {/* <div className="h-full bg-blue-600" style={{ width: `${progressPercentage}%` }}></div> */}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(4)}`}>
                <ZapIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 mx-2 h-1 bg-gray-300">
                {/* <div className="h-full bg-blue-600" style={{ width: `${progressPercentage}%` }}></div> */}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(5)}`}>
                <GoalIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 mx-2 h-1 bg-gray-300">
                {/* <div className="h-full bg-blue-600" style={{ width: `${progressPercentage}%` }}></div> */}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(6)}`}>
                <HeartIcon className="w-6 h-6" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-blue-600">LETS GET STARTED</h1>
          </div>
        </div>
      </div>

      <StepWizard instance={setWizardInstance}>
        <Step1 gender={gender} setGender={setGender} />
        <Step2 age={age} setAge={setAge} />
        <Step3 goal={goal} setGoal={setGoal} />
        <Step4 experience={experience} setExperience={setExperience} />
        <Step5 equipment={equipment} setEquipment={setEquipment} />
        <Step6 muscleGroups={muscleGroups} setMuscleGroups={setMuscleGroups} />
      </StepWizard>

      <div className="flex justify-between my-4">
        <button
          className={`py-2 px-4 bg-gray-300 rounded ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          className="py-2 px-4 bg-blue-600 text-white rounded"
          onClick={currentStep === totalSteps ? handleFinish : nextStep}
        >
          {currentStep === totalSteps ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default FitnessWizard;
