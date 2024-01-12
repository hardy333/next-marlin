import Hero from "@/components/Hero";
import "./animations.css"
import Features from "@/components/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";




export default function Home() {
  return (
    <>
      <Hero />
      <Features   bgColor={null}/>

      <MiddleSections />
      <ManageOrders />
      <Trends />
    </>
  );
}
