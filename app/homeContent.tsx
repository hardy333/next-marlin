import Hero from "@/components/Hero";
import "./animations.css";
import Features from "@/components/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";
import { client } from "./_lib/sanity";
import ClientComp from "./ClientComp";

// export const revalidate  = 0
export const revalidate = 0; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == "features"] | order(_createdAt desc){
      leftFeature,
        middleFeature,
        rightFeature
     }[0]
    
    `;
  const data = await client.fetch(query);

  return data;
}

export default async function HomeContent() {
  let featuresData = await getData();
  return (
    <>
      <Hero />
      <Features data={featuresData} bgColor={null} />
      <ClientComp />
      <MiddleSections />
      <ManageOrders />
      <Trends />
      {/* <FormSection /> */}
    </>
  );
}
