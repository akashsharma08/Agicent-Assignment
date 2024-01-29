import React, { useState } from "react";
import star from "../assets/start.svg";
import heart from "../assets/heart.svg";
import unlike from "../assets/unlike.svg";
import cart from "../assets/bicart.svg";
const Checkout = () => {
  const [amount, setAmount] = useState(1);
  const increment = () => {
    if (amount < 10) setAmount(amount + 1);
  };
  const decrement = () => {
    if (amount > 1) setAmount(amount - 1);
  };
  return (
    <div className="font-poppins pt-6 flex flex-col items-center justify-center">
      <div className=" text-stone-300 mb-6 font-poppins text-base font-medium">
        Product &gt; Dhoop Cones &gt; <span className="text-[#fa5c98]">Jar Cones</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center flex-col md:flex-row md:w-[800px] w-[150px] lg:w-[1000px] xl:w-[1190px] pb-10 justify-between gap-6">
          <div className=" hidden md:flex flex-row items-center md:flex-col justify-center gap-7">
            <div className=" flex items-center justify-center w-[133px] h-[100px] border-2 border-orange-200 rounded-lg ">
              <img src="image1.png" className="" alt="" />
            </div>
            <div className=" flex items-center justify-center w-[133px] h-[100px] ">
              <img src="image2.png" className="" alt="" />
            </div>
            <div className=" flex items-center justify-center w-[133px] h-[100px] ">
              <img src="image3.png" className="" alt="" />
            </div>
            <div className=" flex items-center justify-center w-[133px] h-[100px] ">
              <img src="image4.png" className="" alt="" />
            </div>
          </div>
          <div className=" flex items-center justify-center w-[264px] h-[281px] sm:w-[464px] sm:h-[481px]  bg-[#fff2f8] rounded-lg">
            <img src="mainImage.png" className="w-[60%]" alt="" />
          </div>
          <div className="flex font-poppins flex-col w-[70vw] justify-center  lg:gap-4 ">
            <div className="flex flex-col mb-4 gap-2">
              <p className="text-[12px] font-poppi ns font-light text-[#191919]">
                Brand: Rashmi Divine Solutions
              </p>
              <p className="text-[12px] font-poppins font-light text-[#191919]">
                Scent: Flora
              </p>
              <p className="text-[12px] text-red-500 font-poppins fontext-[#1919t-light 19]">
                Availability: Only 2 in Stock
              </p>
              <p className="font-poppins text-[21.43px] font-medium uppercase text-[#191919]">
                Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi
                Divine
              </p>
              <div className="">
                <img src={star} alt="Rating" />
              </div>
              <ul className=" w-[] text-[12px] list-disc   ">
                <li className="m-[10px]">
                  Lavender Dhoop sticks activate your senses and relax the
                  nerves, making you less anxious. They also hold the power to
                  cleanse the air.
                </li>
                <li className="m-[10px]">
                  Lavender Crafted out of the finest quality ingredients, this
                  leaves a magnificent and alluring fragrance and adds more to
                  your ‘spiritual time
                </li>
                <li className="m-[10px]">
                  Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with
                  soothing fragrances which don't cause eye irritation and
                  headache
                </li>
              </ul>
            </div>
            <div className="">
              <div className="w-full h-[0.67px] mb-2 bg-[#f0f0f0]"></div>
              <p>USD(incl. of all taxes)</p>
              <div className="flex gap-2">
                <p className="text-[21px] font-semibold text-green-400 font-poppins">
                  ${amount * 4}
                </p>
                <p className=" text-gray-300 text-sm line-through">$8.00</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-3">
                <div className="border cursor-pointer select-none flex items-center justify-evenly w-32 h-10">
                  <span className="text-3xl" onClick={decrement}>
                    -
                  </span>
                  <span className="text-2xl ">{amount}</span>
                  <span className="text-3xl" onClick={increment}>
                    +
                  </span>
                </div>
                <div className=" text-white flex items-center justify-center w-32 h-10  shadow-xl rounded-md bg-gradient-to-r  from-[#DC8064] via-[#ffc8b7] to-[#F19176]">
                  Read More
                </div>
                <div className=" text-orange-400 border-2 border-orange-400 flex items-center justify-center w-32 h-10  rounded-md ">
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 gap-10">
        <div className="flex items-center text-[#191919] font-medium text-xs sm:text-base justify-center gap-4 sm:gap-20">
          <div className=" relative">
            Description
            <div className=" absolute -bottom-3 w-full h-[3px] bg-orange-400"></div>
          </div>
          <div className="">Product Information</div>
          <div className="">Reviews</div>
        </div>
        <div className=" w-[250px] sm:w-[620px] text-[10px] sm:text-xs font-normal text-justify">
          Dhoop incence cone made from natual hurbs and scented.Long lasting
          enthralling dhoop batti for regular use - encouraging and cheering
          dhoop incense cones. Use dhoop bati for offering your prayers or while
          meditating or relaxing. It will unquestionably boost up your
          confidence, create encouraging environment and purify the atmosphere
          while spreading the lingering aroma all around. Use it every morning
          while doing prayers, while meditating or exercising. It's one of the
          best incense cones that spread mesmerizing fragrance all around.
          Simply relax and have the time of your lives by getting these incense
          cones. can we use for spiritual and meditation purpose. Its great
          fragrance and long lasting effect. Its heavenly aroma encourages your
          soul and thoughts to be pure and beautiful. For uplifting and
          purifying the ambience.
        </div>
      </div>
      <div className="font-poppins font-semibold text-[21.43px] pb-10">
        <p className="text-center py-16">Related Products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-20 xl:gap-4">
          <div className="flex flex-col mb-4 gap-4">
            <div className="border-2 flex-col flex shadow-lg shadow-gray-400 transition-all duration-500 hover:shadow-pink-300 items-center justify-center border-orange-400  px-8 py-2 rounded-lg">
              <div className="relative flex items-center justify-between w-full">
                <p className="text-[8px] absolute top-0 -left-5 font-poppins font-medium text-white rounded-full px-3 py-[2px] text-center bg-[#12a05c]">
                  NEW
                </p>
                <img
                  className="p-2 bg-[#fff2f8] absolute top-2 right-0 rounded-full"
                  src={heart}
                  alt=""
                />
              </div>
              <img src="card1.png" className="w-[218px]     " alt="" />
              <div className="">
                <div className=" text-white text-xs flex items-center justify-center w-32 h-10  shadow-xl rounded-md bg-gradient-to-r  from-[#DC8064] via-[#ffc8b7] to-[#F19176]">
                  <img src={cart} alt="" /> &nbsp; Add to Cart
                </div>
              </div>
            </div>
            <div className="text-center text-[#fa5c98] font-poppins font-medium text-base">
              MUSK INCENSE CONES
            </div>
            <div className="text-center font-poppins">
              <span className="text-orange-400 text-lg font-semibold">
                $0.75
              </span>{" "}
              <span className="line-through font-normal text-lg text-[#d9d9d9]">
                $2.66
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-4 gap-4">
            <div className="border-2 flex-col flex shadow-lg shadow-gray-400 transition-all duration-500  hover:shadow-pink-300 items-center justify-center border-orange-400 px-8 py-2 rounded-lg">
              <div className="relative flex items-center justify-between w-full">
                <p className="text-[8px] absolute top-0 -left-5 font-poppins font-medium text-white rounded-full px-3 py-[2px] text-center bg-[#12a05c]">
                  NEW
                </p>
                <img
                  className="p-2 bg-[#f1f1f1] absolute top-2 right-0 rounded-full"
                  src={unlike}
                  alt=""
                />
              </div>
              <img src="card2.png" className="w-[218px]     " alt="" />
              <div className="">
                <div className=" text-white text-xs flex items-center justify-center w-32 h-10  shadow-xl rounded-md bg-gradient-to-r  from-[#DC8064] via-[#ffc8b7] to-[#F19176]">
                  <img src={cart} alt="" /> &nbsp; Add to Cart
                </div>
              </div>
            </div>
            <div className="text-center text-[#fa5c98] font-poppins font-medium text-base">
              Sage INCENSE CONES
            </div>
            <div className="text-center font-poppins">
              <span className="text-orange-400 text-lg font-semibold">
                $0.75
              </span>{" "}
              
            </div>
          </div>
          <div className="flex flex-col mb-4 gap-4">
            <div className="border-2 flex-col flex shadow-lg shadow-gray-400 transition-all duration-500 hover:shadow-pink-300 items-center justify-center border-orange-400 px-8 py-2 rounded-lg">
              <div className="relative flex items-center justify-between w-full">
                <p className="text-[8px] absolute top-0 -left-5 font-poppins font-medium text-white rounded-full px-3 py-[2px] text-center bg-[#12a05c]">
                  NEW
                </p>
                <img
                  className="p-2 bg-[#f1f1f1] absolute top-2 right-0 rounded-full"
                  src={unlike}
                  alt=""
                />
              </div>
              <img src="cart3.png" className="w-[218px]     " alt="" />
              <div className="">
                <div className=" text-white text-xs flex items-center justify-center w-32 h-10  shadow-xl rounded-md bg-gradient-to-r  from-[#DC8064] via-[#ffc8b7] to-[#F19176]">
                  <img src={cart} alt="" /> &nbsp; Add to Cart
                </div>
              </div>
            </div>
            <div className="text-center text-[#fa5c98] font-poppins font-medium text-base">
              Yerba Santa INCENSE CONES
            </div>
            <div className="text-center font-poppins">
              <span className="text-orange-400 text-lg font-semibold">
                $0.75
              </span>{" "}
              
            </div>
          </div>
          <div className="flex flex-col mb-4 gap-4">
            <div className="border-2 flex-col flex shadow-lg shadow-gray-400 transition-all duration-500 hover:shadow-pink-300 items-center justify-center border-orange-400 px-8 py-2 rounded-lg">
              <div className="relative flex items-center justify-between w-full">
                <p className="text-[8px] absolute top-0 -left-5 font-poppins font-medium text-white rounded-full px-3 py-[2px] text-center bg-[#12a05c]">
                  NEW
                </p>
                <img
                  className="p-2 bg-[#f1f1f1] absolute top-2 right-0 rounded-full"
                  src={unlike}
                  alt=""
                />
              </div>
              <img src="cart4.png" className="w-[218px]     " alt="" />
              <div className="">
                <div className=" text-white text-xs flex items-center justify-center w-32 h-10  shadow-xl rounded-md bg-gradient-to-r  from-[#DC8064] via-[#ffc8b7] to-[#F19176]">
                  <img src={cart} alt="" /> &nbsp; Add to Cart
                </div>
              </div>
            </div>
            <div className="text-center text-[#fa5c98] font-poppins font-medium text-base">
              Frankincense and Myrrh
            </div>
            <div className="text-center font-poppins">
              <span className="text-orange-400 text-lg font-semibold">
                $0.75
              </span>{" "}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
