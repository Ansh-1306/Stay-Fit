import React, { useState } from "react";

const FormRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Clear the error message if validation passes
    setErrorMessage("");

    // API call logic here
    try {
      const response = await fetch("https://api.example.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Registration successful");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[90vh] bg-[#282D2D] px-5">
      {/* <div className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full"></div> */}
      <div className={`xl:max-w-3xl w-full p-5 sm:p-10 rounded-md`}>
        <h1 className="text-center text-xl sm:text-3xl font-semibold text-white">Register</h1>
        <form onSubmit={handleSubmit} className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none bg-gray-100 text-black focus:border-black"
                type="text"
                placeholder="Your first name"
              />
              <input    
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none bg-gray-100 text-black focus:border-black"
                type="text"
                placeholder="Your last name"
              />
            </div>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none bg-gray-100 text-black focus:border-black"
              type="email"
              placeholder="Enter your email"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none bg-gray-100 text-black focus:border-black"
              type="password"
              placeholder="Password"
            />
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none bg-gray-100 text-black focus:border-black"
              type="password"
              placeholder="Confirm Password"
            />

            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-3 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
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
            <p className="mt-6 text-lg text-gray-600 text-center">
              Already have an account?{" "}
              <a href="">
                <span className="text-[#E9522C] font-semibold">Login</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegistration;
