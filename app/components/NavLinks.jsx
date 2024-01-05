import Link from 'next/link'
import React from 'react'
import { useTheme } from '../context/ThemeContext';

const NavLinks = () => {
    const { theme } = useTheme();
  return (
    <>
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

    </>
  )
}

export default NavLinks
