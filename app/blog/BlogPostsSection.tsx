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
import { CiClock2 } from "react-icons/ci";
import { getColor } from "./blogCategoryColors";

const BlogPostsSection = ({ data }: { data: simpleBlogCard[] }) => {
  return (
    <div className="blog-posts-section">
      <div className="container-small  blog-posts-section__container">
        {data?.map((blogPost, index) => (
          // Post start
          <article key={index} className="blog-card">
            {/* <span className="trend-card__lable" style={{ zIndex: "999999" }}>
              {blogPost.categoryTag}
            </span> */}
            <Link href={`/blog/${blogPost.currentSlug}`} prefetch={true}>
              <div className="blog-card__img-wrapper">
                <div className="blog-card__img-container">
                  <BlurImage src={urlFor(blogPost.titleImage).url()} />
                </div>
              </div>
            </Link>

            <div className="blog-card__content">
              <span
                className="blog-post__category-lable"
                style={{ backgroundColor: getColor() }}
              >
                {blogPost.categoryTag}
              </span>
              <Link href={`/blog/${blogPost.currentSlug}`} prefetch={true}>
                <h4 className="blog-card__heading">{blogPost.title}</h4>
              </Link>
              <p className="blog-card__desc">{blogPost.smallDescription}</p>

              <footer className="blog-card__footer ">
                <span className="blog-card__time">
                  <CiClock2 fill="rgb(100, 116, 139)" size={25} />
                  {Math.ceil(
                    readingTime(blogPost.smallDescription).minutes * 15 + 1
                  )}{" "}
                  min
                </span>
                <span className="blog-card__date">
                  {format(new Date(blogPost.date), "dd MM, yyyy")}
                </span>
              </footer>
            </div>
          </article>
          // Post End
        ))}
      </div>
      <div
        className="container-small blog-pagination"
        style={{ marginTop: "6rem", display: "none" }}
      >
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
