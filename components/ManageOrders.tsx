import { client, urlFor } from "@/app/_lib/sanity";
import large from "@/assets/large.png";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
async function getData() {
  const query = `
  *[_type == "mainPageOrdersSection"] | order(_createdAt desc){
    heading,
      paragraph,
      buttonHeading,
      buttonText,
      image
  }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const ManageOrders = async () => {
  const data = await getData();

  return (
    <section className="manage-orders">
      <div className="manage-orders-img-container">
        <Image
          src={large}
          className="manage-orders-img"
          alt=""
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="container-small manage-orders__container    ">
        <h3 data-aos="fade-down">{data?.heading}</h3>
        <PortableText value={data?.paragraph} />
        <Image
          width={1500}
          height={1000}
          src={urlFor(data?.image).url()}
          className="manage-orders-img"
          alt=""
          style={{ borderRadius: "10px" }}
        />
        <p
          className="manage-orders-p"
          style={{
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <svg
            className="manage-orders-p-svg"
            width="531"
            height="49"
            viewBox="0 0 531 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M527.098 15.0977L530.701 13.5155C530.789 13.4276 530.789 13.3397 530.701 13.3397L527.098 11.7576L525.428 8.06592C525.428 7.97803 525.34 7.97803 525.34 8.06592L523.67 11.6697L520.066 13.3397C519.978 13.3397 519.978 13.4276 520.066 13.5155L523.67 15.0977L525.34 18.7015H525.428L527.098 15.0977Z"
              fill="#6ADBC6"
            />
            <path
              opacity="0.5"
              d="M303.575 6.4L306.975 4.9V4.7L303.575 3.3L302.075 0H301.875L300.375 3.3L297.075 4.7C296.975 4.8 296.975 4.9 297.075 4.9L300.375 6.4L301.875 9.8H302.075L303.575 6.4Z"
              fill="#9691FF"
            />
            <path
              d="M505.875 43.8621L510.95 41.6367C510.982 41.6007 511 41.5541 511 41.5058C511 41.4575 510.982 41.4109 510.95 41.3749L505.875 39.1495L503.598 34.0443C503.585 34.0304 503.57 34.0192 503.554 34.0116C503.537 34.004 503.518 34 503.5 34C503.482 34 503.463 34.004 503.446 34.0116C503.43 34.0192 503.415 34.0304 503.402 34.0443L501.125 39.0841L496.05 41.3749C496.018 41.4109 496 41.4575 496 41.5058C496 41.5541 496.018 41.6007 496.05 41.6367L501.125 43.8621L503.402 48.9018C503.489 49.0327 503.554 49.0327 503.598 48.9018L505.875 43.8621Z"
              fill="#628BF7"
            />
            <path
              d="M15.2764 34.15L22.9764 30.75C23.0294 30.75 23.0803 30.7289 23.1178 30.6914C23.1553 30.6539 23.1764 30.603 23.1764 30.55C23.1764 30.497 23.1553 30.4461 23.1178 30.4086C23.0803 30.3711 23.0294 30.35 22.9764 30.35L15.2764 26.95C15.2499 26.95 15.2244 26.9395 15.2057 26.9207C15.1869 26.902 15.1764 26.8765 15.1764 26.85L11.6764 19.15C11.6764 18.95 11.4764 18.95 11.3764 19.15L7.97639 26.85H7.87639L0.0763931 30.35C0.0271976 30.405 0 30.4762 0 30.55C0 30.6238 0.0271976 30.695 0.0763931 30.75L7.87639 34.15H7.97639L11.3764 41.95C11.4764 42.15 11.6764 42.15 11.6764 41.95L15.1764 34.25C15.1764 34.2235 15.1869 34.198 15.2057 34.1793C15.2244 34.1605 15.2499 34.15 15.2764 34.15Z"
              fill="#FF7ABC"
            />
          </svg>
          {data?.buttonHeading}
        </p>
        <button
          style={{ padding: "15px 35px", fontSize: "20px", width: "250px" }}
          className="btn"
        >
          {data?.buttonText}
        </button>
      </div>
    </section>
  );
};

export default ManageOrders;
