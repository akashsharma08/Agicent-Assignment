import { useState } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    // e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  return (
    <Router>
      <Header isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose}  handleSidebarToggle={handleSidebarToggle} />
      <Navbar handleSidebarClose={handleSidebarClose} />
      {/* Navigation links go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
