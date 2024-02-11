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
import { color } from "framer-motion";

// 1.იასამნისფერი - #E7D8FF (ბოქსი) #C9A6FF (ფონტი)
// 2.ცისფერი - #C8E9FB (ბოქსი) #66C3F5 (ფონტი)
// 3.ყვითელი - #FDEBDD (ბოქსი) #E6BB15 (ფონტი)
// 4.მწვანე - #AFFBED (ბოქსი) ან #E4FEF9 (ბოქსი ღიაა უფრო) #55EBD1 (ფონტი)
// 5.მალინა- # FFDEE9 (ბოქსი) #FF7BA7 (ფონტი)

export const colors = [
  {
    bg: "#E7D8FF",
    text: "#8739FA",
    categoryName: "Industry news",
  },
  {
    bg: "#C8E9FB",
    text: "#468CE4",
    categoryName: "Good to know",
  },
  {
    bg: "#FDEBDD",
    text: "#F59957",
    categoryName: "",
  },
  {
    bg: "#E4FEF9",
    text: "#1ED8B9",
    categoryName: "Success cases",
  },
  {
    bg: "#FFDEE9",
    text: "#F55364",
    categoryName: "Tech and more",
  },
];

const BlogPostsSection = ({
  data,
  lang,
}: {
  data: simpleBlogCard[];
  lang: "geo" | "en";
}) => {
  return (
    <div className="blog-posts-section">
      <div className="container-small  blog-posts-section__container">
        {data?.map((blogPost, index) => (
          // Post start
          <article key={index} className="blog-card">
            <Link href={`/blog/${blogPost.currentSlug}`} prefetch={true}>
              <div
                className="blog-card__img-wrapper"
                style={{ borderRadius: "10px" }}
              >
                <div
                  className="blog-card__img-container"
                  style={{ borderRadius: "10px" }}
                >
                  <BlurImage src={urlFor(blogPost.titleImage).url()} />
                </div>
              </div>
            </Link>

            <div className="blog-card__content">
              <span
                className="blog-post__category-lable"
                style={{
                  backgroundColor:
                    blogPost.categoryTag.tagColor.tagColors.bgColor,
                  color: blogPost.categoryTag.tagColor.tagColors.textColor,
                }}
              >
                {blogPost.categoryTag.name[lang]}
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
