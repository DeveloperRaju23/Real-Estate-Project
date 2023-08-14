import React from "react";
import img from "../../assets/image/hero_bg_1.jpg";
import { Link } from "react-router-dom";
import FeaturedProperties from "../HomePages/FeaturedProperties";
import PropertiesAll from "./PropertiesAll";
const Properties = () => {
  return (
    <>
             <div className="relative">
      <img src={img} className="h-[600px] w-full  object-fill" alt="" />

      <div class="absolute inset-0 bg-black  opacity-30"></div>
      <div class="absolute inset-0  flex-col flex justify-center items-center">
        <h2 className="text-white lg:text-4xl text-3xl text-center  font-bold tracking-wider">
          Properties
        </h2>
        <div className="flex text-lg mt-4">
          <Link to="/" className="text-white pe-2">
            Home
          </Link>

          <p className="text-[#AEAEAE]"> / Properties</p>
        </div>
      </div>
    </div>  
           <FeaturedProperties/>
           <PropertiesAll/>
    </>

  );
};

export default Properties;
