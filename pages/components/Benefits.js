import React from "react";
import Image from "next/image";
import { GiArrowsShield } from "react-icons/gi";
import CollapseBenefit from "./CollapseBenefit";

import { Playfair_Display } from "next/font/google";
const font = Playfair_Display({ subsets: ["latin"], weight: "600" });

const Benefits = () => {
  return (
    <section>
      <div
        className="w-full h-full bg-no-repeat bg-cover py-0 md:py-20"
        style={{
          backgroundImage: "url('/white-abstract-background-design.avif')",
        }}
      >
        <div className=" block  md:grid grid-cols-2 gap-8 px-8">
          <div className="w-full py-10 md:py-32">
            <div className="text-start text-base ps-8">
              <Image
                src="/icon.png"
                alt="icon"
                width={25}
                height={20}
                className=" inline-block mb-1 pe-2"
              />
              {""}
              <h2 className=" ps-2 mb-4 md:mb-0  inline-block font-medium uppercase ">
                {/* <h2 className="mb-4 md:mb-0  inline-block font-semibold lg:text-start text-end"> */}
                Your Benefit
              </h2>
              <h2
                className=" mt-4 font-bold hover:text-amber-400 mx-auto text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                style={font.style}
              >
                Build better future with steady{" "}
                <br className="inline-block sm:hidden" /> focus on quality
              </h2>
              {/* collapsible */}
            </div>
            <CollapseBenefit />
          </div>
          <div
            className="clip-path mt-4 w-full bg-cover"
            style={{
              backgroundImage: "url('/benefits-img.jpg')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
