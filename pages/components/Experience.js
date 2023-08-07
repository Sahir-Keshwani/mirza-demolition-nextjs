import React from "react";
import { GiAnvilImpact } from "react-icons/gi";
// import Image from 'next/image'
import Image from "next/image";

import { Playfair_Display } from "next/font/google";
const font = Playfair_Display({ subsets: ["latin"], weight: "600" });

const Experience = () => {
  return (
    <section>
      <div
        className="w-[100%] h-full md:h-[390px] bg-no-repeat bg-cover static md:relative"
        style={{
          backgroundImage: "url('/experience-bg.jpg')",
        }}
      >
        <div className="block md:grid md:grid-cols-2 justify-center gap-10 xl:px-32 md:absolute md:top-[25%] static py-[25%] md:py-0 space-y-10 md:space-y-0 mx-auto px-8">
          <div className="  text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full md:gap-10 ">
            <div className=" text-base text-center md:text-start ">
              <Image
                src="/icon.png"
                alt="icon"
                width={25}
                height={20}
                className=" inline-block mb-1 pe-2"
              />
              {""}
              <h2 className=" ps-2 mb-4 md:mb-0  inline-block font-medium uppercase">
                Number talks
              </h2>{" "}
            </div>
            <div className="  space-y-10 mt-0 md:mt-4">
              <h3 className=" mt-4 font-bold hover:text-amber-400 mx-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-start"
                style={font.style}>
                Our team of experts will help you{" "}
                <br className=" inline-block md:hidden" /> get things complete.
              </h3>
              <button className="border-0 bg-amber-500/75 hover:bg-black/75 hover:text-amber-500 text-black font-bold p-2 md:p-3  rounded-xl shadow text-sm sm:text-base md:text-lg uppercase  block mx-auto md:mx-0 ">
                contact now
              </button>
            </div>
          </div>
          <div className=" w-full text-white pt-6 md:py-0">
            <div className="flex justify-around items-center gap-4 sm:gap-6 md:gap-8 px-10 md:px-4">
              <div className=" w-[90%] min-w-xs h-full bg-amber-400/[0.2] text-center clip-path py-8 px-4 space-y-4">
                <p className="text-[#ffb703] text-5xl font-bold">312+</p>
                <p className=" text-xl">Trusted Reviews</p>
              </div>
              <div className=" w-[90%] h-full bg-amber-400/[0.2] text-center clip-path py-8 px-4 space-y-4">
                <p className="text-[#ffb703] text-5xl font-bold">30+</p>
                <p className=" text-xl">Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
