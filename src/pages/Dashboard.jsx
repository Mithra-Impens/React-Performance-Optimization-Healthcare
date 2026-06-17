import React, { useMemo } from "react";
import patientsData from "../data/patientsData";
import doctorsData from "../data/doctorsData";

function Dashboard() {
  console.log("Dashboard Rendered");

  const totalPatients = useMemo(() => {
    console.log("Calculating Patients");
    return patientsData.length;
  }, []);

  const totalDoctors = useMemo(() => {
    console.log("Calculating Doctors");
    return doctorsData.length;
  }, []);

  return (
  <div>
    <h2>Dashboard</h2>

    <div className="dashboard-card">
      <h3>Total Patients: {totalPatients}</h3>
    </div>

    <div className="dashboard-card">
      <h3>Total Doctors: {totalDoctors}</h3>
    </div>
  </div>
);
}

export default Dashboard;