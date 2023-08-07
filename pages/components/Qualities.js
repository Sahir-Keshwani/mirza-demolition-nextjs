import React from "react";
import Image from "next/image";
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";

import { Playfair_Display } from "next/font/google";
const font = Playfair_Display({ subsets: ["latin"], weight: "600" });

const Qualities = () => {
  return (
    <section>
      <div
        className="w-full h-full bg-no-repeat bg-cover py-0 md:py-20"
        style={{
          backgroundImage: "url('/white-abstract-background-design.avif')",
        }}
      >
        <div className=" block lg:grid grid-cols-2 gap-20 px-8">
          <div
            className="hidden lg:block clip-path mt-4 w-full bg-cover z-0"
            style={{
              backgroundImage: "url('/quality-img.jpg')",
            }}
          >
            {/* <AiFillPlayCircle className="z-10 text-5xl text-amber-400" /> */}
          </div>
          <div className="w-full py-10 ">
            <div className="text-base">
              <Image
                src="/icon.png"
                alt="icon"
                width={25}
                height={20}
                className=" inline-block mb-1 pe-2"
              />
              {""}
              <h2 className=" ps-2 mb-4 md:mb-0  inline-block font-medium uppercase">
                Why choose us
              </h2>
              <h3
                className=" mt-4 font-bold hover:text-amber-400 mx-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                style={font.style}
              >
                Why you should choose our platform.
              </h3>
              <div className="mt-10 text-lg ">
                <p>
                  When it comes to demolition services, our Mirza Demolitions
                  platform stands out as the optimal choice for several
                  compelling reasons.
                </p>{" "}
                <br />
                <p>
                  First and foremost, we possess a wealth of experience and
                  expertise in the demolition industry. Our skilled
                  professionals have successfully completed numerous projects,
                  earning a solid reputation for delivering high-quality
                  results.
                </p>{" "}
                <br />
                <p>
                  We prioritize safety above all else, implementing stringent
                  safety protocols and employing highly trained personnel. With
                  us, you can have peace of mind knowing that every demolition
                  project is executed with utmost care and adherence to industry
                  regulations.
                </p>
              </div>
              <div className="block sm:grid grid-cols-2 text-center sm:text-start my-10 px-6 gap-10 space-y-4 sm:space-y-0">
                <div className=" text-xl">
                  <div className=" inline-block bg-[#ffb703] font-bold text-center w-12 rounded-full py-2">
                    1
                  </div>
                  <h4 className=" ps-2 inline-block">Best sustainability</h4>
                </div>
                <div className=" text-xl">
                  <div className=" inline-block bg-[#ffb703] font-bold text-center w-12 rounded-full py-2">
                    2
                  </div>
                  <h4 className=" ps-2 inline-block">Health and safety</h4>
                </div>
                <div className=" text-xl">
                  <div className=" inline-block bg-[#ffb703] font-bold text-center w-12 rounded-full py-2">
                    3
                  </div>
                  <h4 className=" ps-2 inline-block">Modern methods</h4>
                </div>
                <div className=" text-xl">
                  <div className=" inline-block bg-[#ffb703] font-bold text-center w-12 rounded-full py-2">
                    4
                  </div>
                  <h4 className=" ps-2 inline-block">Certified engineer</h4>
                </div>
              </div>
              <div className=" block sm:flex justify-around items-center px-6 lg:px-14">
                <div className=" text-lg mt-4 text-center lg:text-start mb- sm:mb-0">
                  Working skill <br className="hidden sm:inline-block" /> Client
                  rating
                </div>
                <div className="grid grid-rows-2 col-span-2 mt-2 grow px-4 relative sm:static">
                  <p className="text-end mb-2 -mt-2 sm:mt-0 absolute bottom-4 right-[45%] sm:static font-semibold text-lg">
                    95%
                  </p>
                  <div className="  h-[11.5px]  bg-slate-200 rounded-lg border-2 border-black/[0.3]">
                    <div className="h-2 w-[80%]  bg-amber-400 rounded-lg"></div>
                  </div>
                  <div className=" ps-2 space-x-2 mt-2 sm:-mt-2 mx-auto sm:mx-0">
                    <AiFillStar className="text-amber-400 text-2xl inline-block" />
                    <AiFillStar className="text-amber-400 text-2xl inline-block" />
                    <AiFillStar className="text-amber-400 text-2xl inline-block" />
                    <AiFillStar className="text-amber-400 text-2xl inline-block" />
                    <AiFillStar className="text-amber-400 text-2xl inline-block" />
                  </div>
                </div>
              </div>
              <p className=" sm:text-start mx-0 lg:mx-11 xl:mx-16 mt-4 text-base text-center">
                5.00 Average Based On 50 Rating -{" "}
                <span className=" underline font-bold">More information</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
