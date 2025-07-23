// src/pages/CompanyManagement.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState("");

  const fetchCompanies = async () => {
    const res = await axios.get("https://hr-managment.up.railway.app/api/company", {
      withCredentials: true,
    });
    setCompanies(res.data);
  };

  const handleCreate = async () => {
    if (!name) return;
    await axios.post(
      "https://hr-managment.up.railway.app/api/company",
      { name },
      { withCredentials: true }
    );
    setName("");
    fetchCompanies();
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Company Management</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={name}
          placeholder="Company Name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleCreate} className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </div>
      <ul>
        {companies.map((company) => (
          <li key={company._id} className="mb-2 border p-2 rounded">
            {company.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
