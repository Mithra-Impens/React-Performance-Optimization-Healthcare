import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";

const Patients = lazy(() => import("./pages/Patients"));
const Doctors = lazy(() => import("./pages/Doctors"));

function App() {
  console.log("App Rendered");

  return (
    <div className="container">
      <h1>Healthcare App</h1>
      
      <Navbar />

      <hr />

      <Suspense fallback={<h2 className="loading">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

