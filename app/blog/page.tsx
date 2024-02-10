// Css
import BlogShowcase from "./Showcase";
import BlogFilters from "./BlogFilters";
import { client } from "../_lib/sanity";
import BlogFilterContextProvider from "./blogFilterContext";
import AllBlogsSection from "./AllBlogsSection";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  date: string;
  categoryTag: {
    name: string;
    _id?: string;
    tagColor: {
      tagColors: {
        bgColor: string;
        textColor: string;
      };
    };
  };
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}

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

const Blog = async () => {
  const data: simpleBlogCard[] = await getData();

  console.log("ss", data);

  const categoryTags = Array.from(
    new Set(data.map((blog) => blog.categoryTag.name))
  );

  categoryTags.unshift("All");

  return (
    <>
      <BlogFilterContextProvider>
        <BlogShowcase />
        <BlogFilters categoryTags={categoryTags} />
        <AllBlogsSection data={data} />
      </BlogFilterContextProvider>
    </>
  );
};

export default Blog;
