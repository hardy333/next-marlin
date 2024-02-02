import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { client, urlFor } from "@/app/_lib/sanity";
import { PortableText } from "@portabletext/react";

async function getData() {
  const query = `
    *[_type == "mainPageMiddleSections"] | order(_createdAt desc){
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

  console.log("param !!!!", data.section1.paragraph);

  return (
    <>
      {/* 1 */}
      <section className="middle-section " id="what-is-marlin">
        <div className="container-small flex-container middle-section__container">
          <div>
            <h2>{data?.section1.heading}</h2>
            <PortableText value={data?.section1.paragraph} />
          </div>
          <div className="box-container">
            <div
              className="box"
              style={{ width: "550xpx", position: "relative" }}
            >
              <Image
                width={700}
                height={700}
                src={urlFor(data?.section1.image).url()}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="middle-section">
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
      </section>

      {/* 3 */}
      <section className="middle-section  how-it-works">
        <div
          className="container-small flex-container middle-section__container
        "
        >
          <div>
            <h2>{data?.section3.heading}</h2>
            <ul>
              {/* 1 */}
              <li>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top">{data?.section3.list?.[0].heading}</p>
                  <p className="bottom">{data?.section3.list?.[0].paragraph}</p>
                </div>
              </li>
              {/* 2 */}
              <li>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top">{data?.section3.list?.[1].heading}</p>
                  <p className="bottom">{data?.section3.list?.[1].paragraph}</p>
                </div>
              </li>
              {/* 3 */}
              <li>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top">{data?.section3.list?.[2].heading}</p>
                  <p className="bottom">{data?.section3.list?.[2].paragraph}</p>
                </div>
              </li>
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
                src={urlFor(data?.section3.image).url()}
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
