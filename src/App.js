import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import "./App.css";

const App = () => (
  <div className="container-fullwidth">
    <Navbar />
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
