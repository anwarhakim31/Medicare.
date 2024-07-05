import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Routers from "./components/router/Routers";
import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
