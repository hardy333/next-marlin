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
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const ShareComp = ({ data }: { data: fullBlog }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <FacebookShareButton
        url={`https://next-marlin.vercel.app/blog/${data.currentSlug}`}
        quote={data.title}
        windowHeight={500}
        windowWidth={500}
      >
        {/* <FacebookIcon size={32} /> */}
        <FaSquareFacebook fill="#316FF6" size={32}/>
      </FacebookShareButton>

      <LinkedinShareButton
        url={`https://next-marlin.vercel.app/blog/${data.currentSlug}`}
      >
        {/* <LinkedinIcon size={32} /> */}
        <FaLinkedin size={32} fill="#0077b5"/>
      </LinkedinShareButton>

      <TwitterShareButton
        url={`https://next-marlin.vercel.app/blog/${data.currentSlug}`}
        title={data.title}
      >
        <FaSquareXTwitter fill="#14171A" size={32} />
      </TwitterShareButton>
    </div>
  );
};

export default ShareComp;
