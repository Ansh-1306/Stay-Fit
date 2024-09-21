import { PlayCircle } from "lucide-react";
import React from "react";

export default function ExerciseCard({ exercise, isMale }) {
  return (
    <div className="flex justify-center mb-6 items-center">
  <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
    <a
      href={
        isMale
          ? exercise.exercise.male_images[0].branded_video
          : exercise.exercise.female_images[0].branded_video
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative">
        <img
          src={
            isMale
              ? exercise.exercise.male_images[0].og_image
              : exercise.exercise.female_images[0].og_image
          }
          alt="Person performing exercise"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-white" />
        </div>
      </div>
    </a>
    <div className="px-6 py-4">
      <div className="text-center font-bold text-2xl mb-2">
        {exercise.exercise.name}
      </div>
      <p className="text-gray-600 text-center text-lg mb-2">
        Experience: {exercise.exercise.difficulty.name}
      </p>
      <p className="text-gray-800 text-center font-bold text-lg mb-2">
        Reps: {exercise.sets.regular} x {exercise.reps}
      </p>
      <div className="flex justify-center items-center">
        <svg
          className="w-6 h-6 mr-2 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <line x1="10" y1="12" x2="22" y2="12" />
        </svg>
        <h1 className="text-gray-600 text-lg">
          {exercise.exercise.category.name}
        </h1>
      </div>
    </div>
  </div>
</div>


  );
}
