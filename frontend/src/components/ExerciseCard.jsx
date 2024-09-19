import { PlayCircle } from "lucide-react";
import React from "react";

export default function ExerciseCard({ exercise }) {
  return (
    <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white">
      <a href={exercise.exercise.male_images[0].branded_video} target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <img
            src={exercise.exercise.male_images[0].og_image}
            alt="Person performing exercise"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white" />
          </div>
        </div>
      </a>
      <div className="px-6 py-4">
        {/* Exercise Name */}
        <div className="font-bold text-2xl mb-2">{exercise.exercise.name}</div>

        {/* Difficulty Level */}
        <p className="text-gray-600 text-lg mb-2">{exercise.exercise.difficulty.name}</p>

        {/* Sets & Reps */}
        <p className="text-gray-800 font-semibold text-lg mb-2">
          {exercise.sets.regular} X {exercise.reps}
        </p>

        {/* Exercise Category */}
        <div className="flex items-center">
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
          <span className="text-gray-600 text-lg">{exercise.exercise.category.name}</span>
        </div>
      </div>
    </div>
  );
}
