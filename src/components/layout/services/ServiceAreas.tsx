import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import { GiDeliveryDrone } from "react-icons/gi";
import manWriting from "../../../assets/man-writing.webp";

const ServiceAreas = () => {
  return (
    <div>
      <div className="my-[30px] flex justify-center mx-auto">
        <TrackYourPackageBtn />
      </div>
      <div className="flex max-[760px]:flex-col-reverse items-center justify-between gap-3 mx-auto w-[85%] max-[840px]:w-[90%] my-[50px] ">
        <div className="flex flex-col  max-[780px]:my-[20px] gap-4">
          <ul className="flex flex-col my-[20px] gap-5">
            <li className="flex items-center gap-3">
              <p className="flex items-center gap-2">
                <span className=" p-2 bg-primary text-white rounded-full">
                  {<GiDeliveryDrone />}{" "}
                </span>{" "}
                <span className="scroll-m-20 text-2xl max-[780px]:text-[20px] font-semibold tracking-tight">
                  Retail{" "}
                </span>{" "}
              </p>
              <p className="flex items-center gap-2">
                <span className=" p-2 bg-primary text-white rounded-full">
                  {<GiDeliveryDrone />}{" "}
                </span>{" "}
                <span className="scroll-m-20 text-2xl max-[780px]:text-[20px] font-semibold tracking-tight">
                  E-Commerce{" "}
                </span>{" "}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <span className=" p-2 bg-primary text-white rounded-full gap-[5px]">
                {<GiDeliveryDrone />}{" "}
              </span>{" "}
              <span className="scroll-m-20 text-2xl max-[780px]:text-[20px] font-semibold tracking-tight">
                Firms (Attorneys, Accounting){" "}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className=" p-2 bg-primary text-white rounded-full gap-[5px]">
                {<GiDeliveryDrone />}{" "}
              </span>{" "}
              <span className="scroll-m-20 text-2xl max-[780px]:text-[20px] font-semibold tracking-tight">
                Clothing{" "}
              </span>{" "}
            </li>
          </ul>
          <div className="">
            <TrackYourPackageBtn />
          </div>
        </div>
        <div className=" relative w-[500px] h-[400px] max-[630px]:w-full">
          <img
            className="w-full h-full object-cover object-right rounded-[40px]"
            src={manWriting}
            alt="img"
          />
          <span className=" absolute bottom-[-40px] right-[-40px] max-[630px]:right-[0px] bg-primary h-[90px] w-[84px]">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
