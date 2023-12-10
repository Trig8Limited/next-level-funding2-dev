'use client'
import { useEffect, useState, useRef, useCallback, useContext  } from "react";
import Link from "next/link";
import Button from "./Button";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useTheme } from '../../context/ThemeContext';
import Image from "next/image";
import Cart from "../components/Cart";
import { CartContext } from "@/context/CartContext";



const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useContext(CartContext);

  const [navbar, setNavbar] = useState(false);
  const [cartToggle, setCartToggle] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false);
  

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  const toggleCart = ()=>{
    setCartToggle((prev)=>!prev)
  }
  const logoClickHandler = !navbar ? null : toggleNavbar;

  const handleNavigation = useCallback(() => {
    if (navbar) {
      setNavbar(false);
    }
  }, [navbar]);

  const handleNavigationRef = useRef(handleNavigation);
  useEffect(() => {
    handleNavigationRef.current = handleNavigation;
  }, [handleNavigation]);

  useEffect(() => {
    window.addEventListener("popstate", handleNavigationRef.current);

    return () => {
      window.removeEventListener("popstate", handleNavigationRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // No dependencies are needed for handleScroll

  return (
    
 <div>
    <nav
        className={`justify-between px-4 mx-auto md:px-[4rem] overflow-hidden xl:px-[6rem] 2xl:px-[12rem]  lg:items-center lg:flex fixed right-0 left-0 z-50 ${
          isScrolled && theme === 'light' ? "bg-black" : ""
        }${
          isScrolled && theme === 'dark' ? "bg-white" : ""
        }`}
      >
      
    
    <div >
      {/* <Cart cartToggle={cartToggle}/> */}
      
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="NextLevelFunding logo"
                loading="eager"
                width={150}
                height={150}
                layout="responsive"
                onClick={logoClickHandler}
              />
            </Link>
              <button 
                  className="absolute z-30 top-[30px]  shadow-lg lg:top-[40px] rounded-[4px] border border-gray-400 outline-none right-[20%] lg:right-8"
                  onClick={() => toggleTheme(theme === 'light' ? 'bg-transparent' : 'bg-[#F5F5F]')}
                  >
                  {theme === 'light' ? (
                    <LightModeIcon style={{ backgroundColor: theme === 'light' && '#000000', 
                    padding: theme === 'light' && '4px',
                    width: theme === 'light' && '30px',height: theme === 'light' && '30px',
                    color: theme === 'light' ? 'white' : 'black' }} />
                  ) : (
                    <NightlightIcon style={{ backgroundColor: theme === 'dark' && '#F5F5F5',
                    width: theme === 'dark' && '30px',height: theme === 'dark' && '30px',
                    padding: theme === 'dark' && '5px', color: theme === 'dark' ? 'black' : 'white' }} />
                  )}
                  </button>
            <div className="lg:hidden">
              <button
                className={`p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border bg-white`}
                onClick={toggleNavbar}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 hidden justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0`}
          >
            <div className={`${theme === 'light' ? "bg-black dark border-slate-500 text-white " : "bg-white  light text-black"} text-center  flex space-x-7 backdrop-filter  backdrop-blur-lg bg-opacity-30 border rounded-full py-2 px-10  bg-blend-overlay lexend`}>
              <Link href="/about-us">About Us</Link>
              <Link href="/trading-rules">Trading Rules</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/contact-us">Help Center</Link>
            </div>
          </div>
          {navbar && (
            <div className="relative lg:hidden">
              <div
                className="h-screen w-full absolute left-0 top-0"
                onClick={toggleNavbar}
              ></div>
              <div className={`${theme === 'light' ? "bg-black text-white" : "bg-white text-black"} navbar-slide-out z-30 flex flex-col justify-center items-center px-10 py-5 gap-6  relative lexend  `}>
                <Link href="/about-us" onClick={toggleNavbar} className="text-[1rem] pb-4">
                  About Us
                </Link>
                <Link href="/trading-rules" onClick={toggleNavbar} className="text-[1rem] pb-4">
                  Trading Rules
                </Link>
                <Link href="/#faq" onClick={toggleNavbar} className="text-[1rem] pb-4">
                  FAQ
                </Link>
                <Link href="/contact-us" onClick={toggleNavbar} className="text-[1rem] pb-4">
                  Help Center
                </Link>
                <Button
                  className="bg-[#295cf7] text-white   border-none lexend hover:bg-blue-800"
                  text="get funded"
                  onClick={toggleNavbar}
                  showArrow={true}
                />
              </div>
            </div>
          )}
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <Button
            className={`${theme === 'light' ? "text-white" : "text-white"} bg-[#295cf7] border-none lexend hover:bg-blue-800`}
            text="get funded"
            showArrow={true}
          />
        </div>
      {/* <button onClick={toggleCart} className=" z-50 flex flex-col justify-center items-center fixed top-[5rem] right-2 md:right-5 w-[40px] h-[40px] rounded-[50%] text-white outline-none  bg-[red]">
        {getTotalItems()}
      </button> */}
      
    </nav>
    </div>
  );
};

export default NavBar;
