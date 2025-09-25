import React, { useState } from "react";
import { MenuItem } from "../MenuItem";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 relative"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-variable-collection-primary-typo transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-variable-collection-primary-typo transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-variable-collection-primary-typo transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-variable-collection-background-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 pt-20 space-y-6">
          <MenuItem
            active={false}
            className="!relative !left-0 !top-0"
            text="Služby"
          />
          <MenuItem
            active={false}
            className="!relative !left-0 !top-0"
            text="Řešení na míru"
          />
          <MenuItem
            active={false}
            className="!relative !left-0 !top-0"
            divClassName="!text-tokensaccentcolor"
            text="Jak to funguje"
          />
          <MenuItem
            active={false}
            className="!relative !left-0 !top-0"
            text="Reference"
          />
          <MenuItem
            active={false}
            className="!relative !left-0 !top-0"
            text="Blog"
          />
          <MenuItem
            active={false}
            className="!relative !left-0 !top-0"
            text="Kontakt"
          />
          <MenuItem
            active={false}
            className="!relative !left-0 !top-0 border-t border-variable-collection-stroke pt-6"
            text="Přihlášení"
          />
        </div>
      </div>
    </>
  );
};
