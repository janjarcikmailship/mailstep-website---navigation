/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tokensaccentcolor: "var(--tokensaccentcolor)",
        "variable-collection-background-dark":
          "var(--variable-collection-background-dark)",
        "variable-collection-background-light-gray":
          "var(--variable-collection-background-light-gray)",
        "variable-collection-background-white":
          "var(--variable-collection-background-white)",
        "variable-collection-coolfillment-highlight-typo":
          "var(--variable-collection-coolfillment-highlight-typo)",
        "variable-collection-highlighted-typo":
          "var(--variable-collection-highlighted-typo)",
        "variable-collection-logos-color":
          "var(--variable-collection-logos-color)",
        "variable-collection-primary-button-red":
          "var(--variable-collection-primary-button-red)",
        "variable-collection-primary-typo":
          "var(--variable-collection-primary-typo)",
        "variable-collection-secondary-red":
          "var(--variable-collection-secondary-red)",
        "variable-collection-secondary-typo":
          "var(--variable-collection-secondary-typo)",
        "variable-collection-stroke": "var(--variable-collection-stroke)",
        "variable-collection-typo-on-dark-background":
          "var(--variable-collection-typo-on-dark-background)",
        "variable-collection-typo-white":
          "var(--variable-collection-typo-white)",
      },
      fontFamily: {
        "desktop-b1-16px": "var(--desktop-b1-16px-font-family)",
        "desktop-b2-14px": "var(--desktop-b2-14px-font-family)",
        "desktop-h1-56px": "var(--desktop-h1-56px-font-family)",
        "desktop-h2-44px": "var(--desktop-h2-44px-font-family)",
        "desktop-h3-36px": "var(--desktop-h3-36px-font-family)",
        "desktop-h4-20px": "var(--desktop-h4-20px-font-family)",
        "desktop-l1-18px": "var(--desktop-l1-18px-font-family)",
        "desktop-l2-16px": "var(--desktop-l2-16px-font-family)",
        "desktop-p1-22px": "var(--desktop-p1-22px-font-family)",
        "desktop-p2-18px": "var(--desktop-p2-18px-font-family)",
        "desktop-p3-14px": "var(--desktop-p3-14px-font-family)",
        "desktop-p4-14px-SB": "var(--desktop-p4-14px-SB-font-family)",
        "desktop-p5-12-px": "var(--desktop-p5-12-px-font-family)",
      },
      boxShadow: {
        card: "var(--card)",
        "shaddow-button": "var(--shaddow-button)",
        "shadow-raised": "var(--shadow-raised)",
      },
    },
  },
  plugins: [],
};
