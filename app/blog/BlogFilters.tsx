"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useBlogFilterContext } from "./blogFilterContext";

const BlogFilters = ({categoryTags}: {categoryTags: string[]}) => {
  
  const {blogFilter, setBlogFilter} = useBlogFilterContext()




  const handleClick = ( tag:string ) => {
    setBlogFilter(tag)
  };

  

  return (
    <section className="blog-filters">
      <div className="container-small blog-filters__container">
        <ul>
          {categoryTags?.map((text, index) => (
            <li key={index} onClick={() => handleClick( text)}>
              { blogFilter === text ? (
                <motion.span
                  layoutId="underline"
                  className="blog-filter-line"
                  layout
                ></motion.span>
              ) : null}
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogFilters;
