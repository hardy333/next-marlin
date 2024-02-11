import { client, urlFor } from "@/app/_lib/sanity";
import Link from "next/link";
import BlurImage from "./BlurImage";
import { CiClock2 } from "react-icons/ci";
import readingTime from "reading-time";
import { format } from "date-fns/format";
import { TbArrowRight } from "react-icons/tb";
import { getLang } from "@/app/_utils/getLang";

export const revalidate = 0; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      categoryTag->{
        name,
        _id,
        tagColor->{
          tagColors
        }
      },
      "date": _createdAt
  }`;

  const data = await client.fetch(query);

  return data;
}

async function getData2() {
  const query = `
  *[_type == "mainPageBlogSection"] | order(_createdAt desc){
    heading,
      blogPostCount,
      buttonText
   }[0]
    `;

  const data = await client.fetch(query);

  return data;
}

const Trends = async () => {
  const lang = getLang();
  const data = await getData();
  const data2 = await getData2();

  return (
    <section className="trends">
      <div className="container-small trends-container">
        <h3>{data2.heading[lang]}</h3>
        <div className="trends-card-container">
          {data
            ?.slice(0, data2.blogPostCount)
            .map((blogPost: any, index: any) => (
              // Post start
              <article key={index} className="blog-card">
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
      </div>
      <div className="flex content-center trends__link-container">
        <Link href={"/blog"} className="trends__link" prefetch={true}>
          {data2?.buttonText[lang]}
          <span>
            <TbArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Trends;
