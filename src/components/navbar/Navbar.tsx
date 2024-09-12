import { Nav } from "../../types/NavTypes";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.webp";
import { useState } from "react";

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

  const pathname = useLocation();

  return (
    <nav className="bg-primary">
      <div className="flex m-auto items-center justify-between w-[85%] max-[750px]:py-4 py-6 ">
        <div className="max-w-[100px]">
          <img className="w-full" src={Logo} alt="img" />
        </div>
        <ul
          className={
            menuState
              ? `fixed right-0 top-0 h-[100vh] w-[70%] flex flex-col justify-center items-center gap-[30px] bg-primary z-30 transition-all ease-out duration-500`
              : `flex items-center justify-around min-[1550px]:w-[40%] max-[1500px]:w-[55%] max-[1150px]:w-[65%] text-[1.125rem] gap-[15px] max-[960px]:fixed max-[960px]:right-[-200vw] max-[960px]:top-0 max-[960px]:h-[100vh] max-[960px]:w-0 bg-primary transition-all ease-out duration-500`
          }
        >
          {navbar.map((nav: Nav) => (
            <li
              className="list-none cursor-pointer group relative inline-block text-secondary font-normal"
              key={nav.path}
            >
              <Link
                className={`block relative py-2 px-4 transition-colors duration-500 ${
                  pathname.pathname === nav.path
                    ? "text-golden_yellow"
                    : "text-off-white hover:text-golden_yellow"
                }`}
                to={nav.path}
              >
                {nav.navItem}{" "}
                <span className="absolute bottom-[2px] left-0 w-full h-[2px] bg-white scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
              </Link>
            </li>
          ))}
        </ul>
        {menuState ? (
          <span
            onClick={() => setMenuState(false)}
            className="fixed z-40 right-[20px] flex items-center justify-center  cursor-pointer md:hidden max-[1200px]:block"
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
            className="cursor-pointer flex flex-col items-center justify-center min-[960px]:hidden"
          >
            <svg className="pt-3 " viewBox="0 0 100 80" width="40" height="40">
              <rect className="fill-white" width="200" height="5"></rect>
              <rect className="fill-white" y="25" width="200" height="5"></rect>
            </svg>
          </span>
        )}
      </div>
      {menuState && <div>{/* {navbar.} */}</div>}
    </nav>
  );
}
