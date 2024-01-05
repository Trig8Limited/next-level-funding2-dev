'use client'
import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import AccordionComponent from "../components/AccordionComponent";
import IndexPage from "../components/IndexPage";
import { useTheme } from "../context/ThemeContext";

const TradingRules = () => {
  const { theme } = useTheme();
  return (
    <main className={`${theme === 'light' ? "body-bg text-white" : "bg-white text-black"} w-full  pt-[5rem] h-full`}>
        <IndexPage>
          <title>Next Level Funding - Transparent Trading Rules for Financial Confidence</title>
          <meta name="keywords" content="Next Level Funding, trading rules, financial transparency, integrity, fair trading, financial transactions"/>
          <meta
            name="description"
            content="Navigate financial markets confidently with Next Level Funding. Explore our transparent trading rules, ensuring fairness and trust in your financial transactions."
          />
          <meta property="og:title" content="NextLevelFunding" />
           <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        </IndexPage>
        <div className=" grid items-center justify-center py-[5rem]">
            <p className=" lexend uppercase text-slate-400 text-xs lg:text-sm px-3 mt-[6rem] text-center">
              next level funding
            </p>
            <p className="space-grotesk font-bold text-[2rem] lg:text-[3rem] text-center">
              Trading Rules
            </p>
            <p className="space-grotesk overflow-hidden px-[1.6rem] md:px-[10rem] lg:px-[15rem] xl:px-[20rem] font-normal text-center">
            We are traders who created Next Level Funding for other traders, with an evaluation process, a trading condition, objectives and trading rules that are all aimed to give our traders the best experience. Your success is also ours. It’s not complicated, just trade with discipline and consistency.
            </p>
      </div>
      <div className={`${theme === 'light' ? "home-bg text-white" : "bg-white text-black"}  w-full flex items-center justify-center flex-col`}>
        <div className="flex items-center justify-center flex-col xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
          <section className=" flex items-center flex-col ">
            
              <p className="lg:w-[80%] pt-10 text-[1.5rem] lg:text-4xl lexend font-medium text-left">
                Evaluation Phase
              </p>
            
            <div>
              <AccordionComponent
                header="1. Trading Restrictions"
                text="We allow you to trade any news event you like, which is not a problem, you can open and close trades during the news if you like and also hold it over the weekend."
              />
              <AccordionComponent
                header="2. Risks"
                text="You are allowed to risk whatever percentage of your account you like in the evaluation stage once you stay within the daily drawdown rules."
              />{" "}
              <AccordionComponent
                header="3. Stop Loss and Take Profits"
                text="You are not required to use a stop loss or take profit on the evaluation account. If you don’t want to use a stop loss that’s fine however we do always recommend using one so you don’t find yourself having to close a loosing trade at a big loss on your challenge account if your trade idea doesn’t work out."
              />
            </div>
          </section>
          <section className="flex items-center flex-col pt-10">
            
          <p className="lg:w-[80%] pt-10 text-[1.5rem] lg:text-4xl lexend font-medium text-left">
                Live Funded Account Rules
          </p>
          
            <div>
              <AccordionComponent
                header="1. Required stop loss"
                text="On the live account once you are funded and trading our capital you are required to use a stop loss for every trade you take. Remember you are now trading our live funds so we need to make sure the risk is controlled in the case of news events so you do not loose more than you anticipated on each trade. Repeated Failure to place a stop loss shortly after the trade is opened will result in a violation of your live account so be sure to use a stop loss. No take profit is required you can manually close your position at any time without having to set a take profit."
              />
              <AccordionComponent
                header="2. Holding trades over the weekend and news trading"
                text="You are allowed to hold trades over the weekend however you are not allowed to open trades less than 10 minutes before news as stop losses can be slipped due to high volatility causing you to loose more than you might have expected."
              />{" "}
              <AccordionComponent
                header="3. Consistency Rule"
                text={`We require our traders have a minimum of 5 tradings days on all live accounts while risking +\- 0.5% risk for all trades.

              For example if you are taking a trade at 0.5% then your next trade is at 2% this is not consistent. Your trades need to be similar risk by +\-0.5%. So if you open a trade at 0.5% risk it is ok on your next trade to risk 1%. Another example , if you open a trade at 1% risk it is then ok to take your next trade at 0.5% or 1.5%. The reason for this rule is it stops people gambling. Most traders can take one trade and get lucky this is not what we are looking for , we are looking for profitable traders that can properly manage risk.
              
              Also as part of our consistency rule one trade cannot be over 50% of your total profit. For example if you have a 100k account and you take 5 trades:
            
              Trade 1 = 200$ profit
              Trade 2 = 400$ profit
              Trade 3 = 275$ profit
              Trade 4 = 600$ profit
              Trade 5 = 5000$ profit
              
              This also is not consistent and inconsistent trades will be deducted from your total payout. You can take as long as you want to reach these 5 minimum trading days also. We find these rules fair as we allow you to use the HFT algo to pass our challenge and in return we Expect that you follow a set of rules to prove you are not just gambling your way through your account.`}
              />
              <AccordionComponent
                header="4. Trading restrictions"
                text={`You are not allowed to use Expert advisors of any kind on your live account. Any Trading activities such as gap trading, high frequency trading, grid trading or grid software , opening positions at a higher / lower price than your entry when it’s in drawdown (2 or more ), martingale trading, latency arbitrage, long short arbitrage, reverse arbitrage, opposite account trading , abusing volatility of news by placing limits guaranteed to be filled are not permitted and will result in termination of your live account. You are not permitted to allow account management of a third party persons or company to manage your account for you , you need to be the person who trades your live account.`}
              />
            </div>
          </section>
          <section className="flex items-center justify-center mt-[4rem]">
            <div className="disclaimer">
              <div className="flex justify-center">
                <Image
                width={30}
                height={30}
                  src="/assets/alert-circle.svg"
                  className="w-5 h-auto"
                  alt=""
                />
                <span className="font-medium text-lg lexend">
                  Important Notice
                </span>
              </div>
              <div>
                <p className="text-center lexend font-extralight mt-7">
                  Trading signals are not permitted such as copying other
                  people’s trades. Your trades need to be taken individually
                  yourself, if we see multiple accounts taking the same trades
                  with same SL and TP the accounts will be terminated.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="xl:px-[9rem] pt-[5rem] 2xl:px-[12rem] px-[2rem]">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default TradingRules;
