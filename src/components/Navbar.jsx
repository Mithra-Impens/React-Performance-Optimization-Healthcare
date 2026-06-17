import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/patients">Patients</Link> |{" "}
      <Link to="/doctors">Doctors</Link>
    </nav>
  );
}

export default Navbar;