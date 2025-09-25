/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CzechRepublic = ({
  className,
  czechRepublic = "https://c.animaapp.com/bfKTXJTg/img/czech-republic-1.svg",
}) => {
  return (
    <img
      className={`absolute top-0 left-0 w-[26px] h-[26px] ${className}`}
      alt="Czech republic"
      src={czechRepublic}
    />
  );
};
