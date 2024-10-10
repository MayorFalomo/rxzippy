import { Nav } from '../../types/NavTypes';
import { Link} from 'react-router-dom';
import Logo from '@/assets/logo.webp';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ChevronRight } from 'lucide-react';
import { FaTruck } from 'react-icons/fa';

export function Navbar() {
  const navbar: Nav[] = [
    {
      id: 1,
      navItem: 'Home',
      path: '/',
    },
    {
      id: 2,
      navItem: 'Services',
      path: '/services',
    },
    {
      id: 3,
      navItem: 'FAQ',
      path: '/faq',
    },
    {
      id: 4,
      navItem: 'Company',
      path: '/company',
    },
    {
      id: 5,
      navItem: 'Contact Us',
      path: '/contact',
    },
  ];

  const [menuState, setMenuState] = useState<boolean>(false);
  const [showServiceBar, setShowServiceBar] = useState<string>();

  useEffect(() => {
    if (window.innerWidth > 960) {
      setMenuState(false);
    }
  }, [menuState]);
  const Control = (nav: Nav) => {
    return (
      <div>
        <div
          className={`flex items-center gap-[20px] py-2 px-2 transition-colors duration-500`}
        >
          <div className="flex items-center max-[960px]:relative">
            <Link to={nav.path}>{nav.navItem} </Link>
            {nav.path === '/services' && (
              <span className="px-2 z-60">{<IoIosArrowDown />}</span>
            )}
            {nav.id &&
              <span className="absolute bottom-[-8px] z-20 left-0 w-full h-[2px] bg-white scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out"></span>
            }

          {showServiceBar === '/services' && nav.path === '/services' && (
            <div
              onMouseLeave={() => setShowServiceBar('')}
              onMouseEnter={() => setShowServiceBar('/services')}
              className="absolute left-0 min-[960px]:bottom-[-180px] min-[960px]:left-0 max-[960px]:left-[-150px] max-[960px]:bottom-[-200px] max-[960px]:w-[400px] min-[960px]:w-[100vw] max-[960px]:max-w-[600px] max-[600px]:max-w-[500px] max-[450px]:w-[250px]  max-[600px]:left-[-80px] max-[600px]:bottom-[-250px] bg-white py-4 z-50"
            >
              <div className="flex flex-col items-start justify-start gap-[15px] relative z-20 px-2 text-offBlack text-[18px] bg-white">
                <Link
                  className="flex items-center justify-between shadow-md p-4 w-full rounded-[10px] relative z-20  hover:bg-primary hover:text-white transition-all ease-out duration-500"
                  to={nav.path}
                >
                  <p className="relative z-10 flex items-center gap-[20px]">
                    <span className="bg-primary text-white text-[18px] p-2 ">
                      {<FaTruck />}{' '}
                    </span>
                    <span>Courier Services </span>
                   
                  </p>
                  <span className="text-variant text-[20px]">{<ChevronRight />}</span>
                </Link>
                <Link
                  className="flex items-center justify-between shadow-md p-4 w-full rounded-[10px] hover:bg-primary hover:text-white transition-all ease-out duration-500"
                  to="/medical"
                >
                  <p className=" flex items-center gap-[20px]">
                    <span className="bg-primary text-white text-[18px] p-2 ">
                      {<FaTruck />}{' '}
                    </span>
                    <span>Medical Services</span>
                  </p>
                  <span className="text-variant text-[20px]">{<ChevronRight />}</span>
                </Link>
              </div>
              </div>
            )}
            </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-primary relative">
      <div className="flex min-[1800px]:w-[1500px] max-[1800px]:w-[85%] m-auto items-center justify-between max-[750px]:py-4 py-1 ">
        <div className="max-w-[100px]">
          <Link to="/">
            <img className="w-full" src={Logo} alt="img" />
          </Link>
        </div>
        <ul
          className={
            menuState
              ? `max-[960px]:fixed right-0 top-0 h-[100vh] w-[70%] flex flex-col justify-center items-center gap-[30px] bg-primary z-30 transition-all ease-out duration-500 min-[960px]:hidden`
              : `flex items-center justify-around min-[1550px]:w-[50%] max-[1500px]:w-[60%] max-[1210px]:w-[65%] max-[1030px]:w-[70%] text-[1.125rem] gap-[15px] min-[960px]:left-[0] max-[960px]:fixed max-[960px]:right-[-200vw] max-[960px]:top-0 max-[960px]:h-[100vh] max-[960px]:w-0 bg-primary transition-all ease-out duration-500`
          }
        >
          {navbar.map((nav: Nav) => (
            <li
              onMouseEnter={() =>
                nav.path === '/services' && setShowServiceBar('/services')
              }
              className="z-30 list-none  cursor-pointer group py-4 inline-block text-secondary font-normal"
              key={nav.id}
            >
              <Control {...nav} />
            </li>
          ))}
        </ul>
        {menuState ? (
          <span
            onClick={() => {
              setMenuState(false);
              setShowServiceBar('');
            }}
            className="fixed z-40 right-[20px] flex items-center justify-center cursor-pointer min-[960px]:hidden max-[1200px]:block"
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
