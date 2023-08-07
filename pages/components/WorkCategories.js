import React from "react";
import Link from "next/link";
import Image from "next/image";
import Data from "../../Data/workCategories";
import { GiDigDug } from "react-icons/gi";

import { Playfair_Display } from "next/font/google";
const font = Playfair_Display({ subsets: ["latin"], weight: "600" });

const WorkCategories = () => {
  return (
    <section>
      <div
        className="w-full h-full bg-no-repeat bg-cover py-20"
        style={{
          backgroundImage: "url('/white-abstract-background-design.avif')",
        }}
      >
        <div className="text-center text-base">
          <Image
            src="/icon.png"
            alt="icon"
            width={25}
            height={20}
            className=" inline-block mb-1 pe-2"
          />
          {""}
          <h2 className="ps-2 mb-4 md:mb-0  inline-block font-medium uppercase">
            what we do
          </h2>{" "}
          <h3
            className=" mt-4 font-bold hover:text-amber-400 mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={font.style}
          >
            Here is some of our <br className="inline-block sm:hidden" />{" "}
            demolition work and projects
          </h3>
        </div>

        <div className="relative top-0">
          <div className=" flex flex-wrap justify-around items-center gap-0 space-y-24 px-12 ">
            {/* Card */}
            {Data.map((item, index) => (
              <div
                key={index}
                className="mt-24 bg-contain w-[400px] h-[400px] rounded-2xl relative"
              >
                <Image
                  src={item.cardImg}
                  alt="card image"
                  fill={true}
                  sizes="auto"
                  className="mx-auto overflow-hidden w-full h-full rounded-2xl object-cover"
                />

                <div className=" absolute bottom-0  ps-6 bg-slate-400  dark:bg-stone-800 w-full flex flex-wrap justify-between gap-0 items-center rounded-b-2xl py-2">
                  <div className="">
                    <Link href="/">
                      <h3 className=" font-semibold col-span-2 inline-block text-lg sm:text-2xl dark:text-white">
                        {item.name}
                      </h3>
                    </Link>
                  </div>
                  <div className="p-4 ">
                    <Image
                      src={item.logoImg}
                      width={50}
                      height={50}
                      fill={false}
                      alt="logo"
                      className=" object-contain inline-block w-10 text-5xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCategories;
