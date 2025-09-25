/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import { CzechRepublic } from "../CzechRepublic";
import { IconsArrowDown } from "../IconsArrowDown";
import { MenuItem } from "../MenuItem";
import { HamburgerMenu } from "../HamburgerMenu";

export const Frame = ({
  className,
  logo = "https://c.animaapp.com/bfKTXJTg/img/logo-2.svg",
  czechRepublicCzechRepublic = "https://c.animaapp.com/bfKTXJTg/img/czech-republic.svg",
}) => {
  return (
    <div
      className={`flex w-full max-w-7xl mx-auto items-center justify-between px-4 lg:px-8 py-[9px] relative bg-variable-collection-background-white border-b [border-bottom-style:solid] border-variable-collection-stroke ${className}`}
    >
      <div className="inline-flex items-center gap-4 lg:gap-10 relative flex-[0_0_auto]">
        <img className="relative w-20 md:w-28 h-6 md:h-[33px]" alt="Logo" src={logo} />

        {/* Desktop Navigation */}
        <div className="hidden lg:inline-flex items-center gap-4 xl:gap-[30px] relative flex-[0_0_auto]">
          <MenuItem
            active={false}
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            text="Služby"
          />
          <MenuItem
            active={false}
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            text="Řešení na míru"
          />
          <MenuItem
            active={false}
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            divClassName="!text-tokensaccentcolor"
            text="Jak to funguje"
          />
          <MenuItem
            active={false}
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            text="Reference"
          />
          <MenuItem
            active={false}
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            text="Blog"
          />
          <MenuItem
            active={false}
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            text="Kontakt"
          />
        </div>
      </div>

      {/* Medium Desktop Right Section */}
      <div className="hidden lg:flex w-auto items-center justify-end gap-2 xl:gap-6 relative">
        <MenuItem
          active={false}
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="Přihlášení"
        />
        <Button
          className="!mt-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="Nezávazná poptávka"
          type="primary"
        />
        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
          <div className="relative w-[39px] h-[39px] bg-[#f8f8f8] rounded-[19.5px]">
            <CzechRepublic
              className="!left-[7px] !top-1.5"
              czechRepublic={czechRepublicCzechRepublic}
            />
          </div>

          <IconsArrowDown
            className="!relative !left-[unset] !top-[unset]"
            iconsArrowDown="https://c.animaapp.com/bfKTXJTg/img/icons---16---arrow-down-s-6.svg"
          />
        </div>
      </div>

      {/* Mobile/Tablet Right Section */}
      <div className="flex lg:hidden items-center gap-4">
        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
          <div className="relative w-[32px] h-[32px] bg-[#f8f8f8] rounded-[16px]">
            <CzechRepublic
              className="!left-[3px] !top-[3px] !w-[26px] !h-[26px]"
              czechRepublic={czechRepublicCzechRepublic}
            />
          </div>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
};
