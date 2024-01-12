"use client";
import React, { AnimationEvent, MouseEvent, useState } from "react";
import classes from "./pricing.module.css";
import Switch from "react-switch";
import { FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";

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
  console.log(leftCardList);
  prices.basic.monthly = monthlyPrices.leftCardPrice;
  prices.basic.yearly = yearlyPrices.leftCardPrice;

  prices.supernova.monthly = monthlyPrices.middleCardPrice;
  prices.supernova.yearly = yearlyPrices.middleCardPrice;

  prices.standard.monthly = monthlyPrices.rightCardPrice;
  prices.standard.yearly = yearlyPrices.rightCardPrice;

  const [isMonthly, setIsMonthly] = useState(false);
  const [isVendor, setIsVendor] = useState(false);

  const handleDurationChange = () => {
    setIsMonthly(!isMonthly);
  };

  const handleClientChange = () => {
    setIsVendor(!isVendor);
  };

  return (
    <section className={`${classes["pricing-section"]}`}>
      <div className="container-small">
        <div className={`${classes["switches-container"]}`}>
          <div className={classes.price_switch_container}>
            <span>Monthly</span>
            <Switch
              className={classes.price_switch}
              uncheckedIcon={false}
              offHandleColor={"#6E0FF5"}
              onHandleColor={"#fff"}
              offColor="#fff"
              onColor="#6E0FF5"
              checkedIcon={false}
              onChange={handleDurationChange}
              checked={!isMonthly}
            />
            <span>Yearly</span>
          </div>
          <div className={classes.price_switch_container}>
            <span>For Retailers</span>
            <Switch
              className={classes.price_switch}
              uncheckedIcon={false}
              offHandleColor={"#6E0FF5"}
              onHandleColor={"#fff"}
              offColor="#fff"
              onColor="#6E0FF5"
              checkedIcon={false}
              onChange={handleClientChange}
              checked={isVendor}
            />
            <span>For Vendors</span>
          </div>
        </div>

        <section className={`${classes["price-cards"]}`}>
          <PriceCard
            isMonthly={isMonthly}
            className="basic"
            priceNumber={550}
            strokeColor={"#FF3360"}
            cardList={leftCardList}
          />
          <PriceCard
            isMonthly={isMonthly}
            className="supernova"
            priceNumber={1700}
            strokeColor={"#6E0FF5"}
            cardList={middleCardList}
          />
          <PriceCard
            isMonthly={isMonthly}
            className="standard"
            priceNumber={990}
            strokeColor={"#406AFF"}
            cardList={rightCardList}
          />
        </section>
      </div>
    </section>
  );
};

export default PricingCardsSection;

type PriceCardPropTypes = {
  priceNumber?: number;
  strokeColor: string;
  className: "supernova" | "basic" | "standard";
  isMonthly: boolean;
  cardList: string[];
};

const PriceCard = ({
  priceNumber,
  strokeColor,
  className,
  isMonthly,
  cardList,
}: PriceCardPropTypes) => {
  const c = "price-card--" + className;

  const opacityColor = strokeColor + "55";

  const handleClick = (e: MouseEvent<HTMLAreaElement>, strokeColor: string) => {
    // Stoping event bubbling in case user clicked ripple element which is
    // a child of element which also is element with ripple effect.
    e.stopPropagation();

    // Element in which we will create ripple effect.
    const element = e.currentTarget;

    element.style.position = "relative";
    // element.style.zIndex = "0";
    // element.style.overflow = "hidden";

    // Getting elements left and top position relative to viewport.
    const { top: elementTop, left: elementLeft } =
      element.getBoundingClientRect();

    // Getting click event's x and y coordinates.
    const top = e.clientY;
    const left = e.clientX;

    // calculating click event's x and y coordinate relative to element.
    // this x and y will be ripple elements center position's coordinates relative to parent element which in this case is "element".
    const posY = top - elementTop;
    const posX = left - elementLeft;

    const ripple = document.createElement("div");
    ripple.style.top = posY + "px";
    ripple.style.left = posX + "px";
    let COLOR = strokeColor;

    if (element.classList.contains("card--cyan")) {
      COLOR = "hsl(180, 62%, 55%)";
    }
    if (element.classList.contains("card--red")) {
      COLOR = "hsl(0, 78%, 62%)";
    }
    if (element.classList.contains("card--blue")) {
      COLOR = "hsl(212, 86%, 64%)";
    }

    if (element.classList.contains("card--orange")) {
      COLOR = "hsl(34, 97%, 64%)";
    }
    ripple.style.backgroundColor = COLOR;

    ripple.classList.add("ripple");

    ripple.addEventListener("animationend", handleRippleAnimationEnd);

    element.appendChild(ripple);
  };

  function handleRippleAnimationEnd  (e: AnimationEvent<HTMLDivElement>)  {
    e.currentTarget.removeEventListener(
      "animationend",
      handleRippleAnimationEnd
    );
    e.currentTarget.remove();
  };

  return (
    <>
      <article
        onClick={(e: MouseEvent<HTMLAreaElement>) => handleClick(e, strokeColor)}
        className={`${classes["price-card"]} ${classes[c]}`}
        style={{ border: `5px solid ${strokeColor}` }}
      >
        <h2 style={{ paddingLeft: "40px" }}>
          $
          <span
            className={classes["price-card-number"]}
            style={{
              width: "150px",
              display: "inline-flex",
              justifyContent: "start",
            }}
          >
            {" "}
            <CountUp
              useEasing={false}
              start={
                isMonthly
                  ? prices[className]?.yearly
                  : prices[className].monthly
              }
              end={
                isMonthly ? prices[className].monthly : prices[className].yearly
              }
              duration={0.8}
            />
          </span>
        </h2>
        <ul>
          {cardList.map((liText, index) => {
            return (
              <li
              key={liText + index}
              >
                <span
                  style={{ "--color": opacityColor }}
                  className={`${classes["price-card-check-circle"]}`}
                >
                  <FaCheck fill={strokeColor} />
                </span>
                <span>{liText}</span>{" "}
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
};