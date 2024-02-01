import ill1 from "@/assets/ill1.png";
import { mainShowcase } from "@/app/_lib/interfaces";
import { client, urlFor } from "@/app/_lib/sanity";
import BigDotsSvg from "@/svgs/BigDotsSvg";
import StarsSvg from "@/svgs/StarsSvg";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";
import HeroH1 from "./HeroH1";
import BaseModal from "./baseModal/BaseModal";
import HeroCtaBtn from "./HeroCtaBtn";

export const revalidate = 0; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == "main-showcase"] | order(_createdAt desc){
    title,
    paragraph,
    image,
    titleColoredWords,
    ctaText,
    showcaseKeyWords
  }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

async function getLeadData() {
  const query = `
  *[ _type == "leadForm"] | order(_createdAt desc){
    title,
    image
  }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const Hero = async () => {
  const data: mainShowcase = await getData();
  const leadData = await getLeadData();

  return (
    <section className="hero">
      <div className="container-small hero__container flex-container">
        {/* <Framer /> */}
        <div>
          <HeroH1
            title={data?.title.en}
            coloredWords={data?.titleColoredWords}
          />
          <p
            style={{
              marginBottom: "25px",
              fontSize: "16px",
              lineHeight: "1.3",
            }}
          >
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sed?
            Quisquam sunt sit iure ullam unde labore ab dolores sequi nulla
            fugiat tempore quis perferendis, modi, temporibus doloremque. Nobis,
            sequi. */}
            {data?.paragraph}
          </p>
          <div>
            <ul className="hero-check-list">
              <li>
                <BsFillPatchCheckFill /> {data?.showcaseKeyWords?.[0]}
              </li>
              <li>
                <BsFillPatchCheckFill /> {data?.showcaseKeyWords?.[1]}
              </li>
              <li>
                <BsFillPatchCheckFill /> {data?.showcaseKeyWords?.[2]}
              </li>
            </ul>
          </div>
          <HeroCtaBtn leadData={leadData}>{data?.ctaText}</HeroCtaBtn>
        </div>

        <div className="box-container">
          <div
            className="box hero-box"
            data-aos="fade-left"
            data-aos-delay={400}
          >
            {/* <BigDotsSvg className="hero-svg-big-dotts" /> */}
            {/* <StarsSvg className="hero-svg-stars" /> */}
            <Image
              priority
              style={{ width: "100%", objectFit: "cover" }}
              width={1800}
              height={1200}
              src={urlFor(data.image).url()}
              className="hero-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
