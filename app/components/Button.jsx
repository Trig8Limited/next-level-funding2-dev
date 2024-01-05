import React from "react";

const buttonImage = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);

const Button = (props) => {
  return (
    <div>
        <button
          className={`border xl:px-6 rounded-full py-2 px-4 uppercase flex items-center gap-2 justify-center   ${props.className}`}
          onClick={props.onClick}
        >
          {props.showArrow && buttonImage}
          {props.text}
        </button>
    </div>
  ); 
};

export default Button;
