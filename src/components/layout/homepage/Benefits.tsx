import Texts from "@/components/texts/Texts";
import React from "react";
import atrium from "../../../assets/atrium.png";
import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Benefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      number: "01",
      title: "Cost-Effective Solutions",
      text:
        "RXZippy offers competitive pricing to ensure you get the best for your money.",
      img: atrium,
    },
    {
      id: 2,
      number: "02",
      title: "Real-Time Tracking",
      text:
        "Stay updated with the exact location of your package at all times through our cutting-edge tracking system.",
      img: atrium,
    },
    {
      id: 3,
      number: "03",
      title: "Reliable Deliveries",
      text:
        " RXZippy offers refrigerated delivery services to ensure your goods in optimal condition.",
      img: atrium,
    },
    {
      id: 4,
      number: "04",
      title: "Speed & Efficiency",
      text:
        " RXZippy offers competitive pricing to ensure you get the best value for your money.",
      img: atrium,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  });

  return (
    <div className="bg-white min-h-[100vh] flex flex-col items-center justify-center my-[50px]  m-auto">
      <div
        ref={ref}
        className="h-[80%] w-[85%] m-auto  flex flex-col items-start justify-center max-[550px]:w-[95%]"
      >
        <motion.h2 className=" font-stinger text-variant scroll-m-20 flex flex-col gap-1 w-fit text-3xl font-semibold tracking-tight first:mt-0">
          Benefits
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: inView ? 100 : 0 }}
            // style={{ width: inView ? "100px" : "0" }}
            className="bg-primary h-[1px] transition-all ease-out duration-300"
          >
            {" "}
          </motion.span>
        </motion.h2>
        <Texts
          font="font-hkGrotesk"
          color="primary"
          size="md"
          variant="body"
          weight="normal"
          className="w-[320px] mt-3 mb-2 max-[350px]:w-full"
        >
          Explore our range of tailored courier solutions designed to meet your
          unique delivery need.
        </Texts>
        <div className="flex items-start justify-between flex-wrap w-full   space-x-4 max-[600px]:space-x-1 max-[600px]:gap-[5px] gap-[10px] mt-5 ">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className=" flex flex-col space-y-4 bg-offWhite  w-[300px] max-w-[400px] max-[1145px]:w-[90%] max-[1020px]:max-w-[250px] max-[970px]:max-w-[40%] max-[750px]:max-w-[45%]  pb-2"
            >
              <div className=" w-full min-[1200px]:h-[270px] min-[1100px]:min-w-[300px] max-[1150px]:h-[200px] max-[1150px]:min-w-[150px] max-[340px]:min-w-full ">
                <img
                  className="w-full h-full object-cover"
                  src={benefit.img}
                  alt="img"
                />
              </div>
              <div className="w-[90%] m-auto">
                <h1 className=" font-darkerGrotesk text-[#030305] scroll-m-20 text-4xl max-[550px]:text-2xl font-extrabold tracking-tight lg:text-[45px]">
                  {benefit.number}
                </h1>
                <Texts
                  font="font-inter"
                  size="lg"
                  className="my-2 font-semibold max-[550px]:text-[16px] "
                >
                  {benefit.title}
                </Texts>
                <Texts font="font-darkerGrotesk" variant="body" size="md">
                  {benefit.text}
                </Texts>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TrackYourPackageBtn styles="mx-auto my-[30px]" />
    </div>
  );
};

export default Benefits;
