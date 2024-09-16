import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import LandingPage from './components/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Data from "./templates/Data";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data" element={<Data />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
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