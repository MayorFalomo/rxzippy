import Texts from "@/components/texts/Texts";
import { Faq } from "@/types/types";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const MappedFaq = ({ question, answer, index }: Faq) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <div className=" bg-primary mx-auto rounded-[10px] py-4 px-6 text-white">
        <div className=" flex space-x-2 items-center ">
          {selected === null ? (
            <button onClick={() => setSelected(index ?? 0)}>
              {<PlusIcon />}{" "}
            </button>
          ) : (
            <button
              className="p-2 text-[60px]"
              onClick={() => setSelected(null)}
            >
              {<MinusIcon />}{" "}
            </button>
          )}
          <h2 className=" font-stinger"> {question} </h2>
        </div>
        {selected === index && <Texts className="mt-3 pl-1">{answer} </Texts>}
      </div>
    </div>
  );
};

export default MappedFaq;
