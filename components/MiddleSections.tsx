import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { client, urlFor } from "@/app/_lib/sanity";
import { PortableText } from "@portabletext/react";
import { getLang } from "@/app/_utils/getLang";

async function getData() {
  const query = `
    *[_type == "mainPageMiddleSections"] | order(_createdAt desc){
      data
    }
    `;

  const data = await client.fetch(query);

  return data;
}

async function getWorksSectionData() {
  const query = `
  *[_type == "mainPageWorksSection"] | order(_createdAt desc){
    heading,
      image,
      list
      }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const MiddleSections = async () => {
  const lang = getLang();
  const data = await getData();
  const worksSectionData = await getWorksSectionData();

  return (
    <>
      {/* 1 */}
      {data?.map((section: any, index: number) => {
        return (
          <section
            key={section.data.heading}
            className="middle-section "
            id="what-is-marlin"
          >
            <div
              className={`container-small flex-container middle-section__container ${
                index % 2 === 1 ? "flex-container--reverse" : ""
              }`}
            >
              <div>
                <h2>{section.data.heading[lang]}</h2>

                <PortableText value={section.data.paragraph[lang]} />
              </div>
              <div className="box-container">
                <div
                  className="box"
                  style={{ width: "550xpx", position: "relative" }}
                >
                  <Image
                    width={700}
                    height={700}
                    src={urlFor(section?.data.image)?.url()}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 2 */}
      {/* <section className="middle-section">
        <div
          className="container-small flex-container middle-section__container
        flex-container--reverse
        "
        >
          <div>
            <h2>{data?.section2.heading}</h2>
            <PortableText value={data?.section2.paragraph} />
          </div>
          <div className="box-container">
            <div
              className="box"
              style={{ width: "550px", position: "relative" }}
            >
              <Image
                width={700}
                height={700}
                src={urlFor(data?.section2.image).url()}
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* 3 */}
      <section className="middle-section  how-it-works">
        <div
          className="container-small flex-container middle-section__container
        "
        >
          <div>
            <h2>{worksSectionData?.heading[lang]}</h2>
            <ul>
              {/* 1 */}

              {worksSectionData.list.map((obj: any) => {
                return (
                  <li key={obj?.heading}>
                    <span
                      className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                    >
                      <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                    </span>
                    <div className="p-container">
                      <p className="top">{obj?.heading[lang]}</p>
                      <p className="bottom">{obj?.paragraph[lang]}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="box-container">
            <div
              className="box"
              style={{ width: "550px", height: "600px", position: "relative" }}
            >
              <Image
                width={700}
                height={700}
                src={urlFor(worksSectionData?.image).url()}
                alt=""
              />
            </div>
          </div>
        </div>

        <div style={{ background: "" }}></div>
      </section>
    </>
  );
};

export default MiddleSections;
