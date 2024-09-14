import { Nav } from "../../types/NavTypes";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.webp";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { IoIosArrowDown } from "react-icons/io";
import { ChevronRight } from "lucide-react";
import { FaTruck } from "react-icons/fa";

export function Navbar() {
  const navbar: Nav[] = [
    {
      navItem: "Home",
      path: "/",
    },
    {
      navItem: "Services",
      path: "/services",
    },
    {
      navItem: "FAQ",
      path: "/faq",
    },
    {
      navItem: "Company",
      path: "/company",
    },
    {
      navItem: "Contact Us",
      path: "/contact",
    },
  ];

  const [menuState, setMenuState] = useState<boolean>(false);
  const [showPages, setShowPages] = useState(false);

  const pathname = useLocation();

  useEffect(() => {
    if (window.innerWidth > 960) {
      setMenuState(false);
    }
  }, [menuState]);

  return (
    <nav className="bg-primary">
      <div className="flex m-auto items-center justify-between w-[85%] max-[750px]:py-4 py-1 ">
        <div className="max-w-[100px]">
          <img className="w-full" src={Logo} alt="img" />
        </div>
        <ul
          className={
            menuState
              ? `max-[960px]:fixed right-0 top-0 h-[100vh] w-[70%] flex flex-col justify-center items-center gap-[30px] bg-primary z-30 transition-all ease-out duration-500 min-[960px]:hidden`
              : `flex items-center justify-around min-[1550px]:w-[50%] max-[1500px]:w-[55%] max-[1210px]:w-[65%] max-[1030px]:w-[70%] text-[1.125rem] gap-[15px] min-[960px]:relative min-[960px]:left-[0] max-[960px]:fixed max-[960px]:right-[-200vw] max-[960px]:top-0 max-[960px]:h-[100vh] max-[960px]:w-0 bg-primary transition-all ease-out duration-500`
          }
        >
          {navbar.map((nav: Nav) => (
            <li
              className="z-30 list-none cursor-pointer group relative inline-block text-secondary font-normal"
              key={nav.path}
            >
              <div
                className={`flex items-center gap-[20px] relative py-2 px-4 transition-colors duration-500 ${
                  pathname.pathname === nav.path ? "" : ""
                }`}
              >
                <Link to={nav.path}>{nav.navItem}</Link>

                <Popover>
                  {nav.path === "/services" && (
                    <PopoverTrigger className="p-0 h-fit m-0 ">
                      <span
                        className="p-2 z-60"
                        onClick={() => setShowPages(!showPages)}
                      >
                        {<IoIosArrowDown />}
                      </span>
                    </PopoverTrigger>
                  )}
                  <PopoverContent className="min-[960px]:w-[100vw] max-w-[500px] bottom-[-70px]">
                    {
                      <div className="flex flex-col items-start justify-start px-2 text-offBlack text-[18px] bg-white">
                        <Link
                          className="flex items-center justify-between shadow-md p-3 w-full  hover:bg-primary hover:text-white transition-all ease-out duration-500"
                          to={nav.path}
                        >
                          <p className=" flex items-center gap-[20px]">
                            <span className="bg-primary text-white text-[18px] p-2 ">
                              {<FaTruck style={{}} />}{" "}
                            </span>
                            <span>Services </span>
                          </p>
                          <span>{<ChevronRight />}</span>
                        </Link>
                        <Link
                          className="flex items-center justify-between shadow-md p-3 w-full hover:bg-primary hover:text-white transition-all ease-out duration-500"
                          to="/medical"
                        >
                          <p className=" flex items-center gap-[20px]">
                            <span className="bg-primary text-white text-[18px] p-2 ">
                              {<FaTruck style={{}} />}{" "}
                            </span>
                            <span>Medical </span>
                          </p>
                          <span>{<ChevronRight />}</span>
                        </Link>
                      </div>
                    }
                  </PopoverContent>
                </Popover>
              </div>
              {nav.path === "/services" ? (
                ""
              ) : (
                <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-white scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
              )}
            </li>
          ))}
        </ul>
        {menuState ? (
          <span
            onClick={() => setMenuState(false)}
            className="fixed z-40 right-[20px] flex items-center justify-center  cursor-pointer min-[960px]:hidden max-[1200px]:block"
          >
            <svg
              height="42"
              color="#fff"
              // height="40"
              viewBox="0 0 21 21"
              width="40"
              // width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="white"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7.5 7.5 6 6" />
                <path d="m13.5 7.5-6 6" />
              </g>
            </svg>
          </span>
        ) : (
          <span
            onClick={() => setMenuState(true)}
            className="cursor-pointer flex flex-col items-center justify-center max-[960px]:block min-[960px]:hidden"
          >
            <svg className="pt-3 " viewBox="0 0 100 80" width="40" height="40">
              <rect className="fill-white" width="200" height="5"></rect>
              <rect className="fill-white" y="25" width="200" height="5"></rect>
            </svg>
          </span>
        )}
      </div>
    </nav>
  );
}
