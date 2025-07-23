// src/components/AuthLayout.jsx
import React from "react";

const AuthLayout = ({ children, image, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fbff] text-gray-800">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-[900px] max-w-full">
        {/* Left: Form */}
        <div className="w-1/2 p-10">{children}</div>

        {/* Right: Illustration */}
        <div className="w-1/2 bg-[#f0f7ff] flex flex-col justify-center items-center text-center p-6">
          <img src={image} alt="HR Illustration" className="w-64 mb-6" />
          <h3 className="text-xl font-semibold mb-2">
            {title} <span className="text-blue-500">{subtitle}</span>
          </h3>
          <p className="text-sm text-gray-500">
            HR management made easy. Organize your daily work smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
