import Hero from "@/components/Hero";
import "./animations.css"
import Features from "@/components/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";
import ShareComp from "@/components/ShareComp";


export const revalidate  = 0


export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <MiddleSections />
      <ShareComp />

      <ManageOrders />
      <Trends />
    </>
  );
}
