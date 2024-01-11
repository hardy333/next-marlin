import ill1 from "@/assets/ill1.png";
import { mainShowcase } from "@/lib/interfaces";
import { client } from "@/lib/sanity";
import BigDotsSvg from "@/svgs/BigDotsSvg";
import StarsSvg from "@/svgs/StarsSvg";
import WordLineDecorationSvg from "@/svgs/WordLineDecorationSvg";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";

export const revalidate  = 0

async function getData() {
  const query = `
  *[_type == "main-showcase"] | order(_createdAt desc){
    title,
    paragraph
  }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const Hero = async () => {
  const data: mainShowcase= await getData();

  console.log(data)

  return (
    <section className="hero">
      <div className="container-small hero__container flex-container">
        <div>
          <h1 data-aos="fade-down" data-aos-delay={400}>
            <span
              className="hero-decorated-word"
              style={{ paddingLeft: "0px" }}
            >
              <WordLineDecorationSvg className="hero-decorated-word-svg" />
              Simplifying and cheapening
            </span>
            <br /> communications between
            <br />
            <span style={{ color: "var(--color-primary)" }}>
              retailers and their vendors
            </span>
          </h1>
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
                <BsFillPatchCheckFill /> Automate You Job
              </li>
              <li>
                <BsFillPatchCheckFill /> Communicate With Ease
              </li>
              <li>
                <BsFillPatchCheckFill /> Analize Data
              </li>
            </ul>
          </div>
          <button
            style={{ padding: "12px 60px", fontSize: "18px" }}
            className="btn"
            // data-aos="fade-up"
            // data-aos-delay={400}
          >
            <div className="bg"></div>
            Try it out
          </button>
        </div>

        <div className="box-container">
          <div
            className="box hero-box"
            style={{ height: "500px" }}
            data-aos="fade-left"
            data-aos-delay={400}
          >
            <BigDotsSvg className="hero-svg-big-dotts" />
            <StarsSvg className="hero-svg-stars" />
            <Image
              style={{ width: "100%" }}
              src={ill1}
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
