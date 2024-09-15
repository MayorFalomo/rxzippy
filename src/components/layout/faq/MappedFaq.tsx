import Texts from "@/components/texts/Texts";
import { Faq } from "@/types/types";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MappedFaq = ({ question, answer, index }: Faq) => {
  const [selected, setSelected] = useState<number | null>(null);

  const isOpen = selected === index;

  return (
    <div>
      <div className=" bg-primary mx-auto rounded-[10px] py-4 px-6 text-white">
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
          <h2 className=" font-stinger"> {question} </h2>
        </div>
        <AnimatePresence mode="wait">
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
            }}
            transition={{ ease: "easeOut" }}
            className="overflow-hidden "
          >
            {selected === index && (
              <Texts className="mt-3 pl-1">{answer} </Texts>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MappedFaq;
