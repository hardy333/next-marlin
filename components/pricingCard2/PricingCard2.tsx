"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

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

const PricingCard2 = ({
  price,
  cardList,
  cardName,
}: {
  price: number;
  cardList: string[];
  cardName: string;
}) => {
  return (
    <article className={cn(styles.card)}>
      <h2 className={cn(styles.h)}>{cardName}</h2>
      <p className={cn(styles.p, inter.className)}>
        Optimal for 10+ team size and new startup
      </p>
      <h3 className={cn(styles.moneyH)}>
        <span className={cn(styles.dollarSpan)}>$</span>
        <span className={cn(styles.numberSpan)}>{price}</span>
        <span className={cn(styles.intervalSpan, inter.className)}>/ Mon</span>
      </h3>
      <ul className={cn(styles.list)}>
        {cardList?.map((text, index) => (
          <li
            key={text}
            className={cn(styles.li, {
              [styles.disable]: index >= 4 ? true : false,
            })}
          >
            <span className={cn(styles.liText, inter.className)}>{text}</span>
            <span
              className={cn(styles.liCircle)}
              style={{ background: index < 4 ? "#17C65355" : "#99A1B744" }}
            >
              {index < 4 ? (
                <FaCheck fill="#17C653" />
              ) : (
                <FaXmark fill="#99A1B7" />
              )}
            </span>
          </li>
        ))}
      </ul>
      {/* <button className={cn(styles.btn)}>Select</button> */}
    </article>
  );
};

export default PricingCard2;
