"use client";
import { BsArrowRightShort } from "react-icons/bs";
import clock from "@/assets/clock.png";
import Image from "next/image";
import { simpleBlogCard } from "./page";
import { urlFor } from "../_lib/sanity";
import Link from "next/link";
import BlurImage from "@/components/BlurImage";
import { getColor } from "./blogCategoryColors";
import { CiClock2 } from "react-icons/ci";
import readingTime from "reading-time";
import { format } from "date-fns/format";
import { useRouter } from "next/navigation";
import { colors } from "./BlogPostsSection";

const BigBlogPost = ({ post }: { post: simpleBlogCard }) => {
  const router = useRouter();

  return (
    <article className="big-blog-post" style={{ marginBottom: "10px" }}>
      <div
        onClick={() => {
          router.push(`/blog/${post.currentSlug}`);
        }}
        className="big-blog-post__img-container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Image
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            borderRadius: "10px",
          }}
          width={1800}
          height={1200}
          src={urlFor(post.titleImage).url()}
          className="hero-img"
          alt=""
        />
      </div>
      <div className="big-blog-post__content">
        <span
          className="blog-post__category-lable"
          style={{
            backgroundColor: post.categoryTag.tagColor.tagColors.bgColor,
            color: post.categoryTag.tagColor.tagColors.textColor,
            justifySelf: "start",
            width: "max-content",
          }}
        >
          {post.categoryTag.name}
        </span>

        <h2
          onClick={() => {
            router.push(`/blog/${post.currentSlug}`);
          }}
          className="text-[30px]"
          style={{ fontSize: "30px" }}
        >
          {post.title}
        </h2>
        <p className="big-blog-post__text line-clamp-3 " style={{}}>
          {post.smallDescription}
        </p>

        <footer className="blog-card__footer " style={{ fontSize: 16 }}>
          <span className="blog-card__time">
            <CiClock2 fill="rgb(100, 116, 139)" size={25} />
            {Math.ceil(readingTime(post.smallDescription).minutes * 15 + 1)} min
          </span>
          <span className="blog-card__date">
            {format(new Date(post.date), "dd MM, yyyy")}
          </span>
        </footer>
      </div>
    </article>
  );
};

export default BigBlogPost;
