import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Fonts
import { Dosis } from "next/font/google";
const dosis = Dosis({ subsets: ["latin"], weight: "600" });

// Icons
import {
  AiOutlineHome,
  AiFillInfoCircle,
  AiOutlineCloseCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { GiGroundbreaker, GiBowlingPropulsion } from "react-icons/gi";
import { MdAssignment } from "react-icons/md";
import { FiPhoneCall, FiMenu } from "react-icons/fi";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleNav = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });



  let menuRef = useRef();

  return (
    <nav className=" sticky top-0 z-10">
      <div className="border-b border-white bg-amber-500 text-black top-0 font-medium py-2 xl:px-10 z-10">
        <div className=" flex items-center justify-around w-full h-16">
          {/* Responsive hamburger button */}
          <div
            className={
              mobileMenu ? "ms-[80%] ease-in duration-500 delay-100" : "ms-0 "
            }
          >
            <FiMenu
              className="md:hidden flex justify-start"
              onClick={handleNav}
              size={35}
            />
          </div>

          {/* Mobile Menu */}
          <div
            className={
              mobileMenu
                ? "fixed  top-0 left-0 md:hidden h-[120vh] sm:h-[115vh] border-r border-white bg-amber-500 px-10 transition ease-in duration-200 "
                : "fixed left-[-100%] top-0 p-10 ease-in  "
            }
            ref={menuRef}
          >
            <div className="flex justify-end items-center w-full pt-4">
              <div onClick={handleNav} className=" m-4 cursor-pointer">
                <AiOutlineCloseCircle size={30} />
              </div>
            </div>

            <h1
              className="py-8 text-2xl sm:text-3xl font-semibold   text-center"
              style={dosis.style}
            >
              Mirza Demolition
            </h1>

            <div className=" flex-col py-4 sm:px-6 font-bold">
              <ul className=" space-y-10 w-fit">
                <li onClick={() => setMobileMenu(false)}>
                  <Link href="/">
                    <AiOutlineHome className=" inline-block mx-4" size={20} />
                    Home
                  </Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link href="/">
                    <AiFillInfoCircle
                      className=" inline-block mx-4"
                      size={20}
                    />
                    About
                  </Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link href="/">
                    <GiGroundbreaker className=" inline-block mx-4" size={20} />
                    Projects
                  </Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link href="/">
                    <MdAssignment className=" inline-block mx-4" size={20} />
                    Services
                  </Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link href="/">
                    <GiBowlingPropulsion
                      className="inline-block mx-4"
                      size={20}
                    />
                    Expertise
                  </Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link href="/">
                    <FiPhoneCall className="inline-block mx-4" size={20} />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-black font-semibold">
            <ul className="hidden md:flex justify-center text-base lg:text-xl mx-6  lg:mx-auto xl:space-x-20 lg:space-x-10 md:space-x-6 md:pe-6">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className={mobileMenu ? "hidden" : "block"}>
            {/* <div className={mobileMenu ? "ms-[0%]" : "ms-0"}> */}
            <h1
              className="flex items-center justify-center  w-full text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl  text-center  md:ms-auto sm:ms-[50%] ms-[10%]"
              style={dosis.style}
            >
              Mirza Demolition
            </h1>
          </Link>

          <div className="text-black font-semibold">
            <ul className="hidden md:flex justify-center text-base lg:text-xl mx-6  lg:mx-auto xl:space-x-20 lg:space-x-10 md:space-x-6 md:ps-6 ">
              <li>
                <Link href="/" className="">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
