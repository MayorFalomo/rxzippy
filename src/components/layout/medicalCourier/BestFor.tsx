import doctArms from "@/assets/doctArms.webp";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaUserDoctor } from "react-icons/fa6";
import { PiHospital } from 'react-icons/pi'
import { ImLab } from 'react-icons/im';
import { FaBriefcaseMedical } from "react-icons/fa";
import FadeIn from "@/Animation/FadeIn";

const BestFor = () => {
  // const Maps = ["Best for", "Pharmacies, Physicians", "Hospitals, Doctors"];
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const [refImage, inViewImage] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="h-[80vh] max-[870px]:h-auto flex items-center my-[50px] max-[870px]:my-[80px]  justify-center">
      <div className="flex max-[870px]:flex-col-reverse items-center justify-between w-[85%] gap-[40px]">
        <div
          ref={(el) => {
            ref(el);
            refImage(el);
          }}
          className="flex flex-col gap-4 "
        >
          <div className="flex flex-col gap-4 ">

            <h2 className="block text-offGray text-[40px] max-[700px]:text-[35px] max-[480px]:text-[32px] font-hkGrotesk scroll-m-20 font-medium tracking-tight">
              Best For{" "}
            </h2>
            <FadeIn inView={inView} >
            <div className=" flex items-center gap-[20px]" >
            <div  className="flex items-center gap-3 text-offGray"
            >
              <span className=" bg-primary text-white p-3 max-[700px]:p-2 rounded-full text-[22px] max-[700px]:text-[35px] max-[480px]:text-[20px]" >{<FaBriefcaseMedical />} </span>
              <p className=" w-full text-offGray  min-[700px]:text-[30px] max-[700px]:text-[25px] max-[480px]:text-[20px] font-hkGrotesk scroll-m-20 font-medium tracking-tight" >Pharmacies </p>
            </div>
            <div  className="flex items-center gap-3 text-offGray"
            >
              <span className=" bg-primary text-white p-3 max-[700px]:p-2 rounded-full text-[22px] max-[700px]:text-[35px] max-[480px]:text-[20px]" >{<PiHospital />} </span>
              <p className=" w-full text-offGray  min-[700px]:text-[30px] max-[700px]:text-[25px] max-[480px]:text-[20px] font-hkGrotesk scroll-m-20 font-medium tracking-tight" >Hospitals </p>
              </div>
              </div>
            </FadeIn>
            <FadeIn inView={inView} >
            <div className=" flex items-center justify-between gap-[20px]" >
            <div  className="flex items-center gap-3 text-offGray"
            >
              <span className=" bg-primary text-white p-3 max-[700px]:p-2 rounded-full text-[22px] max-[700px]:text-[35px] max-[480px]:text-[20px]" >{<ImLab />} </span>
              <p className=" w-full text-offGray min-[700px]:text-[30px] max-[700px]:text-[25px] max-[480px]:text-[20px] font-hkGrotesk scroll-m-20 font-medium tracking-tight" >Labs </p>
            </div>
            <div  className="flex items-center gap-3 text-offGray"
            >
              <span className=" bg-primary text-white p-3 max-[700px]:p-2 rounded-full text-[22px] max-[700px]:text-[35px] max-[480px]:text-[20px]" >{<FaUserDoctor />} </span>
              <p className=" w-full text-offGray  min-[700px]:text-[30px] max-[700px]:text-[25px] max-[480px]:text-[20px] font-hkGrotesk scroll-m-20 font-medium tracking-tight" >Physician </p>
                </div>
                
              </div>
              </FadeIn>
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
