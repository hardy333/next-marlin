"use client";

import { fullBlog } from "@/app/blog/page";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

const ShareComp = ({ data }: { data: fullBlog }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <FacebookShareButton
        url={`https://next-marlin.vercel.app/blog/${data.currentSlug}`}
        quote={data.title}
        windowHeight={500}
        windowWidth={500}
      >
        <FacebookIcon size={32} />
      </FacebookShareButton>

      <LinkedinShareButton
        url={`https://next-marlin.vercel.app/blog/${data.currentSlug}`}
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>

      <TwitterShareButton
        url={`https://next-marlin.vercel.app/blog/${data.currentSlug}`}
        title={data.title}
      >
        <TwitterIcon size={32} />
      </TwitterShareButton>
    </div>
  );
};

export default ShareComp;
