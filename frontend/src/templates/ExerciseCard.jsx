import React from 'react';
import { Share2 } from 'lucide-react';

export default function ExerciseCard({ title, images, steps }) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex space-x-4 mb-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Exercise step ${index + 1}`}
              className="w-1/2 h-48 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-3">
                {index + 1}
              </div>
              <p className="text-secondary-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
