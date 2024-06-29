import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import ServicePage from "../../pages/servies";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<ServicePage />} />
    </Routes>
  );
};

export default Routers;
