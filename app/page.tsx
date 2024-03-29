import Hero from "@/components/Hero";
import "./animations.css";
import Features from "@/components/features/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";
import { client } from "./_lib/sanity";
import { getLang } from "./_utils/getLang";

// export const revalidate  = 0
export const revalidate = 0; // revalidate at most 30 seconds

async function getData(lang: string) {
  const query = `
  *[_type == "features"] | order(_createdAt desc){
    "leftFeature": {
      "image": leftFeature.image,
     "paragraph": leftFeature.paragraph["${lang}"],
      "heading": leftFeature.heading["${lang}"],
       
    },
    "middleFeature": {
      "image": middleFeature.image,

     "paragraph": middleFeature.paragraph["${lang}"],
      "heading": middleFeature.heading["${lang}"],
    },
    "rightFeature": {
      "image": rightFeature.image,

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

  console.log({ featuresData });

  return (
    <>
      <Hero />
      <Features data={featuresData} bgColor={null} />
      <MiddleSections />
      <ManageOrders />

      <Trends />
      {/* <FormSection title="sss" btnText="hello" image={null} /> */}
    </>
  );
}
