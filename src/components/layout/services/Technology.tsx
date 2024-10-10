import React, { useState } from "react";
import taping from "@/assets/taperMachine.webp";
import Texts from "@/components/texts/Texts";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useInView } from "react-intersection-observer";
import TextMask from "@/Animation/TextMask";
import { motion } from "framer-motion";

interface IProps {
  id: number;
  title: string;
  description: string;
}

type IMapped = {
  faq: IProps;
  index: number;
};

const Technology: React.FC = () => {
  const FAQS: IProps[] = [
    {
      id: 1,
      title: "Real-Time Tracking",
      description: "Our system allows you to track your progress in real-time.",
    },
    {
      id: 2,
      title: "Online order Submission",
      description:
        "Our system generates automated reports to help you stay on top of your work.",
    },
    {
      id: 3,
      title: "Direct Signatures",
      description:
        "Our system allows you to collect direct signatures from your team members.",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  return (
    <div className=" mx-auto my-[50px] min-[1800px]:w-[1500px] w-[85%] max-[500px]:w-[90%]">
      <div className="flex max-[750px]:flex-col items-center justify-between gap-[30px] mx-auto">
        <div className=" relative w-[600px] max-[750px]:w-full h-[400px]">
          <img
            className="w-full h-full object-cover rounded-[30px]"
            src={taping}
            alt="img"
          />
          <span className=" absolute bottom-[-40px] min-[750px]:left-[-40px] max-[750px]:right-[-30px] max-[500px]:right-[-10px] bg-primary h-[90px] w-[84px]"></span>
        </div>
        <div
          ref={ref}
          className="flex flex-col gap-3 w-[500px] max-[750px]:w-full max-[750px]:my-[30px]"
        >
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 font-tenorSans">
            Technology{" "}
          </h2>
          <TextMask customStyles="font-montserrat leading-7" inView={inView}>
            Utilizing the latest technology is one of the many things that sets
            RXZIPPY apart from other big-name logistics companies. Some of the
            technology we employ includes:{" "}
          </TextMask>
          <div className="flex flex-col gap-2">
            {FAQS.map((faq: IProps, index: number) => (
              <div className="" key={index}>
                <Faq faq={faq} index={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = ({ faq, index }: IMapped) => {
  const [selected, setSelected] = useState<number | null>(null);

  const isOpen = selected === index;

  return (
    <div className="bg-faq rounded-[7px]">
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

export default Technology;
