import boxes from "../../../assets/boxes.webp";
import TextMask from "@/Animation/TextMask";
import { useInView } from "react-intersection-observer";
import vanVector from "@/assets/vanVector.webp";
import { Link } from "react-router-dom";

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
      <div className="min-[1800px]:w-[1500px] w-[85%] mx-auto my-[50px] flex max-[700px]:flex-col flex-row-reverse justify-between items-center gap-[40px]">
        <div
          ref={ref}
          className=" flex flex-col gap-3 w-[500px] max-[700px]:w-full"
        >
          <h1 className="flex flex-col gap-2 scroll-m-20 text-3xl text-[#433E3E] font-semibold tracking-tight first:mt-0 font-tenorSans">
            <span> Affordable prices </span>
            <span>(dedicated) </span>
          </h1>
          <TextMask
            inView={inView}
            customStyles=" text-[#433E3E] font-normal font-montserrat leading-7"
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
         <Link to='/contact' >
          <button className="scroll-m-20 flex justify-center mx-auto text-center border-2 border-[#508CFF] bg-transparent px-6 py-3 hover:bg-[#508CFF] hover:text-white transition duration-700 ease-out rounded-[10px] font-montserrat text-[#433E3E] text-[20px] font-medium tracking-wide lg:text-[24px]">
        <TextMask
          inView={inViewOne}
        >
          Contact us!
        </TextMask>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AfforableService;
