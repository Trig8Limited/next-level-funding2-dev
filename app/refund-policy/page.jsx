'use client'
import React from "react";
import { Container } from "@mui/material";
import Link from "next/link";
import Footer from "../components/Footer";
import IndexPage from "../components/IndexPage";
import { useTheme } from "../context/ThemeContext";

const RefundPolicy = () => {
  const { theme } = useTheme();

  return (
    <div>
        <IndexPage>
          <title>Refund Policy -- NextLevelFunding</title>
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
            Refund Policy
          </p>
        </div>
        <div className={`${theme === 'light' ? "home-bg text-white" : "bg-white text-black"}  text-lg -mt-5 lexend py-10`}>
          <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <ol>
              <li className="my-6">
                1. All traders have the facility of receiving a full refund for
                any order they have purchased as long as they have not placed
                any trades on the respective account(s). Traders can apply for a
                refund by contacting us at{" "}
                <span className="text-orange-700 font-bold">
                  <Link href="www.nextlevelfunding.co.uk">
                    www.nextlevelfunding.co.uk
                  </Link>
                </span>{" "}
                and informing us of the matter. After the request has been
                evaluated for eligibility, they will be notified via email and
                the refund will be sent back to them within 5-10 business days
                through the same medium they had paid for the order.
              </li>
              <li>
                2. Traders are not entitled to any refund if they have already
                used our services i.e: traded on the account(s) received against
                the order as stated in our Terms of Services.
              </li>
              <li className="my-6">
                3. In case of a legal dispute, all active accounts that are at
                and/or above the initial balance will be refunded back to the
                trader apart from the disputed account and the trader will no
                longer be able to avail the services in the future.
              </li>
              <li>
                4. If a customer is found to be underage (under 18) then their
                order will be refunded immediately.
                <li>
                  5. Customers residing in regions that Nextlevelfunding does
                  not offer its services to, will be refunded.
                </li>
                <li className="my-6">
                  6. Nextlevelfunding does not offer its services to anyone
                  possessing a criminal record or anyone involved in any sort of
                  adverse media presence. The orders of all such individuals
                  will be refunded. This is to lower the company’s risk exposure
                  and to protect us from any adversity.
                </li>
                <li>
                  7. Nextlevelfunding holds a neutral stance regarding any
                  political activity and therefore will not allow individuals
                  with any sort of recorded political activity to avail its
                  services.
                </li>
                <li className="my-6">
                  8. Customers that have purchased orders with a stolen credit
                  card will be refunded upon discovery of the act.
                </li>
                <li>
                  9. Any customer that cannot present acceptable KYC and
                  contractor agreement at the time of verification and/or
                  request of an agent will be refunded.
                </li>
              </li>
            </ol>
          </div>
          <div className="xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RefundPolicy;
