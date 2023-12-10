'use client'
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ExitIntentPop from "./components/ExitIntentPop";
import GetInTouch from "./components/GetInTouch";
import PriceComponent from "./components/PriceComponent";
import FaqComponent from "./components/FaqComponent";
// import ExitIntentPop from "./components/ExitIntentPop";
import FundingBenefits from "./components/FundingBenefits";
import TradePotential from "./components/TradePotential";
import Coverflow from "./components/Coverflow";
import MobileGetInTouch from "./components/MobileGetInTouch";
import { useTheme } from '../context/ThemeContext';
import IndexPage from "./components/IndexPage";
import Script from 'next/script';
import Head from 'next/head';
import ZohoChat from "./components/ZohoChat";
import FacebookPixel from "@/utils/FacebookPixel";
import Cart from "./components/Cart";

export default function Home() {
  
const handleAddToCart = (e)=>{
  console.log(e)
  
}
  const { theme } = useTheme();
  return (
    <main className='relative'>
      <IndexPage>
          <title>NextLevelFunding - Get funded up to £1,000,000 with up to a 90% profit split.</title>
          <meta name="keywords" content="business funding, financial solutions, funding for businesses, Next Level Funding, financial growth, tailored funding"/>
          <meta
            name="description"
            content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary Trading Firm."
          />
          <meta property="og:title" content="NextLevelFunding" />
          {/* Add other meta tags as needed for og:description, og:image, etc. */}
          <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        
      </IndexPage>
      <FacebookPixel/>
      <Hero/>
      <div className={`${theme === "light" ? 'home-bg text-white' : 'bg-white text-black'}   xl:px-[9rem] 2xl:px-[12rem] px-[2rem]`}>
      
        <TradePotential />
        <Coverflow />
        <FundingBenefits />
        <PriceComponent handleAddToCart={handleAddToCart} />
        <FaqComponent />
        {/* <ExitIntentPop/> */}
          <ZohoChat/>
        <div className="hidden md:block">
          <GetInTouch />
        </div>
        <div className="block md:hidden">
          <MobileGetInTouch />
        </div>
        <Footer />
      </div>
      
    </main>
  );
}



