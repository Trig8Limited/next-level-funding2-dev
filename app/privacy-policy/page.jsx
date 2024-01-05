'use client'
import { Container } from "@mui/material";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import IndexPage from "../components/IndexPage";
import { useTheme } from "../context/ThemeContext";

const PrivacyPolicy = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
        <IndexPage>
          <title>Privacy Policy -- NextLevelFunding</title>
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
      <main className={`${theme === 'light' ? "body-bg text-white" : "bg-white text-black"} w-full  pt-[5rem] 2xl:h-[40vh] h-full`}>
        <div className="grid items-center justify-center py-[5rem]">
          <p className="space-grotesk font-bold text-[3rem] text-center">
            Privacy Policy
          </p>
        </div>
        <div className={`${theme === 'light' ? "home-bg text-white" : "bg-white text-black"} text-lg -mt-10`}>
          <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <div className="py-9">
              <p className="lexend bont-bold">
                This Privacy Policy describes how your personal information is
                collected, used, and shared when you visit or make a purchase
                from {""}
                <span className="text-orange-700 font-bold">
                  <Link href="www.nextlevelfunding.co.uk">
                    www.nextlevelfunding.co.uk
                  </Link>
                </span>{" "}
                (the “Site” and the “Company”)
              </p>
            </div>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">PERSONAL INFORMATION WE COLLECT</h3>
              <p>
                When you visit the site, we automatically collect certain
                information about your device, including information about your
                web browser, IP address, time zone, and some of the cookies that
                are installed on your device. Additionally, as you browse the
                site, we collect information about the individual web pages or
                products that you view, what websites or search terms referred
                you to the site, and information about how you interact with the
                site. We refer to this automatically collected information as
                “Device Information.”
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                We collect Device Information using the following technologies:
              </h3>
              <p>
                – “Cookies” are data files that are placed on your device or
                computer and often include an anonymous unique identifier. For
                more information about cookies, and how to disable cookies,
                visit http://www.allaboutcookies.org. – “Log files” track
                actions occurring on the Site, and collect data including your
                IP address, browser type, Internet service provider,
                referring/exit pages, and date/time stamps. – “Web beacons,”
                “tags,” and “pixels” are electronic files used to record
                information about how you browse the Site. Additionally, when
                you make a purchase or attempt to make a purchase through the
                site, we collect certain information from you, including your
                name, billing address, shipping address, payment information
                (including credit card numbers), email address, and phone
                number. We refer to this information as “Order Information.” All
                payment related information is collected and processed by third
                party providers (PayPal, Stripe, World Remit, etc.) and we do
                not maintain a copy of that information within our systems. When
                we talk about “Personal Information” in this Privacy Policy, we
                are talking both about Device Information and Order Information.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">
                HOW DO WE USE YOUR PERSONAL INFORMATION?
              </h3>
              <p>
                We use the Order Information that we collect generally to fulfil
                any orders placed through the Site (including processing your
                payment information and providing you with invoices and/or order
                confirmations). We use the Device Information that we collect to
                help us screen for potential risk and fraud (in particular, your
                IP address), and more generally to improve and optimise our site
                (for example, by generating analytics about how our customers
                browse and interact with the site, and to assess the success of
                our promotional campaigns).
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">SHARING YOUR PERSONAL INFORMATION</h3>
              <p>
                We only share your Personal Information with third parties to
                help us deliver our service to you. We also use Google Analytics
                to help us understand how our customers use the Site–you can
                read more about how Google uses your Personal Information here:
                <br />
                <span className="text-orange-700 font-bold text-xs">
                  <Link href="https://www.google.com/intl/en/policies/privacy/">
                    https://www.google.com/intl/en/policies/privacy/
                  </Link>
                </span>{" "}
                . You can also opt-out of Google Analytics here:
                <span className="text-orange-700 font-bold text-xs">
                  <Link href=" https://tools.google.com/dlpage/gaoptout">
                    https://tools.google.com/dlpage/gaoptout.
                  </Link>
                </span>{" "}
                Finally, we may also share your Personal Information to comply
                with applicable laws and regulations, to respond to a subpoena,
                search warrant or other lawful request for information we
                receive, or to otherwise protect our rights.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">DO NOT TRACK</h3>
              <p>
                Please note that we do not alter our site’s data collection and
                use practices when we see a Do Not Track signal from your
                browser.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">YOUR RIGHTS</h3>
              <p>
                If you are a European resident, you have the right to access
                personal information we hold about you and to ask that your
                personal information be corrected, updated, or deleted. If you
                would like to exercise this right, please contact us through the
                contact information below. Additionally, if you are a European
                resident, we note that we are processing your information to
                fulfil contracts we might have with you (for example if you make
                an order through the site), or otherwise to pursue our
                legitimate business interests listed above. Additionally, please
                note that your information will be transferred outside of
                Europe, including to Canada and the United States.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">DATA RETENTION</h3>
              <p>
                When you place an order through the site, we will maintain your
                Order Information for our records unless and until you ask us to
                delete this information.
              </p>
            </section>
            <section className="font-extralight lexend py-5">
              <h3 className="font-bold">CHANGES</h3>
              <p>
                We may update this privacy policy from time to time to reflect,
                for example, changes to our practices or for other operational,
                legal, or regulatory reasons.
              </p>
            </section>
          </div>
          <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
