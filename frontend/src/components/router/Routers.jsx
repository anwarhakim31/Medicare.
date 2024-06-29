import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default Routers;
