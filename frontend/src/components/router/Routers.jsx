import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import ServicePage from "../../pages/servies";
import DoctorPage from "../../pages/doctor";
import DoctorDetailsPage from "../../pages/doctorDetails";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ContactPage from "../../pages/contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/doctors" element={<DoctorPage />} />
      <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Routers;
