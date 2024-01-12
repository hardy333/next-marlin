import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Img from "@/assets/blog.jpg"
import Img2 from "@/assets/blog2.jpg"


const BlogShowcase = () => {
  return (
    <section className="blog-showcase">
      <div className="container-small blog-showcase-container">
        <div className="blog-showcase__img-container">
          <Image src={Img2} alt="dd"/>
        </div>
        <div className="showcase-input-wrapper">
          <IoSearch className="showcase-input-icon" />
          <input
            type="text"
            className="showcase-input"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
