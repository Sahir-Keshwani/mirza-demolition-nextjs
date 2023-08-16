import React from "react";
import Image from "next/image";
import Link from "next/link";
import Data from "../../Data/workCategories";

const WorkCards = () => {
  return (
    <div>
      <div className="drop-shadow-2xl flex flex-wrap justify-around items-center gap-0 px-12 ">
        {Data.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${item.cardImg})` }}
          >
            <div className="content  ">
              <Image
                src={item.logoImg}
                width={100}
                height={100}
                fill={false}
                alt="logo"
                className=" opacity-100 box-content overflow-visible p-5 bg-amber-500 rounded-full object-contain inline-block w-14 mb-6"
              />
              <h3 className=" text-white text-2xl mb-6">{item.name}</h3>
              <button
                type="submit"
                className="uppercase px-3 py-3 bg-amber-500 text-sm font-bold"
              >
                Read More
              </button>
            </div>
            <div className="card-text  absolute bottom-0 ps-0 sm:ps-4 bg-white w-full grid grid-cols-4  items-center rounded-b-2xl">
              <div className=" col-span-3 text-left">
                <h3 className=" font-semibold col-span-2 inline-block text-lg ">
                  {item.name}
                </h3>
              </div>
              <div className="p-4 bg-amber-500 justify-end rounded-ee-2xl">
                <Image
                  src={item.logoImg}
                  width={100}
                  height={100}
                  fill={false}
                  alt="logo"
                  className=" object-contain inline-block w-14"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCards;
