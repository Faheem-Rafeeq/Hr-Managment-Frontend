// src/pages/Login.jsx
import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout.jsx";
import InputField from "../components/InputField.jsx";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/login-img.png";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "https://hr-managment.up.railway.app/api/auth/login",
        formData,
        { withCredentials: true }
      );

      const user = res.data.user || res.data; // depends on your backend
      login(user); // store in context

      // Redirect by role
      switch (user.role) {
        case "owner":
          navigate("/dashboard/owner");
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
        case "hr":
          navigate("/dashboard/hr");
          break;
        case "employee":
          navigate("/dashboard/employee");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout image={loginImg} title="Optimize" subtitle="Workers">
      <div className="w-full max-w-md mx-auto px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Sign in</h2>
        <p className="text-gray-500 text-center mb-6">Please fill in the credentials</p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            disabled={isSubmitting}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 flex justify-center items-center ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
