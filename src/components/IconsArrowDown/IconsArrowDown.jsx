/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IconsArrowDown = ({
  className,
  iconsArrowDown = "https://c.animaapp.com/bfKTXJTg/img/icons---16---arrow-down-s-3.svg",
}) => {
  return (
    <img
      className={`absolute top-0 left-0 w-4 h-4 ${className}`}
      alt="Icons arrow down"
      src={iconsArrowDown}
    />
  );
};
