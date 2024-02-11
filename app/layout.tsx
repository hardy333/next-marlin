import type { Metadata } from "next";
import "./globals.css";
import "./blog/[slug]/style.css";
import "./blog/blog.css";
import "./blog/blog-posts-section.css";
import "./forms.css";

import Navbar from "@/components/Navbar";
import Script from "next/script";
import NewFooter from "@/components/newFooter/NewFooter";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title:
    "Simplifying and cheapenin communications between retailers and their vendors",
  description:
    "Marlin is a digital platform that connects FMCG retailers to their vendors and helps them manage orders, order statuses, product catalogs, available stocks, special offers and much more, in a single space. ",
  openGraph: {
    title:
      "Simplifying and cheapenin communications between retailers and their vendors",
    description:
      "Marlin is a digital platform that connects FMCG retailers to their vendors and helps them manage orders, order statuses, product catalogs, available stocks, special offers and much more, in a single space. ",
  },
};

import { Advent_Pro, Capriola } from "next/font/google";
import LanguageContextProvider from "./context/languageContext";
import { cookies } from "next/headers";

import { Public_Sans } from "next/font/google";
import classNames from "classnames";
import { getLang } from "./_utils/getLang";

const public_sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-advent-pro",
});

// Font files can be colocated inside of `pages`
const dejavu = localFont({
  src: "./_fonts/dejavu-sans-extra-light.ttf",
  variable: "--font-dejavu",
});

const dejavu2 = localFont({
  src: "./_fonts/bpg_dejavu_sans.ttf",
  variable: "--font-dejavu-2",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = getLang();

  console.log("Layout was rendered");

  return (
    <html lang="en">
      {/* <body className={`${capriola.variable} ${adventPro.variable} font-1`}> */}
      <body
        className={`${public_sans.variable} ${dejavu2.variable}  ${
          lang === "geo" ? "font-dejavu-2" : "font-public-sans"
        }`}
      >
        {/* <body className={`${myFont.className}`}> */}
        {/* <body
        // className={`${lang === "geo" ? dejavu.variable : public_sans.variable}`}
        // className={classNames(
        //   lang === "geo" ? "font-dejavu" : "font-public-sans",
        //   dejavu.variable,
        //   public_sans.variable
        // )}
      > */}
        <LanguageContextProvider langValue={lang}>
          <Navbar />
          {children}
          <NewFooter />
          <div
            className="d365-mkt-config"
            style={{ display: "none" }}
            data-website-id="OVIn_1QnbnnbAHtF0wNZPPhPTxN8jokE5JFuyzkI3mk"
            data-hostname="3dbdc4e02c174de9882917a6978be3f0.svc.dynamics.com"
          ></div>
          <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007" />
        </LanguageContextProvider>
      </body>
    </html>
  );
}
