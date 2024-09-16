import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Data() {
  const [workoutData, setWorkoutData] = useState(null);
  const [error, setError] = useState(null);

  const data = {
    "equipment_id_list": [3],
    "muscles_id_list": [18, 5, 12, 7, 16, 19, 11, 20, 1, 4, 5, 12, 2, 3, 4, 5, 6, 7, 8],
    "gender": "M",
    "age": "20",
    "fitness_level": 1,
    "mobile": false,
    "goal": 3
  }
  const fetch_workout = async(data) => {
    const response = await axios.post('http://127.0.0.1:8000/fetch-workout/', data, {
      headers: {
        'Content-Type': 'application/json',
      }})
    setWorkoutData(response.data)
  }
  useEffect(()=>{
    fetch_workout(data)
  }, [])

  if (error) {
    return <div>{error}</div>;
  }

  if (!workoutData) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        {workoutData.exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <h2>{exercise.exercise.name}</h2>
            <div>
              <strong>Primary Muscles: </strong>
              {exercise.exercise.muscles_primary.map((muscle) => (
                <span key={muscle.id}>{muscle.name}</span>
              ))}
            </div>
  
            <div>
              <strong>Category: </strong>
              {exercise.exercise.category.name}
            </div>
  
            <div>
              <strong>Difficulty: </strong>
              {exercise.exercise.difficulty.name}
            </div>
  
            <div>
              <strong>Reps: </strong>
              {exercise.reps}
            </div>
  
            <div>
              <strong>Sets: </strong>Regular: {exercise.sets.regular}, Warmup: {exercise.sets.warmup}
            </div>
  
            <div>
              <strong>Fatigue: </strong>
              <ul>
                {exercise.fatigue.map((muscleFatigue, idx) => (
                  <li key={idx}>
                    {muscleFatigue.muscle_name} - Fatigue: {muscleFatigue.fatigue}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Images (Male):</strong>
              <ul>
                {exercise.exercise.male_images.map((img) => (
                  <li key={img.id}>
                    <img src={img.og_image} alt="Male Exercise" width="200" />
                    <a href={img.original_video} target="_blank" rel="noopener noreferrer">
                      Watch Video
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Images (Female):</strong>
              <ul>
                {exercise.exercise.female_images.map((img) => (
                  <li key={img.id}>
                    <img src={img.og_image} alt="Female Exercise" width="200" />
                    <a href={img.original_video} target="_blank" rel="noopener noreferrer">
                      Watch Video
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Data