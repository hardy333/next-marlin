import Hero from "@/components/Hero";
import "./animations.css"
import Features from "@/components/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";
import ShareComp from "@/components/ShareComp";
import { Metadata } from "next";


export const revalidate  = 0


export const metadata: Metadata = {
  title: 'Simplifying and cheapenin communications between retailers and their vendors',
  description: 'Marlin is a digital platform that connects FMCG retailers to their vendors and helps them manage orders, order statuses, product catalogs, available stocks, special offers and much more, in a single space. ',
  openGraph: {
    title: 'Simplifying and cheapenin communications between retailers and their vendors',
    description: 'Marlin is a digital platform that connects FMCG retailers to their vendors and helps them manage orders, order statuses, product catalogs, available stocks, special offers and much more, in a single space. ',
  },
}


export default function Home() {
  return (
    <>
      <Hero />
      <Features   bgColor={null}/>

      <MiddleSections />
      <ShareComp />

      <ManageOrders />
      <Trends />
    </>
  );
}
