import { client } from "../_lib/sanity";
import ForRetailersHero from "./Hero";
import ForRetailersMiddleSections from "./MiddleSections";

// css
import "./for-retailers.css";
import Features from "@/components/Features";

import { Public_Sans } from "next/font/google";
const public_sans = Public_Sans({ subsets: ["latin"] });

async function getFeaturesData() {
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

const ForRetailers = async () => {
  let featuresData = await getFeaturesData();

  return (
    <>
      <main className={`${public_sans.className}`}>
        <ForRetailersHero />
        <Features bgColor="white" data={featuresData} />
        <ForRetailersMiddleSections />
        <section className="simple-cta-section">
          <button
            className="btn"
            style={{ fontSize: "18px", padding: "12px 30px" }}
          >
            Book a call
          </button>
        </section>
      </main>
    </>
  );
};

export default ForRetailers;
