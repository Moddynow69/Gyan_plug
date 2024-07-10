import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const folito = localFont({
  src: [
    {
      path: "../fonts/Folito-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Folito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Folito-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Folito-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Folito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
