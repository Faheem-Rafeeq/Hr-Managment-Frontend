// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import OwnerDashboard from "./pages/OwnerDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import HRDashboard from "./pages/HRDashboard.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";

// nested pages
import CompanyManagement from "./pages/CompanyManagement.jsx"; // for owner

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Owner Dashboard with nested routes */}
          <Route
            path="/dashboard/owner"
            element={
              <ProtectedRoute allowedRoles={["owner"]}>
                <OwnerDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="company-management" element={<CompanyManagement />} />
            {/* You can add more nested routes here for owner */}
          </Route>

          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/hr"
            element={
              <ProtectedRoute allowedRoles={["hr"]}>
                <HRDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/employee"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
