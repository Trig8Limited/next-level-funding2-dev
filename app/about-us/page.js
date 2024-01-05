'use client'
import Link from "next/link";
import AboutCoverflow from "../components/AboutCoverflow";
import Button from "../components/Button";
import Footer from "../components/Footer";
import TableFlow from "../components/TableFlow";
import TestimonialComponent from "../components/TestimonialComponent";
import IndexPage from "../components/IndexPage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ZohoChat from "../components/ZohoChat";
import { useTheme } from "../context/ThemeContext";


const AboutUs = () => {
  const { theme } = useTheme();
  const router = useRouter()

  return (
    <>
    <IndexPage>
          <title>About Next Level Funding - Your Trusted Financial Partner</title>
          <meta name="keywords" content="Next Level Funding, financial partner, about us, business funding, innovative solutions, trusted financial support"/>

          <meta
            name="description"
            content="Learn about Next Level Funding's commitment to financial excellence. Discover our team's expertise, mission, and dedication to your financial success.
            "
            
          />
          <meta property="og:title" content="NextLevelFunding" />
          {/* Add other meta tags as needed for og:description, og:image, etc. */}
          <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        
      </IndexPage>
    <main className={`${theme === "light" ? 'dark  body-bg text-white' : 'light bg-white text-black font-bold'} w-full  pt-[5rem] h-full`}>
        <div className="grid items-center justify-center py-[2rem] lg:py-[5rem]">
          <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
            who we are
          </p>
          <p className="space-grotesk font-bold text-[3rem] text-center">
            About Us
          </p>
          <p className="lg::w-5/12 w-3/4 lexend text-center md:px-[4rem] lg:px-[8.8rem] xl:px-[17rem] m-auto font-extralight">
            We are a company that seeks profitable traders to trade our funds.
            Prove to us you are profitable by completing our evaluation phase
            and recieving immediate funding of up to $500k
          </p>
        </div>
        <div className={`${theme === "light" ? 'text-white home-bg' : 'text-black font-bold'}  mt-32`}>
          <div className="flex flex-col justify-center items-center  md:px-[1.3rem] xl:px-[9rem] 2xl:px-[12rem]">
            <section className="lg:pt-10 md:px-20 lg:px-0 2xl:px-[10rem]">
              <div className="flex flex-col lg:flex-row  2xl:flex-row justify-center items-center lg:justify-between 2xl:justify-between py-20 gap-7 px-[2rem] 2xl:px-0">
                <div className="">
                <div className="">
                <Image
                  src="/assets/about.png"
                  alt=""
                  width={1000}
                  height={500}
                  layout="intrinsic"
                  className="w-full"
                  // lg:w-[50%] 2xl:w-[40%]
                />
              </div>
                </div>
                <div className="lg:text-left lexend text-center w-fill lg:w-[55%]">
                  <p className="space-grotesk lg:text-[3.5rem] font-bold text-3xl mt-10 lg:mt-0 lg:pb-4">
                    Our Mission
                  </p>
                  <p className="lexend w-full text-[1rem] md:text-[1rem] font-thin text-center  lg:text-left m-auto lg:m-0 ">
                  Our goal at NextLevelFunding is to support traders in realizing their dreams, especially those without sufficient funds to achieve substantial returns on their accounts each month. We&apos;re looking for profitable traders capable of managing our capital, aiming to build enduring relationships with them.
                  </p>
                </div>
              </div>
            </section>

            <section className="lg:px-[1rem]  w-full overflow-hidden px-0 py-[3rem] lg:py-[10rem] 2xl:py-[10rem]">
              <p className="lexend w-full px-5 md-px-0 overflow-hidden uppercase text-slate-400 text-left text-sm">
                what our traders are saying about us
              </p>
              <p className="font-bold space-grotesk px-5 md-px-0 2xl:text-6xl text-3xl text-left ">
                Testimonials
              </p>
              <div className="w-full overflow-hidden flex justify-center items-center flex-col mt-[5rem]">
                <TestimonialComponent />
              </div>
                
              <div className=" flex justify-center items-center">
              <Link href="https://www.trustpilot.com/review/nextlevelfunding.co.uk" className="">
                    <Button
                      className="backdrop-filter text-white  text-[.5rem] lg:text-sm h-9 lg:h-auto bg-[#991275] border-none "
                      text="View More Reviews"
                      showArrow={false}
                    />
              </Link>
              </div>

            </section>
            

            <section className=" hidden md:block pt-8  lg:pt-0  md:my-[7rem]  relative ">
                <Image width={1000} height={600} layout="responsive" src="/assets/rec.svg" className=" " alt="" />
                <div className="absolute pt-10  lg:pt-0 2xl:pt-0  md:top-[5%] lg:top-[10%] z-10 left-0 md:left-[3rem]">
                  <div className="pr-5 pt-10 lexend uppercase  md:text-slate-400 text-sm lg:px-3 ">
                    be a part of the winning team
                  </div>
                  <div className="pr-5 space-grotesk leading-[1.3] mb-[1rem]  font-bold text-[2rem] lg:text-[3rem] ">
                    Join our team of <br /> experienced traders
                  </div>
                  
                    <Button
                      onClick={() => router.push('/#evaluation-package')}

                      className={`mt-[2rem] ${theme === "light" ? "text-white" : "text-white"} backdrop-filter text-[.5rem] lg:text-sm h-9 lg:h-auto bg-[#991275] border-none`}
                      text="get started"
                      showArrow={true}
                    />
                
                </div>
                <div className="absolute  top-6 left-[0] md:top-[-2rem] lg:top-[-2.5rem] md:left-[58%]">
                <Image
                  src="/assets/trader.png"
                  alt=""
                  width={300}
                  height={300}
                  layout="intrinsic"
                  className="bouncing-image md:w-[80%] "
                />
                </div>
              </section>
              {/* mobile */}
              <section className="w-full px-[1.8rem] md:hidden  pt-8  glassmorph">
              <div className=" w-[70%]">
              <Image
                  src="/assets/trader.png"
                  alt=""
                  width={30}
                  height={30} 
                  layout="responsive"
                  className=" w-full  2xl:w-3/4 h-auto"
                />
                </div>
                <div className=" w-full">
                  <div className=" pt-3 lexend uppercase text-slate-400 MobileGetInTouch-h1  text-sm font-bold ">
                    be a part of the winning team
                  </div>
                  <div className=" space-grotesk leading-[1.2] mb-[1rem]  font-bold MobileGetInTouch-h2 text-[2.4rem] ">
                    Join our team of experienced traders
                  </div>
                  <Link href="/#evaluation-package" className="mt-[2rem]">
                    <Button
                      className={`${theme === "light" ? "text-white" : "text-white"} backdrop-filter text-[.5rem] lg:text-sm h-9 lg:h-auto bg-[#991275] border-none`}
                      text="get started"
                      showArrow={true}
                    />
                  </Link>
                </div>
              
              </section>
              
            
          </div>
          <section className="pt-[8rem] lg:pt-0 xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <Footer />
          </section>
        </div>
    </main>
    </>
  );
};


export default AboutUs