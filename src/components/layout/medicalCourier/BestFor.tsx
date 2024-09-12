import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import doctArms from "@/assets/doctArms.webp";

const BestFor = () => {
  return (
    <div className="h-[70vh] max-[870px]:h-auto flex items-center my-[50px] max-[870px]:my-[80px]  justify-center">
      <div className="flex max-[870px]:flex-col-reverse items-center justify-between w-[85%] gap-[40px]">
        <div className="flex flex-col gap-4">
          <h2 className="flex flex-col text-offGray text-[40px] max-[700px]:text-[35px] max-[480px]:text-[32px] font-hkGrotesk scroll-m-20 font-medium tracking-tight">
            <span>Best for:</span>
            <span>Doctor, hospitals, </span>
            <span>Pharmacies</span>
          </h2>
          <div>
            <TrackYourPackageBtn />
          </div>
        </div>
        <div className="relative max-[1024px]:w-[400px] min-w-[400px] max-[570px]:w-[90%] max-[570px]:min-w-0">
          <img
            className="w-full h-full z-10 relative"
            src={doctArms}
            alt="img"
          />
          <div className="flex items-start absolute left-[-40px] top-[-40px]">
            <span className="bg-primary  z-[1] h-[100px] w-[30px]"></span>
            <span className="bg-primary  z-[1] h-[30px] w-[100px]"></span>
          </div>
          <div className="flex items-end absolute right-[-40px] bottom-[-40px]">
            <span className="bg-primary  z-[1] h-[30px] w-[100px]"></span>
            <span className="bg-primary  z-[1] h-[120px] w-[30px]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFor;
