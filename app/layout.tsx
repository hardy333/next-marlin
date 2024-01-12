import type { Metadata } from "next";
import "./globals.css";
import "./blog/[slug]/style.css";
import "./blog/blog.css"
import "./blog/blog-posts-section.css"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: 'Simplifying and cheapenin communications between retailers and their vendors',
  description: 'Marlin is a digital platform that connects FMCG retailers to their vendors and helps them manage orders, order statuses, product catalogs, available stocks, special offers and much more, in a single space. ',
  openGraph: {
    title: 'Simplifying and cheapenin communications between retailers and their vendors',
    description: 'Marlin is a digital platform that connects FMCG retailers to their vendors and helps them manage orders, order statuses, product catalogs, available stocks, special offers and much more, in a single space. ',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Navbar */}
      <Analytics />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
