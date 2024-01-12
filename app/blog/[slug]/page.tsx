import { client, urlFor } from "@/app/_lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { fullBlog } from "../page";
// import "./style.css";
import ShareComp from "@/components/ShareComp";


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
    <div className="mt-8 full-blog-post-page">
      <h1>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-lg text-3xl dark:prose-invert prose-li:marker:to-blue-600 prose-a:text-primary">
        <PortableText value={data.content} />
      </div>

      <ShareComp data={data}/>

    </div>
  );
}
