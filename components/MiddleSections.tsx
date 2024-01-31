import React from "react";
import ill2 from "@/assets/ill2.png";
import ill3 from "@/assets/ill3.png";
import ill4 from "@/assets/ill4.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { client, urlFor } from "@/app/_lib/sanity";

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

  console.log(data);

  return (
    <>
      {/* 1 */}
      <section className="middle-section " id="what-is-marlin">
        <div className="container-small flex-container middle-section__container">
          <div data-aos="fade-right">
            <h2>{data?.section1.heading} </h2>
            <p>{data?.section1.paragraph}</p>
          </div>
          <div className="box-container" data-aos="fade-left">
            <div
              className="box"
              style={{ width: "550xpx", position: "relative" }}
            >
              <Image
                style={{ width: "100%" }}
                width={700}
                height={700}
                src={urlFor(data?.section1.image).url()}
                className="hero-img"
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
          <div data-aos="fade-left">
            <h2>{data?.section2.heading}</h2>
            <p>{data?.section2.paragraph}</p>
          </div>
          <div className="box-container" data-aos="fade-right">
            <div
              className="box"
              style={{ width: "550px", position: "relative" }}
            >
              <Image
                style={{ width: "100%" }}
                width={700}
                height={700}
                src={urlFor(data?.section2.image).url()}
                className="hero-img"
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
          <div data-aos="fade-right">
            <h2>{data?.section3.heading}</h2>
            <ul>
              {/* 1 */}
              <li data-aos="fade-right" data-aos-delay={300}>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top" data-aos-off="fade-in">
                    {data?.section3.list?.[0].heading}
                  </p>
                  <p className="bottom" data-aos-off="fade-in">
                    {data?.section3.list?.[0].paragraph}
                  </p>
                </div>
              </li>
              {/* 2 */}
              <li data-aos="fade-left" data-aos-delay={300}>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top" data-aos-off="fade-in">
                    {data?.section3.list?.[1].heading}
                  </p>
                  <p className="bottom" data-aos-off="fade-in">
                    {data?.section3.list?.[1].paragraph}
                  </p>
                </div>
              </li>
              {/* 3 */}
              <li data-aos="fade-right" data-aos-delay={300}>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top" data-aos-off="fade-in">
                    {data?.section3.list?.[2].heading}
                  </p>
                  <p className="bottom" data-aos-off="fade-in">
                    {data?.section3.list?.[2].paragraph}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="box-container" data-aos="fade-left">
            <div
              className="box"
              style={{ width: "550px", height: "600px", position: "relative" }}
            >
              <Image
                style={{ width: "100%" }}
                width={700}
                height={700}
                src={urlFor(data?.section3.image).url()}
                className="hero-img"
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
