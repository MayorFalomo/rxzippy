import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import doctArms from "@/assets/doctArms.webp";
import TextMask from "@/Animation/TextMask";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const BestFor = () => {
  const Maps = ["Best for", "Doctor, hospitals", "Pharmacies"];

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const [refImage, inViewImage] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="h-[70vh] max-[870px]:h-auto flex items-center my-[50px] max-[870px]:my-[80px]  justify-center">
      <div className="flex max-[870px]:flex-col-reverse items-center justify-between w-[85%] gap-[40px]">
        <div
          ref={(el) => {
            ref(el);
            refImage(el);
          }}
          className="flex flex-col gap-4"
        >
          <TextMask
            inView={inView}
            customStyles="flex flex-col text-offGray text-[40px] max-[700px]:text-[35px] max-[480px]:text-[32px] font-hkGrotesk scroll-m-20 font-medium tracking-tight"
          >
            {Maps}
          </TextMask>
          <h2 className="flex flex-col text-offGray text-[40px] max-[700px]:text-[35px] max-[480px]:text-[32px] font-hkGrotesk scroll-m-20 font-medium tracking-tight">
            {/* {Maps.map((res, index) => (
              <span key={index}>{res}</span>
            ))} */}
            {/* <span>Best for:</span>
            <span>Doctor, hospitals, </span>
            <span>Pharmacies</span> */}
          </h2>
          <div>
            <TrackYourPackageBtn />
          </div>
        </div>
        <div className="relative max-[1024px]:w-[400px] min-w-[400px] max-[570px]:w-[90%] max-[570px]:min-w-0">
          <motion.img
            className="w-full h-full z-10 relative"
            initial={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            animate={{
              clipPath: inViewImage
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={doctArms}
            alt="img"
          />
          {/* <img
            className="w-full h-full z-10 relative"
            src={doctArms}
            alt="img"
          /> */}
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
