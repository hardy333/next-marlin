import React from "react";
import { IoSearch } from "react-icons/io5";


const BlogShowcase = () => {
  return (
    <section className="blog-showcase">
      <div className="container-small blog-showcase-container">
        <div className="blog-showcase__img-container"></div>
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
