import React from 'react';
import ExerciseCard from './ExerciseCard';

const exerciseData = {
  title: "Machine Pec Fly",
  images: [
    "https://i.imgur.com/lICfvbD.jpg",
    "https://i.imgur.com/lICfvbD.jpg"
  ],
  steps: [
    "Adjust seat height so handles align with chest. Sit and grip handles with elbows slightly bent.",
    "Slowly bring handles together in front, keeping tension. Focus on squeezing chest muscles.",
    "Return handles to starting position with controlled motion. Keep chest up throughout. Repeat for reps."
  ]
};

export default function ExercisePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <ExerciseCard 
          title={exerciseData.title} 
          images={exerciseData.images} 
          steps={exerciseData.steps} 
        />
      </div>
    </div>
  );
}
