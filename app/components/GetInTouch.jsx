import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from "../context/ThemeContext";


const GetInTouch = () => {
  const { theme } = useTheme();

  return (
    <div>
      <section className="pt-[10rem] pb-[5rem] ">
        <div className="relative top-0">
          {/* Provide the width and height for the Image component */}
          <Image src="/assets/rec.svg" alt="" width={1920} height={1080} />
          <div className="absolute md:top-[2%] lg:top-[10%] z-10 left-[4%]">
            <p className="lexend uppercase text-slate-400 text-sm px-3">
              we would love to hear from you
            </p>
            <p className={` ${theme === 'light' ? "text-white" : "text-black"} space-grotesk font-bold md:text-[1.5rem] lg:text-[1.9rem] xl:text-[2.2rem]`}>
              Get in touch with us
            </p>
            <div className="flex gap-5 md:mt-2 lg:mt-6 xl:mt-3">
              <Link href="https://www.instagram.com/nextlevelfundingfx/" className="bg-[#344153] rounded-[50%] p-4">
                <InstagramIcon className=' text-white'/>
              </Link>
              <Link href="mailto:Nextlevelfundingfx@gmail.com" className="bg-[#344153] rounded-[50%] p-4">
               <MailOutlineIcon className=' text-white'/>
              </Link>
            </div>
            <p className={`${theme === 'light' ? "text-white" : "text-black font-bold"} md:w-1/2 md:mt-2 lg:mt-5 lexend font-thin`}>
            Do you have a question that wasn&apos;t addressed in our FAQs page? Feel free to reach out, and we&apos;ll be delighted to provide you with answers.</p>
            <div className="mt-[1rem]">
              <Button
                className={`${theme === 'light' ? "text-white border-slate-500" : "text-black border-slate-950 font-bold"} backdrop-filter bg-[transparent] xl:hover:bg-blue-300 backdrop-blur-lg bg-opacity-30 border w-1/5`}
                text="learn more"
              />
            </div>
          </div>
          <div className="absolute bottom-[20%] left-[50%]">
            <Image
              src="/assets/woman-sitting.svg"
              width={480}
              height={480}
              className="w-3/4 h-auto"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;