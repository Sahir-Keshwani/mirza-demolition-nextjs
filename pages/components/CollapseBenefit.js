import React from "react";
import Data from "../../Data/CollapseData";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const CollapseBenefit = () => {
  return (
    <div>
      {Data.map((item, index) => (
        <div key={index}>
          <Accordion>
            <AccordionItem
              key={index}
              aria-label="Accordion Heading"
              title={item.heading}
              className=" text-sm sm:text-xl font-medium  mx-8 cursor-pointer ps-4 mt-6 bg-amber-400 shadow-xl "
            >
              <p className=" bg-gray-300 ps-4  text-left text-base leading-8  pe-0 ">
                {item.content}
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default CollapseBenefit;
