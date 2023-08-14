import React from "react";
import img from "../../assets/image/hero_bg_3.jpg";
import { FaHome, FaUser } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import dotedImg from "../../../public/dots.png";
import CountUp from "react-countup";

const HomePerfect = () => {
  return (
    <div className="bg-[#F8F9FA] py-12">
      <div className="container">
        <div className="md:w-2/4 w-full text-center mx-auto">
          <h2 className="text-3xl font-semibold text-[#00204A]">
            Let's find home that's perfect for you
          </h2>
          <p className="text-[#AEAEAE] pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between pt-12">
          <div className="md:w-3/6	w-full">
            <div className="flex gap-3">
              <div className="w-[80px] md:h-[80px] h-[50px] p-3 flex justify-center items-center  rounded-full hover:border-2 border-[#00204A] bg-[#c2c3c5] duration-200">
                <FaHome className="text-2xl" />
              </div>
              <div>
                <p className="text-2xl">2M Properties</p>
                <h2 className="md:text-lg text-sm md:w-80 w-full text-[#AEAEAE]">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </h2>
              </div>
            </div>
            <div className="flex gap-3 pt-8">
              <div className="w-[80px] md:h-[80px] h-[50px] p-3 flex justify-center items-center  rounded-full hover:border-2 border-[#00204A] bg-[#c2c3c5] duration-200">
                <FaUser className="text-2xl" />
              </div>
              <div className="">
                <p className="text-2xl">Top Rated Agents</p>
                <h2 className="md:text-lg text-sm md:w-80 w-full text-[#AEAEAE]">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </h2>
              </div>
            </div>
            <div className="flex gap-3 pt-8">
              <div className="w-[80px] md:h-[80px] p-3 h-[50px] flex justify-center items-center  rounded-full hover:border-2 border-[#00204A] bg-[#c2c3c5] duration-200">
                <MdSecurity className="text-2xl" />
              </div>
              <div>
                <p className="text-2xl">Legit Properties</p>
                <h2 className="md:text-lg text-sm md:w-80 w-full  text-[#AEAEAE]">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </h2>
              </div>
            </div>
          </div>
          <div className="md:w-3/6  relative	w-full">
            <img className="z-auto " src={img} alt="" />
            <img
              className="z-0 absolute bottom-[-40px] right-[-40px]"
              src={dotedImg}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4 pt-24 grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div className="flex flex-col py-2 md:py-0">
            <CountUp start={0} end={3298} delay={0}>
              {({ countUpRef, start }) => (
                <div>
                  <span
                    className="font-bold text-4xl text-[#00204A]"
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
            <span># of Buy Properties</span>
          </div>
          <div className="flex flex-col py-2 md:py-0">
            <CountUp start={0} end={2181}>
              {({ countUpRef, start }) => (
                <div>
                  <span
                    className="font-bold text-4xl text-[#00204A]"
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
            <span># of Sell Properties</span>
          </div>
          <div className="flex flex-col py-2 md:py-0">
            <CountUp start={0} end={9316}>
              {({ countUpRef, start }) => (
                <div>
                  <span
                    className="font-bold text-4xl text-[#00204A]"
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
            <span># of All Properties</span>
          </div>
          <div className="flex flex-col py-2 md:py-0">
            <CountUp start={0} end={7191}>
              {({ countUpRef, start }) => (
                <div>
                  <span
                    className="font-bold text-4xl text-[#00204A]"
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
            <span># of Agents</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePerfect;
