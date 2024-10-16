import { ContactForm } from "@/components/contactForm/ContactForm";
import Texts from "@/components/texts/Texts";
import { RiPlayMiniFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import useRipple from "@/Animation/RippleEffect";

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
    // {
    //   id: 2,
    //   url: "/",
    //   page: "Help centre",
    // },
    // {
    //   id: 3,
    //   url: "/",
    //   page: "Account information",
    // },
    {
      id: 4,
      url: "/company",
      page: "About",
    },
    {
      id: 5,
      url: "/contact",
      page: "Contact us",
    },
  ];

  const FooterLinksTwo = [
    {
      id: 1,
      url: "/faq",
      page: "Help and Solution",
    },
    // {
    //   id: 2,
    //   url: "/",
    //   page: "Talk to support",
    // },
    // {
    //   id: 3,
    //   url: "/",
    //   page: "Support docs",
    // },
    {
      id: 4,
      url: "/",
      page: "System",
    },
    {
      id: 6,
      url: "/terms-and-conditions",
      page: "Terms and conditions",
    },
    // {
    //   id: 5,
    //   url: "/",
    //   page: "Covid response",
    // },
  ];

  const FooterLinksThree = [
    // {
    //   id: 1,
    //   url: "/",
    //   page: "Product",
    // },
    {
      id: 2,
      url: "/",
      page: "Update",
    },
    // {
    //   id: 3,
    //   url: "/",
    //   page: "Security",
    // },
    // {
    //   id: 4,
    //   url: "/",
    //   page: "Beta test",
    // },
    {
      id: 5,
      url: "/contact",
      page: "Pricing product",
    },
    {
      id: 6,
      url: "/privacy-policy",
      page: "Privacy policy",
    },
  ];

  const { buttonRef, createRipple } = useRipple();


  return (
    <footer
      style={{
        background: "linear-gradient(to top, #397DFF 0%, #224B99 100%)",
      }}
      className="  text-white rounded-tl-[120px]  rounded-tr-[120px] max-[600px]:rounded-tl-[80px] max-[600px]:rounded-tr-[80px]"
    >
      <div className="min-[1800px]:w-[1500px] w-[70%] max-[1060px]:w-[80%] max-[600px]:w-[95%] mx-auto">
        {showForm ? (
          <div className=" flex max-[750px]:flex-col-reverse items-center justify-between gap-[20px] py-4 ">
            <div className="w-[500px] mt-[50px] max-[600px]:w-full">
              <h2 className=" text-center font-montserrat tracking-wide text-[27px] font-bold leading-8">
                Get Started
              </h2>
              <div className="w-full min-w-full">
                <ContactForm />
              </div>
            </div>
            <div className=" w-[45%] max-[750px]:w-[80%] flex flex-col items-start gap-[40px] justify-between">
              <div className=" flex flex-col gap-4 h-full ">
                <h2 className=" flex items-center gap-2 font-montserrat">
                  <span className="scroll-m-20 text-[30px] max-[930px]:text-[28px] font-semibold tracking-wide first:mt-0 max-[840px]:mx-auto">
                    Become a
                  </span>
                  <span className="scroll-m-20 text-[30px] max-[930px]:text-[28px] font-semibold tracking-wide first:mt-0 max-[840px]:hidden">
                    courier
                  </span>
                </h2>
                <h2 className="flex items-center gap-2 scroll-m-20 text-4xl font-montserrat max-[930px]:text-[28px] font-semibold tracking-wide first:mt-0 max-[840px]:mx-auto">
                  <span className="hidden max-[840px]:flex ">Courier</span>
                  <span className=""> Today! </span>
                </h2>
                <Texts className=" my-3 min-[1800px]:text-md font-montserrat tracking-wide" size="sm">
                  A form for interested individuals to fill out, including all
                  necessary information for becoming a courier.{" "}
                </Texts>
                <ul className="flex items-center gap-2">
                  <span className=" text-[30px] rounded-full border-2 border-white">
                    {<RiPlayMiniFill />}{" "}
                  </span>
                </ul>
              </div>
              <Texts className=" flex items-center gap-2 font-montserrat">
                <span>Email : </span>
                <span className="min-[1800px]:text-lg underline underline-offset-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:sales@rxzippy.com"
                  >
                    {" "}
                    sales@rxzippy.com
                  </a>{" "}
                </span>{" "}
              </Texts>
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
                  <li className=" hover:text-black text-[16px] font-montserrat max-[480px]:text-[14px]  transition-all 0.4s ease-out">
                    {" "}
                    <Link to={footer.url}>{footer.page} </Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
            <div className=" flex flex-col gap-2">
              {FooterLinksTwo.map((footer) => (
                <ul key={footer.id} className=" font-montserrat font-medium">
                  <li className=" hover:text-black text-[16px] font-montserrat max-[480px]:text-[14px] transition-all 0.4s ease-out">
                    {" "}
                    <Link to={footer.url}>{footer.page} </Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
            <div className=" flex flex-col gap-2">
              {FooterLinksThree.map((footer) => (
                <ul key={footer.id} className=" font-montserrat font-light">
                  <li className=" hover:text-black text-[16px] font-montserrat max-[480px]:text-[14px] transition-all 0.4s ease-out">
                    {" "}
                    <Link to={footer.url}>{footer.page} </Link>{" "}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
          <div className="bg-bgPrimary drop-shadow-lg rounded-lg flex justify-center items-center mx-auto w-fit py-4 px-3 mb-6">
              <form name="trForm" method="post" action="https://www.ontime360.com/tracking/trackingresults.aspx" id="trForm">
                    <div>
                        <table>
                            <tr>
                                <td className="flex max-w-fit h-[50px] items-center">
                                    <Input 
                                      name="TrackingNumber" 
                                      type="text" 
                                      id="TrackingNumber"
                                      className="bg-[#F6F7F8] text-md w-[300px] max-[900px]:w-full h-full placeholder:px-1 placeholder:font-montserrat placeholder:text-[#3C3737] placeholder:text-[12px] text-[#FFFFFF] outline-none focus-visible:ring-0 rounded-none border-none"
                                      placeholder="Enter your tracking number" 
                                    />&nbsp;
                                    <Button 
                                      ref={buttonRef}
                                      type="submit" 
                                      name="btnSubmit" 
                                      value="Submit"  
                                      id="btnSubmit" 
                                      className="relative overflow-hidden bg-black h-full w-[200px] text-white rounded-md"
                                      onMouseDown={createRipple}
                                    >
                                      Track your package
                                    </Button>
                                </td>
                            </tr>
                        </table>
                        <input type="hidden" name="accid" id="accid" value="eWsGJySzqgBt7EuIGT38OjICHhr57svTmGqyJnBc/9dku07GLviOUQ==" />
                    </div>
                </form>
            </div>
        {/* <p className="my-[20px] font-montserrat flex justify-center gap-[7px]">
          <span> Terms and conditions</span> <span>Privacy policy </span>{" "}
        </p> */}
      </div>
      <div className="flex items-center justify-center gap-2 py-6 text-[16px] max-[500px]:text-[14px] max-[480px]:py-3 border-b-2 border-white bg-black text-white w-full">
        <span className="bg-white rounded-[50%] px-3 py-1 font-stinger text-black">
          C
        </span>
        <span className=" font-montserrat">2024 All Rights Reserved </span>{" "}
      </div>
    </footer>
  );
};

export default Footer;
