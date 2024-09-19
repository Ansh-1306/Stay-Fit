import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activate, reset } from '../features/auth/authSlice'

const ActivationPage = () => {

    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            uid,
            token
        }
        dispatch(activate(userData))
        console.log(userData)
    }

    useEffect(() => {

        if (isSuccess) {
            navigate("/login")
        }

        dispatch(reset())

    }, [isError, isSuccess, navigate, dispatch])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E]">
      <div className="bg-[#2C2F33] shadow-xl rounded-lg p-20 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-white-800 mb-4">StayFit Activation</h1>
        <p className="text-gray-600 mb-6">
          Welcome to StayFit! Your journey to a healthier, fitter you starts here.
          To activate your account and get started, click the button below.
        </p>
        <div className='flex items-center justify-center'><button
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 ease-in-out"
          type="submit" onClick={handleSubmit}
        >Activate Now
        </button></div>
      </div>
    </div>
  );
};

export default ActivationPage;
