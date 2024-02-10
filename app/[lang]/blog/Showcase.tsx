import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Img from "@/assets/blog.jpg";
import Img2 from "@/assets/blog2.jpg";
import { client, urlFor } from "../_lib/sanity";

export const revalidate = 0; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == "blogPage"] | order(_createdAt desc){
    searchInputPlaceholeder,
      placeholderImage
 }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const BlogShowcase = async () => {
  const data = await getData();

  return (
    <section className="blog-showcase">
      <div className="container-small blog-showcase-container">
        <div className="blog-showcase__img-container">
          <Image
            width={1920}
            height={1080}
            src={urlFor(data?.placeholderImage).url()}
            alt="dd"
          />
        </div>
        <div className="showcase-input-wrapper">
          <IoSearch className="showcase-input-icon" />
          <input
            type="text"
            className="showcase-input"
            placeholder={data?.searchInputPlaceholeder}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
