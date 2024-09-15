import React from "react";
import MappedFaq from "./MappedFaq";
import { Faq } from "@/types/types";
import { allFaqs } from "./FaqIndex";

const AllFaqContainer: React.FC = () => {
  return (
    <div className="my-[70px]">
      <div className=" w-[50%] max-[950px]:w-[70%] max-[600px]:w-[90%] max-[480px]:w-[95%] mx-auto ">
        <h2 className="scroll-m-20 font-stinger text-start text-3xl max-[600px]:text-[22px] font-semibold tracking-tight first:mt-0">
          FAQ (Frequently Asked Questions){" "}
        </h2>
        <div className="flex flex-col gap-3 my-[30px] mx-auto w-full">
          {allFaqs.map((allFaq: Faq, index: number) => (
            <div key={index}>
              <MappedFaq {...allFaq} index={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFaqContainer;
