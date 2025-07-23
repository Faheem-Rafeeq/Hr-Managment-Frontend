import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login-img.png";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 text-white px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 bg-white/10 rounded-2xl shadow-xl backdrop-blur-lg">
        <img src={loginImg} alt="HR System" className="w-full h-64 object-contain" />

        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to HR Management System</h1>
          <p className="mb-6 text-gray-200">
            Simplify your employee management with secure access control for admins, HR, and employees.
          </p>

          <div className="flex space-x-4">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold border border-white hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
