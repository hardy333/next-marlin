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
            backgroundColor: colors?.find(
              (obj) => obj.categoryName === post.categoryTag.name
            )?.bg,
            color: colors?.find(
              (obj) => obj.categoryName === post.categoryTag.name
            )?.text,
            justifySelf: "start",
            width: "max-content",
          }}
        >
          {post.categoryTag.name}
        </span>
        {/* <span className="trend-card__lable">{post.categoryTag}</span> */}

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
        {/* <Link href={`/blog/${post.currentSlug}`} prefetch={true}>
          <p className="trend-card__read-more">
            Read more <BsArrowRightShort />{" "}
          </p>
        </Link> */}
        {/* <footer>
          <span>
            {" "}
            <Image src={clock} alt="" /> 2 min
          </span>
          <span>September 9, 2023</span>
        </footer> */}

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
