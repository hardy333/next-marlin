"use client"

import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import clock from "@/assets/clock.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const BlogPostsSection = () => {
  const [blogPosts, setBlogPosts] = useState(Array.from({ length: 6 }).fill(1));
  return (
    
    <div className="blog-posts-section">
      <div className="container-small  blog-posts-section__container">
        {blogPosts.map((blogPost) => (
          <article
            className="trend-card"
            data-aos-delay={200}
            data-aos="fade-in"
          >
            <span className="trend-card__lable">Industry news</span>
            <div className="trend-card__img"></div>
            <h4>Title Lorem Ipsum Lorem</h4>
            <p>
              Body text lorem upsum lorem upsum lorem upsum lorem upsum lorem
              upsum lorem upsum lorem upsum lorem upsum lorem
            </p>
            <p className="trend-card__read-more">
              Read more <BsArrowRightShort />{" "}
            </p>
            <footer>
              <span>
                {" "}
                <Image src={clock} alt="" /> 3 min
              </span>
              <span>September 9, 2023</span>
            </footer>
          </article>
        ))}
      </div>
      <div className="container-small blog-pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span><IoIosArrowForward/></span>
      </div>
    </div>
  );
};

export default BlogPostsSection;
