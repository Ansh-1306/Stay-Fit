import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Login successful");
      } else {
        setErrorMessage(result.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center  items-center w-full h-[100vh] bg-[#1E1E1E] px-8">
      <div
        className={`xl:max-w-6xl w-full xl:w-1/3 lg:w-1/2 md:w-3/4 p-10 sm:p-16 rounded-md bg-[#2C2F33] `}
      >
        <h1 className="text-center text-3xl sm:text-5xl font-semibold text-white">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="w-full mt-10">
          <div className="mx-auto w-full sm:max-w-2xl md:max-w-4xl flex flex-col gap-7">
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-8 py-6 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              type="email"
              placeholder="Enter your email"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-8 py-6 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              type="password"
              placeholder="Password"
            />

            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}

            <div className="flex justify-end">
              <a
                href="/forgot-password"
                className="text-md text-[#E9522C] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
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
              <a href="/signup">
                <span className="text-[#E9522C] font-semibold">Register</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
