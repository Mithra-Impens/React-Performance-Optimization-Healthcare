import React from "react";
import doctorsData from "../data/doctorsData";

function Doctors() {
  console.log("Doctors Rendered");

  return (
    <div>
      <h2>Doctors</h2>

      {doctorsData.map((doctor) => (
        <div className="doctor-item" key={doctor.id}>
          <p>{doctor.name} - {doctor.specialty}</p>
        </div>
      ))}
    </div>
  );
}

export default Doctors;