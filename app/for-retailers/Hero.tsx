import Image from "next/image";
import { client, urlFor } from "../_lib/sanity";
import ModalOpenBtnWrapper from "@/components/baseModal/ModalOpenBtnWrapper";

async function getFeaturesData() {
  const query = `
  *[_type == "retailersShowcase"] | order(_createdAt desc){
    title,
    paragraph,
    image,
    ctaText,
  }[0]
    `;
  const data = await client.fetch(query);

  return data;
}

const Hero = async () => {
  let data = await getFeaturesData();

  return (
    <section className="for-retailers-hero secondary-hero">
      <div className="container-small for-retailers-hero__container flex-container">
        <div>
          <h1 style={{ marginBottom: "15px" }}>{data?.title}</h1>
          <p className="mb-10">{data?.paragraph}</p>
          <ModalOpenBtnWrapper>
            <button
              className="btn "
              style={{ fontSize: "18px", padding: "12px 30px" }}
            >
              {data?.ctaText}
            </button>
          </ModalOpenBtnWrapper>
        </div>

        <div className="secondary-hero__img-container  hero-2-img-container">
          <Image
            alt="img"
            width={1800}
            height={1200}
            src={urlFor(data?.image).url()}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
