import axios from "axios";

const BACKEND_DOMAIN = "http://127.0.0.1:8000/";
const REGISTER_URL = `${BACKEND_DOMAIN}/auth/users/`;
const LOGIN_URL = `${BACKEND_DOMAIN}/auth/jwt/create/`;
const ACTIVATE_URL = `${BACKEND_DOMAIN}/auth/users/activation/`;
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/auth/users/reset_password/`;
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/auth/users/reset_password_confirm/`;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData, config);

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData, config);

  if(response.data){
    localStorage.setItem("user", JSON.stringify(response.data))
  }

  return response.data;
};

const logout = () => {
  return localStorage.removeItem("user")
}

const activate = async(userData) => {
  const response = await axios.post(ACTIVATE_URL, userData, config)

  return response.data
}

const resetPassword = async(userData) => {
  const response = await axios.post(RESET_PASSWORD_URL, userData, config)

  return response.data
}

const resetPasswordConfirm = async(userData) => {
  const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, userData, config)

  return response.data
}

const authService = { register, login, activate, logout, resetPassword, resetPasswordConfirm };

export default authService