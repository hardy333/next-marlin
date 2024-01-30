import cn from "classnames";
import React from "react";
import styles from "./styles.module.css";

type Props = {
  leftText: string;
  rightText: string;
  isOn: boolean;
  setSwitchState: React.Dispatch<React.SetStateAction<boolean>>;
};

const PricingSwitch = ({ leftText, rightText, isOn, setSwitchState }: Props) => {
  return (
    <div className={cn(styles.switch)}>
      <div
        onClick={() => setSwitchState(true)}
        className={cn(styles.left, styles.box, {
          [styles.active]: isOn,
        })}
      >
        {leftText}
      </div>
      <div
        onClick={() => setSwitchState(false)}
        className={cn(styles.right, styles.box, {
          [styles.active]: !isOn,
        })}
      >
        {rightText}
      </div>
    </div>
  );
};

export default PricingSwitch;
