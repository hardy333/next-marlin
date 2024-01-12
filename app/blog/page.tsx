import BlogPostsSection from "./BlogPostsSection";

// Css
// import "./blog.css";
// import "./blog-posts-section.css";
import BlogShowcase from "./Showcase";
import BigBlogPost from "./BigBlogPost";
import BlogFilters from "./BlogFilters";
import { client } from "../_lib/sanity";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  date: string;

}


export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}


async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
      "date": _createdAt
  }`;

  const data = await client.fetch(query);

  return data;
}

const Blog = async () => {
  const data: simpleBlogCard[] = await getData();


  console.log("ss", data)
  

  return (
    <>
      <BlogShowcase />
      <BlogFilters />
      <div className="container-small">
        <BigBlogPost post={data[0]} />
      </div>
      <BlogPostsSection data={data} />
    </>
  );
};

export default Blog;
