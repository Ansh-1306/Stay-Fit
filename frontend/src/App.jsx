import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import HeroPage from "./templates/HeroPage";
import LoginPage from './templates/Login1'
import RegisterPage from './templates/RegisterPage'
import ActivatePage from './templates/ActivatePage'
import ResetPasswordPage from './templates/ResetPasswordPage'
import ResetPasswordPageConfirm from "./templates/ResetPasswordPageConfirm";
import Data from "./templates/Data";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HeroPage />} />
        <Route path="/data" element={<Data />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activate/:uid/:token" element={<ActivatePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
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