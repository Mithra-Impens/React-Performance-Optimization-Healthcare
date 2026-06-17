import React, { useState, useMemo, useCallback } from "react";
import PatientCard from "../components/PatientCard";
import patientsData from "../data/patientsData";

function Patients() {
  console.log("Patients Rendered");

  const [patients] = useState(patientsData);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleSelectPatient = useCallback((name) => {
    alert(`Selected: ${name}`);
  }, []);

  const filteredPatients = useMemo(() => {
    console.log("Filtering Patients");

    return patients.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, patients]);

  return (
    <div>
      <h2>Patients</h2>

      <input
        type="text"
        placeholder="Search Patient"
        value={search}
        onChange={handleSearch}
      />

      <button onClick={() => setCount(count + 1)}>
       Re-render Parent ({count})
    </button>

      <h3>Patient List</h3>

      {filteredPatients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          onSelect={handleSelectPatient}
        />
      ))}
    </div>
  );
}

export default Patients;