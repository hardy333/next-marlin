import Hero from "@/components/Hero";
import "./animations.css";
import Features from "@/components/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";
import { client } from "./_lib/sanity";
import { getLang } from "../_utils/getLang";

// export const revalidate  = 0
export const revalidate = 0; // revalidate at most 30 seconds

async function getData(lang: string) {
  const query = `
  *[_type == "features"] | order(_createdAt desc){
    "leftFeature": {
     "paragraph": leftFeature.paragraph["${lang}"],
      "heading": leftFeature.heading["${lang}"],
       
    },
    "middleFeature": {
     "paragraph": middleFeature.paragraph["${lang}"],
      "heading": middleFeature.heading["${lang}"],
       
    },
    "rightFeature": {
     "paragraph": rightFeature.paragraph["${lang}"],
      "heading": rightFeature.heading["${lang}"],
    },
   }[0]
    `;
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const lang = getLang();

  let featuresData = await getData(lang);

  return (
    <>
      <Hero lang={lang} />
      <Features data={featuresData} bgColor={null} />
      <MiddleSections />
      <ManageOrders />
      <Trends />
    </>
  );
}
