import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot, FaMobileScreenButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div
        className="-z-40  sm:w-full h-full bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url('/footer-img.jpg')",
        }}
      >
        <div className="block lg:grid grid-cols-4 gap-8 text-lg xl:mx-20 lg:mx-10 pt-10 lg:pt-20 text-white relative space-y-4">
          <div className=" space-y-2 lg:space-y-10  block lg:text-start text-center">
            <Image
              src="/surat-main.png"
              width={100}
              height={100}
              alt="logo"
              className="bg-white block mx-auto lg:mx-0"
            />
            <p className="block lg:hidden text-2xl pt-2">Mirza Demolition</p>
            <p className="hidden lg:block text-left">
              we are professional demolition & Dismantaling contractor we have
              many years of experience all over india under take demolition
              project of building & provide safe and trusted service from Mirza
              Demolition.
            </p>
            <div className=" space-y-2 lg:space-y-2">
              <p className="font-bold">
                Opening Hours:{" "}
                <span className=" ps-2 font-normal">Sunday - Monday</span>
              </p>
              <div className=" ps-1">
                <p>24 Hours Available</p>
              </div>
            </div>
            <div className=" space-x-6 lg:static absolute -bottom-8 w-full pb-2 lg:pb-0">
              <FaFacebookF className=" text-2xl sm:text-lg inline-block" />
              <FaTwitter className=" text-2xl sm:text-lg inline-block" />
              <FaPinterestP className=" text-2xlsm:text-lg inline-block" />
              <FaInstagram className=" text-2xl sm:text-lg inline-block" />
            </div>
          </div>

          <div className="mt-4 px-4 space-y-2 lg:space-y-8 lg:pt-0 pt-6">
            <h2 className="font-bold font-serif xl:text-xl lg:text-lg text-xl  uppercase tracking-widest lg:text-start text-center ">
              CONTACT INFO
            </h2>
            <div className="flex item-center justify-center lg:justify-start pt-2">
              <FaLocationDot className=" text-3xl mt-3 lg:text-xl text-amber-500 hover:text-yellow-300" />
              <p className="ps-4 tracking-wide text-start">
                Near Ruderpura, {""}
                <br className="hidden lg:inline"/>
                 Main Road, {""}
                <br />
                Navsari bazar, {""}
                Surat
              </p>
            </div>
            <div className="font-bold flex item-center justify-center lg:justify-start">
              <FaMobileScreenButton className=" text-3xl mt-3 lg:text-xl text-amber-500 hover:text-yellow-300" />
              <div className="ps-4 tracking-wider pt-3 lg:pt-0">
                <a href="tel:+919714589292" className="hover:text-amber-400">
                  9714589292
                </a>{" "}
                <span className="inline lg:hidden"> / </span>
                <br className="hidden lg:block"/>
                <a href="tel:+916384452903" className="hover:text-amber-400">
                  6384452903
                </a>
              </div>
            </div>

            <div className="font-bold flex item-center justify-center lg:justify-start text-center lg:text-start">
              <div>
                <MdEmail className="text-3xl mt-3 lg:text-xl text-amber-500 hover:text-yellow-300" />
              </div>

              <div className=" ps-4  tracking-wider">
                <a href="mailto:noor.mirza9292@gmail.com">
                  Noor.Mirza9292@gmail.com
                </a>
                <br />
                <a href="mailto:infoname@gmail.com">infoname@gmail.com</a>
              </div>
            </div>
          </div>

          <div className=" col-span-2 lg:text-right space-y-2 lg:space-y-8 lg:pt-0 pt-12  text-center">
            <h2 className="font-bold font-serif text-xl uppercase tracking-widest ">
              Newsletter
            </h2>
            <div className=" space-y-4 lg:space-y-8 pb-8 lg:pb-0">
              <p>It was a pleasure speaking with you.</p>
              <div>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Your Email Address"
                  className=" uppercase  py-2 lg:py-4 px-6 lg:px-12  text-start bg-gray-500/[0.4] placeholder:text-white/[0.4] font-bold tracking-wide"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" font-bold tracking-wider uppercase px-10 lg:px-28 py-2 lg:py-4 bg-amber-500 text-black"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white font-semibold mt-8 bg-slate-800/70 text-center py-4 text-lg lg:text-xl">
          ©️ {new Date().getFullYear()}, Designed & Built by{" "}
          <Link href="/" className="">
            Eternity Technology
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
