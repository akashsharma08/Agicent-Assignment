import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../assets/ddArrow.svg';
import "../pList.css";
const ProductList = ({onClose}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay (simulating async data fetching)
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, []);
  return (
    <>
    <div
      className={` hidden z-10 absolute top-9 left-[-80px] shadow-sm shadow-gray-300 transition-all  rounded-md md:flex w-[360px] h-[370px] bg-white fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <Link to="/products" className="flex items-center  justify-between">
        <div className="h-full w-[217px] rounded-l-md bg-white shadow-inner shadow-gray-300 p-4">
          <ul className=" space-y-4 pt-2 ">
            <li className=" relative font-poppins text-base font-semibold ">
              Dhoop Cones
              <img src={arrow} alt="arrow" className=" absolute top-2 right-3" />
            </li>
            <li className="font-poppins text-base font-semibold text-black">
              Incense Sticks
            </li>
            <li className="font-poppins text-base font-semibold text-black">
              Yantras
            </li>
            <li className="font-poppins text-base font-semibold text-black">
              Incense Holders
            </li>
            <li className="font-poppins text-base font-semibold text-black">
              Pooja Thali Sets
            </li>
            <li className="font-poppins text-base font-semibold text-black">
              Shankh
            </li>
            <li className="font-poppins text-base font-semibold text-black">
              Kalash
            </li>
            <li className="font-poppins text-base font-semibold text-black">
              Book Rests
            </li>
          </ul>
        </div>
        <div className="h-full w-[143px] rounded-r-md bg-white shadow-inner shadow-gray-300 p-4">
          <ul className=" space-y-3 pt-2 ">
            <li className="font-poppins text-[13px] font-semibold ">
              Jar Cones
            </li>
            <li className="font-poppins text-[13px] font-semibold text-black">
            Chandan Bamboo Dhoop
            </li>
            <li className="font-poppins text-[13px] font-semibold text-black">
            Backflow Cone Dhoop
            </li>
            <li className="font-poppins text-[13px] font-semibold text-black">
            Buddha Red Incense Cone
            </li>
            <li className="font-poppins text-[13px] font-semibold text-black">
            Mountain Sandal Dhoop
            </li>
            <li className="font-poppins text-[13px] font-semibold text-black">
            Cone Sandal Dhoop
            </li>
            
          </ul>
        </div>
      </Link>
    </div>
    <div
      className={` z-10 absolute top-5  bg-gray-100 left-8 shadow-sm shadow-gray-300  md:hidden rounded-md flex    fade-in ${
        isVisible ? "visible" : ""
      }`} 
      onClick={onClose}
    >
      <Link to="/products" className="flex items-center  justify-between">
        <div className="h-full nowrap rounded-md  shadow-inner shadow-gray-300 p-4">
          <ul className=" space-y-4 pt-2 ">
            <li className="font-poppins text-xs font-semibold ">
              Dhoop Cones
            </li>
            <li className="font-poppins text-xs font-semibold text-black">
              Incense Sticks
            </li>
            <li className="font-poppins text-xs font-semibold text-black">
              Yantras
            </li>
            <li className="font-poppins text-xs font-semibold text-black">
              Incense Holders
            </li>
            <li className="font-poppins text-xs font-semibold text-black">
              Pooja Thali Sets
            </li>
            <li className="font-poppins text-xs font-semibold text-black">
              Shankh
            </li>
            <li className="font-poppins text-xs font-semibold text-black">
              Kalash
            </li>
            <li className="font-poppins text-xs font-semibold text-black">
              Book Rests
            </li>
            
          </ul>
        </div>
        
      </Link>
    </div>
    </>
  );
};

export default ProductList;
