import React from 'react'
import companyHeroImg from "@/assets/companyHeroImg.webp";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import vanVector from "@/assets/vanVector.webp";

const FaqHero: React.FC = () => {
     const [ref, inView] = useInView({
    threshold: 0.4,
  });
  return (
      <div>
           <div
        style={{
          backgroundImage: `url(${vanVector})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          ref={ref}
          style={{
            backgroundImage: `url(${companyHeroImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" relative mx-auto my-[40px] min-[1800px]:w-[1500px] w-[70%] max-[800px]:w-[90%] h-[50vh] max-[500px]:bg-center "
        >
          <div className=" bg-black opacity-[0.6] h-full w-full"></div>
          <h1 className=" absolute left-[10%] top-1/2 -translate-y-1/2 z-[1] flex flex-col gap-[1px] items-start justify-center h-full w-[70%] max-[500px]:w-[85%] m-auto text-white text-[60px] max-[900px]:text-[50px] max-[700px]:text-[40px] leading-[70px] max-[600px]:leading-[50px] font-stinger scroll-m-20 font-bold tracking-wide">
            <span>FAQ </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: inView ? 200 : 0 }}
              transition={{ duration: 0.7 }}
              className=" h-[1px] mt-2 w-[300px]max-[400px]:w-[100px] bg-white"
            ></motion.span>
          </h1>
              </div>
              </div>
    </div>
  )
}

export default FaqHero