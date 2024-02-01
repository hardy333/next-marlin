import { client, urlFor } from "@/app/_lib/sanity";
import { simpleBlogCard } from "@/app/blog/page";
import Link from "next/link";
import BlurImage from "./BlurImage";
import { getColor } from "@/app/blog/blogCategoryColors";
import { CiClock2 } from "react-icons/ci";
import readingTime from "reading-time";
import { format } from "date-fns/format";

export const revalidate = 0; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      categoryTag,
      "date": _createdAt
  }`;

  const data = await client.fetch(query);

  return data;
}

const Trends = async () => {
  const data: simpleBlogCard[] = await getData();

  return (
    <section className="trends">
      <div className="container-small trends-container">
        <h3>Take a dive into industry trends</h3>
        <div className="trends-card-container">
          {data?.slice(0, 3).map((blogPost, index) => (
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
      </div>
    </section>
  );
};

export default Trends;
