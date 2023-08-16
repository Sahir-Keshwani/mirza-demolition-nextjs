import React from "react";
import Link from "next/link";
import Image from "next/image";
import Data from "../../Data/workCategories";
import { GiDigDug } from "react-icons/gi";

import { Playfair_Display } from "next/font/google";
import WorkCards from "./WorkCards";
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
        <WorkCards/>
      </div>
    </section>
  );
};

export default WorkCategories;
