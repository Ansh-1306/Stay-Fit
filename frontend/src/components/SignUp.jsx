import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset, logout } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

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
    if (password !== re_password) {
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        password,
        re_password,
      };
      console.log(formData)
      dispatch(register(userData));
    }
  };

  useEffect(() => {

    if (isSuccess && user) {
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#1E1E1E] px-8">
      <div className="xl:max-w-6xl w-full xl:w-1/3 lg:w-1/2 md:w-3/4 p-10 sm:p-16 rounded-md bg-[#2C2F33]">
        <h1 className="text-center sm:text-5xl text-4xl font-bold">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="w-full mt-10">
          <div className="mx-auto w-full sm:max-w-2xl md:max-w-4xl flex flex-col gap-7">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="first_name"
                onChange={handleChange}
                value={first_name}
                required
                className="w-full px-8 py-6 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
                type="text"
                placeholder="Your first name"
              />
              <input
                name="last_name"
                onChange={handleChange}
                value={last_name}
                required
                className="w-full px-8 py-6 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
                type="text"
                placeholder="Your last name"
              />
            </div>
            <input
              name="email"
              onChange={handleChange}
              value={email}
              required
              className="w-full px-8 py-6 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              type="email"
              placeholder="Enter your email"
            />
            <input
              name="password"
              onChange={handleChange}
              value={password}
              required
              className="w-full px-8 py-6 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              type="password"
              placeholder="Password"
            />
            <input
              name="re_password"
              onChange={handleChange}
              value={re_password}
              required
              className="w-full px-8 py-6 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              type="password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-6 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-5 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
              <span className="ml-3">Register</span>
            </button>

            <p className="mt-8 text-2xl text-gray-400 text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#E9522C] font-semibold">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
