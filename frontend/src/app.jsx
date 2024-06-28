import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Routers from "./components/router/Routers";
import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default App;
