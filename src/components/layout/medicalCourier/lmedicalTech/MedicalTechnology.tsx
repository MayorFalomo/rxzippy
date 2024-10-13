import { useState } from "react";
import AIGirl from "@/assets/gorgeousGirl.webp";
import Texts from "@/components/texts/Texts";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeIn from "@/Animation/FadeIn";
import { FAQS, IProps } from ".";
import { Link } from "react-router-dom";
import TextMask from "@/Animation/TextMask";

type IMapped = {
  faq: IProps;
  index: number;
};

const MedicalTechnology: React.FC = () => {
  
  const [refOne, inViewOne] = useInView({
    threshold: 0.2,
  });

  const [refTwo, inViewTwo] = useInView({
    threshold: 0.2,
  });

  const [refImage, inViewImage] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className=" mx-auto my-[50px] min-[1800px]:w-[1500px] w-[85%] max-[600px]:w-[85%]">
      <div className="flex max-[870px]:flex-col items-center justify-between gap-[30px] mx-auto">
        <div
          ref={refImage}
          className=" relative w-[500px] max-[870px]:w-[400px]  max-[570px]:w-[90%] h-[500px]"
        >
          <motion.img
            initial={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            animate={{
              clipPath: inViewImage
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={AIGirl}
            alt="img"
            className="w-full h-full object-cover object-left"
          />

          <div className="flex items-start absolute left-[-40px] top-[-40px]">
            <span className="bg-primary  z-[1] h-[100px] w-[30px]"></span>
            <span className="bg-primary  z-[1] h-[30px] w-[100px]"></span>
          </div>
          <div className="flex items-end absolute right-[-40px] bottom-[-40px]">
            <span className="bg-primary  z-[1] h-[30px] w-[100px]"></span>
            <span className="bg-primary  z-[1] h-[120px] w-[30px]"></span>
          </div>
        </div>
        <div
          ref={refOne}
          className="flex flex-col gap-3 w-[500px] max-[570px]:w-full"
        >
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 font-tenorSans">
            Technology{" "}
          </h2>
          <FadeIn
            inView={inViewOne}
            style=" text-black font-montserrat leading-7"
          >
            Utilizing the latest technology is one of the many things that sets
            RXZIPPY apart from other big-name logistics companies. Some of the
            technology we employ includes:{" "}
          </FadeIn>
          <div className="flex flex-col gap-2">
            {FAQS.map((faq: IProps, index: number) => (
              <div className="" key={index}>
                <Faq faq={faq} index={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div ref={refTwo} className="flex justify-center my-[100px]">
        <Link to='/contact' >
          <button className="scroll-m-20 flex justify-center mx-auto text-center border-2 border-[#508CFF] bg-transparent px-6 py-3 hover:bg-[#508CFF] hover:text-white transition duration-700 ease-out rounded-[10px] font-montserrat text-[#433E3E] text-[20px] font-medium tracking-wide lg:text-[24px]">
        <TextMask
          inView={inViewTwo}
        >
          Contact us!
        </TextMask>
          </button>
        </Link>
      </div>
    </div>
  );
};

const Faq = ({ faq, index }: IMapped) => {
  const [selected, setSelected] = useState<number | null>(null);

  const isOpen = selected === index;

  return (
    <div className=" bg-faq  rounded-[7px]">
      <div
        className="flex items-start gap-2 w-full p-2 cursor-pointer"
        onClick={() => setSelected(isOpen ? null : index)}
      >
        <span className="text-[#434343] p-2">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="mt-[3px] font-tenorSans">{faq.title}</h3>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ ease: "easeOut" }}
            className="overflow-hidden "
          >
            <Texts className="w-full font-montserrat">{faq.description}</Texts>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTechnology;
