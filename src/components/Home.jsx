import React from "react";
import logo from "../assets/logo.svg";
import left from "../assets/left.svg";
import pinkleft from "../assets/pinkleft.svg";
import right from "../assets/right.svg";
import pinkright from "../assets/pinkright.svg";
import check from "../assets/check.svg";
import form from "../assets/form.svg";
import user from "../assets/user.svg";
import telephone from "../assets/telephone.svg";
import email from "../assets/email.svg";
import vector from "../assets/vector.svg";
import flamingo from "../assets/circleFlamingo.svg";
import ReadMore from "./ReadMore";
const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Submitted!!!");
    alert("Message sent successfully! We'll reach out to you as soon as possible. Thank you!")
  }
  return (
    <div className="w-full flex flex-col">
      <div className="relative flex flex-col  items-center justify-center py-4 gap-8 w-full bg-[#ffeef6]">
        <img className="w w-36" src={logo} alt="" />

        <div className=" lg:w-[773px] md:w-[473px] w-[273px] text-center font-poppine text-[26px] lg:text-[46px] font-black">
          Transform Your Mind & Soul: Discover Your Spiritual Path with Our
          Courses
        </div>
        <div className="absolute top-1/2 left-2">
          <img src={left} alt="" />
        </div>
        <div className="absolute top-1/2 right-2">
          <img src={right} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className=" pb-12 ">
          <div className=" pb-5 pt-7 font-poppins text-[12px] md:text-[20px] font-extrabold">
            Shop From Our Top Categories
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5">
            <div className="flex flex-col items-center justify-evenly gap-2">
              <div className="  flex-shrink-0w-[188px] h-[218px]">
                <img
                  src="/1.png"
                  className="  w-[180px] h-[218px] object-cover "
                  alt=""
                />
              </div>
              <div className="font-poppins text-[16px] font-bold">
                Cone Dhoop
              </div>
              <div className="text-[16px] font-poppins font-semibold text-[#fa5c98]">
                Shop Now
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly gap-2">
              <div className="  flex-shrink-0w-[188px] h-[218px]">
                <img
                  src="/2.png"
                  className=" w-[180px] h-[218px] object-cover "
                  alt=""
                />
              </div>
              <div className="font-poppins text-[16px] font-bold">
                Incense Holders
              </div>
              <div className="text-[16px] font-poppins font-semibold text-[#fa5c98]">
                Shop Now
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly gap-2">
              <div className="  flex-shrink-0w-[188px] h-[218px]">
                <img
                  src="/3.png"
                  className=" w-[180px] h-[218px] object-cover "
                  alt=""
                />
              </div>
              <div className="font-poppins text-[16px] font-bold">
                Incense Sticks
              </div>
              <div className="text-[16px] font-poppins font-semibold text-[#fa5c98]">
                Shop Now
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly gap-2">
              <div className="  flex-shrink-0w-[188px] h-[218px]">
                <img
                  src="/4.png"
                  className=" w-[180px] h-[218px] object-cover "
                  alt=""
                />
              </div>
              <div className="font-poppins text-[16px] font-bold">Shankh</div>
              <div className="text-[16px] font-poppins font-semibold text-[#fa5c98]">
                Shop Now
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly gap-2">
              <div className="  flex-shrink-0w-[188px] h-[218px]">
                <img
                  src="/5.png"
                  className=" w-[180px] h-[218px] object-cover "
                  alt=""
                />
              </div>
              <div className="font-poppins text-[16px] font-bold">Kalash</div>
              <div className="text-[16px] font-poppins font-semibold text-[#fa5c98]">
                Shop Now
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly gap-2">
              <div className="  flex-shrink-0w-[188px] h-[218px]">
                <img
                  src="/6.png"
                  className=" w-[180px] h-[218px] object-cover "
                  alt=""
                />
              </div>
              <div className="font-poppins text-[16px] font-bold">
                Buddha Statue
              </div>
              <div className="text-[16px] font-poppins font-semibold text-[#fa5c98]">
                Shop Now
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffeef6] w-[75%] py-8 px-2  mb-12 mx-[160px] flex flex-col items-center justify-evenly">
          <div className=" font-poppine text-2xl m-2 lg:text-5xl font-extrabold">
            Why PINK FLAMINGO ?
          </div>
          <div className="flex items-center flex-col lg:flex-row justify-center gap-6">
            <div className="">
              <img
                className="w-[70px] h-[70px]  lg:w-[220px] lg:h-[220px] md:w-[120px] md:h-[120px]"
                src={flamingo}
                alt="Pink Flamingo"
              />
            </div>
            <div className="">
              <ul className="">
                <li className="flex items-start py-2 gap-4">
                  <img src={check} alt="check" />
                  <p className="text-[13px] font-poppine w-[200px] md:w-[330px] lg:w-[440px]  font-semibold capitalize">
                    Spirituality can provide them with a framework for
                    understanding the universe and their role in it
                  </p>
                </li>
                <li className="flex items-start py-2 gap-4">
                  <img src={check} alt="check" />
                  <p className="text-[13px] font-poppine w-[200px] md:w-[330px] lg:w-[440px]  font-semibold capitalize">
                    Coping with stress and uncertainty
                  </p>
                </li>
                <li className="flex items-start py-2 gap-4">
                  <img src={check} alt="check" />
                  <p className="text-[13px] font-poppine w-[200px] md:w-[330px] lg:w-[440px]  font-semibold capitalize">
                    Spirituality can be a path to personal growth and
                    self-discovery
                  </p>
                </li>
                <li className="flex items-start py-2 gap-4">
                  <img src={check} alt="check" />
                  <p className="text-[13px] font-poppine w-[200px] md:w-[330px] lg:w-[440px] font-semibold capitalize">
                    Spirituality can provide people with a sense of community
                    and connection with others
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" relative flex flex-col items-center justify-center pb-10 pt-5 gap-8">
          <img
            src={pinkleft}
            alt="left"
            className="absolute  hidden 2xl:block   top-1/2 left-[-150px]"
          />
          <img
            src={pinkright}
            alt="right"
            className="absolute top-1/2 2xl:block hidden right-[-150px]"
          />
          <div className="font-poppine text-2xl md:text-5xl font-extrabold">
            Our Latest Blogs
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
            <div className="rounded-md bg-white shadow-md relative h-[630px] flex flex-col items-center  justify-start gap-4">
              <img src="/blog1.png" alt="" />
              <div className="">
                <div className=" pt-4 text-[16px] xl:text-xl text-center font-bold">
                  The Power of Mindfulness
                </div>
                <p className="xt-[16px] xl:text-xl p-6">
                  Mindfulness is the practice of being present and fully engaged
                  in the moment. It is about paying attention to our thoughts,
                  feelings, and sensations in a non-judgmental way.
                </p>
              </div>
              <ReadMore />
              <div className="absolute bottom-2 left-2  text-[#b9b9b9] font-sans text-sm font-bold">
                08-05-2022
              </div>
            </div>
            <div className="rounded-md bg-white shadow-md relative h-[630px] flex flex-col items-center justify-start gap-4">
              <img src="/blog2.png" alt="" />
              <div className="">
                <div className=" pt-4 text-center text-[16px] xl:text-xl font-bold">
                  Connecting with the Divine
                </div>
                <p className=" xt-[16px] xl:text-xl p-6">
                  Connecting with the Divine refers to the process of
                  establishing a spiritual connection or relationship with a
                  higher power, such as God, the Universe, or a higher
                  consciousness.{" "}
                </p>
              </div>
              <ReadMore />
              <div className="absolute bottom-2 left-2  text-[#b9b9b9] font-sans text-sm font-bold">
                11-06-2022
              </div>
            </div>
            <div className="relative rounded-md bg-white shadow-md h-[630px] flex flex-col items-center  justify-start gap-4">
              <img src="/blog3.png" alt="" />
              <div className="">
                <div className=" pt-4 xt-[16px] xl:text-xl text-center font-bold">
                  The Beauty of Forgiveness
                </div>
                <p className=" xt-[16px] xl:text-xl p-6">
                  The beauty of forgiveness lies in its transformative power. It
                  has the ability to heal wounds and to restore relationships
                  that have been damaged. Forgiveness brings a new level of
                  understanding.
                </p>
              </div>
              <ReadMore />
              <div className="absolute bottom-2 left-2 text-[#b9b9b9] font-sans text-sm font-bold ">
                11-07-2022
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-10 flex-col">
          <div className="font-poppins text-center pt-5 pb-10 md:text-5xl text-2xl font-extrabold">
            Let's Connect
          </div>
          <form action="">
            <div className=" flex  flex-col-reverse lg:flex-row justify-between gap-8">
              {/* Tablet, monitor */}
              <div className=" hidden md:flex w-[582px] flex-col justify-evenly">
                <div className="flex justify-between">
                  <div className="rounded-md flex items-center justify-start pl-3  gap-5 bg-white shadow-md h-14 w-[48%]">
                    <img src={user} alt="" />
                    <img src={vector} alt="" />
                    <input
                      type="text"
                      placeholder="Name"
                      className=" outline-none"
                    />
                  </div>
                  <div className="rounded-md flex items-center justify-start pl-3  gap-5 bg-white shadow-md h-14 w-[48%]">
                    <img src={telephone} alt="" />
                    <img src={vector} alt="" />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className=" outline-none"
                    />
                  </div>
                </div>
                <div className="rounded-md flex items-center justify-start pl-3  gap-5 bg-white shadow-md w-full h-14">
                  <img src={email} alt="" />
                  <img src={vector} alt="" />
                  <input
                    type="text"
                    placeholder="Email address"
                    className=" outline-none"
                  />
                </div>

                <textarea
                  placeholder="Enter your message here!"
                  className=" pt-3 pl-4 rounded-md  bg-white shadow-md w-full h-[181px]"
                ></textarea>
              </div>
              {/* Mobile */}
              <div className="  md:hidden  flex flex-col justify-evenly">
                
                  <div className="rounded-md flex items-center justify-start pl-3  gap-5 bg-white shadow-md h-14 w-[48%]">
                    <img src={user} alt="" />
                    <img src={vector} alt="" />
                    <input
                      type="text"
                      placeholder="Name"
                      className=" outline-none"
                    />
                  </div>
                  <div className="rounded-md flex items-center justify-start pl-3  gap-5 bg-white shadow-md h-14 w-[48%]">
                    <img src={telephone} alt="" />
                    <img src={vector} alt="" />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className=" outline-none"
                    />
                  </div>
                <div className="rounded-md flex items-center justify-start pl-3  gap-5 bg-white shadow-md w-full h-14">
                  <img src={email} alt="" />
                  <img src={vector} alt="" />
                  <input
                    type="text"
                    placeholder="Email address"
                    className=" outline-none"
                  />
                </div>

                <textarea
                  placeholder="Enter your message here!"
                  className=" pt-3 pl-4 rounded-md  bg-white shadow-md w-full h-[181px]"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
              <img  className="w w-64" src={form} alt=""  />

              </div>
            </div>
            <button onClick={handleClick} className="text-white mx-auto mt-5 flex items-center justify-center w-32 h-10  shadow-xl rounded-md bg-gradient-to-r  from-[#fa5c98] via-[#ffb7db] to-[#fa5c98]" >Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
