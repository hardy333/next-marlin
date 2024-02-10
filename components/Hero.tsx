import { mainShowcase } from "@/app/[lang]/_lib/interfaces";
import { client, urlFor } from "@/app/[lang]/_lib/sanity";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";
import HeroH1 from "./HeroH1";
import HeroCtaBtn from "./HeroCtaBtn";
import { getLang } from "@/app/_utils/getLang";

export const revalidate = 0; // revalidate at most 30 seconds

async function getData(lang: string) {
  const query = `
  *[_type == "main-showcase"] | order(_createdAt desc){
    "title": title["${lang}"],
    "paragraph": paragraph["${lang}"],
    image,
    "titleColoredWords": titleColoredWords["${lang}"],
    "ctaText": ctaText["${lang}"],
    showcaseKeyWords
  }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

async function getLeadData(lang: string) {
  const query = `
  *[ _type == "leadForm"] | order(_createdAt desc){
    title,
    image
  }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

type Props = {
  lang: string;
};

const Hero = async () => {
  const lang = getLang();
  const data: mainShowcase = await getData(lang);
  const leadData = await getLeadData(lang);

  console.log("Hello", data?.showcaseKeyWords[0]["geo"]);

  return (
    <section className="hero">
      <div className="container-small hero__container flex-container">
        {/* <Framer /> */}
        <div>
          <HeroH1 title={data?.title} coloredWords={data?.titleColoredWords} />
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
                <BsFillPatchCheckFill /> {data?.showcaseKeyWords[0][lang]}
              </li>
              <li>
                <BsFillPatchCheckFill /> {data?.showcaseKeyWords[1][lang]}
              </li>
              <li>
                <BsFillPatchCheckFill /> {data?.showcaseKeyWords[2][lang]}
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
