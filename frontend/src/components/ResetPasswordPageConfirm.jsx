import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { resetPasswordConfirm } from "../features/auth/authSlice";
import { AiFillLock } from "react-icons/ai";

const ResetPasswordPageConfirm = () => {
  const { uid, token } = useParams();
  const [formData, setFormData] = useState({
    d: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      uid,
      token,
      new_password,
      re_new_password,
    };

    dispatch(resetPasswordConfirm(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
      toast.success("Your password was reset successfully.");
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E]">
        <div className="bg-[#2C2F33] shadow-xl rounded-lg p-20 max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold text-white-800 mb-4">
            Reset Your Password
          </h1>
          <p className="text-gray-600 mb-6">
            Enter your new password below to reset your account password.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="password"
              className="w-full px-8 py-4 mb-8 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              placeholder="New Password"
              name="new_password"
              onChange={handleChange}
              value={new_password}
              required
            />
            <input
              type="password"
              className="w-full px-8 py-4 mb-8 rounded-lg font-medium border-2 border-gray-600 placeholder-gray-400 text-2xl focus:outline-none bg-[#40444B] text-white focus:border-[#E9522C]"
              placeholder="Confirm New Password"
              name="re_new_password"
              onChange={handleChange}
              value={re_new_password}
              required
            />

            <button
              className="bg-[#E9522C] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-orange-800 hover:shadow-xl transition-all duration-300 ease-in-out"
              type="submit"
              onClick={handleSubmit}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPageConfirm;
