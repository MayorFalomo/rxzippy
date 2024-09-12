import { ContactForm } from "@/components/contactForm/ContactForm";
import Texts from "@/components/texts/Texts";
import joy from "../../../../assets/joy.webp";
import peter from "../../../../assets/peter.webp";
import { RiPlayMiniFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface IProps {
  showForm?: boolean;
  givePadding?: boolean;
}

const Footer = ({ showForm, givePadding }: IProps) => {
  const FooterLinksOne = [
    {
      id: 1,
      url: "/",
      page: "Support",
    },
    {
      id: 2,
      url: "/",
      page: "Help centre",
    },
    {
      id: 3,
      url: "/",
      page: "Account information",
    },
    {
      id: 4,
      url: "/",
      page: "About",
    },
    {
      id: 5,
      url: "/",
      page: "Contact us",
    },
  ];

  const FooterLinksTwo = [
    {
      id: 1,
      url: "/",
      page: "Help and Solution",
    },
    {
      id: 2,
      url: "/",
      page: "Talk to support",
    },
    {
      id: 3,
      url: "/",
      page: "Support docs",
    },
    {
      id: 4,
      url: "/",
      page: "System",
    },
    {
      id: 5,
      url: "/",
      page: "Covid response",
    },
  ];

  const FooterLinksThree = [
    {
      id: 1,
      url: "/",
      page: "Product",
    },
    {
      id: 2,
      url: "/",
      page: "Update",
    },
    {
      id: 3,
      url: "/",
      page: "Security",
    },
    {
      id: 4,
      url: "/",
      page: "Beta test",
    },
    {
      id: 5,
      url: "/",
      page: "Pricing product",
    },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(to top, #397DFF 0%, #224B99 100%)",
        // clipPath: "inset(0% 0% 0% 0% round 140px 140px 0 0)",
      }}
      className="  text-white rounded-tl-[120px]  rounded-tr-[120px] max-[600px]:rounded-tl-[80px] max-[600px]:rounded-tr-[80px]"
    >
      <div className=" w-[70%] max-[1060px]:w-[80%] max-[600px]:w-[95%] mx-auto">
        {showForm ? (
          <div className=" flex max-[750px]:flex-col-reverse items-center justify-between gap-[20px] py-4 ">
            <div className="w-[500px] mt-[50px] max-[600px]:w-full">
              <h2 className=" text-center font-lato tracking-wide text-[27px] font-bold leading-8">
                Get Started
              </h2>
              <div className="w-full min-w-full">
                <ContactForm />
              </div>
            </div>
            <div className=" w-[45%] max-[750px]:w-[80%] flex items-center">
              <div className=" flex flex-col gap-4 h-full ">
                <h2 className=" flex items-center gap-2 font-hkGrotesk">
                  <span className="scroll-m-20 text-[30px] max-[930px]:text-[28px] font-semibold tracking-wide first:mt-0 max-[840px]:mx-auto">
                    Become a
                  </span>
                  <span className="scroll-m-20 text-[30px] max-[930px]:text-[28px] font-semibold tracking-wide first:mt-0 max-[840px]:hidden">
                    courier
                  </span>
                </h2>
                <h2 className="flex items-center gap-2 scroll-m-20 text-4xl max-[930px]:text-[28px] font-semibold tracking-wide first:mt-0 max-[840px]:mx-auto">
                  <span className="hidden max-[840px]:flex ">Courier</span>
                  <span className=""> Today! </span>
                </h2>
                <Texts className=" my-3 font-inter tracking-wide" size="sm">
                  A form for interested individuals to fill out, including all
                  necessary information for becoming a courier.{" "}
                </Texts>
                <ul className="flex items-center gap-2">
                  <li>
                    <img
                      className="w-[30px] rounded-full"
                      src={peter}
                      alt="img"
                    />
                  </li>
                  <li>
                    <img
                      className="w-[30px] rounded-full"
                      src={peter}
                      alt="img"
                    />
                  </li>
                  <li>
                    <img
                      className="w-[30px] rounded-full"
                      src={peter}
                      alt="img"
                    />
                  </li>
                  <li>
                    <img
                      className="w-[30px] rounded-full"
                      src={joy}
                      alt="img"
                    />
                  </li>

                  <span className=" text-[30px] rounded-full border-2 border-white">
                    {<RiPlayMiniFill />}{" "}
                  </span>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={`${
            givePadding ? "pt-[70px] " : ""
          } flex justify-center items-start mx-auto gap-3`}
        >
          <div className="  w-[50%] max-[600px]:w-[95%] border-t-[1px] border-b-[1px] border-white-600 my-8 py-4 flex items-center justify-between gap-3">
            <div className=" flex flex-col gap-2 my-[30px]">
              {FooterLinksOne.map((footer) => (
                <ul key={footer.id} className=" font-lato font-medium">
                  <li className=" hover:text-black  text-[16px] max-[480px]:text-[14px]  transition-all 0.4s ease-out">
                    {" "}
                    <Link to={footer.url}>{footer.page} </Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
            <div className=" flex flex-col gap-2">
              {FooterLinksTwo.map((footer) => (
                <ul key={footer.id} className=" font-lato font-medium">
                  <li className=" hover:text-black text-[16px] max-[480px]:text-[14px] transition-all 0.4s ease-out">
                    {" "}
                    <Link to={footer.url}>{footer.page} </Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
            <div className=" flex flex-col gap-2">
              {FooterLinksThree.map((footer) => (
                <ul key={footer.id} className=" font-lato font-light">
                  <li className=" hover:text-black text-[16px] max-[480px]:text-[14px] transition-all 0.4s ease-out">
                    {" "}
                    <Link to={footer.url}>{footer.page} </Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <p className="my-[20px] flex justify-center gap-[7px]">
          <span> Terms and conditions</span> <span>Privacy policy </span>{" "}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 py-6 text-[16px] max-[500px]:text-[14px] max-[480px]:py-3 border-b-2 border-white bg-black text-white w-full">
        <span className="bg-white rounded-[50%] px-3 py-1 font-stinger text-black">
          C
        </span>
        <span className=" font-poppins">2024 All Rights Reserved </span>{" "}
      </div>
    </footer>
  );
};

export default Footer;
