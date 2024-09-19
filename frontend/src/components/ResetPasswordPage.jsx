import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../features/auth/authSlice";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess, message } = useSelector(
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
    };

    dispatch(resetPassword(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
      toast.success("A reset password email has been sent to you.");
    }
  }, [isError, isSuccess, message, dispatch]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E]">
        <div className="bg-[#2C2F33] shadow-xl rounded-lg p-20 max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold text-white-800 mb-4">
            Reset Password
          </h1>
          <p className="text-gray-600 mb-6">
            Enter your email address below, and we will send you a link to reset
            your password.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              className="w-full px-8 py-4 mb-8 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
            <button
              className="bg-[#E9522C] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-orange-800 hover:shadow-xl transition-all duration-300 ease-in-out"
              type="submit"
              onClick={handleSubmit}
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
