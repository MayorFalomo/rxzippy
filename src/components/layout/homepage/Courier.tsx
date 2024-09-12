import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import HeaderTexts from "@/components/texts/HeaderTexts";
import React from "react";
import parcel from "../../../assets/parcel.webp";
import vanVector from "@/assets/vanVector.webp";

export const Courier: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${vanVector})`,
        backgroundRepeat: "no-repeat",
      }}
      className="bg-white flex flex-col items-center justify-center  bg-left max-[900px]:bg-top h-[90vh] max-[900px]:h-auto"
    >
      <div className=" w-full ">
        <div className="w-[85%] max-[600px]:w-[95%] m-auto">
          <div className="flex max-[900px]:flex-col items-center justify-between space-x-6 gap-4 max-[900px]:gap-6">
            <div className="relative h-[500px] max-w-[500px] max-[900px]:mt-[60px] ">
              <img
                className="w-full h-full object-cover rounded-[40px]"
                src={parcel}
                alt="img"
              />
              <div className=" absolute right-0 bottom-0 z-[2] flex justify-end items-end w-[100px] h-[150px] rounded-tl-[20px] bg-[#f1f1f1]">
                <div className="w-[80px] h-[120px] bg-primary rounded-[15px]"></div>
              </div>
            </div>
            <div className="">
              <HeaderTexts className=" text-[30px] w-[150px]" primary={true}>
                Our Courier Services{" "}
              </HeaderTexts>
              <ul className=" flex flex-col gap-2 text-[18px] max-[600px]:text-[16px] text-[#433E3E] font-inter w-[100%] mx-auto my-[30px] list-disc">
                <li>Retail </li>
                <li>Firms (Attorneys, Accounting) </li>
                <li>E-Commerce </li>
                <li className="max-[1200px]:w-[100%] w-[90%] min-w-[350px] max-[900px]:min-w-[200px] ">
                  Technology: (Pop on click) Real-Time Tracking, Online order
                  submission, Direct Signatures.{" "}
                </li>
                <li> Fast and secure delivery (dedicated)</li>
                <li>Affordable prices (dedicated) </li>
              </ul>
              <TrackYourPackageBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
