import Hero from "@/components/Hero";
import "./animations.css";
import Features from "@/components/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";
import FormSection from "@/components/formSection/FormSection";
import { client } from "./_lib/sanity";

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

export default async function Home() {
  let featuresData = await getData();

  return (
    <>
      <Hero />
      <Features data={featuresData} bgColor={null} />

      <MiddleSections />
      <ManageOrders />
      <Trends />
      {/* <FormSection /> */}
    </>
  );
}
