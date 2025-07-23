// src/pages/EmployeeManagement.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
    companyId: "",
  });

  const fetchEmployees = async () => {
    const res = await axios.get("https://hr-managment.up.railway.app/api/employee", {
      withCredentials: true,
    });
    setEmployees(res.data);
  };

  const handleSubmit = async () => {
    await axios.post("https://hr-managment.up.railway.app/api/employee", form, {
      withCredentials: true,
    });
    setForm({ name: "", email: "", password: "", role: "employee", companyId: "" });
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Employee Management</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {["name", "email", "password", "companyId"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="border p-2 rounded"
          />
        ))}
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
          <option value="hr">HR</option>
        </select>
        <button onClick={handleSubmit} className="bg-green-600 text-white py-2 rounded">
          Add Employee
        </button>
      </div>

      <ul>
        {employees.map((emp) => (
          <li key={emp._id} className="border p-2 mb-2 rounded">
            {emp.name} ({emp.email}) - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeManagement;
