import React from "react";
import arrowdn from "../assets/arrowdn.svg";
import star from "../assets/star.svg";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="px-4 sm:px-16">
      <div className=" text-center mt-4 text-stone-300 mb-6 font-poppins text-base font-medium">
        Product &gt; Dhoop Cones &gt;{" "}
        <span className="text-[#fa5c98]">Jar Cones</span>
      </div>
      <div className=" font-poppins text-[10px] sm:text-lg text-[#979797] items-center justify-center flex gap-2  pb-4">
        <div className="border-2 border-gray-300 rounded-full px-2 text-cent gap-2 p-2   flex">
          Price($) &nbsp; <img src={arrowdn} className="w-[8px] sm:w-[14px]" alt="" />
        </div>
        <div className="border-2 border-gray-300 rounded-full px-2 text-center p-2 flex">
          Category &nbsp; <img src={arrowdn}  className="w-[8px] sm:w-[14px]" alt="" />
        </div>
      </div>
      <Link to="/checkout">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center p-4">
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p1.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <div className="">
              <img className="" src={star} alt="" />
            </div>
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p2.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              HEM INCENSE
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p3.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              MYSTIC TEMPLE INCENSE
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p4.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              SAC INCENSE
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p5.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              Frankincense and Myrrh
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p6.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              Eucalyptus INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p7.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              Lavender INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p8.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              SAGE INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p9.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p10.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p11.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p12.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p13.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p14.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p15.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
          <div className="flex flex-col items-center sm:items-start ">
            <img src="/p16.png" className="w-72" alt="" />
            <p className="font-poppins text-[#fa5c98] text-base font-semibold">
              DHOOP INCENSE CONES
            </p>
            <p className="font-poppins text-sm font-normal">
              4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use
            </p>
            <img className="" src={star} alt="" />
            <p className="text-orange-400 text-xl font-semibold">$2.05</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-8 p-5">
        <div className="rounded-full w-8 h-8 text-center flex items-center justify-center bg-gradient-to-r from-orange-400 via-orange-200 shadow-lg shadow-black text-white to-orange-400">
          1
        </div>
        <div className="border-2 hidden  border-orange-400 w-8 h-8 rounded-full sm:flex items-center justify-center">
          2
        </div>
        <div className="border-2 hidden  border-orange-400 w-8 h-8 rounded-full md:flex items-center justify-center">
          2
        </div>
        <div className="border-2 hidden  border-orange-400 w-8 h-8 rounded-full md:flex items-center justify-center">
          4
        </div>
        <div className="border-2 hidden  border-orange-400 w-8 h-8 rounded-full md:flex items-center justify-center">
          5
        </div>
        <div className=" font-medium text-orange-400">Next</div>
      </div>
    </div>
  );
};

export default Products;
