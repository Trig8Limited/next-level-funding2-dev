'use client'
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const GlassMorph = (props) => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    if (counterOn) {
      setCounterOn(true)
    }
  }, [counterOn]);

  const handleScrollTrigger = () => {
    if (!counterOn) {
      setCounterOn(true);
    }
  };

  return (
    <ScrollTrigger
      onEnter={handleScrollTrigger}
    >
      <div className={`${props.theme === 'light' ? "bg-white text-white border border-slate-800" : "bg-black text-black border border-white"} glassmorph w-full bg-white`}>
        <p className="space-grotesk text-4xl text-center font-semibold">
          <span>{props.prefix}</span>
          {counterOn && (
            <CountUp
              start={props.start}
              end={props.end}
              duration={1}
              delay={0}
            />
          )}
          <span>{props.suffix}</span>
        </p>
        <p className="lexend text-sm text-center font-semibold mt-[2rem]">{props.desc}</p>
      </div>
    </ScrollTrigger>
  );
};

export default GlassMorph;
