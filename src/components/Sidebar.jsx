// Sidebar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import ProductList from "./productList";
import "../pList.css";
const Sidebar = ({ isOpen, onClose }) => {
  const [click, setClick] = useState(false);
  const [tabClick, setTabClick] = useState("home");

  const handleTabClick = (tab) => {
    console.log("Clicked!!!");
    setTabClick(tab);
    setClick(!click);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay (simulating async data fetching)
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, []);
  return (
    <div className={`fixed  inset-0 z-50 fade-in ${isOpen ? "block" : "hidden"} ${isVisible? 'visible' : ''}`}>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black opacity-50 transition-opacity "
      ></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-64 bg-white p-4 flex flex-col gap-6 ">
          <button className="text-red-500" onClick={onClose}>
            Close
          </button>
          <div
            className={`cursor-pointer flex font-poppine font-semibold transition-all duration-500  ${
              tabClick === "home" ? "text-pink-500" : "text-purple-900"
            } `}
            onClick={() => {
              handleTabClick("home");
              onClose();
            }}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className={` relative cursor-pointer flex font-poppine font-semibold transition-all duration-300 ${
              tabClick === "products" ? "text-pink-500" : "text-purple-900"
            } `}
            onClick={() => {
              handleTabClick("products");
            }}
          >
            Products &nbsp; <img src={arrow} alt="" />
            {tabClick === "products" && click ? (
              <ProductList  onClose={onClose}  />
            ) : (
              ""
            )}
          </div>
          <div className=" cursor-pointer flex font-poppine font-semibold text-purple-900">
            Services&nbsp; <img src={arrow} alt="" />
          </div>
          <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
            Courses
          </div>
          <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
            Blogs
          </div>
          <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
            Videos
          </div>
          <div className=" cursor-pointer font-poppine font-semibold text-purple-900">
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
