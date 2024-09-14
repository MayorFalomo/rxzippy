import useRipple from "@/Animation/RippleEffect";
import Texts from "@/components/texts/Texts";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

const Subcribe = () => {
  const { buttonRef, createRipple } = useRipple();

  return (
    <div className="bg-white relative z-[2] flex flex-col justify-center h-[60vh]">
      <div className="relative bg-primary h-[80%] max-[750px]:h-[70%] w-[85%] max-[600px]:w-[95%] rounded-[30px] flex flex-col justify-center  items-center m-auto">
        <div className=" flex flex-col items-center justify-between h-[70%] max-[750px]:h-[60%] ">
          <div className="flex flex-col items-center justify-center ">
            <Texts
              className="text-white font-cabinetGrotesk font-normal text-center max-[750px]:text-[14px]"
              size="md"
            >
              We're here to help you achieve a sparkling clean home.{" "}
            </Texts>
            <h2 className=" text-white font-sherika max-[500px]:mt-[15px] text-[30px] max-[750px]:text-[24px] max-[500px]:text-[18px] text-center scroll-m-20 font-semibold tracking-wide first:mt-2">
              {" "}
              Subscribe to get our Newsletter{" "}
            </h2>
          </div>
          <div className="bg-bgPrimary drop-shadow-lg rounded-lg flex items-center w-fit py-4 px-3 ">
            <div className="flex max-w-fit h-[50px] items-center">
              <Input
                className="bg-[#F6F7F8] text-md w-[300px] max-[650px]:w-full h-full placeholder:px-3 placeholder:font-clashDisplay placeholder:text-[#3C3737] text-[#3C3737] outline-none rounded-none border-none"
                type="email"
                placeholder="Email Address"
              />
              <Button
                ref={buttonRef}
                className="relative overflow-hidden bg-black h-full w-[100px] text-white rounded-md"
                type="submit"
                onMouseDown={createRipple}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <span className=" absolute left-[-80px] top-[-40px] max-[900px]:hidden">
          <svg
            width="200"
            height="200"
            viewBox="0 0 273 273"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="136.5"
              cy="136.5"
              r="116.5"
              stroke="white"
              strokeWidth="40"
            />
          </svg>
        </span>
        <span className=" absolute left-[-100px] top-[35px] max-[900px]:hidden">
          <svg
            width="200"
            height="200"
            viewBox="0 0 273 273"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_53_112" fill="white">
              <path d="M273 136.5C273 100.67 258.912 66.2768 233.777 40.7426C208.641 15.2084 174.474 0.580915 138.649 0.0169123C102.823 -0.547091 68.2124 12.9976 42.2857 37.7279C16.359 62.4583 1.19551 96.3911 0.0676448 132.203C-1.06022 168.015 11.938 202.835 36.2571 229.148C60.5763 255.461 94.2662 271.156 130.056 272.848C165.846 274.539 200.866 262.091 227.558 238.189C254.251 214.287 270.475 180.848 272.729 145.089L237.33 142.857C235.661 169.324 223.653 194.074 203.897 211.765C184.14 229.456 158.22 238.669 131.731 237.417C105.241 236.165 80.3053 224.548 62.3056 205.073C44.3059 185.598 34.6853 159.826 35.5201 133.32C36.3549 106.814 47.5781 81.6983 66.7677 63.3942C85.9572 45.0902 111.574 35.0651 138.09 35.4826C164.606 35.9 189.895 46.7265 208.499 65.6255C227.103 84.5246 237.53 109.981 237.53 136.5H273Z" />
            </mask>
            <path
              d="M273 136.5C273 100.67 258.912 66.2768 233.777 40.7426C208.641 15.2084 174.474 0.580915 138.649 0.0169123C102.823 -0.547091 68.2124 12.9976 42.2857 37.7279C16.359 62.4583 1.19551 96.3911 0.0676448 132.203C-1.06022 168.015 11.938 202.835 36.2571 229.148C60.5763 255.461 94.2662 271.156 130.056 272.848C165.846 274.539 200.866 262.091 227.558 238.189C254.251 214.287 270.475 180.848 272.729 145.089L237.33 142.857C235.661 169.324 223.653 194.074 203.897 211.765C184.14 229.456 158.22 238.669 131.731 237.417C105.241 236.165 80.3053 224.548 62.3056 205.073C44.3059 185.598 34.6853 159.826 35.5201 133.32C36.3549 106.814 47.5781 81.6983 66.7677 63.3942C85.9572 45.0902 111.574 35.0651 138.09 35.4826C164.606 35.9 189.895 46.7265 208.499 65.6255C227.103 84.5246 237.53 109.981 237.53 136.5H273Z"
              stroke="white"
              strokeWidth="80"
              mask="url(#path-1-inside-1_53_112)"
            />
          </svg>
        </span>
        <span className="absolute top-1/2 right-[-140px] transform -translate-y-1/2 mx-auto max-[750px]:hidden">
          <svg
            width="272"
            height="203"
            viewBox="0 0 245 273"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_53_113" fill="white">
              <path d="M273 136.5C273 100.67 258.912 66.2768 233.777 40.7426C208.641 15.2084 174.474 0.580915 138.649 0.0169123C102.823 -0.547091 68.2124 12.9976 42.2857 37.7279C16.359 62.4583 1.19551 96.3911 0.0676448 132.203C-1.06022 168.015 11.938 202.835 36.2571 229.148C60.5763 255.461 94.2662 271.156 130.056 272.848C165.846 274.539 200.866 262.091 227.558 238.189C254.251 214.287 270.475 180.848 272.729 145.089L136.5 136.5H273Z" />
            </mask>
            <path
              d="M273 136.5C273 100.67 258.912 66.2768 233.777 40.7426C208.641 15.2084 174.474 0.580915 138.649 0.0169123C102.823 -0.547091 68.2124 12.9976 42.2857 37.7279C16.359 62.4583 1.19551 96.3911 0.0676448 132.203C-1.06022 168.015 11.938 202.835 36.2571 229.148C60.5763 255.461 94.2662 271.156 130.056 272.848C165.846 274.539 200.866 262.091 227.558 238.189C254.251 214.287 270.475 180.848 272.729 145.089L136.5 136.5H273Z"
              stroke="white"
              strokeWidth="80"
              mask="url(#path-1-inside-1_53_113)"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Subcribe;
