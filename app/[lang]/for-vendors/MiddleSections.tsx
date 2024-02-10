import Image from "next/image";
import React from "react";
import { client, urlFor } from "../_lib/sanity";
import { PortableText } from "@portabletext/react";

async function getData() {
  const query = `
    *[_type == "vendorsMiddleSections"] | order(_createdAt desc){
      section1,
      section2,
      section3
    }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const MiddleSections = async () => {
  const data = await getData();

  return (
    <>
      {/* 1 */}
      <section className="middle-section">
        <div className="container-small flex-container middle-section__container">
          <div data-aos="fade-left">
            <h2>{data?.section1.heading}</h2>
            <PortableText value={data?.section1.paragraph} />
          </div>
          <div className="secondary-hero__img-container">
            <Image
              width={700}
              height={700}
              src={urlFor(data?.section1.image).url()}
              alt="img"
            />
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="middle-section">
        <div
          className="container-small flex-container middle-section__container
        flex-container--reverse"
        >
          <div data-aos="fade-left">
            <h2>{data?.section2.heading}</h2>
            <PortableText value={data?.section2.paragraph} />
          </div>
          <div className="secondary-hero__img-container">
            <Image
              width={700}
              height={700}
              src={urlFor(data?.section2.image).url()}
              alt="img"
            />
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="middle-section">
        <div className="container-small flex-container middle-section__container">
          <div data-aos="fade-left">
            <h2>{data?.section3.heading}</h2>
            <PortableText value={data?.section3.paragraph} />
          </div>
          <div className="secondary-hero__img-container">
            <Image
              width={700}
              height={700}
              src={urlFor(data?.section3.image).url()}
              alt="img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSections;
