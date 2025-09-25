/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const MenuItem = ({
  showChevron = false,
  showChervron = false,
  active,
  className,
  text = "Product",
  divClassName,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-[7px] relative ${className}`}
    >
      <div
        className={`relative w-fit mt-[-1.00px] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-variable-collection-secondary-typo text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)] cursor-pointer hover:text-tokensaccentcolor transition-colors ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
