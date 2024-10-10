import Texts from "@/components/texts/Texts";
import speedometer from "@/assets/speedometer.svg";
import group from "@/assets/groupIcon.svg";
import shield from "@/assets/shield.svg";
import smileIcon from "@/assets/smileMoji.svg";

const SubHero = () => {
  return (
    <div className="bg-offWhite py-4 max-[700px]:mt-[80px]">
      <div className="flex justify-between items-center min-[1800px]:w-[1500px] max-[700px]:flex-col m-auto max-[1800px]:w-[85%] max-[500px]:w-[95%]">
        <Texts
          font="font-tensorSans"
          className=" leading-[50px] max-[700px]:leading-[40px] min-[1800px]:text-[40px] text-[34px] max-[700px]:text-[25px] min-[1800px]:w-[350px] w-[300px] max-[700px]:w-[90%] text-[#4A4646]"
          // variant="heading"
          // size="xl"
        >
          {" "}
          Why You Should Be Part of RXZippy
        </Texts>
        <ul className="flex items-center justify-around w-[50%] max-[700px]:w-[100%] max-[700px]:mt-[20px] space-x-4 gap-2">
          <li className="flex flex-col items-center space-y-2">
            <span className=" bg-[#E7EEFA] drop-shadow-sm p-2 max-[700px]:p-2 rounded-full max-[700px]:w-[40px]">
              {" "}
              <img src={group} alt="img" />
            </span>
            <span className="min-[1800px]:text-[16px] text-sm max-[500px]:text-[12px] font-montserrat font-semibold">
              Reliability{" "}
            </span>
          </li>
          <li className="flex flex-col items-center space-y-2">
            <div className=" bg-[#E7EEFA] drop-shadow-sm p-2 max-[700px]:p-2 rounded-full max-[700px]:w-[40px]">
              <img src={speedometer} alt="img" />
            </div>
            <span className="min-[1800px]:text-[16px] text-sm max-[500px]:text-[12px] font-montserrat font-semibold">
              Speed{" "}
            </span>
          </li>
          <li className="flex flex-col items-center space-y-2">
            <div className=" bg-[#E7EEFA] drop-shadow-sm p-2 max-[700px]:p-2 rounded-full max-[700px]:w-[40px]">
              <img src={shield} alt="img" />
            </div>
            <span className="min-[1800px]:text-[16px] text-sm max-[500px]:text-[12px] font-montserrat font-semibold">
              Security{" "}
            </span>
          </li>
          <li className="flex flex-col items-center space-y-2 max-[900px]:hidden max-[700px]:flex">
            <div className=" bg-[#E7EEFA] p-2 drop-shadow-sm max-[700px]:p-2 rounded-full max-[700px]:w-[40px] ">
              <img src={smileIcon} alt="img" />
            </div>
            <p className=" flex items-center gap-[5px] min-[1800px]:text-[16px] text-sm max-[500px]:text-[12px] font-montserrat font-semibold">
              <span className=" max-[600px]:hidden">Customer </span>{" "}
              <span>Satisfaction</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHero;
