// src/pages/Register.jsx

import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaBuilding, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/login-img.png";

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    role: "",
    department: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(
        "https://hr-managment.up.railway.app/api/auth/register",
        formData,
        { withCredentials: true }
      );
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert("Registration failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout image={loginImg} title="Manage" subtitle="HR Flow">
      <div className="w-full max-w-md mx-auto px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Sign up</h2>
        <p className="text-gray-500 text-center mb-6">Create your account</p>

        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[70vh] pr-1">
          <InputField
            type="text"
            name="name"
            placeholder="Full Name"
            icon={FaUser}
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            icon={FaEnvelope}
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="phone"
            placeholder="Phone Number"
            icon={FaPhone}
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Gender Dropdown */}
          <div className="mb-2">
            <label className="text-sm text-gray-600 mb-1 block">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <InputField
            type="date"
            name="dob"
            placeholder="Date of Birth"
            icon={FaBirthdayCake}
            value={formData.dob}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="address"
            placeholder="Address"
            icon={FaMapMarkerAlt}
            value={formData.address}
            onChange={handleChange}
          />

          {/* Role Dropdown */}
          <div className="mb-2">
            <label className="text-sm text-gray-600 mb-1 block">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-blue-500"
            >
              <option value="">Select Role</option>
              <option value="owner">Owner</option>
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <InputField
            type="text"
            name="department"
            placeholder="Department"
            icon={FaBuilding}
            value={formData.department}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            icon={FaLock}
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
                Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;