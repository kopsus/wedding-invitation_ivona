import localFont from "next/font/local";

import {
  Marcellus,
  Montserrat,
  Pinyon_Script,
  Playfair_Display,
  Raleway,
  Roboto,
  Open_Sans,
  Abhaya_Libre,
  Lato,
  Poppins,
} from "next/font/google";

export const aston_script = localFont({
  src: "../assets/fonts/AstonScript.ttf",
});

export const segoe = localFont({
  src: "../assets/fonts/SegoeUI.ttf",
});

export const marcellus = Marcellus({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const open_sans = Open_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const pinyon_script = Pinyon_Script({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const montserrat_regular = Montserrat({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const montserrat_medium = Montserrat({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export const montserrat_semi = Montserrat({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});

export const montserrat_bold = Montserrat({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export const roboto_light = Roboto({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export const roboto_regular = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const raleway_light = Raleway({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export const playfair_display = Playfair_Display({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export const abhaya_libre = Abhaya_Libre({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

export const lato = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
