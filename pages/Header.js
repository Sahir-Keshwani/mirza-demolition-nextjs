import React from "react";
import Image from "next/image";

import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

import { Playfair_Display } from "next/font/google";
const font = Playfair_Display({ subsets: ["latin"], weight: "600" });

import { GiDemolish } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div className="relative">
        <video
          src="/construction-video.mp4"
          autoPlay
          loop
          muted
          className="brightness-[0.4] w-full h-full md:h-[88vh] object-cover "
        />

        <div className=" inline-block md:grid grid-cols-2 gap-0 md:gap-10 lg:gap-20 text-white w-full  h-full absolute top-4 md:top-[20%]">
          <div className=" w-full"></div>
          <div className="w-full text-center md:text-start text-white/[0.50] md:text-white text-base md:ps-14  ">
            {/* <GiDemolish className="mb-5 md:mb-8 text-3xl sm:text-4xl  md:text-5xl lg:text-5xl xl
            :text-6xl inline-block" />{" "} */}

            <Image
              src="/icon.png"
              alt="icon"
              width={25}
              height={20}
              className=" inline-block brightness-[0.7] mb-1 pe-2"
            />
            {""}

            {/* <h1 className="inline-block font-semibold text-4xl sm:text-4xl  md:text-5xl lg:text-5xl xl:text-6xl mx-2"> */}
            <h1 className="   inline-block font-medium uppercase text-lg md:text-base" style={roboto.style}>
              Mirza Demolition
            </h1>
            {/* <GiDemolish className="inline-block sm:hidden text-3xl mb-5" /> */}

            <div className="  md:pt-0  space-y-4 md:space-y-6">
              <h2 className="  lg:mt-4 font-bold hover:text-amber-400 mx-auto text-lg md:text-2xl lg:text-3xl xl:text-4xl"
                style={font.style}>
                Providing Best Services{" "}
                <br className=" hidden md:block lg:hidden" /> All Over India
              </h2>
              <p className=" pe-4  font-normal hidden md:block md:tracking-tight lg:tracking-normal">
                We provide reliable and valuable services{" "}
                <br className="md:hidden lg:block" /> to our happy clients at an
                affordable rates <br className="md:hidden lg:block" /> since 30+
                years
              </p>
              <button className="border-0 bg-amber-500/75 hover:bg-black/75 hover:text-amber-500 text-black font-bold p-2 md:p-3  rounded-xl shadow text-sm md:text-sm absolute md:static bottom-12 sm:bottom-32 left-[35%] ">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
