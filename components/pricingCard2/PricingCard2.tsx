"use client";

import cn from "classnames";
import styles from "./style.module.css";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const data = [
  { text: "Up to 10 Active Users", isactive: true },
  { text: "Up to 30 Project Integrations", isactive: true },
  { text: "Analytics Module", isactive: true },
  { text: "Finance Module", isactive: true },
  { text: "Accounting Module", isactive: false },
  { text: "Network Platform", isactive: false },
  { text: "Unlimited Cloud Space", isactive: false },
];

import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({ subsets: ["latin"] });


const PricingCard2 = ({price}: {price: number}) => {
console.log(public_sans)

  return (
    <article className={cn(styles.card)}>
      <h2 className={cn(styles.h, public_sans.className)}>Startup</h2>
      <p className={cn(styles.p, public_sans.className)}>Optimal for 10+ team size and new startup</p>
      <h3 className={cn(styles.moneyH)}>
        <span className={cn(styles.dollarSpan)}>$</span>
        <span className={cn(styles.numberSpan)}>{price}</span>
        <span className={cn(styles.intervalSpan, public_sans.className)}>/ Mon</span>
      </h3>
      <ul className={cn(styles.list)}>
        {data?.map((liObj) => (
          <li
            key={liObj.text}
            className={cn(styles.li, { [styles.disable]: !liObj.isactive })}
          >
            <span className={cn(styles.liText, public_sans.className)}>{liObj.text}</span>
            <span
              className={cn(styles.liCircle, )}
              style={{ background: liObj.isactive ? "#17C65355" : "#99A1B744" }}
            >
              {liObj.isactive ? (
                <FaCheck fill="#17C653" />
              ) : (
                <FaXmark fill="#99A1B7" />
              )}
            </span>
          </li>
        ))}
      </ul>
      <button className={cn(styles.btn)}>Select</button>
    </article>
  );
};

export default PricingCard2;
