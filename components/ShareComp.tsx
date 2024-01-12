"use client";


import { FacebookShareButton, FacebookIcon } from "next-share";

const ShareComp = ({slug, title}: {title: string, slug: string}) => {

  return (
    <div style={{marginTop: "50px"}}>
      <FacebookShareButton
        url={`https://next-marlin.vercel.app/blog/${slug}`}
        quote={title}
        windowHeight={500}
        windowWidth={500}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export default ShareComp;
