import React from "react";
import MappedFaq from "./MappedFaq";
import { Faq } from "@/types/types";

const AllFaqContainer = () => {
  const allFaqs: Faq[] = [
    {
      id: 1,
      question: "What areas do you cover?",
      answer: "We cover all areas of the city.",
    },
    {
      id: 2,
      question: "How do i track my delivery?",
      answer: "You can track your delivery through our website.",
    },
    {
      id: 3,
      question: "What ae your delivery hours?",
      answer: "Our delivery hours are suitable for all hours of delivery",
    },
    {
      id: 4,
      question: "What should i do if my package is damaged or lost?",
      answer: "Please contact us immediately so we can assist you",
    },
    {
      id: 5,
      question: "How much does delivery cost?",
      answer: "Delivery cost is free for all orders above $50",
    },
    {
      id: 6,
      question: "How do i become a courier with RXZippy?",
      answer: "Please contact us via email or phone number",
    },
  ];

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
