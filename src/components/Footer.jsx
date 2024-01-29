import React from "react";
import mail from "../assets/mail.svg";
import social from '../assets/social.svg'
const Footer = () => {
  return (
    <div className=" flex flex-col  w-[100vw] gap-0.5">
      <div className="flex flex-col lg:flex-row items-center py-2 justify-evenly   bg-[#fa5c98]  h-[141px] w-[100vw]">
        <div className="flex items-center justify-center">
          <img className=" md:w-10 w-6" src={mail} alt="Mail" />
          <span className="text-white ml-4 md:text-2xl text-md font-sans font-medium">
            Sign Up To Shop Now
          </span>
        </div>
        <div className="sm:w-[592px] w-[292px] h-[50px] flex items-center justify-between bg-white rounded-lg ">
          <div className="">
            <p className=" font-sans text-xs md:text-[18px] m-5 text-[#cdcdcd]">Enter you Email</p>
          </div>
          <div className="flex items-center justify-center w-[55px] h-[20px] sm:w-[116px] sm:h-[37px] bg-[#fa5c98] mr-2 rounded-md">
            <p className="text-white text-[8px] sm:text-[16px] font-poppine">SUBSCRIBE</p>
          </div>
        </div>
      </div>

      <div className=" text-white px-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 justify-center text-center gap-3 items-center lg:grid-cols-5 bg-[#fa5c98]  w-[100vw]">
        <div className="">
          <p className="  font-sans text-[20px]  font-semibold">Contact Us</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Akash Sharma</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Agra, U.P.</p>
          <p className="pt-1 text-[13px] font-sans font-medium">India</p>
          <p className="pt-1 text-[13px] font-sans font-medium">+91 6397214461</p>
          <p className="pt-1 text-[13px] font-sans font-medium">akashsharma0801@gmail.com</p>
        </div>
        <div className=" ">
          <p className=" font-sans text-[20px]  font-semibold">Information</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Privacy Policy</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Refund Policy</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Shipping Policy</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Terms Of Service</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Blogs</p>
        </div>
        <div className=" ">
          <p className=" font-sans text-[20px]  font-semibold">Account</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Search</p>
          <p className="pt-1 text-[13px] font-sans font-medium">About Us</p>
          <p className="pt-1 text-[13px] font-sans font-medium">FAQs</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Contact</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Help</p>
        </div>
        <div className="">
          <p className=" font-sans text-[20px]  font-semibold">Quick Links</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Incense Sticks</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Shankh</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Kalash</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Incense Holders</p>
          <p className="pt-1 text-[13px] font-sans font-medium">Cone Dhoop</p>
        </div>
        <div className="   h-[205px] flex flex-col gap-6 items-center justify-center">
          <div className="">
            <p className=" font-sans text-[20px]  font-semibold">Social Media.</p>
            <p className="text-[13px] font-sans font-medium">Follow us on social media and stay updated.</p>
          </div>
          <div className="">
            <img src={social} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
