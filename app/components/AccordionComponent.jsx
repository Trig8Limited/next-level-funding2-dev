'use client'
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "../context/ThemeContext";

const AccordionComponent = (props) => {
  const { theme, toggleTheme } = useTheme();

  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
  <div className={`w-full flex justify-center items-center flex-col ${expanded === true ? "pt-6" : "pt-0" }`}  >
      <Accordion
        sx={{
          marginTop: 3,
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: "transparent",
        }}
        className={`${theme === 'light' ? "bg-white border-slate-600 text-white" : "bg-white border-none text-black"} w-full md:w-[80%] border  rounded-xl  bg-opacity-5`}
        onClick={toggleAccordion}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveIcon sx={{ color: `${theme === 'light' ? "white" : "black"} ` }} />
            ) : (
              <AddIcon sx={{ color: `${theme === 'light' ? "white" : "black"} ` }} />
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: `${theme === 'light' ? "white" : "black"} `, fontSize: '18px' }} className="lexend">
            {props.header}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
  <Typography sx={{ color: `${theme === 'light' ? "white" : "black"} ` }} className="lexend text-sm font-extralight">
    {props.text}
 </Typography>
  <Typography sx={{ color: `${theme === 'light' ? "white" : "black"} ` }} className="lexend text-sm font-extralight">
    {props.subtext1}
 </Typography>
  <Typography sx={{ color: `${theme === 'light' ? "white" : "black"} ` }} className="lexend text-sm font-extralight">
    {props.subtext2}
 </Typography>
  <Typography sx={{ color: `${theme === 'light' ? "white" : "black"} ` }} className="lexend text-sm font-extralight">
    {props.subtext3}
 </Typography>
</AccordionDetails>

      </Accordion>
    </div>
  );
};
export default AccordionComponent;
