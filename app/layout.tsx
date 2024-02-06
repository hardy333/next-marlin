import type { Metadata } from "next";
import "./globals.css";
import "./blog/[slug]/style.css";
import "./blog/blog.css";
import "./blog/blog-posts-section.css";
import "./forms.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import NewFooter from "@/components/newFooter/NewFooter";

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

import { Public_Sans } from "next/font/google";
const public_sans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Navbar */}
      <Analytics />
      <body className={public_sans.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <NewFooter />
        {/* <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script> */}
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="OVIn_1QnbnnbAHtF0wNZPPhPTxN8jokE5JFuyzkI3mk"
          data-hostname="3dbdc4e02c174de9882917a6978be3f0.svc.dynamics.com"
        ></div>
        <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007" />
      </body>
    </html>
  );
}

// [
//   {
//     formId: { id: null, name: null, action: null, method: null, index: 0 },
//     blockId: "5e0ab75f-24b9-ee11-a569-000d3ad7f2e0",
//   },
// ];
