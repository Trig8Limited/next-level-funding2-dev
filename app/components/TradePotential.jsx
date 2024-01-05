import React from "react";
import GlassMorph from "./GlassMorph";
import { useTheme } from "../context/ThemeContext";


const TradePotential = () => {
  const { theme } = useTheme();

  return (
    <div className="px-[2rem]">
      <section className="lg:pt-[10rem] pb-[6rem] grid flex-col justify-center items-center  py-[2rem]">
        <p className="lexend uppercase text-slate-400 text-center text-sm">
          Unlock your trading potential with our leading propritary trading firm
        </p>
        <p className={` ${theme === 'light' ? "text-white" : "text-black"} font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3`}>
          Your success is <span className="text-blue-500">Our success</span>
        </p>
        <div className="grid md:grid-cols-3 my-10 gap-4 md:px-0 w-full">
          <GlassMorph
            prefix="$"
            start={100}
            end={420}
            suffix="k"
            desc="Total Payout"
            theme={theme}
          />
          <GlassMorph theme={theme} start={0} end={5} suffix="hrs" desc="Avg. Payout Time" />
          <GlassMorph theme={theme} start={0} end={1} suffix="K+" desc="Traders Funded" />
        </div>
      </section>
    </div>
  );
};

export default TradePotential;
