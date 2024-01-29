import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Ad from "./components/Ad";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="flex flex-col min-h-screen w-[100vw]">
    <Ad />
    <div className="h-10"></div>
    
    
    <App />
    
    
  </div>
);

