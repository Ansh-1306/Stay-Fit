import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Data from "./templates/Data";
import Fig from "./components/Fig";
import Protected from "./components/Protected";
import Demo from "./templates/Demo"
import ExercisePage from "./pages/ExercisePage";
import ActivationPage from "./components/ActivationPage";
import ResetPasswordPage from "./components/ResetPasswordPage"
import ResetPasswordPageConfirm from "./components/ResetPasswordPageConfirm"
import FitnessWizard from "./components/wizard/FitnessWizard"
import ExerciseCard from "./components/ExerciseCard";
import { ToastContainer } from"react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WorkoutPage from "./components/WorkoutPage";
import LowerBack from "./Bodyparts/LowerBack";
import Abs from "./Bodyparts/Abs";
import Biceps from "./Bodyparts/Biceps"
import Calves from "./Bodyparts/Calves"
import Chest from "./Bodyparts/Chest"
import ForeArms from "./Bodyparts/ForeArms"
import Glutes from "./Bodyparts/Glutes"
import Hamstring from "./Bodyparts/Hamstring"
import Lats from "./Bodyparts/Lats"
import Obliques from "./Bodyparts/Obliques"
import Quads from "./Bodyparts/Quads"
import Shoulder from "./Bodyparts/Shoulders"
import Traps from "./Bodyparts/Traps"
import TrapsMiddle from "./Bodyparts/TrapsMiddle"
import Triceps from "./Bodyparts/Triceps"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Protected Component={LandingPage} />} />
        <Route path="/data" element={<Data />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/fig" element={<Fig />} />
        <Route path="/nextpage" element={<Demo />} />
        <Route path="/workout-generator" element={<ExercisePage />} />
        <Route path="/wizard" element={<FitnessWizard />} />
        <Route path="/exerciseComponent" element={<ExerciseCard />} />
        <Route path="/activate/:uid/:token" element={<ActivationPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/workout" element={<WorkoutPage />}></Route>
        <Route path="/abs" element={<Abs />} />
        <Route path="/biceps" element={<Biceps />} />
        <Route path="/calves" element={<Calves />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/forearms" element={<ForeArms />} />
        <Route path="/glutes" element={<Glutes />} />
        <Route path="/hamstrings" element={<Hamstring />} />
        <Route path="/lats" element={<Lats />} />
        <Route path="/obliques" element={<Obliques />} />
        <Route path="/quads" element={<Quads />} />
        <Route path="/shoulders" element={<Shoulder />} />
        <Route path="/traps" element={<Traps />} />
        <Route path="/traps-middle" element={<TrapsMiddle />} />
        <Route path="/triceps" element={<Triceps />} />
        <Route path="/lowerback" element={<LowerBack />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;