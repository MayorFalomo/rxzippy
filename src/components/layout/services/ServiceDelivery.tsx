import React from "react";
import bikeMan from "../../../assets/bikeman.webp";
import TextMask from "@/Animation/TextMask";
import { useInView } from "react-intersection-observer";

const ServiceDelivery: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  return (
    <div>
      <div className="w-[85%] mx-auto my-[50px] flex max-[700px]:flex-col justify-between items-center gap-[40px]">
        <div
          ref={ref}
          className=" flex flex-col gap-3 w-[500px] max-[700px]:w-full"
        >
          <h1 className="flex flex-col gap-2 scroll-m-20 text-3xl txt-[#433E3E] font-semibold tracking-tight first:mt-0 font-hkGrotesk ">
            <span> Fast and secure </span>
            <span>delivery (dedicated) </span>
          </h1>
          <TextMask
            inView={inView}
            customStyles="text-[#433E3E] font-normal font-hkGrotesk leading-7"
          >
            When you trust RXZIPPY with your small package delivery needs, you
            can rest assured that our team will deliver your packages quickly
            and securely. Providing the best delivery experience for our
            customers is a priority for our staff. You can count on us to get
            your small parcels to their destination on time, every time.{" "}
          </TextMask>
        </div>
        <div className=" relative w-[600px] h-[400px] max-[700px]:w-full">
          <img
            className="w-full h-full object-cover rounded-[30px]"
            src={bikeMan}
            alt="img"
          />
          <span className=" absolute bottom-[-40px] right-[-40px] max-[600px]:right-[-10px] bg-primary h-[90px] w-[84px]"></span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDelivery;
