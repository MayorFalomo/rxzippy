import React, { useState } from "react";
import taping from "@/assets/taperMachine.webp";
import Texts from "@/components/texts/Texts";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

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
  return (
    <div className=" mx-auto my-[50px] w-[85%] max-[500px]:w-[90%]">
      <div className="flex max-[750px]:flex-col items-center justify-between gap-[30px] mx-auto">
        <div className=" relative w-[600px] max-[750px]:w-full h-[400px]">
          <img
            className="w-full h-full object-cover rounded-[30px]"
            src={taping}
            alt="img"
          />
          <span className=" absolute bottom-[-40px] min-[750px]:left-[-40px] max-[750px]:right-[-30px] max-[500px]:right-[-10px] bg-primary h-[90px] w-[84px]"></span>
        </div>
        <div className="flex flex-col gap-3 w-[500px] max-[750px]:w-full max-[750px]:my-[30px]">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 font-hkGrotesk">
            Technology{" "}
          </h2>
          <Texts className=" font-hkGrotesk leading-7">
            Utilizing the latest technology is one of the many things that sets
            RXZIPPY apart from other big-name logistics companies. Some of the
            technology we employ includes:{" "}
          </Texts>
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

  return (
    <div className=" bg-faq  rounded-[7px]">
      <div className="flex items-start gap-2  w-full p-2 ">
        {selected === null ? (
          <span
            className=" text-[#434343] p-2 cursor-pointer"
            onClick={() => setSelected(index + 1)}
          >
            {<PlusIcon />}{" "}
          </span>
        ) : (
          <span
            className=" text-[#434343] p-2 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            {" "}
            {<MinusIcon />}{" "}
          </span>
        )}
        <div className="flex flex-col gap-2">
          <h3 className=" mt-[3px]">{faq.title}</h3>
          {selected === index + 1 && (
            <Texts className="w-full">{faq.description} </Texts>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
