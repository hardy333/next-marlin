"use client";
import React, { MouseEvent, useState } from "react";
import classes from "./pricing.module.css";
import { FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import PricingSwitch from "@/components/pricingSwitch/PricingSwitch";
import PricingCard2 from "@/components/pricingCard2/PricingCard2";
import { truncate } from "fs/promises";

const prices: {
  basic: {
    monthly: number;
    yearly: number;
  };
  supernova: {
    monthly: number;
    yearly: number;
  };
  standard: {
    monthly: number;
    yearly: number;
  };
} = {
  basic: {
    monthly: 550,
    yearly: 500,
  },
  supernova: {
    monthly: 1700,
    yearly: 1600,
  },
  standard: {
    monthly: 990,
    yearly: 900,
  },
};

const PricingCardsSection = ({
  yearlyPrices,
  monthlyPrices,
  leftCardList,
  middleCardList,
  rightCardList,
}: any) => {
  prices.basic.monthly = monthlyPrices.leftCardPrice;
  prices.basic.yearly = yearlyPrices.leftCardPrice;

  prices.supernova.monthly = monthlyPrices.middleCardPrice;
  prices.supernova.yearly = yearlyPrices.middleCardPrice;

  prices.standard.monthly = monthlyPrices.rightCardPrice;
  prices.standard.yearly = yearlyPrices.rightCardPrice;

  const [isMonthly, setIsMonthly] = useState(true);
  const [isVendor, setIsVendor] = useState(true);

  return (
    <section className={`${classes["pricing-section"]}`}>
      <div className="container-small">
        <div className={`${classes["switches-container"]}`}>
          <div className={classes.price_switch_container}>
            <PricingSwitch
              setSwitchState={setIsMonthly}
              leftText="Monthly"
              rightText="Yearly"
              isOn={isMonthly}
            />
          </div>
          <div className={classes.price_switch_container}>
            <PricingSwitch
              setSwitchState={setIsVendor}
              rightText="Retailer"
              leftText="Vendor"
              isOn={isVendor}
            />
          </div>
        </div>

        <section className={`${classes["price-cards"]} gap-32`}>
          <PricingCard2
            cardList={leftCardList}
            price={
              isMonthly
                ? isVendor
                  ? monthlyPrices.leftCardPriceForVendors
                  : monthlyPrices.leftCardPrice
                : isVendor
                ? yearlyPrices.leftCardPriceForVendors
                : yearlyPrices.leftCardPrice
            }
            cardName={"Basic"}
          />
          <PricingCard2
            cardList={middleCardList}
            price={
              isMonthly
                ? isVendor
                  ? monthlyPrices.middleCardPriceForVendors
                  : monthlyPrices.middleCardPrice
                : isVendor
                ? yearlyPrices.middleCardPriceForVendors
                : yearlyPrices.middleCardPrice
            }
            cardName={"Supernova"}
          />
          <PricingCard2
            cardList={rightCardList}
            price={
              isMonthly
                ? isVendor
                  ? monthlyPrices.rightCardPriceForVendors
                  : monthlyPrices.rightCardPrice
                : isVendor
                ? yearlyPrices.rightCardPriceForVendors
                : yearlyPrices.rightCardPrice
            }
            cardName={"Standard"}
          />
        </section>
      </div>
    </section>
  );
};

export default PricingCardsSection;

function getPrice() {}
