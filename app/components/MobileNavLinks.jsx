import Button from "./Button";
import Link from 'next/link'
import React from 'react'
import { useTheme } from "../context/ThemeContext";

const MobileNavLinks = ({toggleNavbar}) => {
    const { theme } = useTheme();
  return (
    <>
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

    </>
  )
}

export default MobileNavLinks
