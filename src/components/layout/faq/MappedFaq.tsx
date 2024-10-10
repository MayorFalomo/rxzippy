import Texts from "@/components/texts/Texts";
import { Faq } from "@/types/types";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const MappedFaq = ({ question, answer, index }: Faq) => {
  const [selected, setSelected] = useState<number | null>(null);

  const isOpen = selected === index;

  return (
    <div>
      <div     
 className=" bg-primary cursor-pointer mx-auto rounded-[10px] py-4 px-6 text-white">
        <div className=" flex space-x-2 items-center ">
          {selected === null ? (
            <button
              onClick={() => setSelected(index !== undefined ? index : 0)}
            >
              {<PlusIcon />}{" "}
            </button>
          ) : (
            <button
              className="p-2 text-[60px]"
              onClick={() =>
                setSelected(isOpen ? null : index !== undefined ? index : null)
              }
            >
              {<MinusIcon />}{" "}
            </button>
          )}
          <h2 className="min-[1800px]:text-lg text-md font-tenorSans"> {question} </h2>
        </div>
          <motion.div
            key={index}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
             
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
            transition={{ ease: "easeOut" }}
            className="overflow-hidden "
          >
            {selected === index && (
              <Texts className="mt-3 pl-1 min-[1800px]:text-md font-montserrat">{answer} </Texts>
            )}
          </motion.div>
      </div>
    </div>
  );
};

export default MappedFaq;
