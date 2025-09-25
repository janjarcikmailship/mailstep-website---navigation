/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Button = ({
  showArrowRight2 = false,
  showArrow = false,
  type,
  className,
  text = "Login",
}) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex h-[40px] md:h-[50px] items-center justify-center relative bg-variable-collection-primary-button-red rounded-[100px] shadow-shadow-raised gap-[var(--spacing-spacing-0)] hover:opacity-90 transition-opacity ${className}`}
    >
      <div className="inline-flex items-center justify-center gap-[var(--spacing-spacing-4-duplicate)] pr-3 lg:pr-4 xl:pr-[var(--spacing-spacing-24)] pl-3 lg:pl-4 xl:pl-[var(--spacing-spacing-24)] py-0 relative self-stretch flex-[0_0_auto] rounded-[var(--spacing-spacing-12)]">
        <div className="inline-flex items-center justify-center gap-[var(--colours-semantic-spacing-8)] pr-[var(--colours-semantic-spacing-4)] pl-[var(--colours-semantic-spacing-4)] py-0 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-variable-collection-typo-white text-xs lg:text-sm xl:text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
            {text}
          </div>
        </div>
      </div>
    </button>
  );
};
