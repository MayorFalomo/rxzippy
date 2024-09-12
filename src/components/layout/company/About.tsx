import React from "react";
import Texts from "@/components/texts/Texts";
import blackMan from "@/assets/blackman-riding.webp";
import smiling from "@/assets/man-writing.webp";

const About: React.FC = () => {
  return (
    <div className="">
      <div className="flex max-[700px]:flex-col items-center justify-between w-[70%] max-[800px]:w-[90%]  mx-auto gap-[40px] my-[40px] ">
        <div className="flex flex-col items-start gap-4 ">
          <h2 className="flex flex-col items-start gap-1">
            <span className="scroll-m-20 font-stinger text-start text-3xl font-semibold tracking-tight first:mt-0">
              {" "}
              Our History{" "}
            </span>
            <span className=" h-[1px] w-[100px] bg-primary"> </span>
          </h2>
          <Texts className=" font-hkGrotesk text-offGray leading-7 w-[500px] max-[1200px]:w-[300px] max-[700px]:w-full ">
            RxZippy began as an aid for a simple pharmacy that required a
            private delivery service and the ability to customize it in the best
            possible way. Over time, the idea of RxZippy expanding became a
            reality, so the founders got to work and decided to formalize the
            company and make it much more professional. In early 2023, the
            founders wanted to delve more deeply into the market and open their
            doors to many more businesses, creating today's RxZippy.{" "}
          </Texts>
        </div>
        <div className="min-w-[300px] max-[700px]:w-full">
          <img src={blackMan} alt="img" />
        </div>
      </div>
      <div className=" flex max-[700px]:flex-col-reverse items-center justify-between gap-[20px] w-[70%] max-[800px]:w-[90%] mx-auto mb-[50px] ">
        <div className="w-[500px] h-[400px] max-[1200px]:min-w-[400px] max-[800px]:min-w-[300px] max-[550px]:min-w-0  max-[550px]:w-full">
          <img
            className="w-full h-full object-cover object-right"
            src={smiling}
            alt="img"
          />
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h2 className="flex flex-col items-start gap-2">
            <span className="scroll-m-20 font-stinger text-start text-3xl font-semibold tracking-tight first:mt-0">
              {" "}
              Our Technology
            </span>
            <span className=" h-[1px] w-[100px] bg-primary"> </span>
          </h2>
          <Texts className=" font-hkGrotesk text-offGray leading-7 max-w-[500px] max-[1300px]:min-w-[200px]">
            At RxZippy, convenience is an advantage. We leverage advanced
            technology, including real-time tracking, to ensure the best
            consumer experience.
          </Texts>
        </div>
      </div>
    </div>
  );
};

export default About;
