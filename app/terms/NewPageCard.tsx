import React from "react";
import { TbArrowRight } from "react-icons/tb";

type Props = {
  card:{
    Icon: () => JSX.Element;
    color: string;
    h: string;
    p: string;
    a: string;
}
};

const NewPageCard = ({card}: Props) => {

    const {color, p, h, Icon, a} = card
    
  return (
    <article className="new-page-card">
      <div
        className="icon-box"
        style={{ color: color, backgroundColor: color + "22" }}
      >
        <Icon />
      </div>
      <h2>{h}</h2>
      <p>
        {p}
      </p>
      <a href="#" style={{ color: color }}>
        {a}
        <span>
          <TbArrowRight />
        </span>
      </a>
    </article>
  );
};

export default NewPageCard;
