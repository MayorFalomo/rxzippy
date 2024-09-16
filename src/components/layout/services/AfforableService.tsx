import boxes from "../../../assets/boxes.webp";
import TextMask from "@/Animation/TextMask";
import { useInView } from "react-intersection-observer";
import vanVector from "@/assets/vanVector.webp";

const AfforableService = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const [refOne, inViewOne] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <div>
      <div className=" w-[85%] mx-auto my-[50px] flex max-[700px]:flex-col flex-row-reverse justify-between items-center gap-[40px]">
        <div
          ref={ref}
          className=" flex flex-col gap-3 w-[500px] max-[700px]:w-full"
        >
          <h1 className="flex flex-col gap-2 scroll-m-20 text-3xl txt-[#433E3E] font-semibold tracking-tight first:mt-0 font-hkGrotesk ">
            <span> Affordable prices </span>
            <span>(dedicated) </span>
          </h1>
          <TextMask
            inView={inView}
            customStyles=" text-[#433E3E] font-normal font-hkGrotesk leading-7"
          >
            At RXZIPPY, we understand the importance of affordable shipping
            prices for small packages. That’s why we offer competitive rates for
            all our delivery services, so you can ship documents or materials
            without breaking the bank.
          </TextMask>
        </div>
        <div
          style={{
            backgroundImage: `url(${vanVector})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className=" relative w-[600px] max-[700px]:w-full h-[400px]"
        >
          <img
            className="w-full h-full object-cover rounded-[30px]"
            src={boxes}
            alt="img"
          />
          <span className=" absolute bottom-[-40px] min-[700px]:right-[-40px] max-[700px]:right-[-10px] bg-primary h-[90px] w-[84px]"></span>
        </div>
      </div>
      <div ref={refOne} className=" my-[100px]">
        <TextMask
          inView={inViewOne}
          customStyles="scroll-m-20 text-center font-hkGrotesk text-[#433E3E] text-4xl font-semibold tracking-wide lg:text-5xl"
        >
          Contact us!
        </TextMask>
      </div>
    </div>
  );
};

export default AfforableService;
