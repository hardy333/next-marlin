import React from "react";
import classes from "./automate-section.module.css";
import { client } from "../_lib/sanity";

const getData = async () => {
  const query = `
  *[_type == "pricingSections"] | order(_createdAt desc){
      section2
   }[0]
    
    `;

  const data = await client.fetch(query);

  return data;
};

const AutomateSection = async () => {
  const data = await getData();

  return (
    <section className={`${classes.automate}`}>
      <div className={`container-small ${classes.automate__container}`}>
        <div className={`${classes.automate__text}`}>
          <h2>
            <span
              className={classes["animated-text"]}
              style={{ paddingRight: 10 }}
            >
              {getFirstWord(data?.section2.heading)}
            </span>
            {getRestStr(data?.section2.heading)}
          </h2>
          <p>{data?.section2.paragraph}</p>
        </div>

        <button className="btn btn--outline btn--big">
          {" "}
          {data?.section2.buttonText}
        </button>
      </div>
    </section>
  );
};

function getFirstWord(str) {
  let arr = str.split(" ").filter((s) => s.length > 0 && s !== " ");
  if (arr.length > 0) {
    return arr[0];
  }
  return "";
}

function getRestStr(str) {
  let arr = str.split(" ").filter((s) => s.length > 0 && s !== " ");

  if (arr.length > 1) {
    return arr.slice(1).join(" ");
  }

  return "";
}

export default AutomateSection;
