import React, { useState } from "react";
import Link from "next/link";

// Fonts
import { Dosis } from "next/font/google";
const dosis = Dosis({ subsets: ["latin"], weight: "400" });

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

  return (
    <nav>
      <div className="border-b border-gray-700 dark:border-white bg-slate-300 dark:bg-stone-800 sticky top-0 font-semibold dark:font-medium py-2 xl:px-10 z-10">
        <div className=" flex items-center justify-around w-full h-20">
          {/* Responsive hamburger button */}
          <div className={mobileMenu ? "ms-[80%] " : "ms-0"}>
            <FiMenu
              className="md:hidden flex justify-start text-white"
              onClick={handleNav}
              size={30}
            />
          </div>

          {/* Mobile Menu */}
          <div
            className={
              mobileMenu
                ? "fixed  top-0 left-0 w-[70%] md:hidden h-[120vh] sm:h-[115vh] border-r border-gray-700 dark:border-white bg-slate-300 dark:bg-zinc-700 px-10 transition ease-in duration-0 text-white"
                : "fixed left-[-100%] top-0 p-10 ease-in  "
            }
          >
            <div className="flex justify-end items-center w-full pt-4">
              <div onClick={handleNav} className=" m-4 cursor-pointer">
                <AiOutlineCloseCircle size={30} />
              </div>
            </div>

            <h1 className="py-8 text-2xl sm:text-3xl font-semibold   text-center">
              Mirza Demolition
            </h1>

            <div className=" flex-col py-4 sm:px-6">
              <ul className=" space-y-8">
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
                      className=" inline-block mx-4"
                      size={20}
                    />
                    Expertise
                  </Link>
                </li>
                <li onClick={() => setMobileMenu(false)}>
                  <Link href="/">
                    <FiPhoneCall className=" inline-block mx-4" size={20} />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="dark:text-white">
            <ul className="hidden md:flex justify-center text-base lg:text-xl mx-6  lg:mx-auto xl:space-x-20 lg:space-x-12 md:space-x-6 lg:px-8 ">
              <li className="pb-6 lg:pb-0">
                <Link href="/">
                  <AiOutlineHome className="hidden lg:inline-block mb-2 md:ms-[1.2rem]" />{" "}
                  <br />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillInfoCircle className=" hidden lg:inline-block mb-2 md:ms-[1.2rem]" />{" "}
                  <br />
                  About
                </Link>
              </li>
              <li>
                <Link href="/">
                  <GiGroundbreaker className=" hidden lg:inline-block mb-2 md:ms-[1.2rem]" />{" "}
                  <br />
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className={'{mobileMenu ? "hidden" : "block"} dark:text-white'}>
            <h1
              className="flex items-center justify-center w-full text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl  text-center  md:m-auto sm:ms-[50%] ms-[10%]"
              style={dosis.style}
            >
              Mirza Demolition
            </h1>
          </div>

          <div className="dark:text-white">
            <ul className="hidden md:flex justify-center text-base lg:text-xl mx-6  lg:mx-auto xl:space-x-20 lg:space-x-12 md:space-x-6 lg:px-8 ">
              <li className="pb-6 lg:pb-0">
                <Link href="/">
                  <MdAssignment className=" hidden lg:inline-block mb-2 md:ms-6" />
                  <br />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/">
                  <GiBowlingPropulsion className=" hidden lg:inline-block mb-2 md:ms-6" />
                  <br />
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FiPhoneCall className=" hidden lg:inline-block mb-2 md:ms-6" />
                  <br />
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
