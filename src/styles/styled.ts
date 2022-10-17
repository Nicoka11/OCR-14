import { createStitches, createTheme } from "@stitches/react";
import {
  blue,
  blueDark,
  slate,
  slateDark,
  red,
  redDark,
} from "@radix-ui/colors";

const space = {
  0: "0px",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
  full: "100%",
  container: "1284px",
};

const radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.5rem",
  "6xl": "3rem",
  "7xl": "3.5rem",
  "8xl": "4rem",
  "9xl": "4.5rem",
  full: "9999px",
};

const media = {
  phone: "(min-width: 425px)",
  tablet: "(min-width: 768px)",
  laptop: "(min-width: 1024px)",
  desktop: "(min-width: 1440px)",
};

const darkTheme = createTheme("dark-theme", {
  colors: {
    ...blueDark,
    ...slateDark,
    ...redDark,
  },
});

const { styled, css } = createStitches({
  theme: {
    colors: {
      ...blue,
      ...slate,
      ...red,
    },
    space,
    sizes: space,
    fonts: {
      montserrat: "'Montserrat', sans-serif",
    },
    transitions: {
      default: "all .3s ease",
    },
    radii,
    media,
    zIndices: {
      toast: 20000,
    },
    shadows: {
      toast: "0px 15px 13px -3px rgba(0,0,0,0.1);",
    },
  },
});

export { styled, css, darkTheme };
