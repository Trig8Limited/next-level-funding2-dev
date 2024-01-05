import Link from "next/link";
import Image from "next/image"; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme} = useTheme();
  return (
    <div className={`${theme === "light" ? 'text-white' : 'text-black font-bold'} lg:px-[3rem] xl:px-0 bg-[transparent]`}>
      <div className="flex justify-center">
        <div className="lg:hidden">
          <Image src="/assets/logo.svg" alt="" width={100} height={100} />
        </div>
      </div>
      <footer className="flex md:flex-row space-y-2 md:space-y-0 py-10 text-base-content">
        <div className="flex items-start">
          <div className="hidden lg:flex items-center justify-center gap-6">
            <Image src="/assets/logo.svg" alt="nextlevelfunding" width={140} height={140} />
          </div>
        </div>
        <div className="flex items-end w-full justify-center lg:justify-end gap-1">
          <nav className={`${theme === "light" ? 'text-white' : 'text-black'} flex lexend text-[10px] lg:text-[15px] `}>
            <Link
              href="/about-us"
              className={`${theme === "light" ? 'border-slate-200' : 'border-slate-800'} link link-hover  border-r  pr-4 lg:px-4`}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={`${theme === "light" ? 'border-slate-200' : 'border-slate-800'} link link-hover  border-r  px-4`}
            >
              Help Centre
            </Link>
            <Link
              href="/contact-us"
              className="link link-hover pl-4 lg:px-4"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      </footer>
      <p className={`${theme === "light" ? 'text-white' : 'text-black'} xl:text-justif opacity-70 lexend text-[10px] lg:text-sm px-4 text-center lg:text-left lg:px-0`}>
        All information provided on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments.
      </p>
      <div className={`${theme === "light" ? 'bg-white' : 'bg-black'} h-[0.5px] opacity-80 mt-8 mb-6 lg:mb-0  lg:mt-8`} />
      <div className="lg:flex lg:justify-between lg:items-center text-center h-[50px]">
        <div>
          <nav className="flex items-center justify-center lexend text-[10px] lg:text-[12px] ">
            <Link
              href="/terms-of-service"
              className={`${theme === 'light' ? "border-slate-200" : "border-slate-900"} link link-hover  border-r  pr-4 `}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className={`${theme === 'light' ? "border-slate-200" : "border-slate-900"} link link-hover  border-r px-4`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className={`${theme === 'light' ? "border-slate-200" : "border-slate-900"} link link-hover border-r  px-4`}
            >
              Cookie Policy
            </Link>
            <Link href="/refund-policy" className="link link-hover pl-4 lg:px-4">
              Refund Policy
            </Link>
          </nav>
        </div>
        <p className={`${theme === 'light' ? "text-white" : "text-black"} mt-2 lg:mt- text-center lexend text-[10px] lg:text-[12px]`}>
          2023 © - Next Level Funding - Powered by OTB Solutions
        </p>
      </div>

      <div className="flex gap-5 pt-[3rem] pb-6 justify-center lg:hidden">
        <a href="https://www.instagram.com/nextlevelfundingfx/" target="_blank" rel="noopener noreferrer" className="bg-[#344153] rounded-[50%] p-3">
          <InstagramIcon className='text-2 text-white'/> 
        </a>
        <a href="mailto:Nextlevelfundingfx@gmail.com" className="bg-[#344153] rounded-[50%] p-3">
          <MailOutlineIcon className='text-2 text-white'/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
