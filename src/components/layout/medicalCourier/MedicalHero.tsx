import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import maskedDoc from "@/assets/callingDoc.webp";
import rectOne from "@/assets/rectOne.webp";
import rectTwo from "@/assets/rectTwo.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MedicalHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

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
          <div className="absolute min-[1800px]:left-[19%] left-[10%] top-1/2 z-20 flex justify-between items-end min-[1800px]:w-[1500px] w-[80%] m-auto  ">
            <div ref={ref} className=" flex flex-col gap-[10px]">
              <h1 className="flex flex-col gap-2 text-white min-[1800px]:text-[60px] text-[40px] max-[700px]:text-[35px] max-[480px]:text-[32px] min-[1800px]:leading-[60px] leading-10 font-tenorSans scroll-m-20 font-bold tracking-wide">
                <span>Medical Courier </span>
                <span>Services</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: inView ? 300 : 0 }}
                  transition={{ duration: 0.7 }}
                  className=" h-[1px] mt-2 w-[300px] bg-white"
                ></motion.span>
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
