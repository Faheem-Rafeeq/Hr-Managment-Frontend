// src/pages/OwnerDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import CompanyManagement from "./CompanyManagement";
import EmployeeManagement from "./EmployeeManagement";

const OwnerDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Owner Dashboard</h1>
      {/* Render child route */}
      <Outlet />
      <CompanyManagement/>
      <EmployeeManagement/>
    </div>
  );
};

export default OwnerDashboard;
