"use client";

import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import clock from "@/assets/clock.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { simpleBlogCard } from "./page";
import { urlFor } from "../_lib/sanity";
import Link from "next/link";
import readingTime from "reading-time";
import { format } from "date-fns/format";
import BlurImage from "@/components/BlurImage";

const BlogPostsSection = ({ data }: { data: simpleBlogCard[] }) => {
  console.log("dd", data);

  console.log(new Date(data[0].date))
  return (
    <div className="blog-posts-section">
      <div className="container-small  blog-posts-section__container">
        {data.slice(1, data.length).map((blogPost, index) => (
          <article
            key={index}
            className="trend-card"
            data-aos-delay={200}
            data-aos="fade-in"
          >
            <span className="trend-card__lable" style={{ zIndex: "999999" }}>
              Industry news
            </span>
            <div className="trend-card__img" style={{ position: "relative", overflow: "hidden" }}>
              {/* <Image
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                  borderRadius: "inherit",
                }}
                width={1800}
                height={1200}
                src={urlFor(blogPost.titleImage).url()}
                className="hero-img"
                alt=""
              /> */}

              <BlurImage  
                src={urlFor(blogPost.titleImage).url()}

              
              />
            </div>
            <h4>{blogPost.title}</h4>
            <p>{blogPost.smallDescription}</p>
            <Link
              href={`/blog/${blogPost.currentSlug}`}
              className="post-reade-more-link"
              prefetch={true}
            >
              <p className="trend-card__read-more">
                Read more <BsArrowRightShort />{" "}
              </p>
            </Link>
            <footer>
              <span>
                {" "}
                <Image src={clock} alt="" /> {Math.ceil(readingTime(blogPost.smallDescription).minutes*15 + 1)} min
              </span>
              <span>{format(new Date(blogPost.date), "dd MM, yyyy")}</span>
            </footer>
          </article>
        ))}
      </div>
      <div className="container-small blog-pagination" style={{marginTop: "6rem"}}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

export default BlogPostsSection;
