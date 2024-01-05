import React from "react";
import Button from "./Button";
import Image from "next/image"; 
import { useTheme } from "../context/ThemeContext";

const CarouselCard = (props) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "light" ? "text-white border border-slate-800 bg-opacity-5" : "text-black border border-white bg-opacity-5"} backdrop backdrop-blur-lg shadow-lg rounded-xl py-24 2xl:px-5 px-6 w-full h-full`}>
      {props.img && (
        // Replace <img> with <Image>
        <Image src={props.img} alt={props.title} width={400} height={300} className="w-10 h-auto" />
      )}
       <p className={`lexend font-bold pt-4 pb-7 text-2xl`}>{props.title}</p>
      <p className="lexend text-xlfont-thin">{props.text}</p>
      <div className="absolute 2xl:-right-20 pt-10 pb-5">
        <Button
          className={`${theme === 'light' ? "text-white" : "text-white"} bg-[#3658C1] border-none px-3 text-[12px] lexend`}
          text="get funded"
          showArrow={false}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
