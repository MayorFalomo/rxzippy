import React from "react";
import companyHeroImg from "@/assets/companyHeroImg.webp";
import Texts from "@/components/texts/Texts";
import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import FadeIn from "@/Animation/FadeIn";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import vanVector from "@/assets/vanVector.webp";

const CompanyHero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  const [refOne, inViewOne] = useInView({
    threshold: 0.2,
    // triggerOnce: true,
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
          className="  mx-auto my-[40px] relative w-[70%] max-[800px]:w-[90%] h-[50vh] max-[500px]:bg-center "
        >
          <h1 className="flex flex-col gap-[1px] items-start justify-center h-full w-[70%] max-[500px]:w-[85%] m-auto text-white text-[60px] max-[900px]:text-[50px] max-[700px]:text-[40px] leading-[70px] max-[600px]:leading-[50px] font-stinger scroll-m-20 font-bold tracking-wide">
            <span>About RXZippy </span>
            <span>Delivery</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: inView ? 300 : 0 }}
              transition={{ duration: 0.7 }}
              className=" h-[1px] mt-2 w-[300px]max-[400px]:w-[100px] bg-white"
            ></motion.span>
          </h1>
        </div>
        <div
          ref={refOne}
          className=" my-[50px] mx-auto w-[70%] max-[800px]:w-[90%]"
        >
          <Texts className=" text-offGray leading-7" size="md">
            <FadeIn inView={inViewOne}>
              RxZippy is a company founded in Atlanta, GA, with its primary
              purpose of delivering medical supplies across a significant part
              of the state. Always with the intention of expanding its reach to
              different states and more cities. Our company is known for its
              conveniences, a highly professional and friendly team, and
              competitive prices in the market. We serve not only pharmacies,
              doctors, and hospitals but also general products like clothing.
              Although our company is over 97% focused on medical services, we
              are also open to new opportunities.
            </FadeIn>
          </Texts>
          <div className=" flex items-center justify-between max-[800px]:justify-center gap-[30px] mt-[40px] ">
            <span className=" bg-primary h-[15px] w-[300px] max-[670px]:hidden">
              {" "}
            </span>
            <TrackYourPackageBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHero;
