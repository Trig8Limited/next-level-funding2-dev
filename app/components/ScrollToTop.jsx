'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import { useTheme } from "../context/ThemeContext";


const ScrollToTop = () => {
  const { theme} = useTheme();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="launch">
        <span className="iconPosition">
          {showTopBtn && (
            <ArrowCircleUpTwoToneIcon
              sx={{ color: `${theme === "light" ? 'white' : 'black'}`, fontSize: 30 }}
              onClick={goToTop}
            />
          )}
        </span>
      </div>
    </>
  );
};
export default ScrollToTop;
