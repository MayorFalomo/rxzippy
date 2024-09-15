import React from "react";
import womanWithHeadset from "@/assets/womanWithHeadset.webp";
import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import rectOne from "@/assets/rectOne.webp";
import rectTwo from "@/assets/rectTwo.webp";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ContactHero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  });

  return (
    <div>
      <div>
        <div
          ref={ref}
          style={{
            backgroundImage: `url(${womanWithHeadset})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative w-full h-[40vh]"
        >
          <img className="w-full h-full " src={rectOne} alt="img" />
          <img
            className="absolute left-0 top-0 w-full h-full"
            src={rectTwo}
            alt="img"
          />
          <div className="absolute left-[10%] top-1/2 z-20 flex justify-between items-end w-[80%] m-auto  ">
            <div className=" flex flex-col gap-[10px]">
              <h2 className="scroll-m-20 font-semibold font-stinger tracking-wide text-[36px] text-white first:mt-0">
                Contact Us{" "}
              </h2>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: inView ? 200 : 0 }}
                transition={{ duration: 0.7 }}
                className=" h-[1px] mt-1 w-[200px] bg-gray-400"
              ></motion.span>
            </div>
            <div className=" max-[600px]:hidden">
              <TrackYourPackageBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
