import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import { ContactForm } from "@/components/contactForm/ContactForm";
import Texts from "@/components/texts/Texts";
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className=" ">
      <div className="h-[80vh] min-[1800px]:h-[60vh] max-[750px]:h-auto">
        <div className="my-[30px] flex justify-center mx-auto min-[600px]:hidden">
          <TrackYourPackageBtn />
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex max-[750px]:flex-col items-center justify-between gap-[20px] min-[1800px]:w-[1500px] w-[85%] max-[480px]:w-[95%] mx-auto">
            <div className="flex flex-col  w-full max-[750px]:mt-[20px] gap-6">
              <h1 className="scroll-m-20 text-4xl min-[1800px]:text65xl font-extrabold font-tenorSans text-[#433E3E] tracking-tight lg:text-5xl">
                Get In touch
              </h1>
              <div className="max-w-[600px]">
                <ContactForm />
              </div>
            </div>
            <div className="flex flex-col gap-4 max-[750px]:mb-[20px] ">
              <div>
                <h2 className="scroll-m-20 font-semibold font-tenorSans tracking-wide  text-[#433E3E] text-[36px] max-[600px]:text-[24px] first:mt-0">
                  Give us a call{" "}
                </h2>
                <Texts className=" text-[#433E3E] font-montserrat font-light">
                  We love to hear what our customers want to express. So feel
                  free to give us a call at RxZippy{" "}
                </Texts>
              </div>
              <div>
                <p>
                  <span className="text-variant scroll-m-20 font-semibold font-hkGrotesk text-[20px] max-[600px]:text-[18px] first:mt-0 ">
                    For General:{" "}
                  </span>{" "}
                  <span className=" underline underline-offset-1 ">
                    (470) 777-150/1
                  </span>{" "}
                </p>
                <p>
                  <span className="text-variant scroll-m-20 font-semibold font-hkGrotesk text-[20px] max-[600px]:text-[18px] first:mt-0 ">
                    {" "}
                    For Sales:{" "}
                  </span>
                  <span className=" underline underline-offset-1 ">
                   <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:sales@rxzippy.com"
                  > sales@rxzippy.com </a>
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
