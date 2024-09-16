import React, { useState } from "react";

const LoginForm = () => {
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

    // Clear any previous error messages
    setErrorMessage("");

    // Simple validation (can be expanded based on needs)
    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    // API call logic here
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
        // Handle successful login
        alert("Login successful");
      } else {
        // Handle login error
        setErrorMessage(result.message || "Login failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[90vh] bg-[#282D2D] px-32">
      <div className={`xl:max-w-4xl w-full p-5 sm:p-12 rounded-md`}>
        <h1 className="text-center text-2xl sm:text-4xl font-semibold text-white">Log In</h1>
        <form onSubmit={handleSubmit} className="w-full mt-8">
          <div className="mx-auto max-w-sm sm:max-w-lg md:max-w-xl flex flex-col gap-5 ">
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className=" w-full px-6 py-4 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-l focus:outline-none bg-gray-100 text-black focus:border-black"
              type="email"
              placeholder="Enter your email"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-6 py-4 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-l focus:outline-none bg-gray-100 text-black focus:border-black"
              type="password"
              placeholder="Password"
            />

            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}

            {/* Forgot password link */}
            <div className="flex justify-center">
              <a href="/forgot-password" className="text-xs text-[#E9522C] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
              <span className="ml-3">LogIn</span>
            </button>

            <p className="mt-6 text-s text-gray-600 text-center">
              Don't have an account?{" "}
              <a href="">
                <span className="text-[#E9522C] font-semibold">Register</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
