import React from "react";
import Texts from "@/components/texts/Texts";
import blackMan from "@/assets/blackman-riding.webp";
import smiling from "@/assets/man-writing.webp";
import FadeIn from "@/Animation/FadeIn";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  const [refOne, inViewOne] = useInView({
    threshold: 0.2,
  });
  const [refTwo, inViewTwo] = useInView({
    threshold: 0.4,
  });

  const [refThree, inViewThree] = useInView({
    threshold: 0.2,
  });
  return (
    <div className="">
      <div className="flex max-[700px]:flex-col items-center justify-between min-[1800px]:w-[1500px] w-[70%] max-[800px]:w-[90%]  mx-auto gap-[40px] my-[40px] ">
        <div className="flex flex-col items-start gap-4 ">
          <h2
            ref={(el) => {
              ref(el);
              refOne(el);
            }}
            className="flex flex-col items-start gap-1"
          >
            <span className="scroll-m-20 font-stinger text-start text-3xl font-semibold tracking-tight first:mt-0">
              {" "}
              Our History{" "}
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: inView ? 100 : 0 }}
              transition={{ duration: 0.7 }}
              className=" h-[1px] mt-2 w-[100px] bg-primary"
            ></motion.span>
          </h2>
          <Texts className=" font-montserrat text-offGray leading-7 w-[500px] max-[1200px]:w-[300px] max-[700px]:w-full ">
            <FadeIn inView={inViewOne}>
              RxZippy began as an aid for a simple pharmacy that required a
              private delivery service and the ability to customize it in the
              best possible way. Over time, the idea of RxZippy expanding became
              a reality, so the founders got to work and decided to formalize
              the company and make it much more professional. In early 2023, the
              founders wanted to delve more deeply into the market and open
              their doors to many more businesses, creating today's RxZippy.{" "}
            </FadeIn>
          </Texts>
        </div>
        <div className="min-w-[300px] max-[700px]:w-full">
          <img src={blackMan} alt="img" />
        </div>
      </div>
      <div className=" flex max-[700px]:flex-col-reverse items-center justify-between gap-[20px] min-[1800px]:w-[1500px] w-[70%] max-[800px]:w-[90%] mx-auto mb-[50px] ">
        <div className="w-[500px] h-[400px] max-[1200px]:min-w-[400px] max-[800px]:min-w-[300px] max-[550px]:min-w-0  max-[550px]:w-full">
          <img
            className="w-full h-full object-cover object-right"
            src={smiling}
            alt="img"
          />
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h2
            ref={(el) => {
              refTwo(el);
              refThree(el);
            }}
            className="flex flex-col items-start gap-2"
          >
            <span className="scroll-m-20 font-tenorSans text-start text-3xl font-semibold tracking-tight first:mt-0">
              {" "}
              Our Technology
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: inViewTwo ? 100 : 0 }}
              transition={{ duration: 0.7 }}
              className=" h-[1px] mt-2 w-[100px] bg-primary"
            ></motion.span>
          </h2>
          <Texts className=" font-hkGrotesk text-offGray leading-7 max-w-[500px] max-[1300px]:min-w-[200px]">
            <FadeIn inView={inViewThree}>
              At RxZippy, convenience is an advantage. We leverage advanced
              technology, including real-time tracking, to ensure the best
              consumer experience.
            </FadeIn>
          </Texts>
        </div>
      </div>
    </div>
  );
};

export default About;
