import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import ServicePage from "../../pages/servies";
import DoctorPage from "../../pages/doctor";
import DoctorDetailsPage from "../../pages/doctorDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/doctors" element={<DoctorPage />} />
      <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
      <Route path="/services" element={<ServicePage />} />
    </Routes>
  );
};

export default Routers;
