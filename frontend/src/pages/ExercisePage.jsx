import { useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ExerciseCard from "../components/ExerciseCard";

function ExercisePage() {
  const [workoutData, setWorkoutData] = useState();
  const [isMale, setIsMale] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true)

  const passedData = location.state;
  console.log(passedData);

  const fetch_workout = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      const response = await axios.post(
        "http://127.0.0.1:8000/fetch-workout/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setWorkoutData(response.data);
      setIsLoading(false)
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const data = {
      equipment_id_list: passedData.data.equipment,
      muscles_id_list: passedData.data.muscleGroups,
      //   "muscles_id_list": [18, 5, 12, 7  ],

      gender: `${passedData.data.gender}`,
      age: `${passedData.data.age}`,
      fitness_level: `${passedData.data.experience}`,
      mobile: false,
      goal: `${passedData.data.goal}`,
    };
    setIsMale(passedData.data.gender === "M");
    fetch_workout(data);
    //Remember this UseEffect will only work once due to dependency below
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if(isLoading){
    return <h1>Fetching data from DB.</h1>
  }

  if (!workoutData) {
    return <div className="text-center text-xl py-8">Loading...</div>;
  }
  console.log(workoutData);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-center m-8">Workout Exercises</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 m-8 w-full">
        {workoutData.exercises.map((item, index) => (
          <div key={index}>
            <ExerciseCard exercise={item} isMale={isMale} />
          </div>
        ))}
      </div>
      <Link to="/">Back to Home.</Link>
    </div>
  );
}

export default ExercisePage;
