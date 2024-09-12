import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import HeaderTexts from "@/components/texts/HeaderTexts";
import Texts from "@/components/texts/Texts";
import Nurses from "../../../assets/nurses.webp";
import nursesBg from "@/assets/nurses-bg.webp";
import whiteBoxHead from "@/assets/boxHeadWhite.webp";
import blackBoxHead from "@/assets/boxHeadBlack.webp";

const Medicals = () => {
  return (
    <div className=" bg-offWhite">
      <div className="w-[85%] m-auto max-[480px]:w-[95%]">
        <div className=" flex justify-between items-end  gap-[20px] mt-[40px]">
          <div className="mt-[40px] max-[620px]:w-full ">
            <HeaderTexts
              className=" w-[145px] leading-9 text-700 text-[30px] max-[620px]:text-[24px]  max-[620px]:w-full max-[620px]:text-center"
              primary={true}
            >
              {" "}
              Our Medical Services{" "}
            </HeaderTexts>
            <p className=" w-[70px] h-[2px] mt-1 bg-primary max-[620px]:hidden">
              {" "}
            </p>
          </div>
          <TrackYourPackageBtn styles="max-[620px]:hidden " />
        </div>
        <div className="flex max-[950px]:flex-col items-center justify-between gap-[30px] mt-[40px] max-[620px]:w-full ">
          <div className="w-[500px] max-[900px]:max-w-[600px] max-[620px]:w-full ">
            <div className="relative">
              <div className="relative w-[100%]">
                <img src={whiteBoxHead} alt="img" />
              </div>
              <Texts className=" absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-start max-[620px]:w-[80%]">
                Best for: Doctor, hospitals, pharmacies{" "}
              </Texts>
            </div>
            <div className="relative mt-[80px] max-[620px]:mt-[40px]">
              <div className="w-[100%]">
                <img src={blackBoxHead} alt="img" />
              </div>
              <Texts className=" absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-start text-white  max-[620px]:w-[80%]">
                Technology: Real-Time Tracking, Refrigeration, Direct Signatures
              </Texts>
            </div>
          </div>
          <div className="w-[50%] max-[950px]:w-[500px] max-[620px]:w-full h-full ">
            <div className=" relative h-full ">
              <div className="relative w-full h-full min-h-[400px]">
                <img
                  className="w-full object-cover min-w-[400px] max-[480px]:min-w-full min-h-[400px] relative z-[2] "
                  src={Nurses}
                  alt="img"
                />
                <TrackYourPackageBtn styles=" hidden absolute bottom-[50px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 max-[620px]:flex " />
              </div>
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] min-w-[200px] max-[620px]:h-[80%] h-full object-contain"
                src={nursesBg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicals;
