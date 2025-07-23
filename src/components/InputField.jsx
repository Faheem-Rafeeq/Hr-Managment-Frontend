// src/components/InputField.jsx
import React from "react";

const InputField = ({ type, placeholder, icon: Icon, value, onChange, name }) => {
  return (
    <div className="mb-4 relative">
      {Icon && <Icon className="absolute top-3 left-3 text-gray-400" />}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default InputField;
