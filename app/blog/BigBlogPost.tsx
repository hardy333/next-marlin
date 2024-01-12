import { BsArrowRightShort } from "react-icons/bs";
import clock from "@/assets/clock.png";
import Image from "next/image";
import { simpleBlogCard } from "./page";
import { urlFor } from "../_lib/sanity";
import Link from "next/link";

const BigBlogPost = ({ post }: { post: simpleBlogCard }) => {
  return (
    <article className="big-blog-post">
      <div
        className="big-blog-post__img-container"
        style={{ position: "relative" }}
      >
        <Image
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            borderRadius: "inherit",
          }}
          width={1800}
          height={1200}
          src={urlFor(post.titleImage).url()}
          className="hero-img"
          alt=""
        />
      </div>
      <div className="big-blog-post__content">
        <span className="trend-card__lable">Industry news</span>
        <h2>{post.title}</h2>
        <p
          className="big-blog-post__text"
          style={{ maxHeight: "105px", overflow: "hidden" }}
        >
          {post.smallDescription}
        </p>
        <Link href={`/blog/${post.currentSlug}`}
              prefetch={true}

        
        >
          <p className="trend-card__read-more">
            Read more <BsArrowRightShort />{" "}
          </p>
        </Link>
        <footer>
          <span>
            {" "}
            <Image src={clock} alt="" /> 2 min
          </span>
          <span>September 9, 2023</span>
        </footer>
      </div>
    </article>
  );
};

export default BigBlogPost;
