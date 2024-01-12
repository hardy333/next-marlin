"use client";


import { fullBlog } from "@/app/blog/page";
import { FacebookShareButton, FacebookIcon } from "next-share";

const ShareComp = ({data}: {data: fullBlog}) => {

  return (
    <div style={{marginTop: "50px"}}>
      <FacebookShareButton
        url={`https://next-marlin.vercel.app/blog/${data.currentSlug}`}
        quote={data.title}
        windowHeight={500}
        windowWidth={500}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export default ShareComp;
