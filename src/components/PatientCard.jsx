import React from "react";

function PatientCard({ patient, onSelect }) {
  console.log("PatientCard Render:", patient.name);

  return (
     <div className="card">
      <h4>{patient.name}</h4>

      <button onClick={() => onSelect(patient.name)}>
        Select Patient
      </button>
    </div>
  );
}

export default React.memo(PatientCard);