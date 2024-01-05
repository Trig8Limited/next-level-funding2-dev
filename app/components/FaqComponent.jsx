import React from "react";
import AccordionComponent from "./AccordionComponent";
import { useTheme } from "../context/ThemeContext";
import { accordionContents } from "../lib/data";



const FaqComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full">
      <section className="pt-[4rem] w-full" id="faq">
        <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
          To explore common issues
        </p>
        <p className={`${theme === 'light' ? "text-white" : "text-black"} font-bold space-grotesk 2xl:text-6xl text-3xl lg:text-[3rem] text-center mt-3 px-3`}>
          Frequently asked questions
        </p>
        <div className="px-0">
          {accordionContents.map((content, index) => (
            <div key={index}>
              <AccordionComponent 
                header={content.title} 
                subtext1={content.subText1} 
                subtext2={content.subText2} 
                subtext3={content.subText3} 
                text={content.text} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqComponent;
