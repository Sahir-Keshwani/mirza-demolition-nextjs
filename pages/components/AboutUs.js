import React from "react";
import Image from "next/image";

import { GiHammerBreak } from "react-icons/gi";
import { BiSolidCheckCircle } from "react-icons/bi";

import { Playfair_Display } from "next/font/google";
const font = Playfair_Display({ subsets: ["latin"], weight: "600" });

const AboutUs = () => {
  return (
    <section>
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/white-abstract-background-design.avif')",
        }}
      >
        <div className=" text-black inline-block md:grid grid-cols-2 gap-0 md:gap-4 lg:gap-10">
          <div className="w-full  ps-0 md:ps-6  xl:mt-[25%] lg:mt-[28%] md:mt-[40%] my-10 sm:my-14 md:my-[12%]">
            <Image
              src="/about-img.jpg"
              width={1000}
              height={1000}
              alt="image"
              property="cover"
              className="clip-path w-auto h-auto lg:pt:8 box-border px-8 md:px-0"
              priority={true}
            />
          </div>
          <div className=" my-0   md:my-[15%] px-8">
            <div className="md:pe-8 text-base text-center lg:text-start lg:text-start">
              <Image
                src="/icon.png"
                alt="icon"
                width={25}
                height={20}
                className=" inline-block mb-1 pe-2"
              />
              {""}
              <h2 className="ps-2 mb-4 md:mb-0  inline-block font-medium uppercase">
                WHO WE ARE?
              </h2>
              <h3 className=" mt-4 font-bold hover:text-amber-500 mx-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                style={font.style}>
                Demolition Solutions Provider
              </h3>
            </div>

            <div className="ps-0 md:ps-10 md:space-y-4 mt-0 md:mt-4">
              <p className="md:pe-8 hidden lg:block md:text-sm lg:text-base xl:text-lg text-center lg:text-start">
                All types of RCC Demolition & dismantling Company.
                <br />
                We provide the best service and the best safety over in our
                demolition work.
              </p>

              <span className="pt-6 block sm:block lg:grid grid-cols-2 gap-0">
                <span className="sm:block lg:inline-block">
                  <Image
                    src="/about-img-2.webp"
                    width={200}
                    height={100}
                    alt="about-img"
                    className="md:w-[100%] lg:w-[80%]  h-auto mx-auto lg:mx-0 pb-6 lg:pb-0 xl:pt-0 lg:pt-3 xl:ms-0 lg:-ms-6"
                  />
                </span>

                <span className="md:pe-0 lg:pt-1 xl:pt-5 font-bold lg:text-xl text-center lg:text-start relative top-0  right-0 lg:right-10 ">
                  <ul className=" space-y-2">
                    <li>
                      <BiSolidCheckCircle className=" inline-block text-amber-500 xl:text-3xl md:text-xl " />
                      <p className=" inline-block ps-2 text-base sm:text-lg md:text-[15px] lg:text-[10px] xl:text-[14px] underline">
                        Fabrication Work Service
                      </p>
                    </li>
                    <li>
                      <BiSolidCheckCircle className=" inline-block text-amber-500 xl:text-3xl md:text-xl " />
                      <p className=" inline-block ps-2 text-base sm:text-lg md:text-[15px] lg:text-[10px] xl:text-[14px] underline">
                        High Rise Demolition Service
                      </p>
                    </li>
                    <li>
                      <BiSolidCheckCircle className=" inline-block text-amber-500 xl:text-3xl md:text-xl " />
                      <p className=" inline-block ps-2  text-base sm:text-lg md:text-[15px] lg:text-[10px] xl:text-[14px] underline">
                        Earth Moving Demolition Service
                      </p>
                    </li>
                  </ul>
                </span>
              </span>
            </div>
              <div className="ps-0 md:ps-10 mt-6">
              <button
                type="submit"
                className=" uppercase block mx-auto text-xl px-6 py-2 border-2 border-amber-500 hover:bg-amber-500 hover:text-white rounded-full"
              >
                Know More
              </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
