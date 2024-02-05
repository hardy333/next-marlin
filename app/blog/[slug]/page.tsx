import { client, urlFor } from "@/app/_lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { fullBlog } from "../page";
// import "./style.css";
import ShareComp from "@/components/ShareComp";
// import patternSqaureSvg from "./pattern-square.svg"

import AsideImg from "./blog-aside-img.jpg";
import clock from "@/assets/clock.png";
import { Public_Sans } from "next/font/google";
const public_sans = Public_Sans({ subsets: ["latin"] });

export const revalidate = 0; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="relative pt-8">
      <div className="full-blog-post-page ">
        <main className="full-blog-post-page__main">
          <h1>
            <span className="mt-2 block text-3xl mt-10 leading-8 font-bold tracking-tight sm:text-6xl">
              {data.title}
            </span>
          </h1>

          <div
            className="mt-[40px] flex flex-col  gap-3 "
            style={{ color: "#64748b" }}
          >
            <p>
              <span>September 9, 2023</span>
            </p>
            <p className="flex gap-4 items-center">
              <Image src={clock} alt="" height={20} />{" "}
              <span className="flex "> 2 min read</span>
            </p>
          </div>

          <Image
            src={urlFor(data.titleImage).url()}
            width={1200}
            height={1200}
            alt="Title Image"
            priority
            className=" mt-8 border"
            style={{ borderRadius: "12px", height: 450, objectFit: "cover" }}
          />

          <div
            className={`mt-16 prose prose-blue prose-lg text-3xl dark:prose-invert prose-li:marker:to-blue-600 prose-a:text-primary content-container ${public_sans.className}`}
          >
            <PortableText value={data.content} />
          </div>

          <ShareComp data={data} />
        </main>
        <aside className="full-blog-post-page__aside">
          <div className="aside-container">
            <Image src={AsideImg} alt="aside image ill" />
            <h2>გაიგეთ მეტი ციფრული ტრანსფორმაციის შესახებ </h2>
            <p>
              შეიტყვე როგორ დაგეხმარება BDO Digital-ი ციფრული ტრანსფორმაციის
              გზაზე
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
