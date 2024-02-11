import classes from "./pricing.module.css";
import PricingCardsSection from "./PricingCardsSection";
import AutomateSection from "./AutomateSection";
import { client } from "../_lib/sanity";

export const revalidate = 0;

const getData = async () => {
  const query = `
    *[_type == "pricingPage"] | order(_createdAt desc){
        showcase,
          monthlyPrices,
          yearlyPrices,
          cardLeft,
          cardMiddle,
          cardRight
      }[0]
    
    `;

  const data = await client.fetch(query);

  return data;
};

const getSectionData = async () => {
  const query = `
  *[_type == "pricingSections"] | order(_createdAt desc){
      section1
   }[0]
    
    `;

  const data = await client.fetch(query);

  return data;
};

import cn from "classnames";
// Hello

const Pricing = async () => {
  const data = await getData();
  const sectionData = await getSectionData();

  return (
    <>
      <section className={classes.hero}>
        <div className={`container-small ${classes.hero__container}`}>
          <h1
            style={{
              color: "var(--color-text-1)",
            }}
          >
            {data?.showcase.showcaseTitle}
          </h1>
          <p
            style={{
              width: "520px",
              maxWidth: "100%",
              color: "var(--color-text-1)",
            }}
          >
            {data?.showcase.showcaseParagraph}
          </p>
        </div>
      </section>
      <PricingCardsSection
        leftCardList={data.cardLeft}
        middleCardList={data.cardMiddle}
        rightCardList={data.cardRight}
        monthlyPrices={data.monthlyPrices}
        yearlyPrices={data.yearlyPrices}
      />

      <section className={classes["choose-plan"]}>
        <div className={`container-small ${classes["choose-plan__container"]}`}>
          <div>
            <h2 style={{ marginBottom: "20px", fontSize: "40px" }}>
              {sectionData?.section1.heading}
            </h2>
            <p style={{ fontSize: "20px" }}>
              {sectionData?.section1.paragraph}
            </p>
          </div>
          <button
            className="btn btn--outline"
            style={{ fontSize: "18px", padding: "12px 30px" }}
          >
            {sectionData?.section1?.buttonText}
          </button>
        </div>
      </section>

      <AutomateSection />
    </>
  );
};

export default Pricing;
