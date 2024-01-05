import React from "react";
import Image from "next/image"; 
import { useTheme } from "../context/ThemeContext";

const GlassMorphCard = (props) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? "text-white bg-white border border-slate-700" : "text-black bg-white border border-white"} min-h-[330px]  lg:w-full 2xl:w-full  mb-10 backdrop backdrop-blur-lg bg-opacity-5 shadow-lg rounded-xl py-4  px-5`}>
      {props.img && (
        <Image src={props.img} alt="Illustration Time" width={128} height={128} className="w-32 h-auto" />
      )}
      <div className={`lexend font-bold py-4  ${props.className}`}>
        {props.title}
      </div>
      <div>{props.stars}</div>
      <div className="lexend text-sm font-thin">{props.text}</div>
      <div className="lexend text-sm font-bold pt-6">{props.name}</div>
    </div>
  );
};

export default GlassMorphCard;
