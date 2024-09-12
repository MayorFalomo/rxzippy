import HeaderTexts from "@/components/texts/HeaderTexts";
import Texts from "@/components/texts/Texts";
import React from "react";

type Props = {};

const History = (props: Props) => {
  return (
    <div>
      <div>
        <HeaderTexts border={true}>Our History </HeaderTexts>
        <Texts className=" font-hkGrotesk">
          RxZippy began as an aid for a simple pharmacy that required a private
          delivery service and the ability to customize it in the best possible
          way. Over time, the idea of RxZippy expanding became a reality, so the
          founders got to work and decided to formalize the company and make it
          much more professional. In early 2023, the founders wanted to delve
          more deeply into the market and open their doors to many more
          businesses, creating today's RxZippy.{" "}
        </Texts>
      </div>
      <div>
        <img src={} alt="img" />
      </div>
    </div>
  );
};

export default History;
