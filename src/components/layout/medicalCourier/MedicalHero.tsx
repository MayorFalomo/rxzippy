import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import maskedDoc from "@/assets/callingDoc.webp";
import rectOne from "@/assets/rectOne.webp";
import rectTwo from "@/assets/rectTwo.webp";
const MedicalHero = () => {
  return (
    <div>
      <div className="my-[40px]">
        <div
          style={{
            backgroundImage: `url(${maskedDoc})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative w-full max-[600px]:w-[90%] max-[600px]:mx-auto h-[60vh] max-[1050px]:bg-right"
        >
          <img className="w-full h-full " src={rectOne} alt="img" />
          <img
            className="absolute left-0 top-0 w-full h-full"
            src={rectTwo}
            alt="img"
          />
          <div className="absolute left-[10%] top-1/2 z-20 flex justify-between items-end w-[80%] m-auto  ">
            <div className=" flex flex-col gap-[10px]">
              <h1 className="flex flex-col gap-2 text-white text-[40px] max-[700px]:text-[35px] max-[480px]:text-[32px] leading-10 font-stinger scroll-m-20 font-bold tracking-wide">
                <span>Medical Courier </span>
                <span>Services</span>
                <span className=" h-[1px] mt-2 w-[300px] bg-white"></span>
              </h1>
            </div>

            <TrackYourPackageBtn styles="max-[720px]:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHero;
