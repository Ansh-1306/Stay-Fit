import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import LoginPage from './templates/Login1'
import SignUpPage from './pages/SignUpPage'
import Data from "./templates/Data";
import Fig from "./components/Fig";
import Protected from "./components/Protected";
import Demo from "./templates/Demo"
import ExercisePage from "./pages/ExercisePage";
import ExerciseCard from "./components/ExerciseCard";

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
        <Route path="/exercisePage" element={<ExercisePage />} />
        <Route path="/exerciseComponent" element={<ExerciseCard />} />
        {/* <Route path="/activate/:uid/:token" element={<ActivatePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} /> */}
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;