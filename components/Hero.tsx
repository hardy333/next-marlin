import ill1 from "@/assets/ill1.png";
import { mainShowcase } from "@/app/_lib/interfaces";
import { client, urlFor } from "@/app/_lib/sanity";
import BigDotsSvg from "@/svgs/BigDotsSvg";
import StarsSvg from "@/svgs/StarsSvg";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";
import HeroH1 from "./HeroH1";


export const revalidate = 0;

async function getData() {
  const query = `
  *[_type == "main-showcase"] | order(_createdAt desc){
    title,
    paragraph,
    image
  }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const Hero = async () => {
  const data: mainShowcase = await getData();


  return (
    <section className="hero">
      <div className="container-small hero__container flex-container">
        {/* <Framer /> */}
        <div>
          <HeroH1 />

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
