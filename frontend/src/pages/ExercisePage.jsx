import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseCard from '../components/ExerciseCard';

function ExercisePage() {
  const [workoutData, setWorkoutData] = useState();
  const [error, setError] = useState(null);

  const data = {
    "equipment_id_list": [3],
    "muscles_id_list": [18, 5, 12, 7, 16, 19, 11, 20, 1, 4, 5, 12, 2, 3, 4, 5, 6, 7, 8],
    "gender": "M",
    "age": "20",
    "fitness_level": 1,
    "mobile": false,
    "goal": 3
  };

  const fetch_workout = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/fetch-workout/', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setWorkoutData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetch_workout(data);
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!workoutData) {
    return <div className="text-center text-xl py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Workout Exercises</h1>
      {/* Flexbox with wrap to create a wider 2-column layout */}
      <div className="flex flex-wrap justify-center gap-8">
        {workoutData.exercises.map((item, index) => (
          <div key={index} className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
            <ExerciseCard exercise={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExercisePage;
