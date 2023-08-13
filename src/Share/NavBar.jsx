import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const navigationMenu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "#",
      label: "Properties",
    },
    {
      to: "#",
      label: "Services",
    },
    {
      to:"/about",
      label:"About",
    },
    {
      to: "#",
      label: "Contact Us",
    },
  ];

  const handleNavbar = () => {
    setNavOpen(!navOpen)
  }
  return (
    <>
      <header className="py-7 bg-[#005555] z-10 fixed w-full left-0 top-8 ">
        <div className="container">
          <div className="flex justify-between items-center text-white">
            <div>
              <Link className="text-2xl font-bold">
                <h2>Property</h2>
              </Link>
            </div>
            {/* Navigation Menu bar  */}
            <div className="hidden lg:block text-lg">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* button  */}
            <div>
                <Link className="px-5 py-4 bg-gray-100 text-black rounded hidden lg:inline-block">
                Get Started
                </Link>

                <button className="lg:hidden block" onClick={handleNavbar}>
                        <HiBars3 className="text-3xl"/>
                </button>
            </div>
          </div>
        </div>
      </header>
      {/* for mobile tablet devices  */}
      <div className={navOpen ? "py-0 block fixed w-screen z-20" : "py-0 hidden fixed w-screen z-30"}>
      <div className="h-screen w-screen z-[999] top-0 fixed  bg-black bg-opacity-50" onClick={handleNavbar}>
        <div className="bg-white w-[380px] top-0 right-0 z-[99999] h-screen fixed">
            <div className="flex items-center px-5 h-14 top-8 right-0 absolute">
               <button className="flex items-center   space-x-3" onClick={handleNavbar}>
               <GrClose className="text-2xl"/>
               </button>
            </div>
            <div className="h-full  px-10 pb-20 py-3 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7 mt-28">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link className="flex items-center group py-2  pt-12 justify-center duration-300 transition-all ease-in-out"  href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default NavBar;
