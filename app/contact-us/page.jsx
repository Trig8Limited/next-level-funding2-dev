'use client'
import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import IndexPage from "../components/IndexPage";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";


const ContactUs = () => {
  const { theme} = useTheme();

  return (
    <main className={`${theme === 'light' ? "body-bg text-white" : "bg-white text-black"} w-full flex justify-center items-center flex-col pt-[5rem]  h-full`}>
       <IndexPage>
          <title>Contact Next Level Funding - Reach Out for Personalized Financial Solutions
          </title>
          <meta name="keywords" content="Contact Next Level Funding, financial solutions, discuss finance, business financial future, personalized funding, contact us"/>

          <meta
            name="description"
            content="Contact Next Level Funding for personalized financial assistance. Our expert team is ready to guide you towards your financial goals. Reach out today.
            "
          />
          <meta property="og:title" content="NextLevelFunding" />
          {/* Add other meta tags as needed for og:description, og:image, etc. */}
          <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        
      </IndexPage>
      <div className="grid items-center justify-center py-[5rem]">
        <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
          we would love to hear from you
        </p>
        <p className="space-grotesk px-4 font-bold text-[2rem] lg:text-[3rem] text-center">
          Online Assistant Portal
        </p>
        <p className=" w-full lexend text-center px-8 lgpx-0 :m-auto font-extralight">
          Passionate about solving problems through creative communications.
          Offering straight forward solutions
        </p>
      </div>
      
      <div className={`${theme === 'light' ? "home-bg text-white" : "bg-white text-black"}  w-full flex justify-center items-center flex-col`}>
      <div className="py-[6rem] lg:py-[10rem] 2xl:py-[10rem] flex justify-center flex-col w-full lg:w-[70%]">
       
       <div className="w-full flex justify-between flex-col lg:flex-row ">
             <div className="px-6 lg:pr-4">
               <a href="" className="flex items-center">
                 <Image
                 width={40}
                 height={40}
                   src="/assets/call.svg"
                   className="2xl:w-[3.5rem] w-8 h-auto border-none border bg-slate-700 rounded-full p-2"
                   alt=""
                 />
                 <span className="lexend  lg:text-[1.2rem] text-[.8rem] ml-3">
                   +35385857806345
                 </span>
               </a>
               <div className=" ">
                 <a href="mailto:Nextlevelfundingfx@gmail.com" className="flex items-center">
                   <Image
                   width={40}
                   height={40}
                     src="/assets/mail.svg"
                     className="2xl:w-14 w-8 h-auto border-none border bg-slate-700 rounded-full p-2"
                     alt=""
                   />
                   <span className="lexend leading-[5] lg:leading-[7] lg:text-[1rem] text-[.8rem] ml-3">
                     Nextlevelfundingfx@gmail.com
                   </span>
                 </a>
               </div>
             </div>
             <div className="w-full px-[2rem] lg:px-[5rem]">
               <ContactForm />
             </div>
 
     </div>          
   </div>

</div>

    <div className="xl:px-[9rem] pt-8 lg:pt-0 2xl:px-[12rem] px-[2rem]">
      <Footer />
    </div>
    </main>
  );
};

export default ContactUs;


