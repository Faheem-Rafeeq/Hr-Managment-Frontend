// src/pages/Login.jsx
import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout.jsx";
import InputField from "../components/InputField.jsx";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/login-img.png"; // Make sure to add a similar image

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://hr-managment.up.railway.app/api/auth/login",
        formData,
        { withCredentials: true }
      );
      alert("Login successful!");
      navigate("/dashboard"); // You can change this route later
    } catch (err) {
      alert("Login failed!");
      console.error(err);
    }
  };

  return (
    <AuthLayout image={loginImg} title="Optimize" subtitle="Workers">
      <h2 className="text-2xl font-bold mb-6">Sign in</h2>
      <p className="text-gray-500 mb-6">Please fill in the credentials</p>

      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
          icon={FaUser}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          type="password"
          placeholder="Password"
          icon={FaLock}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
        >
          Sign in
        </button>
      </form>

      <p className="text-sm text-center mt-6">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
