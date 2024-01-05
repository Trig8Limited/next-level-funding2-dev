'use client'
import React, { useContext } from "react";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";


const PriceCard = ({pricelist,list}) => {
  const { theme} = useTheme();
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(pricelist || list );
  };
  return (
    <div
      className={`${theme === 'light' ? "text-white border-slate-500" : "text-black border-white"} price-card-morph text-center overflow-hidden w-full lg:h-[580px] xl:h-[600px] py-4 px-3 lg:px-[0.6rem] xl:px-2  xl:py-4  ${
        pricelist?.highlight || list?.highlight === true ? "bg-blue-500 text-white" : "bg-white bg-opacity-5"  
      }`}
    >
    <div className="flex items-center justify-center col">
    <p
        className={`space-grotesk text-xl font-bold uppercase ${
          list?.pack === "INSTANT FUNDING"
            ? "bg-white  text-center  text-blue-500 py-2 px-4 rounded-[50px]"
            : ""
        }`}
      >
        {pricelist?.pack || list?.pack}
      </p>
    </div>
    <p className={`space-grotext text-center text-2xl font-bold uppercase ${pricelist?.pack === "INSTANT FUNDING" ? 'hidden' : ''}`}>
  {pricelist?.pack === "INSTANT FUNDING" || list?.pack === "INSTANT FUNDING"
    ? null
    : (pricelist?.valPrep === "A $10,000 Live Account" || pricelist?.valPrep === "A $25,000 Live Account")
      ? "Live Account"
      : "Evaluation"
  }
</p>


      <p className="text-5xl font-bold space-grotesk mt-5">{pricelist?.value || list?.value}</p>
      <p className="lexend mt-2 font-bold">{pricelist?.valPrep || list?.valPrep}</p>
      <div className="grid text-start justify-center">
        <div className="">
          <span className="tooltip tooltip-up" data-tip={pricelist?.listOne || list?.listOne}>
            <p className={`${pricelist?.highlight === false && theme === 'dark' ? 'bullet-point-black' : 'bullet-point'}  uppercase mt-2 text-sm cursor-pointer`}>
              {pricelist?.listOne || list?.listOne}
            </p>
          </span>
        </div>
        <div>
          <span className="tooltip  tooltip-up" data-tip={pricelist?.listTwo || list?.listTwo}>
            <p className={`${pricelist?.highlight === false && theme === 'dark' ? 'bullet-point-black' : 'bullet-point'}   uppercase mt-2 text-sm`}>
              {pricelist?.listTwo || list?.listTwo}
            </p>
          </span>
        </div>
        <div>
          <span
            className="tooltip tooltip-up  justify-center"
            data-tip={pricelist?.listThree || list?.listThree}
          >
            <p className={`${pricelist?.highlight === false && theme === 'dark' ? 'bullet-point-black' : 'bullet-point'}  uppercase mt-2 text-sm`}>
            {pricelist?.listThree || list?.listThree}
            </p>
          </span>
        </div>
        <div>
          <span
            className="tooltip tooltip-up  justify-center"
            data-tip={pricelist?.listFour || list?.listFour}
          >
            <p className={`${pricelist?.highlight === false && theme === 'dark' ? 'bullet-point-black' : 'bullet-point'} uppercase mt-2 text-sm`}>
            {pricelist?.listFour || list?.listFour}
            </p>
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-10 xl:mt-7">
        {/* <Button
          className="backdrop-filter text-white bg-[#991275] border-none mt-3"
          text="pay now"
        onClick={handleAddToCart}
        /> */}
        <Button
          className="backdrop-filter text-white bg-[#991275] border-none mt-3"
          text="pay now"
          onClick={() => router.push(pricelist?.link || list?.link)}
        />
      </div>
      <p className={`${theme === 'light' ? "text-white" : "text-black"}  
      ${pricelist?.highlight || list?.highlight === true && theme === 'dark' ? " text-white" : " text-black"} 
      w-[84%] text-center m-auto mt-5`}>
        Please check{" "}
        <span
          className={`text-yellow-400 underline ${pricelist?.spanClassName || list?.spanClassName} ${
            pricelist?.value || list?.value  === "€600" || pricelist?.value || list?.value  === "€575" ? "text-white" : ""
          }`}
        >
          <Link href="/trading-rules">Trading Rules</Link>
        </span>{" "}
        page for more info 
      </p>
    </div>
  );
};

export default PriceCard;
