import localFonts from "next/font/local";
import { Gilda_Display, Crimson_Pro, GFS_Didot } from "next/font/google";

const trajanPro = localFonts({
  src: "../fonts/TrajanPro-Regular.woff",
});

const monthGlade = localFonts({
  src: "../fonts/MonthGlade.otf",
});

const manstein = localFonts({
  src: "../fonts/Manstein.ttf",
});

const gilda = Gilda_Display({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

const crimsonProNormal = Crimson_Pro({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

const gfsDidot = GFS_Didot({
  weight: ["400"],
  style: "normal",
  subsets: ["greek"],
});

export { gilda, crimsonProNormal, trajanPro, gfsDidot, monthGlade, manstein };
