import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, getUserInfo } from "../features/auth/authSlice";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/")
    }

    dispatch(reset());
    dispatch(getUserInfo());
  }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#1E1E1E] px-8">
      <div
        className={`xl:max-w-6xl w-full xl:w-1/3 lg:w-1/2 md:w-3/4 p-10 sm:p-16 rounded-md bg-[#2C2F33] `}
      >
        <h1 className="text-center text-4xl font-bold sm:text-5xl text-white-800">
          Login
        </h1>
        <form className="w-full mt-10">
          <div className="mx-auto w-full sm:max-w-2xl md:max-w-4xl flex flex-col gap-7">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              type="text"
              placeholder="Enter your email."
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
            <input
              type="password"
              placeholder="Enter Password."
              name="password"
              className="w-full px-8 py-4 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              onChange={handleChange}
              value={password}
              required
            />

            <div className="flex justify-end">
              <Link
                to="/reset-password"
                className="text-md text-[#E9522C] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              onClick={handleSubmit} 
              className="mt-6  tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-5 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3 text-md">Login</span>
            </button>

            <p className="mt-8  text-gray-400 text-center">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-[#E9522C] font-semibold">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
