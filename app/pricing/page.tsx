import classes from "./pricing.module.css";
import PricingCardsSection from "./PricingCardsSection";
import AutomateSection from "./AutomateSection";
import { client } from "../_lib/sanity";

export const revalidate = 0

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


import { Public_Sans } from "next/font/google";
import cn from "classnames";

const public_sans = Public_Sans({ subsets: ["latin"] });

console.log(public_sans)


const Pricing = async () => {
  const data = await getData();

  return (
    <>
      <section className={classes.hero}>
        <div className={`container-small ${classes.hero__container}`}>
          <h1>{data.showcase.showcaseTitle}</h1>
          <p style={{ width: "520px", maxWidth: "100%" }} className={cn(public_sans.className)}>
            {data.showcase.showcaseParagraph}
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
          <h2>Difficulties choosing a plan?</h2>
          <button className="btn btn--outline">Book a call</button>
        </div>
      </section>

      <AutomateSection />
    </>
  );
};

export default Pricing;
