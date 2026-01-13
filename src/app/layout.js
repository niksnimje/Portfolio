import {
  Inter,
  Poppins,
  Playfair_Display,
  Bebas_Neue,
  Libre_Baskerville,
  Yuji_Boku,
  Bodoni_Moda,

  Mountains_of_Christmas,
  Orbitron,
  Rubik_Gemstones,
  Amatic_SC,
  Berkshire_Swash,
  Bangers,
  Italianno,
  Nothing_You_Could_Do,
  Rampart_One,
  Waiting_for_the_Sunrise,
  Bungee_Inline,
  Sarina
} from "next/font/google";

import "./globals.css";
import LoaderWrapper from "@/Comman/LoaderWrapper";
import Header from "@/Layout/Header/Header";
import Footer from "@/Layout/Footer/Footer";

/* OLD FONTS (AS IT IS) */
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

/* NEW GOOGLE FONTS */
export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

export const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

export const yuji = Yuji_Boku({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yuji",
});

/* Badeen Display (closest Google match via Bodoni style) */
export const badeen = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-badeen",
});

export const mountains = Mountains_of_Christmas({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mountains",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const rubikGem = Rubik_Gemstones({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-gem",
});

export const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
});

export const berkshire = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-berkshire",
});


export const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
});

export const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
});

export const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nycd",
});

export const rampart = Rampart_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rampart",
});

export const sunrise = Waiting_for_the_Sunrise({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sunrise",
});

export const bungee = Bungee_Inline({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});

export const sarina = Sarina({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sarina",
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  className={`
    ${inter.variable}
    ${poppins.variable}
    ${playfair.variable}
    ${bebas.variable}
    ${libre.variable}
    ${yuji.variable}
    ${badeen.variable}

    ${mountains.variable}
    ${orbitron.variable}
    ${rubikGem.variable}
    ${amatic.variable}
    ${berkshire.variable}
    ${bangers.variable}
    ${italianno.variable}
    ${nothingYouCouldDo.variable}
    ${rampart.variable}
    ${sunrise.variable}
    ${bungee.variable}
    ${sarina.variable}
  `}
>
      <LoaderWrapper>
        <Header />
        {children}
        <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}
